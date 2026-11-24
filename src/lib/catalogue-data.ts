import type { Product } from "@/lib/types";
import type { StockItem } from "@/lib/types";

/** Product specs template (from ss-website seed). */
export function defaultProductSpecs(extra: Record<string, string> = {}) {
  return {
    Material: "Stainless steel (JSLU / J4 / 304 / 316 / 410 / 430)",
    Finish: "Unfinished (Kalvat) – ready for polish, plating or branding",
    Customization: "Sizes and weights on request",
    Role: "Manufactured by SS Metals",
    ...extra,
  };
}

const PRODUCT_ROWS: [string, string, boolean][] = [
  ["TAPER MUG", "Tapers & Mugs", true],
  ["TAPERS", "Tapers & Mugs", true],
  ["MUG SETS", "Tapers & Mugs", true],
  ["Beer Mug Plain", "Tapers & Mugs", false],
  ["Straight Mug", "Tapers & Mugs", false],
  ["JUG SET", "Water Jugs", true],
  ["Water Jug Plain", "Water Jugs", false],
  ["Jug with Lid", "Water Jugs", false],
  ["INNER BIDDING SMALL POT", "Kalvat Pots", true],
  ["L.B INNER BIDDING", "Kalvat Pots", true],
  ["Kalvat Pot Medium", "Kalvat Pots", false],
  ["Kalvat Pot Large", "Kalvat Pots", false],
  ["BIG CUTLERY HOLDER", "Cutlery Holders", true],
  ["BIG CATLARI HOLDER", "Cutlery Holders", true],
  ["Cutlery Holder Small", "Cutlery Holders", false],
  ["Cutlery Holder Round", "Cutlery Holders", false],
  ["Ice Bucket Plain", "Ice Buckets & Chillers", false],
  ["Ice Bucket Double Wall", "Ice Buckets & Chillers", false],
  ["Wine Cooler", "Ice Buckets & Chillers", false],
  ["Champagne Bucket", "Ice Buckets & Chillers", false],
  ["Bar Tumbler", "Barware & Bathware", false],
  ["Cocktail Shaker Body", "Barware & Bathware", false],
  ["Bath Bucket", "Barware & Bathware", false],
  ["Bath Mug", "Barware & Bathware", false],
];

const PRODUCT_DESCRIPTION =
  "High-grade stainless steel with precision unfinished Kalvat beading — manufactured by SS Metals.";

function productId(name: string, index: number) {
  return `p-${index}-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export const CATALOGUE_PRODUCTS: Product[] = PRODUCT_ROWS.map(([name, category, popular], index) => ({
  id: productId(name, index),
  name,
  category,
  image_url: null,
  description: PRODUCT_DESCRIPTION,
  specs: defaultProductSpecs(),
  popular,
}));

const STOCK_ROWS: [
  StockItem["kind"],
  string,
  string,
  string,
  string,
  number,
  string,
  number,
][] = [
  ["product", "Ice Bucket Plain", "Ice Buckets & Chillers", "304", "3 L", 1200, "pcs", 200],
  ["product", "Ice Bucket Double Wall", "Ice Buckets & Chillers", "304", "2 L", 80, "pcs", 200],
  ["product", "Taper Mug", "Tapers & Mugs", "JSLU", "300 ml", 4500, "pcs", 500],
  ["product", "Mug Set (6 pcs)", "Tapers & Mugs", "J4", "250 ml", 900, "sets", 150],
  ["product", "Jug Set (1 jug + 6 mugs)", "Water Jugs", "304", "1.5 L", 350, "sets", 100],
  ["raw", "Circle", "Circles", "304", '10" x 0.6 mm', 2500, "kg", 500],
  ["raw", "Circle", "Circles", "J4", '12" x 0.5 mm', 1800, "kg", 500],
  ["raw", "Sheet", "Sheets", "316", "4 x 8 ft x 1.0 mm", 40, "sheets", 50],
  ["raw", "Flat Strip / Flat Bar", "Strips", "430", "25 mm x 1.2 mm", 3200, "kg", 500],
  ["raw", "Coil", "Coil", "JSLU", "1250 mm x 0.6 mm", 0, "kg", 1000],
];

const STOCK_UPDATED_AT = "2026-10-10T12:00:00.000Z";
export const STOCK_LAST_UPDATED_LABEL = "10 Oct 2026";

export const CATALOGUE_STOCK: StockItem[] = STOCK_ROWS.map((row, index) => ({
  id: `stock-${index}`,
  kind: row[0],
  name: row[1],
  category: row[2],
  grade: row[3],
  size: row[4],
  quantity: row[5],
  unit: row[6],
  low_threshold: row[7],
  updated_at: STOCK_UPDATED_AT,
}));

export const PRODUCT_CATEGORIES = [
  "Ice Buckets & Chillers",
  "Tapers & Mugs",
  "Water Jugs",
  "Cutlery Holders",
  "Kalvat Pots",
  "Barware & Bathware",
] as const;
