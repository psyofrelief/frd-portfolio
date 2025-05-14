import Heading from "./Heading";
import Tag from "./Tag";

interface Props {
  label: string;
  desc: string | null;
  anchor?: boolean;
}

export default function ProjectDetailTag({
  label,
  desc,
  anchor = false,
}: Props) {
  return (
    <li className="project_detail_tag grid gap-x-sm items-center">
      <Heading label={`${label}:`} />
      <div className="flex whitespace-nowrap text-xs uppercase font-mono text-current leading-none">
        {anchor && desc ? (
          <a
            href={desc}
            rel="noreferrer"
            target="_blank"
            aria-label={`Visit ${label}`}
            className="flex-1 underline whitespace-nowrap"
          >
            {desc}
          </a>
        ) : (
          desc || (
            <span className="line-through text-foreground-secondary">null</span>
          )
        )}
      </div>
    </li>
  );
}
