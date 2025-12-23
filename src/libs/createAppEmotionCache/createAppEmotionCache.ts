import createCache from "@emotion/cache";

import { commonConfig } from "@/utils/config";

export function createAppEmotionCache() {
  return createCache({
    key: commonConfig.APP_CACHE_KEY,
  });
}

export type AppEmotionCache = ReturnType<typeof createAppEmotionCache>;

export default createAppEmotionCache;
