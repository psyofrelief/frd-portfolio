import LogoHorizontal from "@/components/shared/logo/LogoHorizontal";
import { footerData } from "@/data/footer";
import FooterLink from "./FooterLink";

export default function Footer() {
  return (
    <footer className="flex flex-col bg-background text-foreground p-xs min-h-screen-minus-nav justify-between">
      <div className="flex justify-between gap-x-lg">
        <p className="uppercase font-mono text-xs max-w-[490px]">
          now that you got here, why not getting in touch? look around, there
          are all my socials and email address, If you want to collaborate or
          you have a new cool idea, feel free to drop me a message, I’d love to
          hear it!
        </p>

        <div className="md:flex  grid grid-cols-2 grid-rows-2 gap-y-xs gap-x-lg lg:gap-x-2xl">
          <div className="flex flex-col">
            <p className="flex w-fit font-bold text-xs">Faried Idris</p>
            <p className="flex w-fit font-bold text-xs">© 2003 - 2025</p>
          </div>
          {footerData.map((e) => (
            <div key={Math.random()} className="flex flex-col">
              {e.links.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <LogoHorizontal />
    </footer>
  );
}
