import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer/Footer";
import { cookies } from "next/headers";
import ThemeSync from "@/components/ThemeSync";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return (
    <html lang="en" {...(theme === "dark" ? { "data-theme": "dark" } : {})}>
      <body
        className={`${geistMono.variable} antialiased relative min-h-screen flex flex-col bg-background text-foreground duration-0`}
      >
        <ThemeSync />

        {children}
        <Footer />
      </body>
    </html>
  );
}
