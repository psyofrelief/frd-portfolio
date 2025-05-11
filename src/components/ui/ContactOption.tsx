import ArrowRightIcon from "../svg/ArrowRightIcon";

interface Props {
  label: string;
  href: string;
}

export default function ContactOption({ label, href }: Props) {
  return (
    <li className="flex">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`Contact me via ${label}`}
        className="flex-1 flex justify-between text-2xl gap-x-2xl items-center border-b border-b-outline py-lg"
      >
        {label}
        <ArrowRightIcon className="h-[64px] stroke-[3px]" />
      </a>
    </li>
  );
}
