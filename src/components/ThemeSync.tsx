"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ThemeSync() {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    const isDark =
      pathname.startsWith("/about") || pathname.startsWith("/contact");
    const isHome = pathname === "/";

    // Update cookie and theme attribute
    document.cookie = `theme=${isDark ? "dark" : "light"}; path=/`;
    html.setAttribute("data-theme", isDark ? "dark" : "light");

    // Toggle transition only on homepage
    if (isHome) {
      html.classList.add("enable-transition");
    } else {
      html.classList.remove("enable-transition");
    }
  }, [pathname]);

  return null;
}
