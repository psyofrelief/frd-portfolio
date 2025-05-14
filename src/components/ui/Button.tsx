import { cn } from "@/lib/utils";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Button({ children, className, ...props }: Props) {
  return (
    <button
      className={cn(
        "flex items-center gap-x-xs uppercase whitespace-nowrap px-xs py-1 font-mono text-xs bg-foreground text-background flex-1",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
