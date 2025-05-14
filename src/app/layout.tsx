import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import { cookies } from "next/headers";
import ThemeSync from "@/components/ThemeSync";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/navbar/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Faried Idris — Full Stack Developer & Designer",
    template: "%s | Faried Idris",
  },
  description:
    "Portfolio of Faried Idris, a full stack web developer and digital creative based in Australia. Specialising in Laravel, Next.js, and modern web experiences.",
  keywords: [
    "Faried Idris",
    "Full stack developer",
    "Laravel developer",
    "Next.js developer",
    "Web developer Australia",
    "Freelance web designer",
    "Digital creative",
    "Web design portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Faried Idris — Full Stack Developer & Designer",
    description:
      "Portfolio of Faried Idris, a developer building fast, reliable web applications and digital experiences.",
    url: "https://fariedidris.com",
    siteName: "Faried Idris",
    images: [
      {
        url: "https://fariedidris.com/opengraph.webp",
        width: 1200,
        height: 630,
        alt: "Faried Idris Portfolio",
      },
    ],
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faried Idris — Full Stack Developer & Designer",
    description:
      "Building scalable web apps and brand experiences using Laravel, Next.js, and TypeScript.",
    images: ["https://fariedidris.com/opengraph.png"],
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return (
    <html lang="en" {...(theme === "dark" ? { "data-theme": "dark" } : {})}>
      <head>
        <meta name="theme-color" content="#000000" />
        <link rel="canonical" href="https://fariedidris.com" />
        <meta name="author" content="Faried Idris" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistMono.variable} antialiased relative min-h-screen flex flex-col bg-background text-foreground duration-0`}
      >
        <ThemeSync />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
