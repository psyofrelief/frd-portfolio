import ArrowRightIcon from "@/components/svg/ArrowRightIcon";
import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function SummarySection() {
  return (
    <section className="px-xs py-sm flex flex-col min-h-screen-minus-nav">
      <header className="flex flex-col gap-y-xs">
        <Heading>What I Do</Heading>
        <Brief>Design, branding, prototyping and build</Brief>
      </header>

      <div className="flex flex-col gap-y-md max-w-fit mx-auto my-auto">
        <p className="uppercase font-mono max-w-[650px]">
          Enthusiastic about graphic design, typography, and the dynamic areas
          of motion and web-based animations. Specialised in translating brands
          into unique and immersive digital user experiences.
        </p>
        <ul className="flex flex-col gap-y-xs">
          <li className="flex">
            <Link
              href={"/about"}
              className="flex-1 font-mono text-xs uppercase text-foreground-secondary"
            >
              Learn more
            </Link>
          </li>
          <li className="flex size-fit">
            <Link
              href={"/about"}
              className="flex-1 bg-background-inverted px-xs py-1 h-fit text-foreground-inverted flex items-center gap-x-xs font-mono text-xs uppercase"
            >
              Get in touch
              <ArrowRightIcon />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
