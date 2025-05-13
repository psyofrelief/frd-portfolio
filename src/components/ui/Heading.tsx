import TypeText from "./TypeText";

interface Props {
  label: string;
}

export default function Heading({ label }: Props) {
  return (
    <TypeText
      text={`${label}`}
      className="uppercase font-mono text-xs w-fit text-foreground-secondary whitespace-nowrap"
    />
  );
}
