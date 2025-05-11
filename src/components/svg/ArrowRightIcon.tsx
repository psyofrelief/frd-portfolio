import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export default function ArrowRightIcon({ className }: Props) {
  return (
    <svg
      width="57"
      height="49"
      viewBox="0 0 57 49"
      className={cn("h-[12px] stroke-[4px] w-fit stroke-current", className)}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.41478 24.5454L55.6514 24.5454"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.4637 1.84087L55.6514 24.5454L33.4637 47.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
