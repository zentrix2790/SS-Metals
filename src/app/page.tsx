import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  ClipboardList,
  DraftingCompass,
  Factory,
  Layers,
  Package,
  PackageCheck,
  ShieldCheck,
  Truck,
  Utensils,
  Warehouse,
} from "lucide-react";
import CountUp from "@/components/CountUp";
import FaqSection from "@/components/FaqSection";
import SmartImage from "@/components/SmartImage";
import ProcessCarousel from "@/components/home/ProcessCarousel";
import { GRADES, INFRA, MANUFACTURED_LINES, SITE, STATS, SUPPLIED_LINES, waLink } from "@/lib/site";

export default function HomePage() {
  const yearsTrust = SITE.yearsInBusiness;

  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap grid items-center gap-8 pt-6 pb-12 sm:py-16 lg:py-20 lg:grid-cols-[1.3fr_1fr]">
          <div data-aos="fade-right">
            <div className="flex flex-wrap gap-3">
              <p className="inline-flex items-center justify-center gap-2 rounded bg-brass px-3.5 py-2 text-[clamp(14.5px,3.8vw,24px)] font-semibold tracking-tight text-ink whitespace-nowrap sm:px-5 sm:py-3">
                Established {SITE.est} · {yearsTrust}+ years of trust
              </p>
            </div>
            <h2 className="h-page mt-3">Quality Stainless Steel Raw Material Supplier & Utensils Manufacturer</h2>
            <p className="mt-5 max-w-xl text-lg text-steel-200">
              Quality stainless steel raw materials, including coils, circles, Laser Cut Designs, Blanks, sheets, rods, and wires,
              alongside precision-manufactured unfinished (Kalvat) utensils, ice buckets, canisters, jugs, and other
              stainless steel products for domestic and export markets.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact?type=urgent" className="btn btn-dark-outline">
                Send Your Enquiry
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className="rounded border border-white/20 bg-white/5 p-6">
            <p className="font-display text-xl font-semibold text-steel-200">
              Steel Grades We Deal In
            </p>
            <ul className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded bg-white/15">
              {GRADES.map((g, idx) => (
                <li
                  key={g}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                  className="bg-ink px-3 py-5 text-center font-display text-1.8xl font-bold text-brass"
                >
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel-300">
              Circles, Sheets and Blanks in any size & design at competitive prices.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4"
            >
              Any Other Grade ?
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brass-light" data-aos="fade-up">
        <div className="wrap flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Urgent Requirement?</h2>
            <p className="text-sm text-steel-700">
              Urgent orders and bulk requirements accommodated.
            </p>
          </div>
          <Link href="/contact?type=urgent" className="btn btn-primary shrink-0">
            Share Your Requirement
          </Link>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <h2 className="h-section">Leading Stainless Steel Raw Material Supplier & Utensils Manufacturer</h2>
            <p className="mt-4 text-steel-700">
              {SITE.name} is a trusted supplier of stainless steel raw materials, including coils, sheets, mirror, matt and PVD sheets, rods, and wires. We also manufacture unfinished (Kalvat) stainless steel utensils, ice buckets, canisters, and jugs for domestic and export markets. Our commitment to quality and reliable service makes us a dependable partner for industrial buyers and utensil manufacturers.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                [`Recycling Expertise`, "Reliable experience in stainless steel trading, recycling & utensils manufacturing."],
                ["ISO 9001:2015", " certified for consistent quality and customer satisfaction."],
                ["Export quality", "Stainless steel raw materials and Kalvat utensils for diverse business need."],
              ].map(([t, d], idx) => (
                <div key={t} data-aos="fade-up" data-aos-delay={idx * 100} className="border-l-4 border-brass pl-3">
                  <p className="font-display text-xl font-semibold">{t}</p>
                  <p className="text-sm text-steel-700">{d}</p>
                </div>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/company-profile" className="btn btn-outline">
                Full company profile
              </Link>
              <Link href="/infrastructure" className="btn btn-outline">
                Factory tour
              </Link>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <SmartImage
              src={INFRA[1].src}
              alt="SS Metals factory floor"
              className="aspect-[4/3] w-full rounded"
            />
            <div className="absolute -bottom-5 left-4 rounded bg-ink px-5 py-3 text-white shadow-lg" data-aos="zoom-in" data-aos-delay="200">
              <p className="font-display text-2xl font-bold text-brass">
                Automated Production
              </p>
              <p className="text-xs text-steel-200">Higher efficiency with optimized manpower.</p>
            </div>
          </div>
        </div>
      </section>



      <section className="section bg-white overflow-hidden">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div data-aos="fade-right">
            <h2 className="h-section">Stainless Steel Raw Material Supplier</h2>
            <p className="mt-3 text-steel-700">
              Supplying stainless steel coils, sheets, mirror, matt and PVD sheets, rods, wires, and circles for diverse industrial and commercial requirements.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                Send Your Enquiry
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3" data-aos="fade-left">
            {["Coil", "Sheets", "Decorative Sheets", "Rods & Wires", "Circles", "Laser-Cut Farma"].map((x, idx) => (
              <div
                key={x}
                data-aos="zoom-in"
                data-aos-delay={idx * 50}
                className="rounded border border-steel-200 bg-white p-4 text-center font-display text-lg font-semibold shadow-xs"
              >
                {x}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Production & Supply Workflow Carousel */}
      <section className="section bg-steel-50 border-y border-steel-200 overflow-hidden">
        <div className="wrap">
          <ProcessCarousel />
        </div>
      </section>

      <section className="section bg-white overflow-hidden">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          {/* Card 1: We Supply */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-steel-300 bg-gradient-to-br from-steel-50 via-white to-steel-100/60 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
            data-aos="fade-right"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Warehouse className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">We Supply</h3>
                </div>
                <span className="badge bg-brand-light text-brand font-bold uppercase tracking-wider text-[11px]">
                  STAINLESS STEEL STOCKIST & SUPPLIER
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-steel-600">
                Supplying stainless steel coils, sheets, decorative sheets, rods, and wires to meet diverse industrial and commercial requirements.
              </p>

              <div className="my-5 h-px bg-steel-200" />

              <ul className="grid gap-3 sm:grid-cols-2 text-sm">
                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Boxes className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Coils & Sheets</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Stainless steel coils and sheets</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Rods & Wires</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Quality stainless steel rods and wires</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Layers className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Decorative Sheets</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Mirror, matt, and PVD finishes</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Package className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Circles & Farma</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Laser-cut circles and custom utensil parts.
</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-steel-200 flex items-center justify-between">
              <Link
                href="/supplier"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
              >
                <span>View Supply Catalog</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: We also Manufacture */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brass/40 bg-gradient-to-br from-brass-light/40 via-white to-brass-light/20 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-xl"
            data-aos="fade-left"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brass-dark via-brass to-brass-light" />

            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass/15 text-brass-dark ring-1 ring-brass/30 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Factory className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">We Also Manufacture</h3>
                </div>
                <span className="badge bg-brass/25 text-brass-dark font-bold uppercase tracking-wider text-[11px]">
                  In-House Manufacturing
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-steel-600">
                Manufacturing unfinished stainless steel utensils, ice buckets, canisters, jugs, and laser-cut farma products for domestic and export markets.
              </p>

              <div className="my-5 h-px bg-brass/20" />

              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3.5 ring-1 ring-brass/25 shadow-xs transition-all hover:bg-white hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brass/15 text-brass-dark ring-1 ring-brass/30">
                    <Utensils className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink">Stainless Steel Utensils</span>
                    <p className="text-xs text-steel-600 mt-0.5">
                      Semi-finished ice buckets, canisters, and jugs. Manufactured with precision for further finishing, branding, and domestic or export markets.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brass/20 flex items-center justify-between">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-dark hover:underline"
              >
                <span>Explore Utensils & Farma</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap">
          <div data-aos="fade-up" suppressHydrationWarning>
            <h2 className="h-section">Manufacturing infrastructure</h2>
            <p className="mt-3 max-w-2xl text-steel-700">
              High-tonnage hydraulic deep draw presses, automatic beading and trimming lines, and a
              modern dispatch warehouse in Moradabad.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[INFRA[0], INFRA[2], INFRA[3]].map((i, idx) => (
              <figure key={i.src} data-aos="fade-up" data-aos-delay={idx * 100} suppressHydrationWarning>
                <SmartImage src={i.src} alt={i.caption} className="aspect-[4/3] w-full rounded" />
                <figcaption className="mt-2 text-sm text-steel-700">{i.caption}</figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-8" data-aos="fade-up" suppressHydrationWarning>
            <Link href="/infrastructure" className="btn btn-outline">
              View full infrastructure gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Top 4) */}
      <FaqSection limit={4} showViewAll bgClassName="bg-white" />

      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 text-center" data-aos="zoom-in" suppressHydrationWarning>
          <h2 className="h-section mx-auto max-w-2xl">
            Partner with India&apos;s leading Kalvat manufacturer
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-steel-300">
            Custom-dimension unfinished utensils, Urgent Requirement dispatch or raw steel coils and
            circles – our team will help with your requirement.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn btn-brass">
              Send business enquiry
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn btn-dark-outline">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
