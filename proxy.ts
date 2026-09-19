import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import {
  defaultLocale,
  isLocale,
  localeCookie,
  localePath,
  type Locale,
} from "./lib/i18n/config";

function localeFromCookie(request: NextRequest): Locale {
  const value = request.cookies.get(localeCookie)?.value;
  return value && isLocale(value) ? value : defaultLocale;
}

function persistLocale(response: NextResponse, locale: Locale): NextResponse {
  response.cookies.set(localeCookie, locale, {
    path: "/",
    maxAge: 60 * 60 * 24 * 365,
    sameSite: "lax",
  });
  return response;
}

export function proxy(request: NextRequest): NextResponse | undefined {
  const { pathname } = request.nextUrl;
  const firstSegment = pathname.split("/")[1];

  if (firstSegment && isLocale(firstSegment)) {
    return persistLocale(NextResponse.next(), firstSegment);
  }

  const locale = localeFromCookie(request);
  request.nextUrl.pathname = localePath(locale, pathname);
  return persistLocale(NextResponse.redirect(request.nextUrl), locale);
}

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"],
};
