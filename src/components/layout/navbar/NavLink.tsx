import Link from "next/link";

interface Props {
  label: string;
  href: string;
}

export default function NavLink({ label, href }: Props) {
  return (
    <li className="flex">
      <Link className="font-mono uppercase flex-1" href={href}>
        {label}
      </Link>
    </li>
  );
}
