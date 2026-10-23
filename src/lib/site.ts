// Company details — edit here and the whole site updates (SS Metals branding).
export const SITE = {
  name: "SS Metals",
  est: 1987,
  yearsInBusiness: 39,
  tagline: "Utensils & Farma Manufacturers · Industrial Metal Suppliers — Moradabad",
  description:
    "SS Metals (Est. 1987) — manufacturers of stainless steel utensils and farma design; wholesalers and suppliers of pipes, tubes, flanges, round bars, fasteners, perforated sheets, coils, scrap, and non-ferrous metals in Moradabad.",
  email: "enquiry@ssmetals.in",
  address:
    "Sri Radha Krishna Complex, Old Rampur Road, Near Bus Stand, Moradabad, Uttar Pradesh 244001, India",
  addressShort: "Old Rampur Road, Moradabad, UP",
  whatsapp: "919412236335",
  url:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3001"),
  proprietor: "Mr. Pradeep Kumar Agarwal",
};

/** Products SS Metals manufactures in-house */
export const MANUFACTURED_LINES = [
  "Stainless steel utensils (ice buckets, water jugs, kitchenware & related items)",
  "Farma design — blanks and profiles to drawing for deep-draw and OEM programs",
] as const;

/** Products SS Metals supplies from stock (not manufactured in-house) */
export const SUPPLIED_LINES = [
  "Pipes, tubes & hollow sections",
  "Flanges, round bars & fasteners",
  "Perforated sheets, coils, circles & sheets",
  "Non-ferrous metals & industrial scrap",
] as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/company-profile", label: "Company Profile" },
  { href: "/contact?type=urgent", label: "Urgent Requirement" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact" },
] as const;

export const GRADES = ["JSLU - DD", "JSLU - SDM", "JT", "CU 204", "304", "316","430","MIRROR FINISH", "MATE FINISH"];

export const STATS = [
  { value: 50, suffix: "+", label: "Export clients" },
  { value: 40, suffix: "+", label: "OEM brands served" },
  { value: 35000, suffix: "+", label: "Pieces produced per day" },
  { value: 150, suffix: "+", label: "Skilled workers" },
];

export const INFRA = [
  {
    src: "/about/ss-metals-showcase.png",
    caption: "Plant overview — Moradabad",
  },
  {
    src: "/hero/pipes-tubes.jpg",
    caption: "Factory floor and warehouse staging",
  },
  {
    src: "/products/round-bars.jpg",
    caption: "Heavy deep draw and production lines",
  },
  {
    src: "/hero/flanges.jpg",
    caption: "Unfinished Kalvat storage and quality staging",
  },
  {
    src: "/products/fasteners.jpg",
    caption: "Dispatch warehouse",
  },
  {
    src: "/hero/perforated-sheets.jpg",
    caption: "In-house metallurgical and dimensional testing",
  },
];

export const FOOTER_RANGES = [
  "Ice Buckets & Chillers",
  "Tapers & Mugs",
  "Water Jugs",
  "Cutlery Holders",
  "Kalvat Pots",
  "Barware & Bathware",
];

export function waLink(
  text = "Hello SS Metals, I want to inquire about your products",
) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`;
}
