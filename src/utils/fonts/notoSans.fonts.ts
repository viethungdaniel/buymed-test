import {
  Noto_Sans,
  Noto_Sans_TC,
  Noto_Sans_SC,
  Noto_Sans_JP,
} from "next/font/google";

export const notoSans = Noto_Sans({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--noto-sans-font",
});

export const notoSansTC = Noto_Sans_TC({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--noto-sans-font",
});

export const notoSansSC = Noto_Sans_SC({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--noto-sans-font",
});

export const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  subsets: ["latin"],
  variable: "--noto-sans-font",
});
