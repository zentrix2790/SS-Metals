import { NextResponse } from "next/server";
import { isProductionDeployment, ssFlowApiBase } from "@/lib/ss-flow-enquiry";

export async function GET(request: Request) {
  try {
    const incoming = new URL(request.url).searchParams;
    const query = new URLSearchParams({ page: incoming.get("page") ?? "1" });
    const search = (incoming.get("q") ?? "").trim().slice(0, 80);
    if (search) query.set("q", search);
    const base = ssFlowApiBase().replace(/\/$/, "");
    const upstream = await fetch(`${base}/api/public/v1/enquiries/catalog/products?${query}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });
    const body = await upstream.json().catch(() => ({}));
    return NextResponse.json(body, { status: upstream.status, headers: { "Cache-Control": "private, max-age=30" } });
  } catch {
    return NextResponse.json(
      { error: { message: isProductionDeployment() ? "Product options are temporarily unavailable." : "Could not reach SS-Flow. Check that the ERP is running." } },
      { status: 503 },
    );
  }
}
