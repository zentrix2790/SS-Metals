import type { Metadata } from "next";
import Link from "next/link";
import SmartImage from "@/components/SmartImage";
import { GRADES, MANUFACTURED_LINES, SITE, SUPPLIED_LINES } from "@/lib/site";

export const metadata: Metadata = { title: "Company Profile" };

const FACTS: [string, string][] = [
  ["Company", SITE.name],
  ["Established", String(SITE.est)],
  ["Proprietor", SITE.proprietor],
  ["Business type", "Manufacturer, exporter, supplier and raw material stockiest"],
  ["Location", SITE.address],
  [
    "Specialisation",
    "Unfinished (Kalvat) stainless steel utensils, barware, bathware, kitchenware; farma design",
  ],
  ["Raw material", "Patta, patti, coil, circles, sheets and farma"],
  ["Steel grades", GRADES.join(", ")],
  ["Certification", "ISO aligned quality systems"],
];

export default function CompanyProfilePage() {
  return (
    <>
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16" data-aos="fade-down">
          <h1 className="h-page">Company profile</h1>
          <p className="mt-4 max-w-2xl text-lg text-steel-200">
            Over 39 years of manufacturing stainless steelware in the brass city of Moradabad.
          </p>
        </div>
      </section>

      <section className="section overflow-hidden">
        <div className="wrap grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div className="space-y-4 text-steel-700" data-aos="fade-right">
            <SmartImage
              src="/about/ss-metals-showcase.jpg"
              alt={`${SITE.name} overview`}
              className="mb-6 w-full rounded lg:hidden"
            />
            <h2 className="h-section text-ink">Who we are</h2>
            <p>
              {SITE.name} is a well-known steelware manufacturing company providing premium branded
              stainless steel kitchenware in India and export markets. Since {SITE.est} the consistent
              quality of our products has earned goodwill and made us a benchmark name in the
              industry.
            </p>
            <p>
              We operate programs to manufacture steelware to international quality standards. Every
              product is the result of master craftsmanship, and our in-house technical team tests it
              for metallurgical and dimensional quality before delivery.
            </p>
            <p>
              Our unfinished Kalvat products are trusted by export trading houses, who finish them by
              polishing, plating or branding for their own markets. We also supply pipes, tubes,
              flanges, and industrial metals from stock — see{" "}
              <strong className="text-ink">We also supply</strong> below.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded border border-brass/30 bg-brass-light/30 p-4 text-sm" data-aos="zoom-in" data-aos-delay="100">
                <p className="font-display text-lg font-semibold text-ink">We manufacture</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {MANUFACTURED_LINES.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded border border-steel-200 bg-steel-50 p-4 text-sm" data-aos="zoom-in" data-aos-delay="200">
                <p className="font-display text-lg font-semibold text-ink">We also supply</p>
                <ul className="mt-2 list-inside list-disc space-y-1">
                  {SUPPLIED_LINES.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
            <Link href="/contact" className="btn btn-primary mt-2">
              Talk to our team
            </Link>
          </div>

          <dl className="divide-y divide-steel-200 rounded border border-steel-200 bg-white shadow-xs" data-aos="fade-left">
            {FACTS.map(([k, v], idx) => (
              <div key={k} data-aos="fade-left" data-aos-delay={idx * 40} className="grid grid-cols-[120px_1fr] gap-3 px-4 py-3 text-sm">
                <dt className="font-semibold text-steel-700">{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
