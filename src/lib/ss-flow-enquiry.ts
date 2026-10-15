/** Maps marketing-site form fields to SS-Flow public enquiry API. */

export type SiteEnquiryInput = {
  name?: string;
  company?: string;
  phone?: string;
  email?: string;
  product_interest?: string;
  message?: string;
  website?: string;
};

export function toSsFlowEnquiryBody(input: SiteEnquiryInput) {
  const customerName = String(input.name ?? "").trim();
  const phone = String(input.phone ?? "").trim();
  const product = String(input.product_interest ?? "").trim();
  const message = String(input.message ?? "").trim();
  const parts = [product, message].filter(Boolean);
  const itemDescription = parts.join("\n\n").slice(0, 500) || undefined;

  return {
    customerName,
    phone,
    email: String(input.email ?? "").trim() || undefined,
    companyName: String(input.company ?? "").trim() || undefined,
    itemDescription,
    quantity: "1" as const,
    uom: "PCS" as const,
    website: String(input.website ?? "").trim() || undefined,
    plantCode: process.env.PUBLIC_LEAD_PLANT_CODE?.trim() || undefined,
  };
}

/** Desk app origin (SS-Flow). Defaults to local port 3000. */
export function ssFlowApiBase() {
  const fromEnv =
    process.env.SS_FLOW_API_URL?.trim() ||
    process.env.SS_FLOW_INTERNAL_URL?.trim() ||
    "";
  return fromEnv.replace(/\/$/, "") || "http://127.0.0.1:3000";
}

/** Browser → local /api/enquiries → SS-Flow. */
export async function submitSiteEnquiry(input: SiteEnquiryInput) {
  const res = await fetch("/api/enquiries", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Idempotency-Key": crypto.randomUUID(),
    },
    body: JSON.stringify(input),
  });
  const json = (await res.json().catch(() => ({}))) as { error?: string };
  if (!res.ok) {
    throw new Error(
      typeof json.error === "string" ? json.error : "Something went wrong. Please try again.",
    );
  }
  return json as { ok: true; reference?: string };
}
