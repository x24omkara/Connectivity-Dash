import { NextResponse } from "next/server";

export function middleware(request) {

  const password = request.cookies.get("avaada_access");

  if (password === process.env.DASH_PASSWORD) {
    return NextResponse.next();
  }

  return NextResponse.redirect(new URL("/login", request.url));
}
