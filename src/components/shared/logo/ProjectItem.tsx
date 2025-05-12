import LiquidImageHover from "@/components/ui/LiquidImageHover";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  shortDesc: string;
  className?: string;
  aspect: string;
  img: string;
}

export default function ProjectItem({
  name,
  shortDesc,
  className,
  aspect,
  id,
  img,
}: Props) {
  return (
    <li className={cn("flex flex-col w-full", className)}>
      <LiquidImageHover src={`/images/${img}`} autoRatio />

      <div className="flex justify-between items-baseline">
        <p className="mt-2 text-xs uppercase font-mono">
          {name} — {shortDesc}
        </p>

        <Link
          href={`/works/${id}`}
          className="uppercase text-xs text-foreground-secondary font-mono"
        >
          View
        </Link>
      </div>
    </li>
  );
}
