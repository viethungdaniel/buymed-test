import { enUS, viVN } from "@mui/material/locale";

import { notoSansFonts } from "@/utils/fonts";

export const DEFAULT_LOCALE =
  process.env.NODE_ENV === "development" ? "en-US" : "vi-VN";

export const localeToConfigMap = {
  "en-US": {
    label: "English",
    themeLocale: enUS,
    font: notoSansFonts.notoSans,
    imageSrc: "/images/svgs/en-us-flag.svg",
    requestedLanguage: "eng",
  },
  "vi-VN": {
    label: "Tiếng Việt",
    themeLocale: viVN,
    font: notoSansFonts.notoSans,
    imageSrc: "/images/svgs/vi-vn-flag.svg",
    requestedLanguage: "vie",
  },
} as Record<
  string,
  {
    label: string;
    themeLocale: typeof enUS;
    font: typeof notoSansFonts.notoSans;
    imageSrc: string;
    requestedLanguage: string;
  }
>;

export const localeConfigs = Object.entries(localeToConfigMap).map(
  ([locale, config]) => ({
    locale,
    ...config,
  })
);

export const locales = Object.entries(localeToConfigMap).map(
  ([locale]) => locale
);
