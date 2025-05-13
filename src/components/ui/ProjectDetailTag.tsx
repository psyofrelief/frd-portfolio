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
    <div className="project_detail_tag grid gap-x-sm items-center">
      <Heading label={`${label}:`} />
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
