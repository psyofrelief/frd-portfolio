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
    <li className={cn("flex flex-col ", className)}>
      {/*<div className={`w-full aspect-[${aspect}] bg-black/10`} />*/}
      <Image
        className=""
        height={1000}
        width={1000}
        src={`/images/${img}`}
        alt={`${name}'s display demo image`}
      />

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
