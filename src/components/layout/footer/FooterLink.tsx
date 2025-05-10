import Link from "next/link";

interface Props {
  label: string;
  href: string;
  anchor?: boolean;
}

export default function FooterLink({ label, href, anchor = false }: Props) {
  return (
    <li className="flex w-fit font-bold text-xs">
      {anchor ? (
        <a
          rel="noreferrer"
          target="_blank"
          aria-label={`Visit ${label}`}
          href={href}
          className="flex-1"
        >
          {label}
        </a>
      ) : (
        <Link href={href} className="flex-1">
          {label}
        </Link>
      )}
    </li>
  );
}
