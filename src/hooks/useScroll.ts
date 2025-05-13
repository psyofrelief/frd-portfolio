"use client";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useCallback } from "react";

gsap.registerPlugin(ScrollToPlugin);

export function useScroll() {
  return useCallback((target: string | Element) => {
    const el =
      typeof target === "string" ? document.getElementById(target) : target;

    if (el) {
      gsap.to(window, {
        duration: 0.5,
        scrollTo: { y: el, offsetY: 0 },
        ease: "power2.out",
      });
    }
  }, []);
}
