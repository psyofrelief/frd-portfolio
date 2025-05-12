import { cn } from "@/lib/utils";
import Heading from "./Heading";
import Tag from "./Tag";

interface Props {
  label: string;
  desc: string;
  anchor?: boolean;
}

export default function ProjectDetailTag({
  label,
  desc,
  anchor = false,
}: Props) {
  return (
    <div className="sm:flex grid grid-cols-3 gap-x-sm items-center">
      <Heading>{label}:</Heading>
      <Tag className="flex whitespace-nowrap">
        {!anchor ? (
          desc
        ) : (
          <a
            href={label}
            rel="noreferrer"
            target="_blank"
            aria-label={`Visit ${label}`}
            className="flex-1 underline whitespace-nowrap"
          >
            {desc}
          </a>
        )}
      </Tag>
    </div>
  );
}
