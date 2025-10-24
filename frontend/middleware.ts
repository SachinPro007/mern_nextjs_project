import { NextRequest } from "next/server";

export const middleware = (req: NextRequest) => {
  const cookie = req.cookies.get("token")?.value;

  if (cookie) {
    if (
      req.nextUrl.pathname === "/register" ||
      req.nextUrl.pathname === "/login"
    ) {
      return Response.redirect(new URL("/", req.nextUrl.origin));
    }
  } else if (req.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/login", req.nextUrl.origin));
  }
};

export const config = {
  matcher: ["/", "/register", "/login"],
};
