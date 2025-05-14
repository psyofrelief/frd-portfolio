import ProjectItem from "@/components/shared/logo/ProjectItem";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Link from "next/link";
import { projectItems } from "@/data/projects";

export default function FeaturedProjectsSection() {
  const featured = projectItems.filter((p) => p.featured).slice(0, 3);

  return (
    <section
      id="featured-projects"
      className="min-h-screen px-xs py-2xl flex flex-col gap-y-lg "
    >
      <Heading label={`Featured Projects (${featured.length})`} />

      <ul className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-x-2xl gap-y-xl sm:gap-y-[300px]">
        <ProjectItem {...featured[0]} />
        <ProjectItem {...featured[1]} />
        <ProjectItem
          {...featured[2]}
          className="w-full max-w-[700px] col-span-1 sm:col-span-2 mx-auto"
        />
      </ul>

      <div className="mx-auto mb-[200px] sm:mb-[400px] sm:mt-0 mt-2xl flex justify-center sm:justify-end">
        <Link href="/works">
          <Button>All Works</Button>
        </Link>
      </div>
    </section>
  );
}
