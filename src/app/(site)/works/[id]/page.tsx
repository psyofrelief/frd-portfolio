import NextProjectSection from "@/components/sections/works/NextProjectSection";
import Heading from "@/components/ui/Heading";
import ProjectDetailTag from "@/components/ui/ProjectDetailTag";
import Tag from "@/components/ui/Tag";
import Image from "next/image";

export default function SingleWorkPage() {
  return (
    <section className="px-xs pb-xl pt-lg sm:pt-3xl flex flex-col min-h-screen-minus-nav-mobile sm:min-h-screen-minus-nav gap-y-xl">
      <div className="flex lg:flex-row flex-col justify-between gap-x-xl">
        <div className="flex flex-col ">
          <h1 className="text-lg mb-sm xs:text-xl md:text-2xl lg:row-start-1 lg:col-start-3">
            001_PathSnap
          </h1>
          <div className="lg:col-span-7 lg:col-start-3 lg:row-start-2 flex flex-col gap-y-sm">
            <Image
              className="w-full"
              height={1440}
              width={960}
              src={`/images/3.png`}
              alt={`display demo image `}
            />

            <div className="grid sm:grid-cols-2 gap-x-lg gap-y-sm  text-xs">
              <p>
                With the launch of the new Bearbrick audio, Medicom needed a
                platform that would not only talk to the unique features and
                design characteristics of the first ever Bearbrick toy speaker,
                but that would also be a reliable, easy and functional tool to
                gauge interest and sign-ups pre-launch as well as convert in
                sales post-launch. An immersive experience for a one of a kind,
                art piece audio device.
              </p>
              <p>
                With the launch of the new Bearbrick audio, Medicom needed a
                platform that would not only talk to the unique features and
                design characteristics of the first ever Bearbrick toy speaker,
                but that would also be a reliable, easy and functional tool to
                gauge interest and sign-ups pre-launch as well as convert in
                sales post-launch. An immersive experience for a one of a kind,
                art piece audio device.
              </p>
            </div>
          </div>
        </div>
        <div className="flex mt-[104px] lg:justify-start flex-col  sm:flex-row  min-w-fit  justify-between sm:items-start   lg:flex-col lg:gap-y-xl gap-y-md lg:row-start-2">
          <ul className="flex flex-col sm:size-fit gap-y-1 uppercase">
            <ProjectDetailTag label="Type" desc="Link Shortener" />
            <ProjectDetailTag label="Year" desc="2025" />
            <ProjectDetailTag label="Website" desc="www.p-s.co" anchor />
            <ProjectDetailTag
              label="Source"
              desc="github.com/psyofrelief/pathsnap"
              anchor
            />
          </ul>
          <div className=" flex-col w-fit grid project_detail_tag  gap-x-sm gap-y-xs ">
            <Heading>Tech Stack:</Heading>
            <ul className="grid gap-x-sm sm:flex flex-col gap-y-1 uppercase text-xs font-mono">
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-xs">
        <Image
          className="w-full"
          height={1440}
          width={960}
          src={`/images/3.png`}
          alt={`display demo image `}
        />
        <Image
          className="w-full"
          height={1440}
          width={960}
          src={`/images/3.png`}
          alt={`display demo image `}
        />
        <Image
          className="w-full"
          height={1440}
          width={960}
          src={`/images/3.png`}
          alt={`display demo image `}
        />
        <Image
          className="w-full"
          height={1440}
          width={960}
          src={`/images/3.png`}
          alt={`display demo image `}
        />
      </div>
      <NextProjectSection />
    </section>
  );
}
