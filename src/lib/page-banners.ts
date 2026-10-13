import type { BannerVariant } from "@/components/banner/BannerArt";

export type InnerPageKey =
  | "about"
  | "products"
  | "readyStock"
  | "industries"
  | "quality"
  | "contact";

export const innerPageBanners: Record<
  InnerPageKey,
  { variant: BannerVariant; eyebrow: string; title: string; subtitle: string }
> = {
  about: {
    variant: "sheet",
    eyebrow: "About SS Metals",
    title: "Your partner in stainless & alloy supply",
    subtitle:
      "Decades of experience in pipes, coils, sheets, circles, and kitchenware—serving India and export markets with stock, quality, and trust.",
  },
  products: {
    variant: "pipe",
    eyebrow: "Products",
    title: "Full catalogue & Urgent Requirement",
    subtitle:
      "Browse pipes, coils, sheets, circles, utensils, farma, wire, rods, and more—with grades and specifications for industrial buyers.",
  },
  readyStock: {
    variant: "coil",
    eyebrow: "Urgent Requirement",
    title: "Immediate delivery inventory",
    subtitle:
      "1500+ metric tonnes staged at Moradabad—seamless pipes, flanges, round bars, perforated sheets, and more with MTC-backed dispatch.",
  },
  industries: {
    variant: "coil",
    eyebrow: "Industries",
    title: "Steel solutions for critical sectors",
    subtitle:
      "Oil & gas, power, aerospace, chemical, pharma, and construction programs backed by tested material and documentation.",
  },
  quality: {
    variant: "circle",
    eyebrow: "Quality",
    title: "Standards, testing & excellence",
    subtitle:
      "ISO-aligned processes, MTC-backed dispatch, and a team focused on precision from inquiry through delivery.",
  },
  contact: {
    variant: "home",
    eyebrow: "Contact",
    title: "Talk to our sales team",
    subtitle:
      "Request quotes, check stock, or plan export shipments—we respond with grades, lead times, and competitive pricing.",
  },
};
