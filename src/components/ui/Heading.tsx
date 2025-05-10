interface Props {
  children: React.ReactNode;
}

export default function Heading({ children }: Props) {
  return (
    <h1 className="uppercase font-mono text-xs w-fit text-foreground-secondary">
      {children}
    </h1>
  );
}
