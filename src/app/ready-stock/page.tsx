import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { CATALOGUE_STOCK, STOCK_LAST_UPDATED_LABEL } from "@/lib/catalogue-data";
import { waLink } from "@/lib/site";
import type { StockItem } from "@/lib/types";

export const metadata: Metadata = { title: "Urgent Requirement Inventory" };

function status(i: StockItem) {
  if (i.quantity <= 0) return { label: "Out of stock", cls: "bg-red-100 text-red-800" };
  if (i.quantity < i.low_threshold)
    return { label: "Low stock", cls: "bg-amber-100 text-amber-800" };
  return { label: "In stock", cls: "bg-emerald-100 text-emerald-800" };
}

function StockTable({
  title,
  note,
  rows,
}: {
  title: string;
  note: string;
  rows: StockItem[];
}) {
  return (
    <section className="mt-10 first:mt-0">
      <h2 className="h-section">{title}</h2>
      <p className="mt-1 text-sm text-steel-700">{note}</p>
      {rows.length === 0 ? (
        <p className="mt-4 rounded border border-dashed border-steel-300 p-6 text-sm text-steel-700">
          Nothing listed right now. Call us for current availability.
        </p>
      ) : (
        <div className="mt-4 overflow-x-auto rounded border border-steel-200 bg-white">
          <table className="min-w-full divide-y divide-steel-200">
            <thead>
              <tr>
                <th className="th">Item</th>
                <th className="th">Grade</th>
                <th className="th">Size</th>
                <th className="th">Quantity</th>
                <th className="th">Status</th>
                <th className="th">
                  <span className="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-steel-100">
              {rows.map((r) => {
                const s = status(r);
                return (
                  <tr key={r.id}>
                    <td className="td font-medium">
                      {r.name}
                      <span className="block text-xs font-normal text-steel-500">{r.category}</span>
                    </td>
                    <td className="td">{r.grade || "—"}</td>
                    <td className="td">{r.size || "—"}</td>
                    <td className="td whitespace-nowrap">
                      {r.quantity.toLocaleString("en-IN")} {r.unit}
                    </td>
                    <td className="td">
                      <span className={`badge ${s.cls}`}>{s.label}</span>
                    </td>
                    <td className="td text-right">
                      <a
                        href={waLink(
                          `Hello, I want to order ${r.name}${r.grade ? " grade " + r.grade : ""}${r.size ? " (" + r.size + ")" : ""}`,
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-brand hover:underline"
                      >
                        Order
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}

export default function ReadyStockPage() {
  redirect("/contact");
  const all = CATALOGUE_STOCK;
  return (
    <>
      <section className="bg-ink text-white">
        <div className="wrap py-14 sm:py-16">
          <h1 className="h-page">Urgent Requirement inventory</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Finished goods and raw material available for quick dispatch. Last updated{" "}
            {STOCK_LAST_UPDATED_LABEL}.
          </p>
        </div>
      </section>
      <div className="wrap section">
        <StockTable
          title="Finished products"
          note="Popular items held in stock. Quantities change daily, so confirm before ordering."
          rows={all.filter((i) => i.kind === "product")}
        />
        <StockTable
          title="Raw material"
          note="Stainless steel circles, sheets, patta, patti and coil in JSLU, J4, 304, 316, 410 and 430 grades."
          rows={all.filter((i) => i.kind === "raw")}
        />
      </div>
    </>
  );
}
