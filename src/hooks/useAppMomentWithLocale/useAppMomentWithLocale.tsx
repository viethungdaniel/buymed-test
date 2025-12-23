import moment from "moment";

import { useTranslation } from "next-i18next";
import { useCallback } from "react";
import { commonConfig } from "@/utils/config";

const useAppMomentWithLocale = () => {
  const { i18n } = useTranslation();
  const momentWithLocale = useCallback(moment, [i18n.language]);
  momentWithLocale.locale(i18n.language);

  const momentWithLocaleTz = (inp: moment.MomentInput, format?: string) => {
    return momentWithLocale(
      momentWithLocale(inp, format)
        .utcOffset(commonConfig.DEFAULT_SYSTEM_UTC_OFFSET, true)
        .format()
    );
  };

  return {
    momentWithLocale,
    momentWithLocaleTz,
  };
};

export default useAppMomentWithLocale;
