import { NextResponse } from "next/server";
import { isProductionDeployment, ssFlowApiBase } from "@/lib/ss-flow-enquiry";

export async function GET() {
  try {
    const base = ssFlowApiBase().replace(/\/$/, "");
    const upstream = await fetch(`${base}/api/public/v1/enquiries/catalog/categories`, {
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });
    const body = await upstream.json().catch(() => ({}));
    return NextResponse.json(body, { status: upstream.status, headers: { "Cache-Control": "private, max-age=30" } });
  } catch {
    return NextResponse.json({ error: { message: isProductionDeployment() ? "Product options are temporarily unavailable." : "Could not reach SS-Flow. Check that the ERP is running." } }, { status: 503 });
  }
}
