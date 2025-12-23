module.exports = {
  i18n: {
    locales: ["en-US", "vi-VN"],
    defaultLocale: process.env.NODE_ENV === "development" ? "en-US" : "vi-VN",
  },
  fallbackLng: {
    default: ["en-us"],
    "en-US": ["en-us"],
    "vi-VN": ["vi-vn"],
  },
  localePath:
    typeof window === "undefined"
      ? require("path").resolve("./public/locales")
      : "/locales",
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
