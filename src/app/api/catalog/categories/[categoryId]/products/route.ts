import { NextResponse } from "next/server";
import { isProductionDeployment, ssFlowApiBase } from "@/lib/ss-flow-enquiry";

export async function GET(request: Request, { params }: { params: Promise<{ categoryId: string }> }) {
  const { categoryId } = await params;
  if (!/^[0-9a-f-]{36}$/i.test(categoryId)) return NextResponse.json({ error: { message: "Invalid product category." } }, { status: 400 });
  const incoming = new URL(request.url).searchParams;
  const q = (incoming.get("q") ?? "").trim().slice(0, 80);
  const page = incoming.get("page") ?? "1";
  try {
    const base = ssFlowApiBase().replace(/\/$/, "");
    const query = new URLSearchParams({ page, ...(q ? { q } : {}) });
    const upstream = await fetch(`${base}/api/public/v1/enquiries/catalog/categories/${categoryId}/products?${query}`, {
      cache: "no-store",
      signal: AbortSignal.timeout(12_000),
    });
    const body = await upstream.json().catch(() => ({}));
    return NextResponse.json(body, { status: upstream.status, headers: { "Cache-Control": "private, max-age=30" } });
  } catch {
    return NextResponse.json({ error: { message: isProductionDeployment() ? "Product options are temporarily unavailable." : "Could not reach SS-Flow. Check that the ERP is running." } }, { status: 503 });
  }
}
