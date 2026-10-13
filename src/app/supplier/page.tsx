import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

export const metadata: Metadata = {
  title: "Supplier Lines",
  description: "Steel coil, sheet, circle, blank, wire, rod, and pipe supply from SS Metals.",
};

export default function SupplierIndexPage() {
  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <h1 className="h-page">Supplier programs</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            {SITE.name} supplies industrial stainless and alloy lines from Urgent Requirement — we
            manufacture utensils and farma design separately in-house.
          </p>
        </div>
      </section>
      <section className="section overflow-hidden">
        <div className="wrap grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {supplierNavItems.map((item, idx) => (
            <Link
              key={item.slug}
              href={`/supplier/${item.slug}`}
              data-aos="fade-up"
              data-aos-delay={(idx % 3) * 80}
              className="rounded border border-steel-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-md"
            >
              <h2 className="font-display text-2xl font-semibold text-ink">{item.label}</h2>
              <p className="mt-2 text-sm text-steel-700">View grades, sizes, and enquiry options →</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
