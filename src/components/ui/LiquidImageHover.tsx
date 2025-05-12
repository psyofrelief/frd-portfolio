"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";
import { usePathname } from "next/navigation";

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
}) {
  const pathname = usePathname();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    let effect: any;

    // prevent multiple inits
    if (wrapper.querySelector("canvas")) return;

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
          intensity: intensity,
          image1: src,
          image2: src,
          displacementImage: displacement,
          imagesRatio: img.naturalHeight / img.naturalWidth,
        });
      }
    };

    return () => {
      // remove hover effect and canvas to prevent WebGL context leaks
      if (effect?.disp) {
        effect.disp?.dispose?.();
      }
      const canvas = wrapper.querySelector("canvas");
      if (canvas) canvas.remove();
    };
  }, [src, displacement, intensity, pathname]);

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

      <div className="flex overflow-hidden w-full">
        <div className={className} ref={wrapperRef} key={pathname} />
      </div>
    </>
  );
}
