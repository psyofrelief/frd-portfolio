import ArrowDiagonalRight from "../svg/ArrowDiagonalRightIcon";

interface Props {
  label: string;
  href: string;
}

export default function HeroLink({ label, href }: Props) {
  return (
    <li className="flex">
      <a
        href={href}
        rel="noreferrer"
        target="_blank"
        aria-label={`View my ${label}`}
        className="flex-1 flex gap-x-xs font-mono uppercase text-foreground-secondary text-xs items-center"
      >
        {label}
        <span>
          <ArrowDiagonalRight />
        </span>
      </a>
    </li>
  );
}
