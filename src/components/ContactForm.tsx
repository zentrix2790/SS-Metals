"use client";

import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import { submitSiteEnquiry } from "@/lib/ss-flow-enquiry";

type ProductSpec = { key: string; label: string; unit?: string; required: boolean; value: string; type?: "select" | "number" | "text"; options?: string[] };
type Product = {
  id: string;
  name: string;
  code: string;
  category: { id: string; name: string };
  productVariantId: string | null;
  displayName?: string | null;
  uom: { id: string | null; code: string; name: string };
  uomOptions?: { id: string | null; code: string; name: string; isDefault?: boolean }[];
  specifications: ProductSpec[];
};
type Line = {
  key: string;
  categoryId: string;
  parentProductId: string;
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
  return { key, categoryId: "", parentProductId: "", productId: "", productVariantId: "", quantity: "1", uom: "", description, specifications: {}, notes: "" };
}

async function readResponse<T>(response: Response): Promise<T> {
  const body = await response.json().catch(() => ({})) as { data?: T; error?: { message?: string } | string };
  if (!response.ok) {
    const message = typeof body.error === "string" ? body.error : body.error?.message;
    throw new Error(message || "Could not load product options. Please retry.");
  }
  return body.data as T;
}

function productLabel(product: Product) {
  return product.name;
}

function specificationValue(product: Product, key: string) {
  return product.specifications.find((spec) => spec.key === key)?.value ?? "";
}

