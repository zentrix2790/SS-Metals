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
import { getPopularProducts } from "@/lib/static-catalog";
import { GRADES, INFRA, MANUFACTURED_LINES, SITE, STATS, SUPPLIED_LINES, waLink } from "@/lib/site";

export default function HomePage() {
  const popular = getPopularProducts(8);
  const yearsTrust = SITE.yearsInBusiness;

  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
          <div data-aos="fade-right">
            <p className="text-sm font-medium text-brass">
              Established {SITE.est} · {yearsTrust}+ years of trust
            </p>
            <h1 className="h-page mt-3">Premier stainless steel utensils and Kalvat products</h1>
            <p className="mt-5 max-w-xl text-lg text-steel-200">
              High-precision unfinished (Kalvat) utensils, barwares, bathwares and complete
              kitchenware for exporters and domestic markets — plus supplier programs for pipes,
              tubes, flanges, and industrial metals.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/products" className="btn btn-brass">
                Explore 100+ products
              </Link>
              <Link href="/contact?type=urgent" className="btn btn-dark-outline">
                Check Urgent Requirement
              </Link>
            </div>
          </div>

          <div data-aos="fade-left" className="rounded border border-white/20 bg-white/5 p-6">
            <p className="font-display text-xl font-semibold text-steel-200">
              Steel grades we manufacture and stock
            </p>
            <ul className="mt-4 grid grid-cols-3 gap-px overflow-hidden rounded bg-white/15">
              {GRADES.map((g, idx) => (
                <li
                  key={g}
                  data-aos="zoom-in"
                  data-aos-delay={idx * 50}
                  className="bg-ink px-3 py-5 text-center font-display text-3xl font-bold text-brass"
                >
                  {g}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-steel-300">
              Circles, sheets and farma in all six grades, at competitive factory prices.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-block text-sm font-semibold text-white underline underline-offset-4"
            >
              Request a grade quote
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brass-light" data-aos="fade-up">
        <div className="wrap flex flex-col items-start justify-between gap-4 py-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="font-display text-2xl font-bold">Need immediate delivery?</h2>
            <p className="text-sm text-steel-700">
              Active stock of popular ice buckets, taper mugs and jug sets, ready for quick
              dispatch.
            </p>
          </div>
          <Link href="/contact?type=urgent" className="btn btn-primary shrink-0">
            Browse Urgent Requirement
          </Link>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap grid gap-10 lg:grid-cols-2 lg:items-center">
          <div data-aos="fade-right">
            <h2 className="h-section">Pioneering branded and unfinished steelware in Moradabad</h2>
            <p className="mt-4 text-steel-700">
              {SITE.name} is a well-known steelware manufacturer providing premium branded
              stainless steel kitchenware in India and export markets. Established in {SITE.est},
              the consistent quality of our products has made us a reputed name in the kitchenware
              industry.
            </p>
            <p className="mt-3 text-steel-700">
              We run programs built to international quality standards. Our in-house technical team
              tests every product for metallurgical and dimensional quality before delivery. We also{" "}
              <strong className="text-ink">supply</strong> pipes, tubes, flanges, round bars, and
              related industrial lines from Urgent Requirement (see company profile).
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                [`Since ${SITE.est}`, "Over 39 years of stainless steelware manufacturing."],
                ["ISO aligned", "International quality management systems."],
                ["Export quality", "Kalvat products customised for global exporters."],
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
              <p className="font-display text-3xl font-bold text-brass">
                <CountUp to={35} suffix="K+" />
              </p>
              <p className="text-xs text-steel-200">pieces produced daily</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white overflow-hidden">
        <div className="wrap">
          <div data-aos="fade-up">
            <h2 className="h-section">Our popular unfinished Kalvat products</h2>
            <p className="mt-3 max-w-2xl text-steel-700">
              Raw craftsmanship from {yearsTrust} years of manufacturing, ready for polishing, plating
              or branding.
            </p>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
            {popular.map((p, idx) => (
              <article
                key={p.id}
                data-aos="fade-up"
                data-aos-delay={(idx % 4) * 100}
                className="overflow-hidden rounded border border-steel-200 bg-steel-50 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <SmartImage src={p.image_url} alt={p.name} className="aspect-square w-full" />
                <div className="p-3">
                  <p className="text-xs text-steel-500">{p.category}</p>
                  <h3 className="font-display text-lg font-semibold leading-tight">{p.name}</h3>
                  <a
                    href={waLink(`Hello, I am inquiring about ${p.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm font-semibold text-brand hover:underline"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center" data-aos="fade-up">
            <Link href="/products" className="btn btn-primary">
              View all products in catalogue
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-brand text-white overflow-hidden">
        <div className="wrap grid grid-cols-2 gap-6 py-12 md:grid-cols-4">
          {STATS.map((s, idx) => (
            <div key={s.label} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <p className="font-display text-5xl font-bold">
                <CountUp to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-1 text-sm text-brand-light">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section bg-white overflow-hidden">
        <div className="wrap grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div data-aos="fade-right">
            <h2 className="h-section">Direct raw material stockiest</h2>
            <p className="mt-3 text-steel-700">
              Stainless steel patta, patti, coil and sheets, plus circles and farma in JSLU, J4,
              304, 316, 410 and 430 grades at competitive factory prices.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn btn-primary">
                View inventory
              </Link>
              <Link href="/contact" className="btn btn-outline">
                Request grade quote
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3" data-aos="fade-left">
            {["Patta & Patti", "Coil", "Circles", "Sheets", "Farma", "Custom sizes"].map((x, idx) => (
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
          {/* Card 1: We Manufacture */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brass/40 bg-gradient-to-br from-brass-light/40 via-white to-brass-light/20 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-xl"
            data-aos="fade-right"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brass-dark via-brass to-brass-light" />

            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brass/15 text-brass-dark ring-1 ring-brass/30 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Factory className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">We Manufacture</h3>
                </div>
                <span className="badge bg-brass/25 text-brass-dark font-bold uppercase tracking-wider text-[11px]">
                  In-House Manufacturing
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-steel-600">
                Precision deep-drawn unfinished utensils, blanks and tooling produced in our Moradabad plant.
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
                      Ice buckets, water jugs, barware, kitchenware & related export-grade products.
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3.5 ring-1 ring-brass/25 shadow-xs transition-all hover:bg-white hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brass/15 text-brass-dark ring-1 ring-brass/30">
                    <DraftingCompass className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink">Farma Design & Tooling</span>
                    <p className="text-xs text-steel-600 mt-0.5">
                      Custom blanks, circles & profiles crafted to drawing for deep-draw and OEM programs.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-brass/20 flex items-center justify-between">
              <span className="text-xs font-medium text-steel-500">100% Quality Inspected</span>
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brass-dark hover:underline"
              >
                <span>Explore Utensils & Farma</span>
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          {/* Card 2: We Also Supply */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-steel-300 bg-gradient-to-br from-steel-50 via-white to-steel-100/60 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
            data-aos="fade-left"
            suppressHydrationWarning
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-dark via-brand to-brand-light" />

            <div>
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand ring-1 ring-brand/25 shadow-xs transition-transform duration-300 group-hover:scale-110">
                    <Warehouse className="h-5 w-5 sm:h-6 sm:w-6" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">We Also Supply</h3>
                </div>
                <span className="badge bg-brand-light text-brand font-bold uppercase tracking-wider text-[11px]">
                  Direct Stockist & Supplier
                </span>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-steel-600">
                Ready industrial stock with mill test certificates (MTC) and prompt dispatch across India.
              </p>

              <div className="my-5 h-px bg-steel-200" />

              <ul className="grid gap-3 sm:grid-cols-2 text-sm">
                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Boxes className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Pipes & Tubes</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Seamless, ERW & hollow sections</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <ShieldCheck className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Flanges & Bars</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Forged flanges & round bars</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Layers className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Sheets & Coils</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Perforated sheets, patta & patti</p>
                  </div>
                </li>

                <li className="flex items-start gap-2.5 rounded-xl bg-white p-3 ring-1 ring-steel-200/80 shadow-xs transition-all hover:border-brand/50 hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20">
                    <Package className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink text-xs sm:text-sm">Scrap & Non-Ferrous</span>
                    <p className="text-[11px] text-steel-500 mt-0.5">Industrial scrap & alloys</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-steel-200 flex items-center justify-between">
              <span className="text-xs font-medium text-steel-500">MTC Certified Dispatch</span>
              <Link
                href="/supplier"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
              >
                <span>View Supply Catalog</span>
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
