import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";
import Tag from "@/components/ui/Tag";
import { skills, services, colophon } from "@/data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="px-xs py-2xl min-h-screen-minus-nav  flex flex-col gap-y-xl">
      <header className="flex flex-col gap-y-sm">
        <Heading>Info</Heading>
        <Brief>
          Faried is a designer and art director focused on brand identity and
          design systems. He has experience working with clients including Nike,
          Netflix, Google, Electronic Arts and Samsung, at design studios based
          in New York, San Francisco and Stockholm.
        </Brief>
      </header>

      <div className="flex justify-between">
        <div className="flex flex-col justify-between flex-1">
          <div className="flex justify-between max-w-1/2">
            <div className="flex flex-col gap-y-sm">
              <Heading>Skills</Heading>
              <ul className="flex flex-col gap-y-xs">
                {skills.map((e) => (
                  <Tag key={Math.random()}>{e}</Tag>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-sm">
              <Heading>Services</Heading>
              <ul className="flex flex-col gap-y-xs">
                {services.map((e) => (
                  <Tag key={Math.random()}>{e}</Tag>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-sm">
            <Heading>Colophon</Heading>
            <ul className="flex flex-col gap-y-xs">
              {colophon.map((e) => (
                <Tag key={Math.random()}>{e}</Tag>
              ))}
            </ul>
          </div>
        </div>
        <Image
          className="w-fit  max-w-[300px]"
          height={1440}
          width={960}
          src={`/images/2.png`}
          alt={`display demo image `}
        />
      </div>
    </section>
  );
}
