import { cn } from "@/lib/utils";
import ArrowDiagonalRight from "../svg/ArrowDiagonalRightIcon";

interface Props {
  label: string;
  href: string;
  className?: string;
}

export default function HeroLink({ label, href, className }: Props) {
  return (
    <li className="flex">
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        aria-label={`View my ${label}`}
        className={cn(
          "flex-1 flex gap-x-xs font-mono uppercase text-foreground-secondary  text-xs items-center",
          className,
        )}
      >
        {label}
        <span>
          <ArrowDiagonalRight />
        </span>
      </a>
    </li>
  );
}
