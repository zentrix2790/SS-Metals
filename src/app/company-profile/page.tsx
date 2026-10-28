import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  Boxes,
  Briefcase,
  Building2,
  Calendar,
  BadgeCheck,
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
import CompanyProfileExperience from "./CompanyProfile";
import "./page.module.css";

export const metadata: Metadata = {
  title: "Company Profile | Stainless Steel Processing & Manufacturing",
  description:
    "Explore the journey of SS Metals, from Salem stainless-steel trading to automated processing, manufacturing capabilities, and industry relationships in Moradabad.",
};

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
    sub: "coil, Blanks, circles, sheets and farma tooling",
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
    icon: BadgeCheck,
    label: "QUALITY ASSURANCE",
    value: `Consistent Quality & Precision`,
    sub: "Precision Inspection for Consistent Quality & Reliability.",
  },
];

export default CompanyProfileExperience;

export function LegacyCompanyProfilePage() {
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
              polishing, plating or branding for their own markets. We Supply pipes, tubes,
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

    </>
  );
}
