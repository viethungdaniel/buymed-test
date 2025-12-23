import enUsCommon from "@@/public/locales/en-US/common.json";
import type { Theme } from "@mui/material";

type LocaleCommon = typeof enUsCommon;

declare module "react" {
  function forwardRef<T, P = {}>(
    render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
  ): (props: P & React.RefAttributes<T>) => React.ReactElement | null;
}

declare module "*.svg" {
  import React = require("react");
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "yup" {
  interface StringSchema {
    appPhone(ref: yup.Reference<string>, message?: string): this;
  }
}

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";
    resources: {
      common: LocaleCommon;
    };
  }
}

declare global {
  declare module "*.svg?url" {
    const content: any;
    export default content;
  }

  declare namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      NEXT_PUBLIC_APP_ENV: "development" | "production";
      NEXT_PUBLIC_APP_VERSION: string;
      NEXT_PUBLIC_BASE_DOMAIN: string;
      NEXT_PUBLIC_BASE_URL: string;
      NEXT_PUBLIC_CDN_DOMAIN: string;
      NEXT_PUBLIC_CDN_HOST: string;
      NEXT_PUBLIC_API_HOST: string;
      NEXT_PUBLIC_API_BASE_URL: string;
    }
  }

  interface Window {
    NextPublic: {
      lang: "en-US" | "zh-HK" | "zh-CN";
      version: string;
    };
    gtag: Function;
  }

  type PartialRecord<K extends keyof any, T> = {
    [P in K]?: T;
  };
  type SafeNumber = number | `${number}`;
  type EmptySafeNumber = SafeNumber | "";
  type EmptyNumber = number | "";
  type BooleanNumber<T extends number = 0 | 1> = T;
  type ShowBooleanNumber<T extends number = 0 | 1> = T; // 0: public, 1: hidden, undefined all
  type Join<K, P> = K extends string | number
    ? P extends string | number
      ? `${K}${"" extends P ? "" : "."}${P}`
      : never
    : never;
  type ObjectPaths<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? {
        [K in keyof T]-?: K extends string | number
          ? `${K}` | Join<K, ObjectPaths<T[K], Prev[D]>>
          : never;
      }[keyof T]
    : "";

  type ObjectPathLeaves<T, D extends number = 10> = [D] extends [never]
    ? never
    : T extends object
    ? { [K in keyof T]-?: Join<K, ObjectPathLeaves<T[K], Prev[D]>> }[keyof T]
    : "";

  type AppThemeColor =
    | ObjectPathLeaves<Theme["palette"]>
    | React.CSSProperties["color"];
}
