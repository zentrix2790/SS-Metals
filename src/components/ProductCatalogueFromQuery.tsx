"use client";

import { useSearchParams } from "next/navigation";
import ProductCatalogue from "@/components/ProductCatalogue";
import type { Product } from "@/lib/types";

export default function ProductCatalogueFromQuery({
  products,
}: {
  products: Product[];
}) {
  const searchParams = useSearchParams();
  const raw = searchParams.get("category");
  const initialCategory = raw ? decodeURIComponent(raw) : "All";
  return (
    <ProductCatalogue
      key={initialCategory}
      products={products}
      initialCategory={initialCategory}
    />
  );
}
