import FlipText from "./FlipText";

export default function ScrollToSectionButton() {
  return (
    <>
      <button
        type="button"
        className="font-mono  sm:flex hidden whitespace-nowrap text-xs text-light"
      >
        [<FlipText>SCROLL TO SEE MORE</FlipText>]
      </button>

      <button
        type="button"
        className="font-mono sm:hidden block whitespace-nowrap text-xs text-light"
      >
        [SCROLL]
      </button>
    </>
  );
}