function categoryDisplayLabel(name: string): string {
  const normalized = name.trim().toLowerCase();
  if (normalized.includes("trading")) {
    return "Trading Products (Raw Materials)";
  }
  if (normalized.includes("manufactur")) {
    return "Manufactured Products (Finished & Semi-Finished Utensils)";
  }
  return name;
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
      if (defaultProduct) {
        const needle = defaultProduct.trim().toLowerCase();
        const matched = loaded.find((p) =>
          p.id.toLowerCase() === needle ||
          p.code.toLowerCase() === needle ||
          p.name.toLowerCase() === needle ||
          `${p.name} ${p.code}`.toLowerCase().includes(needle)
        );
        if (matched) {
          setLines((current) => current.map((l, i) => i === 0 && !l.productId ? {
            ...l,
            categoryId: matched.category.id,
            parentProductId: matched.id,
            productId: matched.id,
            productVariantId: matched.productVariantId ?? "",
            selectedProduct: matched,
            uom: matched.uom.code,
            specifications: Object.fromEntries(matched.specifications.filter((s) => s.value).map((s) => [s.key, s.value])),
          } : l));
        }
      }
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
    const parent = products.find((option) => option.id === value);
    if (!parent) {
      updateLine(line.key, { parentProductId: "", productId: "", productVariantId: "", selectedProduct: undefined, uom: "", specifications: {} });
      return;
    }
    const variants = products.filter((option) => option.id === parent.id && option.productVariantId);
    const product = variants.length === 1 ? variants[0] : undefined;
    updateLine(line.key, {
      categoryId: parent.category.id,
      parentProductId: parent.id,
      productId: parent.id,
      productVariantId: product?.productVariantId ?? "",
      selectedProduct: product,
      uom: product?.uom.code ?? "",
      specifications: Object.fromEntries((product?.specifications ?? []).filter((spec) => spec.value).map((spec) => [spec.key, spec.value])),
    });
  }

  function chooseCategory(line: Line, categoryId: string) {
    updateLine(line.key, { categoryId, parentProductId: "", productId: "", productVariantId: "", selectedProduct: undefined, uom: "", specifications: {} });
  }

  function chooseSpecification(line: Line, variants: Product[], keys: string[], key: string, value: string) {
    const next = { ...line.specifications };
    const index = keys.indexOf(key);
    for (const later of keys.slice(index + 1)) delete next[later];
    if (value) next[key] = value;
    else delete next[key];
    const matches = variants.filter((product) => keys.every((specKey) => specificationValue(product, specKey) === (next[specKey] ?? "")));
    const exact = matches.length === 1 ? matches[0] : undefined;
    updateLine(line.key, {
      specifications: next,
      selectedProduct: exact,
      productId: line.parentProductId,
      productVariantId: exact?.productVariantId ?? "",
      uom: exact?.uom.code ?? "",
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    for (const [index, line] of lines.entries()) {
      if (!line.categoryId) {
        setError(`Please select what type of product you are looking for for item ${index + 1}.`);
        setState("error");
        return;
      }
      if (!line.parentProductId || !line.productVariantId || !line.selectedProduct) {
        setError(`Choose a saved, complete product specification for item ${index + 1}.`);
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
          categoryId: line.categoryId,
          productId: line.productId,
          parentProductId: line.parentProductId,
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
            const categoryOptions = (() => {
              const seen = new Set<string>();
              const list: { id: string; name: string }[] = [];
              for (const product of products) {
                const norm = product.category.name.trim().toLowerCase();
                const isTrading = norm.includes("trading") || norm.includes("steel") || norm.includes("raw");
                const isMfg = norm.includes("manufactur") || norm.includes("semi") || norm.includes("utensil") || norm.includes("finished");
                const kind = isTrading ? "trading" : isMfg ? "manufactured" : null;
                if (kind && !seen.has(kind)) {
                  seen.add(kind);
                  list.push({
                    id: product.category.id,
                    name: kind === "trading"
                      ? "Trading Products (Raw Materials)"
                      : "Manufactured Products (Finished & Semi-Finished Utensils)",
                  });
                }
              }
              return list.sort((a) => (a.name.startsWith("Trading") ? -1 : 1));
            })();
            const chosenCat = categoryOptions.find((c) => c.id === line.categoryId);
            const isTradingSelected = chosenCat?.name.startsWith("Trading");
            const isMfgSelected = chosenCat?.name.startsWith("Manufactured");

            const parentOptions = [...new Map(
              products
                .filter((product) => {
                  if (!line.categoryId) return true;
                  if (product.category.id === line.categoryId) return true;
                  const prodNorm = product.category.name.trim().toLowerCase();
                  if (isTradingSelected) {
                    return prodNorm.includes("trading") || prodNorm.includes("steel") || prodNorm.includes("raw");
                  }
                  if (isMfgSelected) {
                    return prodNorm.includes("manufactur") || prodNorm.includes("semi") || prodNorm.includes("utensil") || prodNorm.includes("finished");
                  }
                  return false;
                })
                .map((product) => [product.id, product])
            ).values()];
            const variants = products.filter((product) => product.id === line.parentProductId && product.productVariantId);
            const standardSpecOrder = ["grade", "finish", "thickness", "width", "length", "diameter"];
            const specKeys = [...new Set(variants.flatMap((product) => product.specifications.filter((spec) => spec.value).map((spec) => spec.key)))].sort((a, b) => {
              const ai = standardSpecOrder.indexOf(a); const bi = standardSpecOrder.indexOf(b);
              if (ai >= 0 || bi >= 0) return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
              return a.localeCompare(b);
            });
            const specMeta = new Map(variants.flatMap((product) => product.specifications.map((spec) => [spec.key, spec] as const)));
            return <fieldset key={line.key} className="space-y-4 rounded-lg border border-steel-200 bg-white p-4 sm:p-5"><legend className="px-1 font-semibold text-ink">Item {index + 1}</legend>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="label" htmlFor={`category-${line.key}`}>
                    What type of product are you looking for? *
                  </label>
                  <select
                    id={`category-${line.key}`}
                    className="field"
                    required
                    value={line.categoryId}
                    disabled={state !== "ready" || !categoryOptions.length}
                    onChange={(event) => chooseCategory(line, event.target.value)}
                  >
                    <option value="">Select product type</option>
                    {categoryOptions.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="sm:col-span-2"><label className="label" htmlFor={`product-${line.key}`}>Product *</label><select id={`product-${line.key}`} className="field" value={line.parentProductId} disabled={state !== "ready" || !line.categoryId} onChange={(event) => chooseProduct(line, event.target.value)}><option value="">Choose a product</option>{parentOptions.map((product) => <option key={product.id} value={product.id}>{productLabel(product)}</option>)}</select></div>
                {line.parentProductId && !variants.length ? <p className="sm:col-span-2 text-sm text-amber-800">No active specifications are available for this product. Please contact SS-Metals for assistance.</p> : null}
                {specKeys.map((key) => {
                  const meta = specMeta.get(key)!;
                  const options = [...new Set(variants.filter((product) => specKeys.every((otherKey) => otherKey === key || !line.specifications[otherKey] || specificationValue(product, otherKey) === line.specifications[otherKey])).map((product) => specificationValue(product, key)).filter(Boolean))].sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));
                  return <div key={key}><label className="label" htmlFor={`${key}-${line.key}`}>{meta.label}{meta.unit ? ` (${meta.unit})` : ""}{meta.required ? " *" : ""}</label><select id={`${key}-${line.key}`} className="field" value={line.specifications[key] ?? ""} required={meta.required} disabled={!variants.length} onChange={(event) => chooseSpecification(line, variants, specKeys, key, event.target.value)}><option value="">Select {meta.label.toLowerCase()}</option>{options.map((option) => <option key={option} value={option}>{option}</option>)}</select></div>;
                })}
                {line.parentProductId && variants.length > 1 && !line.productVariantId ? <p className="sm:col-span-2 text-sm text-steel-600">Select a valid combination of the available specifications.</p> : null}
                {chosen?.displayName ? <p className="sm:col-span-2 text-sm font-medium text-ink">Selected specification: {chosen.displayName}</p> : null}
                <div><label className="label" htmlFor={`quantity-${line.key}`}>Quantity *</label><input id={`quantity-${line.key}`} className="field" required type="number" min="0.001" step="0.001" value={line.quantity} onChange={(event) => updateLine(line.key, { quantity: event.target.value })} /></div>
                <div>
                  <label className="label" htmlFor={`uom-${line.key}`}>Unit</label>
                  <input id={`uom-${line.key}`} className="field" value={line.uom || "Select a complete specification"} readOnly aria-readonly="true" />
                </div>
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
      {state === "error" && Boolean(error) && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
      <button className="btn btn-primary" disabled={state === "sending" || state === "loading" || !products.length} type="submit">{state === "sending" ? "Sending…" : "Send enquiry"}</button>
    </form>
  );
}
