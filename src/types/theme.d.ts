import React from "react";

type CustomRedColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  A1000: string;
  A1100: string;
};

type CustomNeutralColor = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
};

type CustomBlueColor = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
};

type SocialMediaColor = {
  whatsapp: string;
  facebook: string;
  instagram: string;
  darkInstagram: string;
  youtube: string;
};

declare module "@mui/material/styles" {
  interface BreakpointOverrides {}

  interface ZIndex {
    backdrop: number;
    bottomBar: number;
  }

  interface Duration {}

  interface PaletteOptions {
    red?: Partial<CustomRedColor>;
    neutral?: Partial<CustomNeutralColor>;
    blue?: Partial<CustomBlueColor>;
    socialMedia?: Partial<SocialMediaColor>;
  }
  export interface Palette {
    red: CustomRedColor;
    neutral: CustomNeutralColor;
    blue: CustomBlueColor;
    socialMedia: SocialMediaColor;
  }

  interface CommonColors {
    // darkNeutral: string;
    // neutral: string;
    // lightNeutral: string;
    // lighterNeutral: string;
    // lightestNeutral: string;
  }

  interface TypeAction {
    tonalOpacity: number;
  }

  interface TypeBackground {}

  interface FontStyleOptions {
    fontWeightBlack: number;
    fontWeightExtraBold: number;
    fontWeightSemiBold: number;
  }

  interface TypographyVariants {
    captionReg12: React.CSSProperties;
    captionMed12: React.CSSProperties;
    captionSemi12: React.CSSProperties;
    captionBold12: React.CSSProperties;

    bodyReg14: React.CSSProperties;
    bodyMed14: React.CSSProperties;
    bodySemi14: React.CSSProperties;
    bodyBold14: React.CSSProperties;

    bodyReg16: React.CSSProperties;
    bodyMed16: React.CSSProperties;
    bodySemi16: React.CSSProperties;
    bodyBold16: React.CSSProperties;

    titleReg20: React.CSSProperties;
    titleMed20: React.CSSProperties;
    titleSemi20: React.CSSProperties;
    titleBold20: React.CSSProperties;

    titleReg24: React.CSSProperties;
    titleMed24: React.CSSProperties;
    titleSemi24: React.CSSProperties;
    titleBold24: React.CSSProperties;

    headReg32: React.CSSProperties;
    headMed32: React.CSSProperties;
    headSemi32: React.CSSProperties;
    headBold32: React.CSSProperties;

    headReg48: React.CSSProperties;
    headMed48: React.CSSProperties;
    headSemi48: React.CSSProperties;
    headBold48: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    captionReg12?: React.CSSProperties;
    captionMed12?: React.CSSProperties;
    captionSemi12?: React.CSSProperties;
    captionBold12?: React.CSSProperties;

    bodyReg14?: React.CSSProperties;
    bodyMed14?: React.CSSProperties;
    bodySemi14?: React.CSSProperties;
    bodyBold14?: React.CSSProperties;

    bodyReg16?: React.CSSProperties;
    bodyMed16?: React.CSSProperties;
    bodySemi16?: React.CSSProperties;
    bodyBold16?: React.CSSProperties;

    titleReg20?: React.CSSProperties;
    titleMed20?: React.CSSProperties;
    titleSemi20?: React.CSSProperties;
    titleBold20?: React.CSSProperties;

    titleReg24?: React.CSSProperties;
    titleMed24?: React.CSSProperties;
    titleSemi24?: React.CSSProperties;
    titleBold24?: React.CSSProperties;

    headReg32?: React.CSSProperties;
    headMed32?: React.CSSProperties;
    headSemi32?: React.CSSProperties;
    headBold32?: React.CSSProperties;

    headReg48?: React.CSSProperties;
    headMed48?: React.CSSProperties;
    headSemi48?: React.CSSProperties;
    headBold48?: React.CSSProperties;
  }

  interface Theme {
    app: {
      shadows: {
        menu: string;
        paper: string;
      };
      sizes: {
        small: number;
        medium: number;
        large: number;
      };
      spacings: {
        gutters: number;
        guttersSmall: number;
      };
      utils: {
        remToPx: (rem: string | number) => number;
      };
    };
  }

  interface ThemeOptions {
    app?: {
      shadows?: {
        menu?: string;
        paper?: string;
      };
      sizes?: {
        small?: number;
        medium?: number;
        large?: number;
      };
      spacings?: {
        gutters?: number;
        guttersSmall?: number;
      };
      utils?: {
        remToPx?: (rem: string) => number;
      };
    };
  }
}

declare module "@mui/material/styles/createTypography" {
  interface FontStyle
    extends Required<{
      fontWeightBlack?: React.CSSProperties["fontWeight"];
      fontWeightExtraBold?: React.CSSProperties["fontWeight"];
      fontWeightSemiBold?: React.CSSProperties["fontWeight"];
    }> {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    captionReg12: true;
    captionMed12: true;
    captionSemi12: true;
    captionBold12: true;

    bodyReg14: true;
    bodyMed14: true;
    bodySemi14: true;
    bodyBold14: true;

    bodyReg16: true;
    bodyMed16: true;
    bodySemi16: true;
    bodyBold16: true;

    titleReg20: true;
    titleMed20: true;
    titleSemi20: true;
    titleBold20: true;

    titleReg24: true;
    titleMed24: true;
    titleSemi24: true;
    titleBold24: true;

    headReg32: true;
    headMed32: true;
    headSemi32: true;
    headBold32: true;

    headReg48: true;
    headMed48: true;
    headSemi48: true;
    headBold48: true;

    body1: false;
    body2: false;
    caption: false;
    h1: false;
    h2: false;
    h3: false;
    h4: false;
    h5: false;
    h6: false;
    overline: false;
    subtitle1: false;
    subtitle2: false;
  }
}
