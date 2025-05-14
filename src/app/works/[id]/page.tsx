import NextProjectSection from "@/components/sections/works/NextProjectSection";
import FadeIn from "@/components/ui/FadeIn";
import Heading from "@/components/ui/Heading";
import ProjectDetailTag from "@/components/ui/ProjectDetailTag";
import Tag from "@/components/ui/Tag";
import { projectItems } from "@/data/projects";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function SingleWorkPage({ params }: { params: { id: string } }) {
  const project = projectItems.find((p) => p.id === params.id);
  if (!project) return notFound();

  return (
    <>
      <section className="px-xs pb-xl pt-nav-mobile mt-nav-mobile sm:mt-nav sm:pt-3xl flex flex-col min-h-screen-minus-nav-mobile sm:min-h-screen-minus-nav gap-y-xl">
        <div className="flex lg:flex-row-reverse flex-col justify-between gap-x-xl">
          <div className="flex flex-col">
            <h1 className="text-lg mb-sm xs:text-xl md:text-2xl lg:row-start-1 lg:col-start-3">
              00{project.idx}_{project.name}
            </h1>
            <div className="lg:col-span-7 lg:col-start-3 lg:row-start-2 flex flex-col gap-y-sm">
              <Image
                className="w-full"
                height={1440}
                loading="eager"
                priority
                width={960}
                src={project.coverImgMobile}
                alt={project.name}
              />
              <div className="grid sm:grid-cols-2 gap-x-lg gap-y-sm text-xs">
                <p>{project.paragraph1}</p>
                <p>{project.paragraph2}</p>
              </div>
            </div>
          </div>
          <div className="flex mt-[104px] lg:justify-start flex-col sm:flex-row min-w-fit justify-between sm:items-start lg:flex-col lg:gap-y-xl gap-y-md lg:row-start-2">
            <ul className="flex flex-col sm:size-fit gap-y-1 uppercase">
              <ProjectDetailTag label="Type" desc={project.type} />
              <ProjectDetailTag label="Year" desc={project.year} />
              <ProjectDetailTag label="Website" desc={project.website} anchor />
              <ProjectDetailTag label="Source" desc={project.source} anchor />
            </ul>
            <div className="flex-col w-fit grid project_detail_tag gap-x-sm gap-y-xs">
              <Heading label="Tech Stack:" />
              <ul className="grid gap-x-sm sm:flex flex-col gap-y-1 uppercase text-xs font-mono">
                {project.techStack.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-y-sm">
          {[1, 2, 3, 4].map((_, i) => (
            <FadeIn key={i} className="flex">
              <Image
                className="w-full"
                height={1440}
                width={960}
                src={`${project.gallerySrc}/${i + 1}.webp`}
                alt={`${project.name} image ${i + 1}`}
              />
            </FadeIn>
          ))}
        </div>
      </section>

      <NextProjectSection currentId={project.id} />
    </>
  );
}
