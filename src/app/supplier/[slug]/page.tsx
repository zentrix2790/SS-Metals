import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SupplierLinePage } from "@/components/supplier/SupplierLinePage";
import {
  getSupplierPage,
  getSupplierSlugs,
  isSupplierSlug,
} from "@/lib/supplier-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getSupplierSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (!isSupplierSlug(slug)) {
    return { title: "Not found" };
  }
  const product = getSupplierPage(slug);
  return {
    title: `${product.name} (Supply)`,
    description: product.bannerSubtitle,
  };
}

async function SupplierSlugContent({ params }: PageProps) {
  const { slug } = await params;
  if (!isSupplierSlug(slug)) {
    notFound();
  }
  const product = getSupplierPage(slug);
  return <SupplierLinePage product={product} />;
}

export default function SupplierSlugPage({ params }: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-[50vh] bg-ink" />}>
      <SupplierSlugContent params={params} />
    </Suspense>
  );
}
