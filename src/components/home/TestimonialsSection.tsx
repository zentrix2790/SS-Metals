"use client";

import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { testimonialSummary, testimonials } from "@/lib/site-data";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const update = () => {
      setVisibleCount(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - visibleCount);

  const goPrev = useCallback(() => {
    setActive((i) => (i <= 0 ? maxIndex : i - 1));
  }, [maxIndex]);

  const goNext = useCallback(() => {
    setActive((i) => (i >= maxIndex ? 0 : i + 1));
  }, [maxIndex]);

  const currentIndex = Math.min(active, maxIndex);
  const visible = testimonials.slice(currentIndex, currentIndex + visibleCount);

  return (
    <section
      id="testimonials"
      className="scroll-mt-24 bg-[#f4f6f8] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-800">
              What our customers say
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0f1e3d] sm:text-4xl">
              Real stories, real satisfaction
            </h2>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2 lg:justify-start">
              <span className="text-2xl font-bold text-[#0f1e3d]">
                {testimonialSummary.rating}
              </span>
              <span className="flex text-amber-400" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-lg">
                    ★
                  </span>
                ))}
              </span>
              <span className="text-sm text-slate-500">
                ({testimonialSummary.reviewCount} reviews)
              </span>
            </div>
          </div>

          <div className="flex justify-center gap-3 lg:justify-end">
            <button
              type="button"
              onClick={goPrev}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, index) => {
            const featured = index === 0;
            return (
              <article
                key={`${item.name}-${active}-${index}`}
                className={`flex min-h-[260px] flex-col rounded-2xl border bg-white p-6 shadow-sm transition-shadow sm:p-7 ${
                  featured
                    ? "border-amber-400 shadow-md"
                    : "border-slate-200/90"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-[#0f1e3d]"
                    aria-hidden
                  >
                    {initials(item.name)}
                  </div>
                  <Quote
                    className="h-10 w-10 shrink-0 text-slate-200"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.quote}
                </blockquote>
                <footer className="mt-6">
                  <p className="font-bold text-[#0f1e3d]">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </footer>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
