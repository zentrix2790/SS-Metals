import type { Metadata } from "next";
import { Suspense } from "react";
import ProductCatalogue from "@/components/ProductCatalogue";
import ProductCatalogueFromQuery from "@/components/ProductCatalogueFromQuery";
import { getAllProducts } from "@/lib/static-catalog";

export const metadata: Metadata = { title: "Products Catalogue" };

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <h1 className="h-page">Products catalogue</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Unfinished Kalvat utensils, barware, bathware and kitchenware. Ask for custom sizes and
            weights.
          </p>
        </div>
      </section>
      <section className="section overflow-hidden">
        <div className="wrap" data-aos="fade-up">
          <Suspense fallback={<ProductCatalogue products={products} initialCategory="All" />}>
            <ProductCatalogueFromQuery products={products} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
