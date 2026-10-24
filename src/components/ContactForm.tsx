"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { submitSiteEnquiry } from "@/lib/ss-flow-enquiry";

type ProductSpec = { key: string; label: string; unit?: string; required: boolean; value: string; type?: "select" | "number" | "text" };
type Product = {
  id: string;
  name: string;
  code: string;
  productVariantId: string | null;
  uom: { id: string | null; code: string; name: string };
  specifications: ProductSpec[];
};
type Line = {
  key: string;
  productId: string;
  productVariantId: string;
  selectedProduct?: Product;
  quantity: string;
  uom: string;
  description: string;
  specifications: Record<string, string>;
  notes: string;
};

function newLine(description = "", key = "initial-item"): Line {
  return { key, productId: "", productVariantId: "", quantity: "1", uom: "", description, specifications: {}, notes: "" };
}

async function readResponse<T>(response: Response): Promise<T> {
  const body = await response.json().catch(() => ({})) as { data?: T; error?: { message?: string } | string };
  if (!response.ok) {
    const message = typeof body.error === "string" ? body.error : body.error?.message;
    throw new Error(message || "Could not load product options. Please retry.");
  }
  return body.data as T;
}

function productKey(product: Product) {
  return `${product.id}:${product.productVariantId ?? ""}`;
}

function productLabel(product: Product) {
  const specs = product.specifications
    .filter((spec) => spec.value)
    .map((spec) => `${spec.label} ${spec.value}${spec.unit ? ` ${spec.unit}` : ""}`);
  return [product.name, product.code, ...specs].join(" · ");
}

