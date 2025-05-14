"use client";

import ScrollToSectionButton from "@/components/ui/ScrollToSectionButton";
import HeroLink from "@/components/ui/HeroLink";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative h-screen  w-full flex flex-col p-xs mix-blend-difference pt-[100px] sm:pt-nav">
      <Link
        aria-label="Visit home page"
        href={"/"}
        className="hidden mb-md relative md:flex"
      >
        <LiquidImageHover />
        <div className="absolute bottom-0 right-0 left-0 w-full z-[99] h-[1px] bg-background-inverted" />
      </Link>
      <Link href={"/"} className="flex mb-md relative md:hidden">
        <Image
          priority
          loading="eager"
          src={"/images/FRD.svg"}
          height={1920}
          width={1080}
          alt="s"
        />
        <div className="absolute bottom-0 right-0 left-0 w-full z-[99] h-[1px] bg-background-inverted" />
      </Link>

      <div className="absolute bottom-0 inset-x-0 p-xs flex justify-between items-center">
        <ScrollToSectionButton />
        <ul className="flex items-center gap-x-sm">
          <HeroLink
            label="LinkedIn"
            href="https://linkedin.com/in/faried-idris"
            className="text-foreground-secondary"
          />
          <HeroLink
            label="Github"
            href="https://github.com/psyofrelief/frd-portfolio"
            className="text-foreground-secondary"
          />
          <HeroLink
            label="CV.pdf"
            href="/resume.pdf"
            className="text-foreground-secondary"
          />
        </ul>
      </div>
    </section>
  );
}
