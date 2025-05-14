"use client";
import { projectItems } from "@/data/projects";
import Heading from "@/components/ui/Heading";
import Link from "next/link";

export default function NextProjectSection({
  currentId,
}: {
  currentId: string;
}) {
  const currentIndex = projectItems.findIndex((p) => p.id === currentId);
  if (currentIndex === -1) return null;

  const nextProject = projectItems[(currentIndex + 1) % projectItems.length];

  if (!nextProject) return null;

  return (
    <section className="flex flex-col min-h-[400px] sm:min-h-[800px] justify-between items-center p-xs border-t border-t-dark">
      <div className="flex justify-between items-center w-full">
        <Link href={nextProject.id}>
          <Heading label="Works" />
        </Link>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-xs uppercase"
        >
          Back to top
        </button>
      </div>
      <div className="flex flex-col">
        <Heading label="Next Project" />
        <Link href={`/works/${nextProject.id}`}>
          <p className="text-lg sm:text-xl md:text-2xl">
            00{nextProject.idx}_{nextProject.name}
          </p>
        </Link>
      </div>
      <div className="h-[16px]" />
    </section>
  );
}
