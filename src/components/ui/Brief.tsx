import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Brief({ children, className }: Props) {
  return (
    <p className={cn("text-xl text-current font-sans", className)}>
      {children}
    </p>
  );
}
