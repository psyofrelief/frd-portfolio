import ArrowRightIcon from "../svg/ArrowRightIcon";
import FadeUp from "./FadeUp";

interface Props {
  label: string;
  href: string;
}

export default function ContactOption({ label, href }: Props) {
  return (
    <FadeUp as={"li"} className="flex">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Contact me via ${label}`}
        className="flex-1 flex justify-between hover:px-xl transition-all text-xl sm:text-2xl gap-x-2xl items-center border-b border-b-outline py-lg"
      >
        {label}
        <ArrowRightIcon className="h-[48px] sm:h-[64px] stroke-[2px]" />
      </a>
    </FadeUp>
  );
}
