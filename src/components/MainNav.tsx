"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
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
  const [mobileExpandedSection, setMobileExpandedSection] = useState<"products" | "supplier" | null>(null);

  useEffect(() => {
    if (open) {
      const origOverflow = document.body.style.overflow;
      const origTouchAction = document.body.style.touchAction;
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";

      const handleKey = (e: KeyboardEvent) => {
        if (e.key === "Escape") setOpen(false);
      };
      window.addEventListener("keydown", handleKey);

      return () => {
        document.body.style.overflow = origOverflow;
        document.body.style.touchAction = origTouchAction;
        window.removeEventListener("keydown", handleKey);
      };
    }
  }, [open]);

  const toggleSection = (section: "products" | "supplier") => {
    setMobileExpandedSection((curr) => (curr === section ? null : section));
  };

  const mobileProductsOpen = mobileExpandedSection === "products";
  const mobileSupplierOpen = mobileExpandedSection === "supplier";

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

  const isProductsActive = path.startsWith("/products");
  const isSupplierActive = path.startsWith("/supplier");

  return (
    <div className="border-b border-steel-200 bg-white">
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

        {/* Mobile menu 3-bar icon button */}
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-steel-300 bg-white text-steel-700 transition hover:bg-steel-50 hover:text-brand focus:outline-hidden lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <>
          {/* Backdrop overlay to blur and darken the background */}
          <div
            className="fixed inset-0 z-30 bg-ink/60 backdrop-blur-md lg:hidden touch-none"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />

          <nav
            id="mobile-nav"
            className="relative z-40 max-h-[calc(100dvh-7rem)] overflow-y-auto overscroll-contain border-t border-steel-200 bg-white shadow-xl touch-pan-y lg:hidden"
            aria-label="Mobile"
          >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col px-4 py-3 pb-12 sm:px-6">
            {/* Mobile Drawer Top Header: Logo & Cut/Close Button */}
            <div className="flex items-center justify-between border-b border-steel-200 pb-3 pt-1">
              <Link href="/" onClick={() => setOpen(false)} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt={`${SITE.name} Logo`}
                  width={140}
                  height={48}
                  className="h-8 w-auto object-contain"
                />
              </Link>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-steel-300 bg-steel-50 text-steel-700 transition hover:bg-steel-100 hover:text-ink active:scale-95"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* 1. Home & 2. Company Profile */}
            {NAV.slice(0, 2).map((n) => (
              <Link
                key={`${n.label}-${n.href}`}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-steel-100 py-3 text-base font-medium transition-colors ${
                  active(n.href) ? "font-semibold text-brand" : "text-steel-800 hover:text-brand"
                }`}
              >
                {n.label}
              </Link>
            ))}

            {/* 3. Products Accordion Dropdown */}
            <div className="border-b border-steel-100">
              <button
                type="button"
                onClick={() => toggleSection("products")}
                aria-expanded={mobileProductsOpen}
                className={`flex w-full items-center justify-between py-3 text-base font-medium transition-colors ${
                  isProductsActive ? "font-semibold text-brand" : "text-steel-800 hover:text-brand"
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`h-4 w-4 text-steel-500 transition-transform duration-200 ${
                    mobileProductsOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>

              {mobileProductsOpen ? (
                <div className="mb-2.5 rounded-lg border-l-2 border-brand/40 bg-steel-50/70 p-2 pl-3">
                  <Link
                    href="/products"
                    className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      path === "/products"
                        ? "bg-brand/10 text-brand"
                        : "text-steel-900 hover:bg-white hover:text-brand"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    All products (catalogue)
                  </Link>
                  <div className="my-1 border-t border-steel-200/60" />
                  {productMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        path === item.href
                          ? "bg-brand/10 font-medium text-brand"
                          : "text-steel-700 hover:bg-white hover:text-brand"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {/* 4. Supplier Accordion Dropdown */}
            <div className="border-b border-steel-100">
              <button
                type="button"
                onClick={() => toggleSection("supplier")}
                aria-expanded={mobileSupplierOpen}
                className={`flex w-full items-center justify-between py-3 text-base font-medium transition-colors ${
                  isSupplierActive ? "font-semibold text-brand" : "text-steel-800 hover:text-brand"
                }`}
              >
                <span>Supplier</span>
                <ChevronDown
                  className={`h-4 w-4 text-steel-500 transition-transform duration-200 ${
                    mobileSupplierOpen ? "rotate-180 text-brand" : ""
                  }`}
                />
              </button>

              {mobileSupplierOpen ? (
                <div className="mb-2.5 rounded-lg border-l-2 border-brand/40 bg-steel-50/70 p-2 pl-3">
                  <Link
                    href="/supplier"
                    className={`block rounded-md px-3 py-2 text-sm font-semibold transition-colors ${
                      path === "/supplier"
                        ? "bg-brand/10 text-brand"
                        : "text-steel-900 hover:bg-white hover:text-brand"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    All supplier lines
                  </Link>
                  <div className="my-1 border-t border-steel-200/60" />
                  {supplierMenuItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                        path === item.href
                          ? "bg-brand/10 font-medium text-brand"
                          : "text-steel-700 hover:bg-white hover:text-brand"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>

            {/* 5. Urgent Requirement, Infrastructure, Contact */}
            {NAV.slice(2).map((n) => (
              <Link
                key={`${n.label}-${n.href}`}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`border-b border-steel-100 py-3 text-base font-medium transition-colors ${
                  active(n.href) ? "font-semibold text-brand" : "text-steel-800 hover:text-brand"
                }`}
              >
                {n.label}
              </Link>
            ))}

            {/* Action Call Button */}
            <div className="pt-4 pb-2">
              <a
                href="tel:+919412236335"
                className="group btn w-full justify-center gap-2 bg-brand-light text-brand-dark shadow-2xs transition-all duration-200 hover:bg-ink hover:text-white"
              >
                <Phone className="h-4 w-4 text-brand-dark transition-colors duration-200 group-hover:text-brass" />
                <span>Call Us</span>
              </a>
            </div>
          </div>
        </nav>
      </>
    ) : null}
    </div>
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
