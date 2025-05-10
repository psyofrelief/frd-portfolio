// app/(site)/layout.tsx

import Navbar from "@/components/layout/navbar/Navbar";

export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar className="px-xs sticky top-0" />
      {children}
    </>
  );
}
