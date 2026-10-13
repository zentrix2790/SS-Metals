import Link from "next/link";
import type { ProductPageContent } from "@/lib/product-pages";
import { SITE, waLink } from "@/lib/site";

type SupplierLinePageProps = {
  product: ProductPageContent;
};

export function SupplierLinePage({ product }: SupplierLinePageProps) {
  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <p className="text-sm font-medium text-brass">Supplier program · {SITE.name}</p>
          <h1 className="h-page mt-2">{product.bannerTitle}</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">{product.bannerSubtitle}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn btn-brass">
              Request quote
            </Link>
            <Link href="/contact?type=urgent" className="btn btn-dark-outline">
              Check Urgent Requirement
            </Link>
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div data-aos="fade-right">
            <h2 className="h-section text-ink">About {product.name}</h2>
            <p className="mt-4 text-steel-700">{product.overview}</p>
            <ul className="mt-6 space-y-3">
              {product.details.map((line, idx) => (
                <li key={line} data-aos="fade-up" data-aos-delay={idx * 50} className="flex gap-3 text-sm text-steel-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <aside className="rounded border border-steel-200 bg-white p-6 shadow-xs" data-aos="fade-left">
            <h3 className="font-display text-xl font-semibold">Enquire on this line</h3>
            <p className="mt-2 text-sm text-steel-700">
              Share grade, size, quantity, and delivery location for availability and pricing.
            </p>
            <a
              href={waLink(`Hello ${SITE.name}, I need a quote for ${product.name}`)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary mt-4 w-full"
            >
              WhatsApp enquiry
            </a>
            <Link href="/contact" className="btn btn-outline mt-2 w-full">
              Contact form
            </Link>
          </aside>
        </div>
      </section>

      <section className="section bg-white overflow-hidden">
        <div className="wrap">
          <div data-aos="fade-up">
            <h2 className="h-section">Why buyers choose us</h2>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {product.advantages.map((a, idx) => (
              <div key={a.title} data-aos="fade-up" data-aos-delay={idx * 100} className="border-l-4 border-brass bg-steel-50 p-4 shadow-xs">
                <h3 className="font-display text-lg font-semibold">{a.title}</h3>
                <p className="mt-1 text-sm text-steel-700">{a.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
