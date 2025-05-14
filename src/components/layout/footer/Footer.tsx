"use client";
import { footerData } from "@/data/footer";
import FooterLink from "./FooterLink";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Link from "next/link";
import LogoVertical from "@/components/shared/logo/LogoVertical";

export default function Footer() {
  return (
    <footer className="flex flex-col   mix-blend-difference border-t border-t-outline text-light px-xs pb-xs pt-sm sm:min-h-screen-minus-nav justify-between">
      <div className="flex flex-1 lg:flex-row flex-col sm:justify-start lg:justify-between gap-x-lg lg:gap-y-0 sm:gap-y-md gap-y-xl">
        <p className="uppercase font-mono text-xs lg:max-w-[490px]">
          Why don't you contact us now that you're here? Look around; you'll
          find my email address and social media accounts. If you'd want to work
          together or have a great idea, please send me a note; I'd be delighted
          to hear it!
        </p>

        <div className="md:flex justify-between lg:justify-start  hidden sm:grid grid-cols-2 grid-rows-2 gap-y-xs gap-x-lg lg:gap-x-2xl">
          <div className="flex flex-col whitespace-nowrap">
            <p className="flex w-fit font-bold text-xs">Faried Idris</p>
            <p className="flex w-fit font-bold text-xs">© 2003 - 2025</p>
          </div>
          {footerData.map((e) => (
            <div key={Math.random()} className="flex flex-col">
              {e.links.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="sm:hidden grid grid-cols-2 justify-between flex-1">
          <div className="w-fit flex flex-col gap-y-md">
            {footerData.map((e) => (
              <div key={Math.random()} className="flex flex-col">
                {e.links.map((link) => (
                  <FooterLink
                    key={link.label}
                    href={link.href}
                    label={link.label}
                  />
                ))}
              </div>
            ))}
            <div className="flex flex-col whitespace-nowrap mt-auto pt-xl">
              <p className="flex w-fit font-bold text-xs">Faried Idris</p>
              <p className="flex w-fit font-bold text-xs">© 2003 - 2025</p>
            </div>
          </div>

          <LogoVertical />
        </div>
      </div>

      <Link href={"/"} className="sm:flex hidden">
        <LiquidImageHover />
      </Link>
    </footer>
  );
}
