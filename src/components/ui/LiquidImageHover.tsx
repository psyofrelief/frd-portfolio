"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

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
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // Load the image to read natural dimensions
    const img = new Image();
    img.src = src;
    img.onload = () => {
      // make wrapper responsive: full width up to natural image size, maintain aspect ratio
      wrapper.style.width = "100%";
      wrapper.style.height = "100%";

      if (autoRatio) {
        wrapper.style.maxWidth = `${img.naturalWidth}px`;
        wrapper.style.maxHeight = `${img.naturalHeight}px`;
      }

      wrapper.style.aspectRatio = `${img.naturalWidth}/${img.naturalHeight - 1}`;

      // initialize hoverEffect once dimensions are set
      if (typeof window.hoverEffect === "function") {
        new window.hoverEffect({
          parent: wrapper,
          intensity: intensity,
          image1: src,
          image2: src,
          displacementImage: displacement,
          // automatically use image aspect ratio
          imagesRatio: img.naturalHeight / img.naturalWidth,
        });
      }
    };
  }, [src, displacement, intensity]);

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

      <div className="flex overflow-hidden w-full ">
        <div className={className} ref={wrapperRef} />
      </div>
    </>
  );
}
