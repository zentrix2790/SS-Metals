import Image from "next/image";
import Link from "next/link";
import { FOOTER_RANGES, NAV, SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-steel-300 overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 grid grid-cols-2 gap-x-6 gap-y-8 py-12 lg:grid-cols-5 lg:gap-8">
        {/* 1. Logo & Bio (Full width on mobile, 1 col on desktop) */}
        <div className="col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="50" suppressHydrationWarning>
          <Link href="/" className="mb-4 inline-block rounded-full overflow-hidden transition-opacity hover:opacity-95">
            <Image
              src="/logo.png"
              alt={`${SITE.name} Logo`}
              width={160}
              height={160}
              className="h-16 w-16 rounded-full object-contain sm:h-20 sm:w-20"
            />
          </Link>
          <p className="mt-3 text-xs sm:text-sm leading-relaxed text-steel-400">
            Manufacturers of stainless steel unfinished (Kalvat) utensils, barwares, bathwares and
            kitchenware. Stockiest of patta, patti, coil, circles, sheets and farma. Suppliers of
            pipes, tubes, flanges, and industrial metals.
          </p>
        </div>

        {/* 2. Quick links (Left on mobile) */}
        <div className="col-span-1" data-aos="fade-up" data-aos-delay="100" suppressHydrationWarning>
          <h4 className="font-display text-sm sm:text-base font-semibold text-white">Quick links</h4>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
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

        {/* 3. Manufactured ranges (Right on mobile) */}
        <div className="col-span-1" data-aos="fade-up" data-aos-delay="150" suppressHydrationWarning>
          <h4 className="font-display text-sm sm:text-base font-semibold text-white">Manufactured ranges</h4>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
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

        {/* 4. Supplier lines (Left on mobile) */}
        <div className="col-span-1" data-aos="fade-up" data-aos-delay="200" suppressHydrationWarning>
          <h4 className="font-display text-sm sm:text-base font-semibold text-white">Supplier lines</h4>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            {supplierNavItems.map((r) => (
              <li key={r.slug}>
                <Link href={`/supplier/${r.slug}`} className="hover:text-white transition-colors">
                  {r.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* 5. Factory & contact (Right on mobile) */}
        <div className="col-span-1 text-xs sm:text-sm" data-aos="fade-up" data-aos-delay="250" suppressHydrationWarning>
          <h4 className="font-display text-sm sm:text-base font-semibold text-white">Factory & contact</h4>
          <address className="mt-3 not-italic leading-relaxed">{SITE.address}</address>
          <p className="mt-3">
            <a href="tel:+919412236335" className="hover:text-white transition-colors block">
              +91 9412236335
            </a>
            <a href="tel:+919458771652" className="hover:text-white transition-colors block mt-1">
              +91 9458771652
            </a>
          </p>
          <p className="mt-2 text-steel-400">{SITE.proprietor}</p>
          <p className="mt-3">
            <a href={`mailto:${SITE.email}`} className="hover:text-white transition-colors break-all">
              {SITE.email}
            </a>
          </p>
          <Link href="/contact" className="btn btn-dark-outline mt-4 !py-2 w-full sm:w-auto text-center">
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
