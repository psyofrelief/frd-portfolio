import ProjectItem from "@/components/shared/logo/ProjectItem";
import Heading from "@/components/ui/Heading";

export default function FeaturedProjectsSection() {
  return (
    <section className="min-h-screen px-xs py-2xl flex flex-col gap-y-lg">
      <Heading>Featured Projects (03)</Heading>

      <div className="grid grid-cols-2 grid-rows-2 gap-x-2xl gap-y-[300px]">
        {/* Top-left project */}
        <ProjectItem {...featuredProjects[0]} />
        {/* Top-right project */}
        <ProjectItem {...featuredProjects[1]} />

        {/* Bottom row: project + "More Projects" button */}
        <div className="col-span-2 flex w-fit max-w-[1000px] mx-auto gap-x-[200px] justify-between max-h-fit items-end">
          <ProjectItem
            {...featuredProjects[2]}
            className="w-fit max-w-[600px]"
          />

          {/* Bottom-right “More Projects” */}
          <div className="flex justify-end w-fit">
            <button className="uppercase font-mono text-xs bg-dark text-foreground-inverted px-xs py-1">
              All Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const featuredProjects = [
  {
    id: "alpha",
    name: "Project Alpha",
    shortDesc: "Soundscapes Portfolio",
    aspect: "4/3",
    className: "w-4/5",
    img: "1.png",
  },
  {
    id: "beta",
    name: "Project Beta",
    shortDesc: "Craft + Culture",
    aspect: "2/3",
    className: "w-3/4 justify-self-end",
    img: "2.png",
  },
  {
    id: "gamma",
    name: "Project Gamma",
    shortDesc: "Visual Identity",
    aspect: "4/3",
    className: "w-1/3 justify-self-start",
    img: "3.png",
  },
];
