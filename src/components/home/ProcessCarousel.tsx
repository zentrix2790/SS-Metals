"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ClipboardList,
  Factory,
  ShieldCheck,
  PackageCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Planning & Requirement Analysis",
    description:
      "We understand your requirements, plan production, and select suitable materials to meet your specifications and industry standards.",
    icon: ClipboardList,
  },
  {
    step: "02",
    title: "Precision Manufacturing",
    description:
      "Our experienced team uses established manufacturing processes to produce premium stainless steel kitchenware and industrial products with precision.",
    icon: Factory,
  },
  {
    step: "03",
    title: "Quality Inspection",
    description:
      "Every product undergoes in-house testing for metallurgical properties, dimensional accuracy, and consistent quality before dispatch.",
    icon: ShieldCheck,
  },
  {
    step: "04",
    title: "Packaging & Order Processing",
    description:
      "We ensure proper packaging, verify order specifications, and prepare products for safe and efficient transportation.",
    icon: PackageCheck,
  },
  {
    step: "05",
    title: "On-Time Delivery",
    description:
      "We focus on timely order fulfillment, reliable logistics, and efficient delivery to customers across India and international markets.",
    icon: Truck,
  },
];

export default function ProcessCarousel() {
  const autoplay = useRef(
    Autoplay({
      delay: 3200,
      stopOnMouseEnter: true,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: "start",
      loop: true,
    },
    [autoplay.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  const handleMouseEnter = useCallback(() => {
    const auto = emblaApi?.plugins()?.autoplay;
    if (auto) auto.stop();
  }, [emblaApi]);

  const handleMouseLeave = useCallback(() => {
    const auto = emblaApi?.plugins()?.autoplay;
    if (auto) auto.play();
  }, [emblaApi]);

  return (
    <div className="w-full">
      {/* Centered Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight font-display">
          Our Working Process
        </h2>
        <p className="mt-3 text-steel-600 text-sm sm:text-base lg:text-lg leading-relaxed">
          From requirement analysis and precision manufacturing to strict inspection and on-time dispatch.
        </p>
      </div>

      {/* Embla Carousel Viewport with Hover Pause & Resume */}
      <div
        className="overflow-hidden"
        ref={emblaRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleMouseEnter}
        onTouchEnd={handleMouseLeave}
      >
        <div className="flex -ml-4 sm:-ml-6 py-2">
          {PROCESS_STEPS.map((s, idx) => {
            const Icon = s.icon;
            const isLast = idx === PROCESS_STEPS.length - 1;

            return (
              <div
                key={s.step}
                className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 lg:basis-1/3 pl-4 sm:pl-6 select-none"
              >
                <div className="flex flex-col justify-between items-center text-center h-full rounded-xl border border-steel-200 bg-white p-6 sm:p-7 shadow-xs hover:border-brand/40 hover:shadow-md transition-all">
                  <div className="flex flex-col items-center text-center w-full">
                    {/* Centered Icon and Step Badge */}
                    <div className="flex flex-col items-center justify-center gap-3 mb-5">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-steel-100 text-brand">
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-steel-700 bg-steel-100 px-3 py-1 rounded-full">
                        STEP {s.step}
                      </span>
                    </div>

                    {/* Centered Title */}
                    <h3 className="font-display text-xl font-bold text-ink text-center">
                      {s.title}
                    </h3>

                    {/* Centered Description */}
                    <p className="mt-2.5 text-sm text-steel-600 leading-relaxed text-center">
                      {s.description}
                    </p>
                  </div>

                  {/* Centered Footer */}
                  <div className="mt-6 pt-4 border-t border-steel-100 flex items-center justify-center gap-2 text-xs text-steel-500 w-full text-center">
                    <span>Phase {s.step} of 05</span>
                    <span className="text-steel-300">•</span>
                    <span className="font-semibold text-brand">
                      {isLast ? "Delivery ✓" : "Next step →"}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Centered Navigation Controls and Pagination Dots */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          onClick={scrollPrev}
          aria-label="Previous step"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-300 bg-white text-ink transition-colors hover:border-brand hover:text-brand cursor-pointer shadow-2xs active:scale-95"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2">
          {PROCESS_STEPS.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                index === selectedIndex
                  ? "w-6 bg-brand"
                  : "w-2 bg-steel-300 hover:bg-steel-400"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next step"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-steel-300 bg-white text-ink transition-colors hover:border-brand hover:text-brand cursor-pointer shadow-2xs active:scale-95"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
