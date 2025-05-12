export default function ScrollToSectionButton() {
  return (
    <>
      <button
        type="button"
        className="font-mono sm:block hidden whitespace-nowrap text-xs text-light"
      >
        [SCROLL TO SEE MORE]
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
