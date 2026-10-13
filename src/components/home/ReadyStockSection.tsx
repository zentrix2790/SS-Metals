/*import Link from "next/link";
import { readyStockItems } from "@/lib/site-data";

export function ReadyStockSection() {
  return (
    <section
      id="ready-stock"
      className="scroll-mt-24 border-y border-slate-200/80 bg-stone-50 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-emerald-800">
                Urgent Requirement
              </p>
              <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
                Immediate delivery inventory
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-600">
                Seamless pipes, flanges, bars, and perforated sheets staged for
                fast dispatch — request sizes, schedules, and MTCs with your
                enquiry.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex shrink-0 justify-center rounded-full bg-emerald-700 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Request quote
            </Link>
          </div>

          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200/80 bg-white">
            <table className="min-w-full text-left text-sm">
              <thead className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500">
                <tr>
                  <th className="px-4 py-3 font-semibold">Product</th>
                  <th className="px-4 py-3 font-semibold">Grade / Standard</th>
                  <th className="px-4 py-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {readyStockItems.map((row) => (
                  <tr
                    key={`${row.name}-${row.grade}`}
                    className="border-b border-slate-100 last:border-0"
                  >
                    <td className="px-4 py-3 font-medium text-slate-900">
                      {row.name}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{row.grade}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold ${row.status === "In stock"
                            ? "bg-emerald-100 text-emerald-800"
                            : "bg-amber-100 text-amber-900"
                          }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}*/
