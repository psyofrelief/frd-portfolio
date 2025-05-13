"use client";

import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/layout/navbar/Navbar";
import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import HeroLink from "@/components/ui/HeroLink";
import { cn } from "@/lib/utils";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Link from "next/link";
import Image from "next/image";

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
    <section className="relative h-screen w-full flex flex-col p-xs mix-blend-difference pt-nav">
      <Link href={"/"} className="hidden mb-md relative md:flex">
        <LiquidImageHover />
        <div className="absolute bottom-0 right-0 left-0 w-full z-[99] h-[1px] bg-background-inverted" />
      </Link>
      <Link href={"/"} className="flex mb-md relative md:hidden">
        <Image src={"/images/FRD.svg"} height={1920} width={1080} alt="s" />
        <div className="absolute bottom-0 right-0 left-0 w-full z-[99] h-[1px] bg-background-inverted" />
      </Link>

      <div ref={refSentinel} className="w-full h-px" />

      <div className="absolute bottom-0 inset-x-0 p-xs flex justify-between items-center">
        <ScrollToSectionButton />
        <ul className="flex items-center gap-x-sm">
          <HeroLink
            label="LinkedIn"
            href="https://linkedin.com/in/faried-idris"
            className="text-foreground-secondary-inverted"
          />
          <HeroLink
            label="Github"
            href="https://github.com/psyofrelief/frd-portfolio"
            className="text-foreground-secondary-inverted"
          />
          <HeroLink
            label="CV.pdf"
            href="/resume.pdf"
            className="text-foreground-secondary-inverted"
          />
        </ul>
      </div>
    </section>
  );
}
