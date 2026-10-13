"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { productNavItems } from "@/lib/product-pages";

export function ProductsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const handleOpen = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const handleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => {
    return () => clearCloseTimer();
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) {
          handleClose();
        }
      }}
    >
      <button
        type="button"
        className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        Products
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-50 pt-1.5">
          <div className="min-w-[12rem] overflow-hidden rounded-xl border border-slate-200 bg-white py-1 shadow-lg">
            <Link
              href="/products"
              className="block border-b border-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              onClick={() => setOpen(false)}
            >
              All products
            </Link>
            {productNavItems.map((item) => (
              <Link
                key={item.slug}
                href={`/products/${item.slug}`}
                className="block px-4 py-2.5 text-sm text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}
