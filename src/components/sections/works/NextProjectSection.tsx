import Heading from "@/components/ui/Heading";

export default function NextProjectSection() {
  return (
    <section className="flex flex-col min-h-[400px] sm:min-h-[800px] justify-between items-center p-xs border-t border-t-dark">
      <div className="flex justify-between items-center w-full">
        <Heading>Works</Heading>
        <button className="font-mono text-xs uppercase">Back to top</button>
      </div>
      <div className="flex flex-col">
        <h3 className="uppercase font-mono text-xs text-foreground-secondary">
          Next project
        </h3>
        <p className="text-lg sm:text-xl md:text-2xl">002_Scantek</p>
      </div>
      <div className="h-[16px]" />
    </section>
  );
}
