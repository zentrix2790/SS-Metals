import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  DraftingCompass,
  Factory,
  Layers,
  MapPin,
  Package,
  ShieldCheck,
  User,
  Utensils,
  Warehouse,
} from "lucide-react";
import SmartImage from "@/components/SmartImage";
import { GRADES, SITE } from "@/lib/site";

export const metadata: Metadata = { title: "Company Profile" };

const FACT_CARDS = [
  {
    icon: Building2,
    label: "Company",
    value: SITE.name,
    sub: "Est. 1987 · 39+ Years in Business",
  },
  {
    icon: User,
    label: "Proprietor",
    value: SITE.proprietor,
    sub: "Executive Leadership & Operations",
  },
  {
    icon: Briefcase,
    label: "Business Type",
    value: "Manufacturer & Stockist",
    sub: "Manufacturer, exporter, supplier and raw material stockist",
  },
  {
    icon: MapPin,
    label: "Office & Works",
    value: "Moradabad, Uttar Pradesh",
    sub: `Office: ${SITE.officeAddress}\nWorks: ${SITE.worksAddress}`,
  },
  {
    icon: Utensils,
    label: "Specialisation",
    value: "Utensils & Farma Design",
    sub: "Unfinished (Kalvat) stainless steel utensils, barware, bathware & farma profiles",
  },
  {
    icon: Layers,
    label: "Raw Materials",
    value: "Coils, Sheets & Blanks",
    sub: "Patta, patti, coil, circles, sheets and farma tooling",
  },
  {
    icon: ShieldCheck,
    label: "Steel Grades",
    value: GRADES.join(" · "),
    sub: "High-grade stainless steel with MTC compliance",
  },
  {
    icon: Award,
    label: "Certification & Standards",
    value: "ISO Aligned Systems",
    sub: "Comprehensive metallurgical and dimensional inspection",
  },
  {
    icon: Calendar,
    label: "Industry Experience",
    value: `${SITE.yearsInBusiness}+ Years of Trust`,
    sub: "Serving global exporters and domestic brands since 1987",
  },
];

export default function CompanyProfilePage() {
  return (
    <>
      {/* Hero Header */}
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <h1 className="h-page">Company profile</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Over 39 years of manufacturing stainless steelware in the brass city of Moradabad.
          </p>
        </div>
      </section>

      {/* Row 1: Who We Are (Left) & Generated Plant Image (Right) */}
      <section className="section bg-white overflow-hidden">
        <div className="wrap grid gap-10 lg:grid-cols-2 items-center">
          <div className="space-y-4 text-steel-700" data-aos="fade-right">
            <span className="badge bg-brand-light text-brand font-semibold text-xs uppercase tracking-wider">
              About SS Metals
            </span>
            <h2 className="h-section text-ink">Who we are</h2>
            <p className="leading-relaxed">
              {SITE.name} is a well-known steelware manufacturing company providing premium branded
              stainless steel kitchenware in India and export markets. Since {SITE.est} the consistent
              quality of our products has earned goodwill and made us a benchmark name in the
              industry.
            </p>
            <p className="leading-relaxed">
              We operate programs to manufacture steelware to international quality standards. Every
              product is the result of master craftsmanship, and our in-house technical team tests it
              for metallurgical and dimensional quality before delivery.
            </p>
            <p className="leading-relaxed">
              Our unfinished Kalvat products are trusted by export trading houses, who finish them by
              polishing, plating or branding for their own markets. We also supply pipes, tubes,
              flanges, and industrial metals from ready stock.
            </p>
            <div className="pt-2">
              <Link href="/contact" className="btn btn-primary">
                Talk to our team
              </Link>
            </div>
          </div>

          <div className="relative group" data-aos="fade-left">
            <div className="relative overflow-hidden rounded-2xl border border-steel-200 bg-steel-100 shadow-md">
              <SmartImage
                src="/about/ss-metals-showcase.png"
                alt={`${SITE.name} manufacturing plant overview in Moradabad`}
                className="w-full h-auto aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex items-end p-5 sm:p-6">
                <span className="inline-flex items-center gap-2 rounded-lg bg-ink/85 backdrop-blur-xs px-3.5 py-2 text-xs sm:text-sm font-semibold text-white shadow-lg">
                  <Factory className="h-4 w-4 text-brass" />
                  SS Metals Plant Overview · Moradabad
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Row 2: Full-Width Corporate Information & Specifications */}
      <section className="border-t border-steel-200 bg-steel-50 py-14 sm:py-16 overflow-hidden">
        <div className="wrap" data-aos="fade-up">
          <div className="mb-8">
            <span className="badge bg-brand-light text-brand font-semibold text-xs uppercase tracking-wider">
              Quick Specifications
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink mt-1.5">
              Corporate Information & Facilities
            </h2>
            <p className="mt-1 text-sm text-steel-600">
              Verified operating details, production lines, and supply specifications.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FACT_CARDS.map((item, idx) => (
              <div
                key={item.label}
                data-aos="fade-up"
                data-aos-delay={(idx % 3) * 80}
                className="group relative rounded-xl border border-steel-200 bg-white p-5 shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-md"
              >
                <div className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand ring-1 ring-brand/20 transition-transform duration-200 group-hover:scale-105">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-steel-500">
                      {item.label}
                    </span>
                    <p className="font-display text-base font-bold text-ink mt-0.5 leading-snug">
                      {item.value}
                    </p>
                    {item.sub && (
                      <p className="text-xs text-steel-600 mt-1 leading-relaxed whitespace-pre-line">
                        {item.sub}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Row 3: We Manufacture & We Also Supply (Updated Version from Home) */}
      <section className="border-t border-steel-200 bg-white py-14 sm:py-16 overflow-hidden">
        <div className="wrap grid gap-8 lg:grid-cols-2">
          {/* Card 1: We Also Supply */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-steel-300 bg-gradient-to-br from-steel-50 via-white to-steel-100/60 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:shadow-xl"
            data-aos="fade-right"
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

          {/* Card 2: We Manufacture */}
          <div
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-brass/40 bg-gradient-to-br from-brass-light/40 via-white to-brass-light/20 p-6 sm:p-8 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-brass hover:shadow-xl"
            data-aos="fade-left"
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
        </div>
      </section>
    </>
  );
}
