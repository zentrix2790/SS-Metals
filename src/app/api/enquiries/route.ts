import { NextResponse } from "next/server";
import {
  isProductionDeployment,
  ssFlowApiBase,
  toSsFlowEnquiryBody,
  type SiteEnquiryInput,
} from "@/lib/ss-flow-enquiry";

const UPSTREAM_TIMEOUT_MS = 22_000;

function upstreamErrorMessage(cause: unknown): string {
  if (cause instanceof Error && cause.name === "TimeoutError") {
    return isProductionDeployment()
      ? "The enquiry service took too long to respond. Please try again or contact us directly."
      : "SS-Flow took too long to respond. Check that the desk app is running and the database is reachable.";
  }
  if (cause instanceof Error && cause.message.includes("SS_FLOW_API_URL")) {
    return cause.message;
  }
  if (cause instanceof Error && cause.message.includes("marketing site")) {
    return cause.message;
  }
  if (isProductionDeployment()) {
    return "Could not reach the enquiry service. Please try again or contact us by phone or WhatsApp.";
  }
  return "Could not reach SS-Flow. Start the desk app (npm run dev in the SS-Flow folder on port 3000), then try again.";
}

function deskApiBase(request: Request) {
  const base = ssFlowApiBase();
  const reqHost = new URL(request.url).host;
  let up: URL;
  try {
    up = new URL(base);
  } catch {
    throw new Error("Invalid SS_FLOW_API_URL");
  }
  if (up.host === reqHost) {
    throw new Error(
      isProductionDeployment()
        ? "SS_FLOW_API_URL must point to your SS-Flow deployment (e.g. https://ss-flow-opal.vercel.app), not this website's URL."
        : "SS_FLOW_API_URL points at the marketing site. Run SS-Flow on port 3000 (npm run dev) and the website on 3001 (npm run dev:website).",
    );
  }
  return base.replace(/\/$/, "");
}

async function forwardToSsFlow(request: Request, body: SiteEnquiryInput) {
  const payload = toSsFlowEnquiryBody(body);
  if (payload.customerName.length < 2) {
    return NextResponse.json({ error: "Please enter your full name." }, { status: 400 });
  }
  if (payload.phone.length < 8) {
    return NextResponse.json({ error: "Please enter a valid phone number." }, { status: 400 });
  }

  const idempotencyKey =
    request.headers.get("idempotency-key") ??
    `web-${payload.phone.replace(/\D/g, "").slice(-10)}-${Date.now()}`;

  const base = deskApiBase(request);
  let upstream: Response;
  try {
    upstream = await fetch(`${base}/api/public/v1/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Idempotency-Key": idempotencyKey,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
      signal: AbortSignal.timeout(UPSTREAM_TIMEOUT_MS),
    });
  } catch (cause) {
    const msg = upstreamErrorMessage(cause);
    console.error("[api/enquiries] upstream failed:", base, cause);
    return NextResponse.json({ error: msg }, { status: 503 });
  }

  const json = (await upstream.json().catch(() => ({}))) as {
    ok?: boolean;
    reference?: string;
    error?: string | { message?: string; code?: string };
    data?: { ok?: boolean; reference?: string };
  };

  if (!upstream.ok) {
    const message =
      typeof json.error === "string"
        ? json.error
        : json.error?.message ?? "Could not submit enquiry. Please call us directly.";
    return NextResponse.json({ error: message }, { status: upstream.status });
  }

  return NextResponse.json({
    ok: true,
    reference: json.data?.reference ?? json.reference ?? "received",
  });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as SiteEnquiryInput | null;
  if (!body?.name?.trim() || !body?.phone?.trim()) {
    return NextResponse.json({ error: "Name and phone are required." }, { status: 400 });
  }
  try {
    return await forwardToSsFlow(request, body);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Misconfigured enquiry service.";
    return NextResponse.json({ error: message }, { status: 503 });
  }
}

