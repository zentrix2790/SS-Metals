"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { usePathname } from "next/navigation";

export default function AosInit() {
  const pathname = usePathname();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Wait until React has completely finished hydration across all trees
    const runInit = () => {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
        once: false,
        offset: 50,
        delay: 50,
      });
      isInitialized.current = true;
    };

    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        runInit,
        { timeout: 1000 }
      );
    } else {
      timerId = setTimeout(runInit, 500);
    }

    return () => {
      if (idleId !== undefined && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, []);

  useEffect(() => {
    // Only refresh on client-side route transitions, not during initial hydration
    if (!isInitialized.current) return;

    let idleId: number | undefined;
    let timerId: ReturnType<typeof setTimeout> | undefined;

    const runRefresh = () => {
      AOS.refresh();
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      idleId = (window as unknown as { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback(
        runRefresh,
        { timeout: 500 }
      );
    } else {
      timerId = setTimeout(runRefresh, 300);
    }

    return () => {
      if (idleId !== undefined && typeof window !== "undefined" && "cancelIdleCallback" in window) {
        (window as unknown as { cancelIdleCallback: (id: number) => void }).cancelIdleCallback(idleId);
      }
      if (timerId !== undefined) {
        clearTimeout(timerId);
      }
    };
  }, [pathname]);

  return null;
}
