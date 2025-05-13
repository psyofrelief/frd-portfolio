"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";

declare global {
  interface Window {
    hoverEffect: any;
  }
}

export default function LiquidImageHover({
  src = "/images/FRD.svg",
  displacement = "/images/displacement4.png",
  intensity = 0.3,
  autoRatio = false,
  className = "",
  aspect = "",
}: {
  src?: string;
  displacement?: string;
  intensity?: number;
  autoRatio?: boolean;
  className?: string;
  aspect?: string;
}) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(wrapperRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isInView) return;
    if (window.innerWidth < 640) return; // skip mobile

    const wrapper = wrapperRef.current;
    if (!wrapper || wrapper.dataset.active === "true") return;

    let effect: any;
    wrapper.dataset.active = "true";

    const img = new Image();
    img.src = src;

    img.onload = () => {
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";

      if (autoRatio) {
        wrapper.style.maxWidth = `${img.naturalWidth}px`;
        wrapper.style.maxHeight = `${img.naturalHeight}px`;
      }

      wrapper.style.aspectRatio = `${img.naturalWidth}/${img.naturalHeight - 1}`;

      if (typeof window.hoverEffect === "function") {
        effect = new window.hoverEffect({
          parent: wrapper,
          intensity,
          image1: src,
          image2: src,
          displacementImage: displacement,
          imagesRatio: img.naturalHeight / img.naturalWidth,
          pixelRatio: 1,
        });
      }
    };

    return () => {
      wrapper.dataset.active = "false";
      if (effect?.disp?.dispose) effect.disp.dispose();
      wrapper.querySelector("canvas")?.remove();
    };
  }, [isInView, src, displacement, intensity, pathname, autoRatio]);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/109/three.min.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/hover-effect.umd.js" strategy="afterInteractive" />

      <div
        ref={wrapperRef}
        key={pathname}
        className={cn(
          "relative size-full overflow-clip bg-black",
          `aspect-${aspect}`,
          className,
        )}
      />
    </>
  );
}