export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, setState] = useState<"loading" | "ready" | "error" | "sending" | "done">("loading");
  const [error, setError] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [lines, setLines] = useState<Line[]>([newLine(defaultProduct)]);

  async function loadProducts() {
    setState("loading");
    try {
      const loaded: Product[] = [];
      let page = 1;
      for (;;) {
        const response = await fetch(`/api/catalog/products?page=${page}`, { cache: "no-store" });
        const result = await readResponse<{ products: Product[]; hasMore?: boolean }>(response);
        loaded.push(...(result.products ?? []));
        if (!result.hasMore) break;
        page += 1;
        if (page > 1000) throw new Error("The product catalog returned too many pages.");
      }
      setProducts(loaded);
      setState("ready");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Product options are temporarily unavailable.");
      setState("error");
    }
  }

  useEffect(() => {
    void Promise.resolve().then(() => loadProducts());
  }, []);

  function updateLine(key: string, update: Partial<Line>) {
    setLines((current) => current.map((line) => line.key === key ? { ...line, ...update } : line));
  }

  function chooseProduct(line: Line, value: string) {
    const product = products.find((option) => productKey(option) === value);
    if (!product) {
      updateLine(line.key, { productId: "", productVariantId: "", selectedProduct: undefined, uom: "", specifications: {} });
      return;
    }
    updateLine(line.key, {
      productId: product.id,
      productVariantId: product.productVariantId ?? "",
      selectedProduct: product,
      uom: product.uom.code,
      specifications: Object.fromEntries(product.specifications.filter((spec) => spec.value).map((spec) => [spec.key, spec.value])),
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    for (const [index, line] of lines.entries()) {
      if (!line.productId) {
        setError(`Choose a product for item ${index + 1}.`);
        setState("error");
        return;
      }
      const missing = line.selectedProduct?.specifications.find((spec) => spec.required && !line.specifications[spec.key]?.trim());
      if (missing) {
        setError(`Enter ${missing.label.toLowerCase()} for item ${index + 1}.`);
        setState("error");
        return;
      }
      if (!Number.isFinite(Number(line.quantity)) || Number(line.quantity) <= 0) {
        setError(`Enter a quantity greater than zero for item ${index + 1}.`);
        setState("error");
        return;
      }
    }
    setState("sending");
    const form = new FormData(event.currentTarget);
    try {
      await submitSiteEnquiry({
        name: String(form.get("name") ?? ""),
        company: String(form.get("company") ?? ""),
        phone: String(form.get("phone") ?? ""),
        email: String(form.get("email") ?? ""),
        address: String(form.get("address") ?? ""),
        requiredDeliveryDate: String(form.get("deliveryDate") ?? ""),
        commercialRemarks: String(form.get("remarks") ?? ""),
        website: String(form.get("website") ?? ""),
        items: lines.map((line) => ({
          productId: line.productId,
          productVariantId: line.productVariantId || undefined,
          quantity: line.quantity,
          uom: line.uom,
          itemDescription: line.description.trim() || undefined,
          specifications: Object.fromEntries(Object.entries(line.specifications).filter(([, value]) => value.trim())),
          notes: line.notes.trim() || undefined,
        })),
      });
      setState("done");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return <div className="rounded border border-emerald-300 bg-emerald-50 p-6" role="status"><h2 className="font-display text-2xl font-semibold text-emerald-900">Enquiry received</h2><p className="mt-1 text-sm text-emerald-900">Thank you. Our team will contact you shortly. For urgent requests, call +91 9410480440.</p></div>;
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      <section className="space-y-4" aria-labelledby="customer-details-heading">
        <h2 id="customer-details-heading" className="font-display text-xl font-semibold text-ink">Your details</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div><label className="label" htmlFor="name">Contact person *</label><input id="name" name="name" required minLength={2} maxLength={120} className="field" autoComplete="name" /></div>
          <div><label className="label" htmlFor="company">Company / firm</label><input id="company" name="company" maxLength={120} className="field" autoComplete="organization" /></div>
          <div><label className="label" htmlFor="phone">Phone / WhatsApp *</label><input id="phone" name="phone" type="tel" required minLength={8} maxLength={20} className="field" autoComplete="tel" /></div>
          <div><label className="label" htmlFor="email">Email (optional)</label><input id="email" name="email" type="email" className="field" autoComplete="email" /></div>
          <div className="sm:col-span-2"><label className="label" htmlFor="address">Address (optional)</label><textarea id="address" name="address" rows={2} maxLength={500} className="field" autoComplete="street-address" /></div>
        </div>
      </section>

      <section className="space-y-4" aria-labelledby="items-heading">
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 id="items-heading" className="font-display text-xl font-semibold text-ink">Materials required</h2><p className="mt-1 text-sm text-steel-600">Choose from our current ERP catalog.</p></div><button type="button" className="btn btn-outline gap-2" disabled={lines.length >= 10} onClick={() => setLines((current) => [...current, newLine("", crypto.randomUUID())])}><Plus className="h-4 w-4" />Add another item</button></div>
        {state === "loading" && <p className="text-sm text-steel-600" role="status">Loading products…</p>}
        {state === "error" && !products.length && <div className="flex items-center gap-3 rounded border border-amber-300 bg-amber-50 p-3 text-sm" role="alert"><span>{error || "Products could not be loaded."}</span><button type="button" className="font-semibold underline" onClick={() => void loadProducts()}>Retry</button></div>}
        {state === "ready" && !products.length && <p className="text-sm text-steel-600">No products are available right now.</p>}
        <div className="space-y-4">
          {lines.map((line, index) => {
            const chosen = line.selectedProduct;
            return <fieldset key={line.key} className="space-y-4 rounded-lg border border-steel-200 bg-white p-4 sm:p-5"><legend className="px-1 font-semibold text-ink">Item {index + 1}</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2"><label className="label" htmlFor={`product-${line.key}`}>Product *</label><select id={`product-${line.key}`} className="field" value={chosen ? productKey(chosen) : ""} disabled={state !== "ready" || !products.length} onChange={(event) => chooseProduct(line, event.target.value)}><option value="">Choose a product</option>{products.map((product) => <option key={productKey(product)} value={productKey(product)}>{productLabel(product)}</option>)}</select></div>
                {chosen?.specifications.map((spec) => <div key={spec.key}><label className="label" htmlFor={`${spec.key}-${line.key}`}>{spec.label}{spec.unit ? ` (${spec.unit})` : ""}{spec.required ? " *" : ""}</label><input id={`${spec.key}-${line.key}`} className="field" type={spec.type === "number" ? "number" : "text"} min={spec.type === "number" ? "0.001" : undefined} step={spec.type === "number" ? "any" : undefined} value={line.specifications[spec.key] ?? ""} readOnly={Boolean(spec.value)} required={spec.required} onChange={(event) => updateLine(line.key, { specifications: { ...line.specifications, [spec.key]: event.target.value } })} /></div>)}
                <div><label className="label" htmlFor={`quantity-${line.key}`}>Quantity *</label><input id={`quantity-${line.key}`} className="field" required type="number" min="0.001" step="0.001" value={line.quantity} onChange={(event) => updateLine(line.key, { quantity: event.target.value })} /></div>
                <div><label className="label" htmlFor={`uom-${line.key}`}>Unit</label><input id={`uom-${line.key}`} className="field" value={line.uom} readOnly aria-readonly="true" /></div>
                <div className="sm:col-span-2"><label className="label" htmlFor={`description-${line.key}`}>Additional requirements</label><textarea id={`description-${line.key}`} className="field" rows={2} maxLength={500} value={line.description} onChange={(event) => updateLine(line.key, { description: event.target.value })} /></div>
                <div className="sm:col-span-2"><label className="label" htmlFor={`notes-${line.key}`}>Item notes (optional)</label><input id={`notes-${line.key}`} className="field" maxLength={500} value={line.notes} onChange={(event) => updateLine(line.key, { notes: event.target.value })} /></div>
              </div>
              {lines.length > 1 && <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:underline" onClick={() => setLines((current) => current.filter((entry) => entry.key !== line.key))}><Trash2 className="h-4 w-4" />Remove item</button>}
            </fieldset>;
          })}
        </div>
      </section>

      <section className="space-y-4"><h2 className="font-display text-xl font-semibold text-ink">Delivery and other details</h2><div className="grid gap-4 sm:grid-cols-2"><div><label className="label" htmlFor="deliveryDate">Required delivery date (optional)</label><input id="deliveryDate" name="deliveryDate" type="date" className="field" /></div><div className="sm:col-span-2"><label className="label" htmlFor="remarks">Commercial remarks (optional)</label><textarea id="remarks" name="remarks" className="field" rows={3} maxLength={1000} /></div></div></section>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {state === "error" && products.length > 0 && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
      <button className="btn btn-primary" disabled={state === "sending" || state === "loading"} type="submit">{state === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}
