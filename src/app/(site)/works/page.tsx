import ProjectItem from "@/components/shared/logo/ProjectItem";
import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";

export default function WorksPage() {
  return (
    <section className="min-h-screen px-xs pt-3xl pb-[250px] flex flex-col gap-y-lg">
      <header className="flex flex-col gap-y-sm">
        <Heading>All Works (06)</Heading>
        <Brief>
          A collection of digital projects built with clarity, intention, and
          craft.
        </Brief>
      </header>

      <div className="grid grid-cols-2 grid-rows-2 gap-x-2xl gap-y-[300px]">
        <ProjectItem {...featuredProjects[0]} />
        <ProjectItem {...featuredProjects[1]} />

        {/* Bottom row: project + "More Projects" button */}
        <div className="col-span-2 flex w-fit max-w-[1000px] mx-auto gap-x-[200px] justify-between max-h-fit items-end">
          <ProjectItem
            {...featuredProjects[2]}
            className="w-fit max-w-[600px]"
          />
        </div>
      </div>
      <div className="flex justify-between   w-full col-span-2">
        <ProjectItem {...featuredProjects[1]} className="max-w-[400px]" />

        <ProjectItem {...featuredProjects[0]} className="w-fit" />
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
