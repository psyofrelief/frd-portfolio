import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className }: Props) {
  return (
    <button
      className={cn(
        "flex items-center gap-x-xs uppercase whitespace-nowrap px-xs py-1 font-mono text-xs bg-foreground text-background flex-1",
        className,
      )}
    >
      {children}
    </button>
  );
}
