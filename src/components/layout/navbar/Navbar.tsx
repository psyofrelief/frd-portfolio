import NavLink from "./NavLink";

export default function Navbar() {
  return (
    <nav className="w-full flex px-md py-xs text-xs justify-between">
      <p className="uppercase font-mono">Faried Idris — 12:48PM</p>
      <p className="text-xs font-bold">
        Full stack web developer based in Australia
      </p>
      <ul className="flex gap-x-sm">
        <NavLink label="about" href="/about" />
        <NavLink label="works" href="/works" />
        <NavLink label="contact" href="/contact" />
      </ul>
    </nav>
  );
}
