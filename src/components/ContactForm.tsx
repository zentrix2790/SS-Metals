"use client";

import { useEffect, useMemo, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { submitSiteEnquiry } from "@/lib/ss-flow-enquiry";

type Category = { id: string; name: string; code: string; productForm: string | null; requiredSpecs: string[] };
type ProductSpec = { key: string; label: string; unit: string; required: boolean; value: string };
type Product = { id: string; name: string; code: string; categoryId: string; productVariantId: string | null; uom: string; label: string; specifications: ProductSpec[] };
type Line = { key: string; categoryId: string; productId: string; productVariantId: string; productSearch: string; selectedProduct?: Product; quantity: string; uom: string; description: string; specifications: Record<string, string>; notes: string };
type CatalogResult = { products: Product[]; hasMore?: boolean };

function newLine(description = "", key = "initial-item"): Line {
  return { key, categoryId: "", productId: "", productVariantId: "", productSearch: "", quantity: "1", uom: "", description, specifications: {}, notes: "" };
}

async function readResponse<T>(response: Response): Promise<T> {
  const body = await response.json().catch(() => ({})) as { data?: T; error?: { message?: string } | string };
  if (!response.ok) {
    const message = typeof body.error === "string" ? body.error : body.error?.message;
    throw new Error(message || "Could not load product options. Please retry.");
  }
  return body.data as T;
}

export default function ContactForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [categoryState, setCategoryState] = useState<"loading" | "ready" | "error">("loading");
  const [lines, setLines] = useState<Line[]>([newLine(defaultProduct)]);
  const [catalog, setCatalog] = useState<Record<string, { products: Product[]; status: "loading" | "ready" | "error"; hasMore: boolean }>>({});
  const [retryToken, setRetryToken] = useState(0);

  async function loadCategories(signal?: AbortSignal) {
    setCategoryState("loading");
    try {
      const response = await fetch("/api/catalog/categories", { signal, cache: "no-store" });
      const data = await readResponse<{ categories: Category[] }>(response);
      setCategories(data.categories);
      setCategoryState("ready");
    } catch (cause) {
      if (cause instanceof Error && cause.name === "AbortError") return;
      setCategoryState("error");
    }
  }

  useEffect(() => {
    const controller = new AbortController();
    void fetch("/api/catalog/categories", { signal: controller.signal, cache: "no-store" })
      .then(readResponse<{ categories: Category[] }>)
      .then((data) => { setCategories(data.categories); setCategoryState("ready"); })
      .catch((cause: unknown) => {
        if (!(cause instanceof Error && cause.name === "AbortError")) setCategoryState("error");
      });
    return () => controller.abort();
  }, []);

  const catalogRequests = useMemo(() => [...new Set(lines.filter((line) => line.categoryId).map((line) => `${line.categoryId}|${line.productSearch.trim()}`))], [lines]);
  useEffect(() => {
    let active = true;
    const controller = new AbortController();
    const timer = window.setTimeout(() => {
      for (const requestKey of catalogRequests) {
        const [categoryId, query] = requestKey.split("|");
        setCatalog((current) => ({ ...current, [requestKey]: { products: current[requestKey]?.products ?? [], status: "loading", hasMore: false } }));
        const params = new URLSearchParams({ page: "1" });
        if (query) params.set("q", query);
        void fetch(`/api/catalog/categories/${categoryId}/products?${params}`, { signal: controller.signal, cache: "no-store" })
          .then(readResponse<CatalogResult>)
          .then((data) => { if (active) setCatalog((current) => ({ ...current, [requestKey]: { products: data.products ?? [], status: "ready", hasMore: Boolean(data.hasMore) } })); })
          .catch((cause: unknown) => {
            if (active && !(cause instanceof Error && cause.name === "AbortError")) setCatalog((current) => ({ ...current, [requestKey]: { products: [], status: "error", hasMore: false } }));
          });
      }
    }, 250);
    return () => { active = false; window.clearTimeout(timer); controller.abort(); };
  }, [catalogRequests, retryToken]);

  function updateLine(key: string, update: Partial<Line>) {
    setLines((current) => current.map((line) => line.key === key ? { ...line, ...update } : line));
  }

  function chooseCategory(line: Line, categoryId: string) {
    updateLine(line.key, { categoryId, productId: "", productVariantId: "", productSearch: "", selectedProduct: undefined, uom: "", specifications: {} });
  }

  function onProductSearch(line: Line, value: string) {
    updateLine(line.key, { productSearch: value, productId: "", productVariantId: "", selectedProduct: undefined, uom: "", specifications: {} });
  }

  function chooseProduct(line: Line, productId: string) {
    const result = catalog[`${line.categoryId}|${line.productSearch.trim()}`];
    const product = result?.products.find((option) => option.id === productId);
    if (!product) return;
    updateLine(line.key, {
      productId: product.id, productVariantId: product.productVariantId ?? "", selectedProduct: product,
      uom: product.uom, specifications: Object.fromEntries(product.specifications.filter((spec) => spec.value).map((spec) => [spec.key, spec.value])),
    });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    for (const [index, line] of lines.entries()) {
      if (!line.productId && !line.description.trim()) {
        setError(`Add a product or describe item ${index + 1}.`);
        setState("error");
        return;
      }
      const chosen = line.productId ? line.selectedProduct : undefined;
      const missing = chosen?.specifications.find((spec) => spec.required && !line.specifications[spec.key]?.trim());
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
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""), company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""), email: String(form.get("email") ?? ""),
      address: String(form.get("address") ?? ""), requiredDeliveryDate: String(form.get("deliveryDate") ?? ""),
      commercialRemarks: String(form.get("remarks") ?? ""), website: String(form.get("website") ?? ""),
      items: lines.map((line) => ({
        categoryId: line.categoryId || undefined, productId: line.productId || undefined,
        productVariantId: line.productVariantId || undefined, quantity: line.quantity,
        uom: line.productId ? line.uom : undefined, itemDescription: line.description.trim() || undefined,
        specifications: Object.fromEntries(Object.entries(line.specifications).filter(([, value]) => value.trim())),
        notes: line.notes.trim() || undefined,
      })),
    };
    try {
      await submitSiteEnquiry(data);
      setState("done");
    } catch (cause) {
      setError(cause instanceof Error ? cause.message : "Something went wrong.");
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="rounded border border-emerald-300 bg-emerald-50 p-6" role="status">
        <h2 className="font-display text-2xl font-semibold text-emerald-900">Enquiry received</h2>
        <p className="mt-1 text-sm text-emerald-900">
          Thank you. Our team will contact you shortly. For urgent requests, call +91 9410480440.
        </p>
      </div>
    );
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
        <div className="flex flex-wrap items-end justify-between gap-3"><div><h2 id="items-heading" className="font-display text-xl font-semibold text-ink">Materials required</h2><p className="mt-1 text-sm text-steel-600">Choose from our current catalog, or describe a custom requirement.</p></div><button type="button" className="btn btn-outline gap-2" disabled={lines.length >= 10} onClick={() => setLines((current) => [...current, newLine("", crypto.randomUUID())])}><Plus className="h-4 w-4" />Add another item</button></div>
        {categoryState === "loading" && <p className="text-sm text-steel-600" role="status">Loading product categories…</p>}
        {categoryState === "error" && <div className="flex items-center gap-3 rounded border border-amber-300 bg-amber-50 p-3 text-sm" role="alert"><span>Categories could not be loaded.</span><button type="button" className="font-semibold underline" onClick={() => void loadCategories()}>Retry</button></div>}
        {categoryState === "ready" && !categories.length && <p className="text-sm text-steel-600">No categories are available right now. Describe the material below and our team will help.</p>}
        <div className="space-y-4">
          {lines.map((line, index) => {
            const requestKey = `${line.categoryId}|${line.productSearch.trim()}`;
            const result = catalog[requestKey];
            const chosen = line.selectedProduct;
            return <fieldset key={line.key} className="space-y-4 rounded-lg border border-steel-200 bg-white p-4 sm:p-5"><legend className="px-1 font-semibold text-ink">Item {index + 1}</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div><label className="label" htmlFor={`category-${line.key}`}>Material category</label><select id={`category-${line.key}`} className="field" value={line.categoryId} disabled={categoryState !== "ready" || !categories.length} onChange={(event) => chooseCategory(line, event.target.value)}><option value="">Choose a category (optional)</option>{categories.map((category) => <option key={category.id} value={category.id}>{category.name}</option>)}</select></div>
                <div><label className="label" htmlFor={`product-search-${line.key}`}>Search product / material</label><input id={`product-search-${line.key}`} className="field" value={line.productSearch} disabled={!line.categoryId} autoComplete="off" placeholder={line.categoryId ? "Search name, code or specification" : "Choose a category first"} onChange={(event) => onProductSearch(line, event.target.value)} />{line.categoryId && result?.status === "loading" && <p className="mt-1 text-xs text-steel-600" role="status">Searching products…</p>}{line.categoryId && result?.status === "error" && <button type="button" className="mt-1 text-xs font-semibold text-brand underline" onClick={() => setRetryToken((value) => value + 1)}>Retry product search</button>}{line.categoryId && result?.status === "ready" && !result.products.length && <p className="mt-1 text-xs text-steel-600">No matches found. Describe the item below.</p>}{line.categoryId && result?.status === "ready" && result.products.length > 0 && <div className="mt-2"><label className="label" htmlFor={`product-option-${line.key}`}>Select a match</label><select id={`product-option-${line.key}`} className="field" value={line.productId} onChange={(event) => chooseProduct(line, event.target.value)}><option value="">Choose a product</option>{result.products.map((product) => <option key={product.id} value={product.id}>{product.label}</option>)}</select></div>}{result?.hasMore && <p className="mt-1 text-xs text-steel-600">Type more of the product name or code to narrow these results.</p>}</div>
                {chosen?.specifications.map((spec) => <div key={spec.key}><label className="label" htmlFor={`${spec.key}-${line.key}`}>{spec.label}{spec.unit ? ` (${spec.unit})` : ""}{spec.required ? " *" : ""}</label><input id={`${spec.key}-${line.key}`} className="field" type={spec.key === "grade" || spec.key === "finish" ? "text" : "number"} min={spec.key === "grade" || spec.key === "finish" ? undefined : "0.001"} step={spec.key === "grade" || spec.key === "finish" ? undefined : "any"} value={line.specifications[spec.key] ?? spec.value} readOnly={Boolean(spec.value)} required={spec.required} onChange={(event) => updateLine(line.key, { specifications: { ...line.specifications, [spec.key]: event.target.value } })} placeholder={spec.required ? `Enter ${spec.label.toLowerCase()}` : "Optional"} /></div>)}
                <div><label className="label" htmlFor={`quantity-${line.key}`}>Quantity *</label><input id={`quantity-${line.key}`} className="field" required type="number" min="0.001" step="0.001" value={line.quantity} onChange={(event) => updateLine(line.key, { quantity: event.target.value })} /></div>
                <div><label className="label" htmlFor={`uom-${line.key}`}>Unit</label>{line.productId ? <input id={`uom-${line.key}`} className="field" value={line.uom} readOnly aria-readonly="true" /> : <p id={`uom-${line.key}`} className="field flex items-center text-steel-600">Selected with material</p>}</div>
                <div className="sm:col-span-2"><label className="label" htmlFor={`description-${line.key}`}>Description / additional requirements</label><textarea id={`description-${line.key}`} className="field" rows={2} maxLength={500} value={line.description} onChange={(event) => updateLine(line.key, { description: event.target.value })} placeholder="Describe any custom material, size or details not shown above" /></div>
                <div className="sm:col-span-2"><label className="label" htmlFor={`notes-${line.key}`}>Item notes (optional)</label><input id={`notes-${line.key}`} className="field" maxLength={500} value={line.notes} onChange={(event) => updateLine(line.key, { notes: event.target.value })} placeholder="Any other detail for this item" /></div>
              </div>
              {lines.length > 1 && <button type="button" className="inline-flex items-center gap-2 text-sm font-medium text-red-700 hover:underline" onClick={() => setLines((current) => current.filter((entry) => entry.key !== line.key))}><Trash2 className="h-4 w-4" />Remove item</button>}
            </fieldset>;
          })}
        </div>
      </section>

      <section className="space-y-4"><h2 className="font-display text-xl font-semibold text-ink">Delivery and other details</h2><div className="grid gap-4 sm:grid-cols-2"><div><label className="label" htmlFor="deliveryDate">Required delivery date (optional)</label><input id="deliveryDate" name="deliveryDate" type="date" className="field" /></div><div className="sm:col-span-2"><label className="label" htmlFor="remarks">Commercial remarks (optional)</label><textarea id="remarks" name="remarks" className="field" rows={3} maxLength={1000} placeholder="Delivery location, timing or other commercial requirements" /></div></div></section>
      <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      {state === "error" && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
      <button className="btn btn-primary" disabled={state === "sending"} type="submit">{state === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}
