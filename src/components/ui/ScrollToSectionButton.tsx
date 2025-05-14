import { useScroll } from "@/hooks/useScroll";
import FlipText from "./FlipText";

export default function ScrollToSectionButton() {
  const scrollTo = useScroll();
  return (
    <>
      <button
        type="button"
        className="font-mono  sm:flex hidden whitespace-nowrap text-xs text-light"
        onClick={() => scrollTo("featured-projects")}
      >
        [<FlipText>SCROLL TO SEE MORE</FlipText>]
      </button>

      <button
        type="button"
        className="font-mono sm:hidden flex whitespace-nowrap text-xs text-light"
        onClick={() => scrollTo("featured-projects")}
      >
        [<FlipText>SCROLL</FlipText>]
      </button>
    </>
  );
}
