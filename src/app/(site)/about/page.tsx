import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";
import Tag from "@/components/ui/Tag";
import { skills, services, colophon } from "@/data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="px-xs md:pt-3xl pb-md pt-lg mb-3xl  min-h-screen-minus-nav  flex flex-col gap-y-xl">
      <header className="flex flex-col gap-y-sm">
        <Heading>Info</Heading>
        <Brief>
          Faried is a designer and art director focused on brand identity and
          design systems. He has experience working with clients including Nike,
          Netflix, Google, Electronic Arts and Samsung, at design studios based
          in New York, San Francisco and Stockholm.
        </Brief>
      </header>

      <div className="flex flex-1 md:flex-row flex-col-reverse gap-y-xl justify-between">
        <div className="flex flex-col md:gap-y-0 gap-y-2xl justify-between flex-1">
          <div className="flex justify-between md:max-w-1/2">
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
          className="w-full md:w-fit md:max-w-[300px] max-w-full"
          height={1440}
          width={960}
          src={`/images/2.png`}
          alt={`display demo image `}
        />
      </div>
    </section>
  );
}
