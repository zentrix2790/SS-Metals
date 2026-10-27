"use client";

import { ChevronDown, ArrowRight, HelpCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { faqs } from "@/lib/site-data";

interface FaqSectionProps {
  limit?: number;
  showViewAll?: boolean;
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  layout?: "centered" | "split";
  bgClassName?: string;
}

export function FaqSection({
  limit,
  showViewAll = false,
  title = "Frequently Asked Questions",
  subtitle = "Browse through our most frequent inquiries below. If you don't find what you are looking for, our team is always ready to assist.",
  eyebrow = "Help & Information",
  layout = "centered",
  bgClassName = "bg-white",
}: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const items = typeof limit === "number" ? faqs.slice(0, limit) : faqs;

  if (layout === "split") {
    return (
      <section id="faq" className={`section ${bgClassName} overflow-hidden border-t border-steel-200/80`}>
        <div className="wrap">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
            <div className="lg:col-span-2" data-aos="fade-right">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brass/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brass-dark">
                <HelpCircle className="h-3.5 w-3.5 text-brass-dark" />
                {eyebrow}
              </span>
              <h2 className="h-section mt-3 text-ink">{title}</h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-steel-700">
                {subtitle}
              </p>

              {showViewAll && (
                <div className="mt-6 hidden sm:block">
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 font-semibold text-brass-dark hover:text-ink transition-colors"
                  >
                    <span>Explore all FAQs</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            <div className="lg:col-span-3" data-aos="fade-left">
              <ul className="divide-y divide-steel-200 rounded-xl border border-steel-200 bg-white shadow-xs">
                {items.map((item, index) => {
                  const open = openIndex === index;
                  return (
                    <li key={item.question}>
                      <button
                        type="button"
                        className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 hover:bg-steel-50/50 transition-colors cursor-pointer"
                        aria-expanded={open}
                        onClick={() => setOpenIndex(open ? null : index)}
                      >
                        <span className="font-display font-semibold text-ink text-base">
                          {item.question}
                        </span>
                        <ChevronDown
                          className={`mt-0.5 h-5 w-5 shrink-0 text-steel-500 transition-transform duration-200 ${open ? "rotate-180 text-brass-dark" : ""
                            }`}
                        />
                      </button>
                      <div
                        className={`grid transition-all duration-200 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                          }`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-steel-700 sm:px-6 sm:pb-6">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Centered layout: Heading on TOP, FAQs BELOW
  return (
    <section id="faq" className={`section ${bgClassName} overflow-hidden border-t border-steel-200/80`}>
      <div className="wrap">
        {/* Top Header: Centered */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12" data-aos="fade-up" suppressHydrationWarning>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brass/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-brass-dark">
            <HelpCircle className="h-3.5 w-3.5 text-brass-dark" />
            {eyebrow}
          </span>
          <h2 className="h-section mt-3 text-ink">
            {title}
          </h2>
          <p className="mt-3 text-steel-600 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* FAQ Accordion: Centered Below Heading */}
        <div className="max-w-4xl mx-auto w-full" data-aos="fade-up" data-aos-delay="100" suppressHydrationWarning>
          <div className="space-y-3">
            {items.map((item, index) => {
              const open = openIndex === index;
              return (
                <div
                  key={item.question}
                  className={`rounded-xl border transition-all duration-200 bg-white ${open
                      ? "border-brass/50 shadow-sm"
                      : "border-steel-200/90 shadow-2xs hover:border-steel-300"
                    }`}
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5 cursor-pointer"
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : index)}
                  >
                    <span className="font-display font-semibold text-ink text-base sm:text-lg">
                      {item.question}
                    </span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-colors ${open ? "bg-brass/20 text-brass-dark" : "bg-steel-100 text-steel-600"
                        }`}
                    >
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""
                          }`}
                      />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-200 ease-out ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-steel-100 px-5 pt-3.5 pb-5 text-sm sm:text-base leading-relaxed text-steel-700 sm:px-6 sm:pb-6">
                        {item.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {showViewAll && (
            <div className="mt-8 text-center" data-aos="fade-up" suppressHydrationWarning>
              <Link
                href="/faq"
                className="btn btn-outline inline-flex items-center gap-2 border-steel-300 bg-white text-ink hover:border-brand hover:text-brand shadow-2xs"
              >
                <span>View all FAQs & answers</span>
                <ArrowRight className="h-4 w-4 text-brass-dark" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
