import NextProjectSection from "@/components/sections/works/NextProjectSection";
import Heading from "@/components/ui/Heading";
import ProjectDetailTag from "@/components/ui/ProjectDetailTag";
import Tag from "@/components/ui/Tag";
import Image from "next/image";

export default function SingleWorkPage() {
  return (
    <section className="px-xs pb-xl pt-3xl flex flex-col min-h-screen-minus-nav gap-y-xl">
      <div className="project_intro_grid grid grid-cols-8">
        <h1 className="text-2xl row-start-1 col-start-3">001_PathSnap</h1>
        <div className="flex flex-col gap-y-sm row-start-2">
          <ul className="flex flex-col gap-y-1 uppercase text-xs font-mono">
            <ProjectDetailTag label="Type" desc="Link Shortener" />
            <ProjectDetailTag label="Year" desc="2025" />
            <ProjectDetailTag label="Website" desc="www.p-s.co" anchor />
            <ProjectDetailTag
              label="Source"
              desc="github.com/psyofrelief/pathsnap"
              anchor
            />
          </ul>
          <div className="flex flex-col gap-y-sm">
            <Heading>Tech Stack</Heading>
            <ul className="flex flex-col gap-y-1 uppercase text-xs font-mono">
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
              <Tag>Javascript</Tag>
            </ul>
          </div>
        </div>

        <div className="col-span-7 col-start-3 row-start-2 flex flex-col gap-y-sm">
          <Image
            className="w-full"
            height={1440}
            width={960}
            src={`/images/3.png`}
            alt={`display demo image `}
          />

          <div className="grid grid-cols-2 gap-x-lg text-xs">
            <p>
              With the launch of the new Bearbrick audio, Medicom needed a
              platform that would not only talk to the unique features and
              design characteristics of the first ever Bearbrick toy speaker,
              but that would also be a reliable, easy and functional tool to
              gauge interest and sign-ups pre-launch as well as convert in sales
              post-launch. An immersive experience for a one of a kind, art
              piece audio device.
            </p>
            <p>
              With the launch of the new Bearbrick audio, Medicom needed a
              platform that would not only talk to the unique features and
              design characteristics of the first ever Bearbrick toy speaker,
              but that would also be a reliable, easy and functional tool to
              gauge interest and sign-ups pre-launch as well as convert in sales
              post-launch. An immersive experience for a one of a kind, art
              piece audio device.
            </p>
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
