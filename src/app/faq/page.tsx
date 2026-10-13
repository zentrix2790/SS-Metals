import type { Metadata } from "next";
import Link from "next/link";
import { Clock, FileCheck, Mail, MessageSquare, Phone, Truck } from "lucide-react";
import FaqSection from "@/components/FaqSection";
import { SITE, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQ) | SS Metals",
  description:
    "Find answers to frequently asked questions about stainless steel grades, custom Kalvat utensils, Urgent Requirement stock, MTC certification, and placing orders with SS Metals Moradabad.",
};

const HIGHLIGHTS = [
  {
    icon: Clock,
    title: "Quick Response",
    desc: "Direct support from factory team via call or WhatsApp.",
  },
  {
    icon: FileCheck,
    title: "Certified Grades",
    desc: "MTC & test reports provided matching your specifications.",
  },
  {
    icon: Truck,
    title: "Immediate Dispatch",
    desc: "Stock ready for popular schedules, coils, and utensil lines.",
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-ink text-white overflow-hidden">
        <div className="wrap py-14 sm:py-16 text-center max-w-3xl mx-auto" data-aos="fade-down">
          <span className="inline-block rounded-full bg-brass/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brass">
            Help Center & Knowledge Base · Est. {SITE.est}
          </span>
          <h1 className="h-page mt-3">Frequently asked questions</h1>
          <p className="mt-4 text-base sm:text-lg text-steel-200 leading-relaxed">
            Everything you need to know about our unfinished Kalvat utensils, industrial metal supply,
            custom farma fabrication, steel grades, and ordering process.
          </p>
        </div>
      </section>

      {/* 3 Quick Value Highlights */}
      <section className="border-b border-steel-200 bg-white py-8">
        <div className="wrap">
          <div className="grid gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                  className="flex items-start gap-3 rounded-lg border border-steel-200/80 bg-steel-50/50 p-4 transition-colors hover:border-brass/40"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brass/15 text-brass-dark">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-ink text-base">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-steel-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main FAQ Component (Centered Header on Top, FAQs Below) */}
      <FaqSection
        layout="centered"
        title="Common questions & answers"
        subtitle="Browse through our most frequent inquiries below. If you don't find what you are looking for, our team is always ready to assist."
      />

      {/* Support & Assistance CTA */}
      <section className="py-10 sm:py-14 bg-white border-t border-steel-200 overflow-hidden">
        <div className="wrap flex justify-center" data-aos="fade-up">
          <div className="w-full max-w-5xl rounded-2xl border border-steel-200 bg-steel-50/70 px-6 py-7 sm:px-10 sm:py-8 lg:px-12 lg:py-8 text-center shadow-xs">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-ink">
              Still have questions?
            </h2>
            <p className="mt-2 text-steel-700 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Can’t find the answer you’re looking for? Please speak to our customer support or sales team in Moradabad directly.
            </p>

            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-4 w-full mx-auto">
              <a
                href="tel:+919412236335"
                className="btn btn-outline w-full sm:w-auto inline-flex items-center justify-center gap-2 border-steel-300 bg-white text-ink shadow-2xs hover:bg-steel-50 hover:text-brand !py-2.5"
              >
                <Phone className="h-4 w-4 text-brass-dark shrink-0" />
                <span>+91 9412236335</span>
              </a>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brass w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-2xs !py-2.5"
              >
                <MessageSquare className="h-4 w-4 shrink-0" />
                <span>Chat on WhatsApp</span>
              </a>

              <Link
                href="/contact"
                className="btn btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 shadow-2xs !py-2.5"
              >
                <Mail className="h-4 w-4 shrink-0 text-white" />
                <span>Submit enquiry form</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
