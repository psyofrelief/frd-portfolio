"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import HeroLink from "@/components/ui/HeroLink";
import { cn } from "@/lib/utils";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Link from "next/link";

export default function HeroSection() {
  const refSentinel = useRef<HTMLDivElement>(null);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => setIsFixed(e.intersectionRatio === 0),
      { threshold: 0 },
    );
    if (refSentinel.current) obs.observe(refSentinel.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative h-screen w-full flex flex-col p-xs">
      <Link href={"/"} className="flex">
        <LiquidImageHover />
      </Link>

      {/* Sentinel to detect when nav should stick */}
      <div ref={refSentinel} className="w-full h-px" />

      <Navbar
        className={cn(
          isFixed && "fixed mt-0 top-0 right-0 left-0 min-w-full px-xs",
        )}
      />

      <div className="absolute bottom-0 inset-x-0 p-xs flex justify-between items-center">
        <ScrollToSectionButton />
        <ul className="flex items-center gap-x-sm">
          <HeroLink
            label="LinkedIn"
            href="https://linkedin.com/in/faried-idris"
          />
          <HeroLink
            label="Github"
            href="https://github.com/psyofrelief/frd-portfolio"
          />
          <HeroLink label="CV.pdf" href="/resume.pdf" />
        </ul>
      </div>
    </section>
  );
}
