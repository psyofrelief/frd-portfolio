import { cn } from "@/lib/utils";
import NavLink from "./NavLink";
import Link from "next/link";
import PerthClock from "@/components/ui/PerthClock";

interface Props {
  className?: string;
}
export default function Navbar({ className }: Props) {
  return (
    <nav
      className={cn(
        "z-[99] mix-blend-difference flex text-xs justify-between text-light fixed top-0 left-0 right-0 w-full p-xs",
        className,
      )}
    >
      <Link href={"/"} className="uppercase font-mono">
        Faried_Idris — <PerthClock /> | Perth, WA
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
