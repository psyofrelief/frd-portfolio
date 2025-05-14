import ProjectItem from "@/components/shared/logo/ProjectItem";
import Brief from "@/components/ui/Brief";
import Heading from "@/components/ui/Heading";
import { projectItems } from "@/data/projects";

export default function WorksPage() {
  return (
    <section className="min-h-screen px-xs sm:pt-3xl pt-lg pb-3xl sm:pb-[250px] flex flex-col gap-y-xl">
      <header className="flex flex-col gap-y-sm">
        <Heading label="All Works (05)" />
        <Brief>
          A collection of digital projects built with clarity, intention, and
          craft.
        </Brief>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 gap-x-2xl gap-y-xl sm:gap-y-[300px]">
        <ProjectItem {...projectItems[0]} />
        <ProjectItem {...projectItems[1]} />

        <ProjectItem
          {...projectItems[2]}
          className="w-full max-w-[700px] col-span-2 mx-auto"
        />

        <ProjectItem {...projectItems[3]} className="sm:hidden" />

        <ProjectItem {...projectItems[4]} className="sm:hidden" />
      </div>
      <div className="sm:flex md:flex-row flex-col gap-y-[200px] lg:mt-0 mt-[300px] hidden justify-between  w-full col-span-2 gap-lg">
        <ProjectItem {...projectItems[3]} />

        <ProjectItem {...projectItems[4]} className="max-w-[420px]" />
      </div>
    </section>
  );
}
