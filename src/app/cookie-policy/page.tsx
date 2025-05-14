import Brief from "@/components/ui/Brief";

export default function CookiePolicy() {
  return (
    <section className="gap-y-2xl px-xs flex flex-col min-h-screen-minus-nav sm:mt-nav mt-nav-mobile py-3xl text-xs sm:text-sm flex-1 lg:!px-3xl xl:!px-[25vw] cta-fade-up mx-auto">
      <header className="flex flex-col gap-y-md">
        <div className="flex sm:flex-row flex-col gap-y-xs sm:justify-between sm:items-center">
          <Brief className="text-xl md:text-[80px]">Cookie Policy</Brief>
          <p className="!text-2xs">Last updated: May 14, 2025</p>
        </div>
        <p className="font-semibold sm:max-w-[560px] max-w-[430px]">
          This website (fariedidris.com) is a personal portfolio created and
          maintained by Faried Idris. This policy explains how cookies are used
          when you visit the site.
        </p>
      </header>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Do We Use Cookies?</HeadingOne>
        <p>
          Yes, this website may use cookies to support basic functionality and
          performance monitoring. These cookies are not used to collect personal
          information or track users across other sites.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Types of Cookies</HeadingOne>
        <ul className="list-disc list-inside flex flex-col gap-y-1">
          <li>
            <span className="font-medium">Essential Cookies —</span> Used for
            basic site features and accessibility.
          </li>
          <li>
            <span className="font-medium">Analytics Cookies —</span> May be
            placed by tools such as Google Analytics to gather anonymous usage
            data.
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Third-Party Content</HeadingOne>
        <p>
          Fonts, images, or assets hosted on third-party services (e.g. Google
          Fonts or CDN providers) may place their own cookies or collect
          standard usage logs. No personal data is shared from this site.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>How to Control Cookies</HeadingOne>
        <p>
          You can disable or manage cookies through your browser settings. This
          may affect how the site appears or functions but will not block access
          to any content.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Updates to This Policy</HeadingOne>
        <p>
          This cookie policy may be updated in the future. Please revisit this
          page to stay informed of any changes.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Contact</HeadingOne>
        <p>
          If you have any questions about this policy, feel free to contact me
          at{" "}
          <a
            href="mailto:6faried@gmail.com"
            className="underline underline-offset-2"
          >
            6faried@gmail.com
          </a>
          .
        </p>
      </div>
    </section>
  );
}

interface Props {
  children: React.ReactNode;
}
const HeadingOne = ({ children }: Props) => {
  return <h2 className="text-sm sm:text-md font-semibold">{children}</h2>;
};
