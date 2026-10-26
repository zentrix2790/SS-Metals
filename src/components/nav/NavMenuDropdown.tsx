"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type Item = { href: string; label: string };

type NavMenuDropdownProps = {
  label: string;
  items: Item[];
  allHref?: string;
  allLabel?: string;
  pathPrefix?: string;
};

export function NavMenuDropdown({
  label,
  items,
  allHref,
  allLabel = "View all",
  pathPrefix,
}: NavMenuDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const active =
    (allHref && pathname === allHref) ||
    (pathPrefix && pathname.startsWith(pathPrefix)) ||
    items.some((i) => pathname === i.href || pathname.startsWith(`${i.href}?`));

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

  useEffect(() => () => clearCloseTimer(), []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={(e) => {
        if (!ref.current?.contains(e.relatedTarget as Node)) handleClose();
      }}
    >
      <button
        type="button"
        className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-sm font-medium transition-colors xl:px-3 xl:py-1.5 ${
          active ? "bg-brand-light text-brand-dark" : "text-steel-700 hover:bg-steel-50 hover:text-brand"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
        onClick={() => setOpen((v) => !v)}
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="absolute left-0 top-full z-50 pt-1.5">
          <div className="max-h-[min(70vh,24rem)] min-w-[12rem] overflow-y-auto rounded border border-steel-200 bg-white py-1 shadow-lg">
            {allHref ? (
              <Link
                href={allHref}
                className="block border-b border-steel-100 px-4 py-2.5 text-sm font-semibold text-ink hover:bg-steel-50"
                onClick={() => setOpen(false)}
              >
                {allLabel}
              </Link>
            ) : null}
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2.5 text-sm text-steel-700 hover:bg-steel-50 hover:text-brand"
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
