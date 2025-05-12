import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import Link from "next/link";

interface Props {
  className?: string;
}
export default function Navbar({ className }: Props) {
  return (
    <nav
      className={cn(
        "z-[99] mix-blend-difference flex py-xs text-xs justify-between text-light",
        className,
      )}
    >
      <Link href={"/"} className="uppercase font-mono">
        Faried Idris — 12:48PM
      </Link>
      <p className="md:block hidden text-xs font-bold">
        Full stack web developer based in Australia
      </p>
      <ul className="flex sm:flex-row flex-col gap-y-xs gap-x-sm">
        <NavLink label="about" href="/about" />
        <NavLink label="works" href="/works" />
        <NavLink label="contact" href="/contact" />
      </ul>
    </nav>
  );
}
