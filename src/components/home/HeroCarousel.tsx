"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { heroCarouselSlides } from "@/lib/site-data";

const SLIDE_INTERVAL_MS = 6000;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback((next: number) => {
    const total = heroCarouselSlides.length;
    setIndex(((next % total) + total) % total);
  }, []);

  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);
  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setIndex((current) => (current + 1) % heroCarouselSlides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused]);

  return (
    <section
      id="home"
      className="scroll-mt-24 border-b border-slate-800 bg-slate-950"
      aria-roledescription="carousel"
      aria-label="SS Metals product showcase"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="relative mx-auto w-full max-w-[1600px]">
        <div className="relative aspect-[21/9] min-h-[280px] w-full overflow-hidden sm:min-h-[320px] lg:min-h-[400px]">
          {heroCarouselSlides.map((slide, i) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority={i === 0}
                className="object-cover object-center"
                sizes="100vw"
              />
            </div>
          ))}

          <div
            className="pointer-events-none absolute inset-0 z-10 bg-slate-950/55"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/50"
            aria-hidden
          />

          {heroCarouselSlides.map((slide, i) => (
            <div
              key={`copy-${slide.src}`}
              className={`absolute inset-0 z-20 flex items-center justify-center px-4 pb-14 pt-6 transition-opacity duration-700 ease-in-out sm:px-8 sm:pb-16 lg:px-12 ${
                i === index
                  ? "opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
              aria-hidden={i !== index}
            >
              <div
                className={`pointer-events-auto mx-auto max-w- 2xl text-center ${
                  i === index ? "" : "pointer-events-none"
                }`}
              >
                <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-amber-400 sm:text-xs">
                  {slide.eyebrow}
                </p>
                <h1 className="mt-2 text-xl font-semibold leading-tight tracking-tight text-white drop-shadow-md sm:mt-3 sm:text-3xl lg:text-4xl">
                  {slide.title}
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-xs leading-relaxed text-slate-200 sm:mt-4 sm:text-sm lg:text-base">
                  {slide.subtitle}
                </p>
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:mt-6">
                  <Link
                    href={slide.primaryCta.href}
                    className="rounded-full bg-amber-700 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-amber-600"
                  >
                    {slide.primaryCta.label}
                  </Link>
                  <Link
                    href={slide.secondaryCta.href}
                    className="rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                  >
                    {slide.secondaryCta.label}
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900/90 sm:left-5"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-slate-900/70 text-white shadow-lg backdrop-blur-sm transition hover:bg-slate-900/90 sm:right-5"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-2">
            {heroCarouselSlides.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-label={`Go to slide ${i + 1}: ${slide.title}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-2 rounded-full transition-all ${
                  i === index
                    ? "w-8 bg-amber-400"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
