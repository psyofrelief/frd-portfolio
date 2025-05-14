import Brief from "@/components/ui/Brief";

export default function PrivacyPolicy() {
  return (
    <section className="gap-y-2xl px-xs flex flex-col min-h-screen-minus-nav sm:mt-nav mt-nav-mobile py-3xl text-xs sm:text-sm flex-1 lg:!px-3xl xl:!px-[25vw] cta-fade-up mx-auto">
      <header className="flex flex-col gap-y-md">
        <div className="flex sm:flex-row flex-col gap-y-xs sm:justify-between sm:items-center">
          <Brief className="text-xl md:text-[80px]">Privacy Policy</Brief>
          <p className="!text-2xs">Last updated: May 14, 2025</p>
        </div>
        <p className="font-semibold sm:max-w-[560px] max-w-[430px]">
          This website (fariedidris.com) is a personal portfolio built and
          maintained by me, Faried Idris. It is intended for showcasing my work
          to potential employers and collaborators.
        </p>
      </header>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>No Data Collection</HeadingOne>
        <p>
          I do not collect any personal information from visitors. There are no
          contact forms, subscriptions, or account logins on this site.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Analytics</HeadingOne>
        <p>
          This site may use a basic analytics tool (like Google Analytics or
          Vercel Insights) to understand general traffic patterns. This data is
          anonymous and used only to monitor site performance.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Third-Party Content</HeadingOne>
        <p>
          Some pages may embed assets hosted by external services (like fonts or
          images). These services may log standard requests, but no identifiable
          data is shared.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Changes to This Policy</HeadingOne>
        <p>
          This policy may be updated if anything changes. You can always check
          this page to see the current version.
        </p>
      </div>

      <div className="flex flex-col gap-y-1">
        <HeadingOne>Contact</HeadingOne>
        <p>
          If you have any questions, feel free to reach out directly via{" "}
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
