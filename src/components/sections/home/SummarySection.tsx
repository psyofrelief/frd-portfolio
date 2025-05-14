"use client";

import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import Brief from "@/components/ui/Brief";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function SummarySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isAbove = entry.boundingClientRect.top > 0;

        if (!entry.isIntersecting && isAbove) {
          document.documentElement.removeAttribute("data-theme");
        } else {
          document.documentElement.setAttribute("data-theme", "dark");
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-30% 0px 0px 0px",
      },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="px-xs py-sm flex flex-col lg:grid grid-cols-2 grid-rows-1 gap-y-xl gap-x-md pb-[100px] md:pb-[400px]"
    >
      <div className="flex flex-col gap-y-xl">
        <header className="flex flex-col gap-y-xs">
          <Heading label="What I Do" />
          <Brief>Development, branding, and build</Brief>
        </header>

        <div className="md:flex hidden flex-1">
          <LiquidImageHover
            src="/images/summary.webp"
            aspect="3/4"
            autoRatio
            className="max-w-[300px] h-auto flex-1"
          />
        </div>
        <div className="flex md:hidden flex-1 ">
          <Image
            src="/images/summary.webp"
            alt="Image of myself"
            height={3413}
            width={2560}
            className=" h-auto flex-1"
          />
        </div>
      </div>

      <div className="flex flex-col gap-y-md max-w-fit mx-auto mt-auto">
        <p className="uppercase font-mono max-w-[650px]">
          Enthusiastic full stack developer with a keen sense of motion, design,
          and interactive web content. I like creating user-friendly, fast
          interfaces and converting intricate concepts into clear, useful code.
          I'm devoted to creating gorgeous digital works that skilfully combine
          development & design.
        </p>
        <ul className="flex flex-col gap-y-sm">
          <li className="flex">
            <Link
              href={"/about"}
              className="font-mono text-xs uppercase text-foreground-secondary"
            >
              Learn more
            </Link>
          </li>
          <li className="flex size-fit">
            <Link href={"/contact"} className="flex flex-1">
              <Button>
                Get in touch
                <ArrowRightIcon />
              </Button>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
