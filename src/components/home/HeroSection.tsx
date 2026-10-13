import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="border-b border-slate-200/80 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm font-medium text-emerald-700">
          ● 1500+ metric tonnes in stock for quick dispatch
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-800"
          >
            View products
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact?type=urgent"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
          >
            Check Urgent Requirement
          </Link>
        </div>
      </div>
    </section>
  );
}
