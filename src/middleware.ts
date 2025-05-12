import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const response = NextResponse.next();

  if (pathname.startsWith("/about") || pathname.startsWith("/contact")) {
    response.cookies.set("theme", "dark", { path: "/" });
  } else {
    response.cookies.set("theme", "light", { path: "/" });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|favicon.ico|api).*)"],
};
