"use client";

import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import Brief from "@/components/ui/Brief";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
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
      className="px-xs py-sm flex flex-col lg:grid grid-cols-2 grid-rows-1 flex-col gap-y-xl gap-x-md pb-[100px] md:pb-[400px]"
    >
      <div className="flex flex-col gap-y-xl">
        <header className="flex flex-col gap-y-xs">
          <Heading>What I Do</Heading>
          <Brief>Design, branding, prototyping and build</Brief>
        </header>

        <LiquidImageHover src="/images/3.png" className="max-w-full" />
      </div>

      <div className="flex flex-col gap-y-md max-w-fit mx-auto mt-auto">
        <p className="uppercase font-mono max-w-[650px]">
          Enthusiastic about graphic design, typography, and the dynamic areas
          of motion and web-based animations. Specialised in translating brands
          into unique and immersive digital user experiences.
        </p>
        <ul className="flex flex-col gap-y-xs">
          <li className="flex">
            <Link
              href={"/about"}
              className="font-mono text-xs uppercase text-foreground-secondary"
            >
              Learn more
            </Link>
          </li>
          <li className="flex size-fit">
            <Link href={"/contact"} className="flex">
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
