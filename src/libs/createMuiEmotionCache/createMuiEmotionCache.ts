import createCache from "@emotion/cache";

const createMuiEmotionCache = () => {
  return createCache({ key: "mui", prepend: true });
};

export type MuiEmotionCache = ReturnType<typeof createMuiEmotionCache>;

export default createMuiEmotionCache;
