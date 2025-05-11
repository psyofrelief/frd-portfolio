import ContactOption from "@/components/ui/ContactOption";
import Heading from "@/components/ui/Heading";
import HeroLink from "@/components/ui/HeroLink";

export default function ContactPage() {
  return (
    <section className="px-xs py-xl min-h-screen-minus-nav items-center justify-center flex flex-col">
      <div className="flex flex-col gap-y-xl">
        <div className="flex justify-between items-center">
          <Heading>We're almost connected</Heading>
          <ul className="flex gap-md items-center">
            <HeroLink
              label="LinkedIn"
              href="https://linkedin.com/in/faried-idris"
            />
            <HeroLink
              label="Github"
              href="https://github.com/psyofrelief/frd-portfolio"
            />
          </ul>
        </div>

        <ul className="flex flex-col min-w-[800px]">
          <ContactOption label="Email" href="mailto:6faried@gmail.com" />
          <ContactOption label="Phone" href="tel:+61433916911" />
        </ul>
      </div>
    </section>
  );
}
