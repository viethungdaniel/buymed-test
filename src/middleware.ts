import { DEFAULT_LOCALE } from "@/utils/config/i18n.config";
import { APP_LOCALE } from "@/utils/constants/storageKey.constants";

import { NextRequest, NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

export const middleware = async (req: NextRequest) => {
  if (
    req.nextUrl.pathname.startsWith("/_next") ||
    req.nextUrl.pathname.includes("/api/") ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === DEFAULT_LOCALE) {
    const locale = req.cookies.get(APP_LOCALE)?.value || DEFAULT_LOCALE;
    if (locale === req.nextUrl.locale) return;
    return NextResponse.redirect(
      new URL(`/${locale}${req.nextUrl.pathname}${req.nextUrl.search}`, req.url)
    );
  } else {
    const res = NextResponse.next();
    res.cookies.set(APP_LOCALE, req.nextUrl.locale);
    return res;
  }
};
