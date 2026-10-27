import type { ProductPageContent } from "@/lib/product-pages";
import { productPages } from "@/lib/product-pages";

export type SupplierSlug = "coil" | "sheet" | "circle" | "blank" | "wire" | "rod" | "pipe";

export const supplierNavItems: { slug: SupplierSlug; label: string }[] = [
  { slug: "coil", label: "Steel Coil" },
  { slug: "sheet", label: "Sheet" },
  { slug: "circle", label: "Circle" },
  { slug: "blank", label: "Blank" },
  { slug: "wire", label: "Wire" },
  { slug: "rod", label: "Rod" },
  { slug: "pipe", label: "Pipe" },
];

const blankPage: ProductPageContent = {
  ...productPages.farma,
  slug: "farma",
  name: "Stainless Steel Blanks",
  navLabel: "Blank",
  bannerTitle: "Stainless blanks for utensils & OEM",
  bannerSubtitle:
    "Pre-cut blanks and flat profiles for lids, bases, partitions, and matched components — supplied from stock.",
  overview:
    "SS Metals supplies stainless blanks (including farma-style pre-cut shapes) for utensil OEMs, exporters, and fabricators. We Also Manufacture utensils and farma design in-house; blank and flat supply programs support your finishing, polishing, and branding lines.",
};

const wirePage: ProductPageContent = {
  ...productPages["design-wire"],
  name: "Stainless Wire",
  navLabel: "Wire",
  bannerTitle: "Design & industrial stainless wire",
  bannerSubtitle: productPages["design-wire"].bannerSubtitle,
};

const supplierMap: Record<SupplierSlug, ProductPageContent> = {
  coil: { ...productPages.coil, name: "Steel Coil" },
  sheet: productPages.sheet,
  circle: productPages.circle,
  blank: blankPage,
  wire: wirePage,
  rod: productPages.rod,
  pipe: productPages.pipe,
};

export function isSupplierSlug(value: string): value is SupplierSlug {
  return value in supplierMap;
}

export function getSupplierSlugs(): SupplierSlug[] {
  return supplierNavItems.map((i) => i.slug);
}

export function getSupplierPage(slug: SupplierSlug): ProductPageContent {
  return supplierMap[slug];
}
