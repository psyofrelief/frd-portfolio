import ProjectItem from "@/components/shared/logo/ProjectItem";
import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";

export default function WorksPage() {
  return (
    <section className="min-h-screen px-xs sm:pt-3xl pt-lg pb-3xl sm:pb-[250px] flex flex-col gap-y-lg">
      <header className="flex flex-col gap-y-sm">
        <Heading>All Works (06)</Heading>
        <Brief>
          A collection of digital projects built with clarity, intention, and
          craft.
        </Brief>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-x-2xl gap-y-xl sm:gap-y-[300px]">
        <ProjectItem {...featuredProjects[0]} />
        <ProjectItem {...featuredProjects[1]} />

        {/* Bottom row: project + "More Projects" button */}
        <ProjectItem
          {...featuredProjects[2]}
          className="w-full max-w-[700px] col-span-2 mx-auto"
        />

        <ProjectItem {...featuredProjects[1]} className="sm:hidden" />

        <ProjectItem {...featuredProjects[0]} className="sm:hidden" />
      </div>
      <div className="sm:flex md:flex-row flex-col gap-y-[200px] lg:mt-0 mt-[300px] hidden justify-between  w-full col-span-2 gap-lg">
        <ProjectItem {...featuredProjects[1]} className="max-w-fit " />

        <ProjectItem {...featuredProjects[0]} className="max-w-[420px]" />
      </div>
    </section>
  );
}

const featuredProjects = [
  {
    idx: 1,
    id: "alpha",
    name: "Project Alpha",
    shortDesc: "Soundscapes Portfolio",
    aspect: "4/3",
    className: "w-4/5",
    img: "1.png",
    imgMobile: "1.png",
  },
  {
    idx: 2,
    id: "beta",
    name: "Project Beta",
    shortDesc: "Craft + Culture",
    aspect: "2/3",
    className: "w-3/4 justify-self-end",
    img: "2.png",
    imgMobile: "1.png",
  },
  {
    idx: 3,
    id: "gamma",
    name: "Project Gamma",
    shortDesc: "Visual Identity",
    aspect: "4/3",
    className: "w-1/3 justify-self-start",
    img: "3.png",
    imgMobile: "1.png",
  },
];
