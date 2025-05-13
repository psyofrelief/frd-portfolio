import { cn } from "@/lib/utils";
import FadeIn from "./FadeIn";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Brief({ children, className }: Props) {
  return (
    <FadeIn
      as={"p"}
      className={cn(
        "text-lg md:text-xl text-current font-sans leading-[1.15em]",
        className,
      )}
    >
      {children}
    </FadeIn>
  );
}
