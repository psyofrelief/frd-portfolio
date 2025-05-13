import ProjectItem from "@/components/shared/logo/ProjectItem";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function FeaturedProjectsSection() {
  return (
    <section className="min-h-screen px-xs py-2xl flex flex-col gap-y-lg">
      <Heading label="Featured Projects (03)" />

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-x-2xl gap-y-xl sm:gap-y-[300px]">
        <ProjectItem {...featuredProjects[0]} />
        <ProjectItem {...featuredProjects[1]} />

        <ProjectItem
          {...featuredProjects[2]}
          className="w-full max-w-[700px] col-span-1 sm:col-span-2 mx-auto"
        />
      </div>

      {/* CTA */}
      <div className=" mx-auto mb-[200px] sm:mb-[400px] sm:mt-0 mt-2xl flex justify-center sm:justify-end">
        <Link href="/works">
          <Button>All Works</Button>
        </Link>
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
    imgMobile: "3.png",
  },
  {
    idx: 2,
    id: "beta",
    name: "Project Beta",
    shortDesc: "Craft + Culture",
    aspect: "2/3",
    className: "w-3/4 justify-self-end",
    img: "2.png",
    imgMobile: "3.png",
  },
  {
    idx: 3,
    id: "gamma",
    name: "Project Gamma",
    shortDesc: "Visual Identity",
    aspect: "16/9",
    className: "w-1/3 justify-self-start",
    img: "3.png",
    imgMobile: "3.png",
  },
];
