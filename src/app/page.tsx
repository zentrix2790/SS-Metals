import Link from "next/link";
import {
  ArrowRight,
  Boxes,
  ChevronRight,
  ClipboardList,
  DraftingCompass,
  Factory,
  Layers,
  MapPin,
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
import CompanyStorySections from "@/components/home/CompanyStorySections";
import BeginningSection from "@/components/home/BeginningSection";
import JourneySection from "@/components/home/JourneySection";
import PhilosophySection from "@/components/home/PhilosophySection";
import { INFRA, MANUFACTURED_LINES, STATS, SUPPLIED_LINES, waLink } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative bg-white">
        <div className="grid min-h-[520px] lg:grid-cols-[48%_52%]">
          <div className="flex items-center bg-[repeating-linear-gradient(130deg,transparent_0,transparent_22px,rgba(15,45,64,0.045)_23px,transparent_24px)] px-6 py-12 sm:px-12 lg:px-[clamp(3rem,7vw,9rem)]" data-aos="fade-right">
            <div>
            <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.8rem,4.25vw,4.65rem)] font-bold leading-[0.94] tracking-tight text-ink">Built on Trust.<span className="block text-[#08708d]">Evolved through Manufacturing.</span></h1>
            <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-steel-700">
              From stainless steel trading to modern bulk processing, SS Metals has evolved through industry experience, customer trust, and a constant focus on quality.
            </p>
            <p className="mt-3 max-w-xl text-sm text-steel-700">Founded by <strong className="text-[#96701f]">Mr. Raman Lal Agarwal (CA)</strong> along with <strong className="text-[#96701f]">Mr. Sarvesh Kumar</strong> <strong className="text-[ink]">in 1987</strong> </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link href="#journey" className="btn btn-primary">
                Our Journey
              </Link>
              <Link href="/infrastructure" className="btn btn-outline">See Our Plant</Link>
            </div>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[520px]" data-aos="fade-left">
            <SmartImage src="/images/company-profile/hero-steel-coils-generated.png" alt="Stainless-steel processing facility" className="h-full min-h-[360px] w-full object-cover lg:min-h-[520px]" />
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-[#0e2e49]/85 to-transparent" />
            <div
              className="absolute z-10 -bottom-5 left-[14%] flex items-center gap-3 rounded-[10px] border border-white/80 bg-white/95 px-[18px] py-3.5 shadow-[0_16px_36px_rgba(7,31,43,0.18),0_4px_12px_rgba(7,31,43,0.08)] backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="280"
            >
              <MapPin className="w-[27px] h-[27px] text-[#b8923a] shrink-0" />
              <div>
                <strong className="block text-[0.85rem] font-bold text-ink leading-tight">
                  Moradabad, Uttar Pradesh
                </strong>
                <span className="block text-[0.68rem] text-[#647581] mt-[3px] leading-tight">
                  Stainless Steel · Processing · Manufacturing
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BeginningSection />

      <CompanyStorySections section="leadership" />



      <JourneySection />


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
                <li className="flex items-start gap-3 rounded-xl bg-white/80 p-3.5 ring-1 ring-brass/25 shadow-xs transition-all hover:bg-white hover:shadow-md">
                  <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brass/15 text-brass-dark ring-1 ring-brass/30">
                    <Package className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="font-semibold text-ink">Stainless Steel Article</span>
                    <p className="text-xs text-steel-600 mt-0.5">
                      Elegantly crafted stainless steel articles that bring lasting strength, refined finish, and everyday functionality to every space.
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

            {/* 5-Step Production & Supply Workflow Carousel */}
      <section className="section bg-steel-50 border-y border-steel-200 overflow-hidden">
        <div className="wrap">
          <ProcessCarousel />
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

      <CompanyStorySections section="closing" />

      <PhilosophySection />

      {/* Frequently Asked Questions (Top 4) */}
      <FaqSection limit={4} showViewAll bgClassName="bg-white" />

      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 text-center" data-aos="zoom-in" suppressHydrationWarning>
          <h2 className="h-section mx-auto max-w-4xl text-balance">
            Partner with leading stainless steel, raw material supplier & products manufacturer
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
