import axios from "axios";

import { commonConfig, i18nConfig } from "@/utils/config";
import { commonHelpers } from "@/utils/helpers";

import type { AxiosError } from "axios";

const commonAxios = axios.create({
  baseURL: commonConfig.API_BASE_URL,
});

commonAxios.interceptors.request.use(
  (req) => {
    switch ((req.method as string).toUpperCase()) {
      case "GET": {
        req.params = req.params || {};
        // Object.assign(req.params, {});
        break;
      }
      case "POST": {
        if (req.data instanceof FormData) {
          typeof window !== "undefined" &&
            req.data.append(
              "language",
              i18nConfig.localeToConfigMap[window.NextPublic.lang]
                ?.requestedLanguage ?? ""
            );
        } else {
          req.data = req.data || {};
          req.data = commonHelpers.formatFormData(req.data);
        }
        !req.data?.get("language") &&
          typeof window !== "undefined" &&
          req.data?.append(
            "language",
            i18nConfig.localeToConfigMap[window.NextPublic.lang]
              ?.requestedLanguage ?? ""
          );
        break;
      }
      case "PUT": {
        if (req.data instanceof FormData) {
          typeof window !== "undefined" &&
            req.data.append(
              "language",
              i18nConfig.localeToConfigMap[window.NextPublic.lang]
                ?.requestedLanguage ?? ""
            );
        } else {
          req.data = req.data || {};
          req.data = commonHelpers.formatFormData(req.data);
        }
        !req.data?.get("language") &&
          typeof window !== "undefined" &&
          req.data?.append(
            "language",
            i18nConfig.localeToConfigMap[window.NextPublic.lang]
              ?.requestedLanguage ?? ""
          );
        break;
      }
    }

    return req;
  },
  (err) => {
    return Promise.reject(err);
  }
);

commonAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default commonAxios;
