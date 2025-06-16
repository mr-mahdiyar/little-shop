import { auth } from "@/auth";
import { isPathMatchedWithAuthPaths, isPathMatchedWithProtectedPaths } from "./utils/path";
import { NextResponse } from "next/server";

export default auth(async (req) => {

  const currentPath = req.nextUrl.pathname;
  const isUserLoggedIn = !!req.auth;
  const isAuthPath = isPathMatchedWithAuthPaths(currentPath);
  const isProtectedPath = isPathMatchedWithProtectedPaths(currentPath);

  switch (isUserLoggedIn) {
    case true: {
      if (isAuthPath) return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    case false: {
      if (isProtectedPath) return NextResponse.redirect(new URL("/auth/login", req.url));
    }
  }
});

export const config = {
  matcher: ["/auth/:path*", "/dashboard/:path*"],
};
