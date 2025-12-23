import axios from "axios";

import { commonConfig, i18nConfig } from "@/utils/config";
import { commonHelpers } from "@/utils/helpers";
// import { jwtService } from "@/services";
import { broadcastChannelNameConstants } from "@/utils/constants";

import type { AxiosError } from "axios";

const authAxios = axios.create({
  baseURL: commonConfig.API_BASE_URL,
});

authAxios.interceptors.request.use(
  (req) => {
    // if (!req.headers.Authorization) {
    //   const token = jwtService.getToken();
    //   if (!!token) {
    //     req.headers.Authorization = `Bearer ${token}`;
    //   }
    // }

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
    console.log(err);
    return Promise.reject(err);
  }
);

authAxios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        const authExpiredTokenBc = new BroadcastChannel(
          broadcastChannelNameConstants.AUTH_EXPIRED_TOKEN
        );
        authExpiredTokenBc.postMessage(null);
      }
    }
    return Promise.reject(error);
  }
);

export default authAxios;
