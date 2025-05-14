"use client";
import FadeUp from "@/components/ui/FadeUp";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
  id: string;
  idx: number;
  name: string;
  shortDesc: string;
  className?: string;
  aspect: string;
  coverImg: string;
  coverImgMobile: string;
}

export default function ProjectItem({
  name,
  shortDesc,
  className,
  aspect,
  id,
  idx,
  coverImg,
  coverImgMobile,
}: Props) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <>
      <FadeUp
        as={"li"}
        className={cn(
          "sm:flex hidden flex-col w-full relative overflow-clip",
          className,
        )}
      >
        <div
          className={cn(" w-full relative bg-gray-300", `aspect-[${aspect}]`)}
        >
          <LiquidImageHover
            src={coverImg}
            autoRatio
            aspect={aspect}
            className="absolute inset-0"
          />

          <Image src={coverImg} width={1000} height={720} alt="s" />
        </div>

        <div className="flex justify-between items-baseline">
          <p className="mt-2 text-xs uppercase font-mono">
            {`00${idx}_${name}`} — {shortDesc}
          </p>

          <Link
            href={`/works/${id}`}
            className="uppercase text-xs text-foreground-secondary font-mono"
          >
            View
          </Link>
        </div>
      </FadeUp>
      {isMobile && (
        <FadeUp as="div" className="flex flex-col w-full relative sm:hidden">
          <Link href={`/works/${id}`}>
            <Image
              loading={idx === 1 || idx === 2 ? "eager" : "lazy"}
              priority={idx === 1 || idx === 2}
              src={coverImgMobile}
              width={1000}
              height={720}
              alt="s"
            />
          </Link>
          <div className="flex justify-between items-baseline">
            <p className="mt-2 text-xs uppercase font-mono">{`00${idx}_${name}`}</p>
            <p className="mt-2 text-xs uppercase font-mono">{shortDesc}</p>
          </div>
        </FadeUp>
      )}
    </>
  );
}
