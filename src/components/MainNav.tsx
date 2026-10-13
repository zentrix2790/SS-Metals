"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { Phone } from "lucide-react";
import { NavMenuDropdown } from "@/components/nav/NavMenuDropdown";
import { PRODUCT_CATEGORIES } from "@/lib/catalogue-data";
import { NAV, SITE } from "@/lib/site";
import { supplierNavItems } from "@/lib/supplier-pages";

const productMenuItems = PRODUCT_CATEGORIES.map((category) => ({
  label: category,
  href: `/products?category=${encodeURIComponent(category)}`,
}));

const supplierMenuItems = supplierNavItems.map((item) => ({
  label: item.label,
  href: `/supplier/${item.slug}`,
}));

function MainNavContent({ isUrgent }: { isUrgent: boolean }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);

  const active = (href: string) => {
    if (href === "/") return path === "/";
    if (href.includes("?")) {
      const [hPath, hQuery] = href.split("?");
      if (path !== hPath) return false;
      if (hQuery.includes("urgent")) {
        return isUrgent;
      }
      return false;
    }
    if (href === "/contact") {
      return path === "/contact" && !isUrgent;
    }
    return path.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-steel-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* Left: Brand Logo */}
        <Link href="/" className="flex shrink-0 items-center py-1" onClick={() => setOpen(false)}>
          <Image
            src="/logo.png"
            alt={`${SITE.name} Logo`}
            width={240}
            height={80}
            priority
            className="h-12 w-auto object-contain sm:h-14 lg:h-16"
          />
        </Link>

        {/* Center: Main Navigation in one clean line */}
        <nav className="hidden items-center gap-0.5 whitespace-nowrap lg:flex xl:gap-1.5" aria-label="Main">
          {NAV.slice(0, 2).map((n) => (
            <Link
              key={`${n.label}-${n.href}`}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3 xl:py-2 ${
                active(n.href)
                  ? "bg-brand-light text-brand-dark"
                  : "text-steel-700 hover:bg-steel-50 hover:text-brand"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <NavMenuDropdown
            label="Products"
            allHref="/products"
            allLabel="All products (catalogue)"
            pathPrefix="/products"
            items={productMenuItems}
          />
          <NavMenuDropdown
            label="Supplier"
            allHref="/supplier"
            allLabel="All supplier lines"
            pathPrefix="/supplier"
            items={supplierMenuItems}
          />
          {NAV.slice(2).map((n) => (
            <Link
              key={`${n.label}-${n.href}`}
              href={n.href}
              aria-current={active(n.href) ? "page" : undefined}
              className={`rounded-md px-2.5 py-1.5 text-sm font-medium transition-colors xl:px-3 xl:py-2 ${
                active(n.href)
                  ? "bg-brand-light text-brand-dark"
                  : "text-steel-700 hover:bg-steel-50 hover:text-brand"
              }`}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Right: Actions */}
        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href="tel:+919412236335"
            className="group inline-flex min-w-[100px] items-center justify-center gap-2 rounded-lg bg-brand-light px-4 py-2 text-sm font-semibold text-brand-dark shadow-2xs transition-all duration-200 hover:bg-ink hover:text-white active:scale-[0.98]"
          >
            <Phone className="h-3.5 w-3.5 text-brand-dark transition-colors duration-200 group-hover:text-brass" />
            <span>Call</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="rounded-lg border border-steel-300 px-3 py-1.5 text-sm font-medium text-steel-700 hover:bg-steel-50 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-steel-200 bg-white lg:hidden"
          aria-label="Mobile"
        >
          <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-3 sm:px-6">
            {NAV.map((n) => (
              <Link
                key={`${n.label}-${n.href}`}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-steel-100 py-3 text-base font-medium ${active(n.href) ? "text-brand" : ""}`}
              >
                {n.label}
              </Link>
            ))}
            <p className="pt-3 text-xs font-bold uppercase tracking-wider text-steel-500">
              Products
            </p>
            <Link
              href="/products"
              className="border-b border-steel-100 py-2.5 text-sm font-semibold"
              onClick={() => setOpen(false)}
            >
              All products
            </Link>
            {productMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-steel-100 py-2.5 pl-3 text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <p className="pt-3 text-xs font-bold uppercase tracking-wider text-steel-500">
              Supplier
            </p>
            {supplierMenuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border-b border-steel-100 py-2.5 pl-3 text-sm"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="py-3">
              <a
                href="tel:+919412236335"
                className="group btn w-full justify-center gap-2 bg-brand-light text-brand-dark shadow-2xs transition-all duration-200 hover:bg-ink hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-dark transition-colors duration-200 group-hover:text-brass" />
                <span>Call</span>
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}

function MainNavWithParams() {
  const searchParams = useSearchParams();
  const isUrgent = searchParams.get("type") === "urgent" || searchParams.has("urgent");
  return <MainNavContent isUrgent={isUrgent} />;
}

export default function MainNav() {
  return (
    <Suspense fallback={<MainNavContent isUrgent={false} />}>
      <MainNavWithParams />
    </Suspense>
  );
}
