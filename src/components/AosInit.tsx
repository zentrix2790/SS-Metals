"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    // Delay AOS.init until React has finished hydration to prevent className mismatches
    const timer = setTimeout(() => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: false,
        offset: 50,
        delay: 50,
      });
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Refresh AOS instances after route transition completes
    const timer = setTimeout(() => {
      AOS.refresh();
    }, 150);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
