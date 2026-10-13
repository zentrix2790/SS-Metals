import Image from "next/image";
import Link from "next/link";
import { FOOTER_RANGES, NAV, SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-steel-300 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 grid gap-8 py-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        <div data-aos="fade-up" data-aos-delay="50">
          <Link href="/" className="mb-4 inline-block rounded-xl bg-white p-3 sm:p-3.5 shadow-md transition-opacity hover:opacity-95">
            <Image
              src="/logo.png"
              alt={`${SITE.name} Logo`}
              width={260}
              height={88}
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Link>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-400">
            Manufacturers of stainless steel unfinished (Kalvat) utensils, barwares, bathwares and
            kitchenware. Stockiest of patta, patti, coil, circles, sheets and farma. Suppliers of
            pipes, tubes, flanges, and industrial metals.
          </p>
        </div>
        <div data-aos="fade-up" data-aos-delay="100">
          <h4 className="font-display text-base font-semibold text-white">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={`${n.label}-${n.href}`}>
                <Link href={n.href} className="hover:text-white transition-colors">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <h4 className="font-display text-base font-semibold text-white">Manufactured ranges</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {FOOTER_RANGES.map((r) => (
              <li key={r}>
                <Link
                  href={`/products?category=${encodeURIComponent(r)}`}
                  className="hover:text-white transition-colors"
                >
                  {r}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <h4 className="font-display text-base font-semibold text-white">Supplier lines</h4>
          <ul className="mt-3 space-y-2 text-sm">
            {supplierNavItems.map((r) => (
              <li key={r.slug}>
                <Link href={`/supplier/${r.slug}`} className="hover:text-white transition-colors">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm" data-aos="fade-up" data-aos-delay="250">
          <h4 className="font-display text-base font-semibold text-white">Factory & contact</h4>
          <address className="mt-3 not-italic leading-relaxed">{SITE.address}</address>
          <p className="mt-3">
            <a href="tel:+919412236335" className="hover:text-white transition-colors">
              +91 9412236335
            </a>
            <br />
            <a href="tel:+919458771652" className="hover:text-white transition-colors">
              +91 9458771652
            </a>
          </p>
          <p className="mt-2 text-steel-400">{SITE.proprietor}</p>
          <p className="mt-3">
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors">
              {SITE.email}
            </a>
          </p>
          <Link href="/contact" className="btn btn-dark-outline mt-4 !py-2">
            Send enquiry
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-steel-400">
        © 2026 {SITE.name}. All rights reserved. Moradabad, India.
      </div>
    </footer>
  );
}
