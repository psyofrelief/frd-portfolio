import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";
import LiquidImageHover from "@/components/ui/LiquidImageHover";
import Tag from "@/components/ui/Tag";
import { skills, services, colophon } from "@/data/about";
import Image from "next/image";

export default function AboutPage() {
  return (
    <section className="px-xs md:pt-3xl pb-md pt-lg mb-3xl mt-nav-mobile sm:mt-nav md:min-h-screen-minus-nav  flex flex-col gap-y-xl">
      <header className="flex flex-col gap-y-sm">
        <Heading label="Info" />
        <Brief>
          Faried has a keen eye for simple, gorgeous & dynamic user interfaces.
          He specialises in using modern frameworks to create online apps that
          are accessible and performant. He brings a meticulous approach to both
          programming and user experience, having worked in branding & visual
          design.
        </Brief>
      </header>

      <div className="flex flex-1 md:flex-row flex-col-reverse gap-y-xl justify-between gap-x-md lg:gap-x-0">
        <div className="flex flex-col md:gap-y-0 gap-y-2xl justify-between flex-1">
          <div className="flex sm:flex-row flex-col gap-y-2xl justify-between lg:max-w-1/2">
            <div className="flex flex-col gap-sm">
              <Heading label="Skills" />
              <ul className="flex flex-col gap-y-xs">
                {skills.map((e) => (
                  <Tag key={Math.random()}>{e}</Tag>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-y-sm">
              <Heading label="Services" />
              <ul className="flex flex-col gap-y-xs">
                {services.map((e) => (
                  <Tag key={Math.random()}>{e}</Tag>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-y-sm w-fit">
            <Heading label="Colophon" />
            <ul className="flex flex-col gap-y-xs">
              {colophon.map((e) => (
                <Tag key={Math.random()}>{e}</Tag>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:flex hidden flex-1 max-w-[400px]">
          <LiquidImageHover
            src="/images/about.webp"
            aspect="3/4"
            autoRatio
            className="max-w-[300px] h-auto flex-1"
          />
        </div>
        <div className="flex md:hidden flex-1 ">
          <Image
            src="/images/about.webp"
            alt="Image of myself"
            height={3413}
            width={2560}
            priority
            loading="eager"
            className=" h-auto flex-1"
          />
        </div>
      </div>
    </section>
  );
}
