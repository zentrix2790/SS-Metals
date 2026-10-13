"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import SmartImage from "@/components/SmartImage";
import { waLink } from "@/lib/site";
import type { Product } from "@/lib/types";

export default function ProductCatalogue({
  products,
  initialCategory = "All",
}: {
  products: Product[];
  initialCategory?: string;
}) {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(products.map((p) => p.category)))],
    [products],
  );
  const [cat, setCat] = useState(
    categories.includes(initialCategory) ? initialCategory : "All",
  );
  const [q, setQ] = useState("");
  const [active, setActive] = useState<Product | null>(null);

  const list = products.filter(
    (p) =>
      (cat === "All" || p.category === cat) &&
      p.name.toLowerCase().includes(q.trim().toLowerCase()),
  );

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
          {categories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium ${
                cat === c
                  ? "border-brand bg-brand text-white"
                  : "border-steel-300 bg-white hover:border-brand"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products"
          aria-label="Search products"
          className="field md:max-w-xs"
        />
      </div>

      <p className="mt-4 text-sm text-steel-500">
        {list.length} product{list.length === 1 ? "" : "s"}
      </p>

      {list.length === 0 ? (
        <p className="mt-6 rounded border border-dashed border-steel-300 p-8 text-center text-steel-700">
          No products match. Try another category or clear the search.
        </p>
      ) : (
        <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {list.map((p, idx) => (
            <article
              key={p.id}
              data-aos="fade-up"
              data-aos-delay={(idx % 4) * 60}
              className="flex flex-col overflow-hidden rounded border border-steel-200 bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <button
                type="button"
                onClick={() => setActive(p)}
                className="text-left"
                aria-label={`Quick view ${p.name}`}
              >
                <SmartImage src={p.image_url} alt={p.name} className="aspect-square w-full" />
              </button>
              <div className="flex flex-1 flex-col p-3">
                <p className="text-xs text-steel-500">{p.category}</p>
                <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                <div className="mt-auto flex gap-3 pt-3 text-sm font-semibold">
                  <button
                    type="button"
                    onClick={() => setActive(p)}
                    className="text-brand hover:underline"
                  >
                    Quick view
                  </button>
                  <a
                    href={waLink(`Hello, I am inquiring about ${p.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-steel-700 hover:underline"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-ink/70 p-0 sm:items-center sm:p-6"
          onClick={() => setActive(null)}
          role="dialog"
          aria-modal="true"
          aria-label={active.name}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-auto rounded-t bg-white sm:rounded"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2">
              <SmartImage src={active.image_url} alt={active.name} className="aspect-square w-full" />
              <div className="p-6">
                <p className="text-sm text-steel-500">{active.category}</p>
                <h2 className="font-display text-3xl font-bold">{active.name}</h2>
                <p className="mt-3 text-sm text-steel-700">{active.description}</p>
                {Object.keys(active.specs).length > 0 && (
                  <>
                    <h3 className="mt-5 font-display text-lg font-semibold">
                      Technical specifications
                    </h3>
                    <dl className="mt-2 divide-y divide-steel-100 text-sm">
                      {Object.entries(active.specs).map(([k, v]) => (
                        <div key={k} className="grid grid-cols-[110px_1fr] gap-2 py-1.5">
                          <dt className="font-medium text-steel-700">{k}</dt>
                          <dd>{v}</dd>
                        </div>
                      ))}
                    </dl>
                  </>
                )}
                <div className="mt-6 flex flex-wrap gap-2">
                  <a
                    href={waLink(`Hello, I am inquiring about ${active.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Inquire on WhatsApp
                  </a>
                  <Link
                    href={`/contact?product=${encodeURIComponent(active.name)}`}
                    className="btn btn-outline"
                  >
                    Request quotation
                  </Link>
                  <button type="button" onClick={() => setActive(null)} className="btn btn-outline">
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
