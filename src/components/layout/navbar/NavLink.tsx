import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: Props) {
  return (
    <li className="flex z-[99]">
      <Link className="font-mono uppercase flex-1" href={href}>
        {label}
      </Link>
    </li>
  );
}
