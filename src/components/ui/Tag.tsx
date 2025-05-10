import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, className }: Props) {
  return (
    <li
      className={cn(
        "text-xs uppercase font-mono text-current leading-none",
        className,
      )}
    >
      {children}
    </li>
  );
}
