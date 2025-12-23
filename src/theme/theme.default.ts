import { createTheme, darken } from "@mui/material/styles";

import generalStyles from "./general.styles";
import overridesStyles from "./overrides.styles";
import customStyles from "./custom.styles";

import type { TypographyOptions } from "@mui/material/styles/createTypography";
import type { Palette } from "@mui/material/styles";

const muiTheme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1280,
      xl: 1536,
    },
    keys: ["xs", "sm", "md", "lg", "xl"],
  },
});

const fontFamily = [`var(--noto-sans-font)`, "sans-serif"].join(", ");

const typography: TypographyOptions = {
  fontFamily: fontFamily,
  fontWeightBlack: 900,
  fontWeightExtraBold: 800,
  fontWeightBold: 700,
  fontWeightSemiBold: 600,
  fontWeightMedium: 500,
  fontWeightRegular: 400,
  fontWeightLight: 300,
  htmlFontSize: 16,
  fontSize: 14,
  body1: undefined,
  body2: undefined,
  caption: undefined,
  h1: undefined,
  h2: undefined,
  h3: undefined,
  h4: undefined,
  h5: undefined,
  h6: undefined,
  overline: undefined,
  subtitle1: undefined,
  subtitle2: undefined,

  button: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    textTransform: "initial",
  },

  captionReg12: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  captionMed12: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  captionSemi12: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  captionBold12: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(12),
    lineHeight: "18px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },

  bodyReg14: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodyMed14: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodySemi14: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodyBold14: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(14),
    lineHeight: "20px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },

  bodyReg16: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodyMed16: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodySemi16: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },
  bodyBold16: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(16),
    lineHeight: "22px",
    letterSpacing: "normal",
    wordBreak: "break-word",
  },

  titleReg20: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  titleMed20: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  titleSemi20: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },
  titleBold20: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(20),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(16),
    },
  },

  titleReg24: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
  },
  titleMed24: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
  },
  titleSemi24: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
  },
  titleBold24: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(24),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(20),
    },
  },

  headReg32: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(32),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(28),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },
  headMed32: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(32),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(28),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },
  headSemi32: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(32),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(28),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },
  headBold32: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(32),
    lineHeight: "normal",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(28),
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
    },
  },

  headReg48: {
    fontFamily,
    fontWeight: 400,
    fontSize: muiTheme.typography.pxToRem(48),
    lineHeight: "72px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(32),
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
      lineHeight: "36px",
    },
  },
  headMed48: {
    fontFamily,
    fontWeight: 500,
    fontSize: muiTheme.typography.pxToRem(48),
    lineHeight: "72px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(32),
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
      lineHeight: "36px",
    },
  },
  headSemi48: {
    fontFamily,
    fontWeight: 600,
    fontSize: muiTheme.typography.pxToRem(48),
    lineHeight: "72px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(32),
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
      lineHeight: "36px",
    },
  },
  headBold48: {
    fontFamily,
    fontWeight: 700,
    fontSize: muiTheme.typography.pxToRem(48),
    lineHeight: "72px",
    letterSpacing: "normal",
    wordBreak: "break-word",
    [muiTheme.breakpoints.down("md")]: {
      fontSize: muiTheme.typography.pxToRem(32),
      lineHeight: "48px",
    },
    [muiTheme.breakpoints.down("sm")]: {
      fontSize: muiTheme.typography.pxToRem(24),
      lineHeight: "36px",
    },
  },
};

const appColors = {
  red: {
    50: "#FCD6D9",
    100: "#FAC1C6",
    200: "#F9ADB3",
    300: "#F5848C",
    400: "#F25B66",
    500: "#EF3240",
    600: "#BF2833",
    700: "#8F1E26",
    800: "#60141A",
    900: "#480F13",
    A1000: "#300A0D",
    A1100: "#180506",
  } as Palette["red"],
  blue: {
    50: "#E7EAEC",
    100: "#CED4DA",
    200: "#9DA9B4",
    300: "#6D7F8F",
    400: "#3C5469",
    500: "#0B2944",
    600: "#092136",
    700: "#071929",
    800: "#04101B",
  } as Palette["blue"],
  neutral: {
    50: "#F6F6F6",
    100: "#F6F6F6",
    200: "#C5C5C5",
    300: "#949494",
    400: "#626262",
    500: "#4A4A4A",
    600: "#313131",
    700: "#191919",
  } as Palette["neutral"],
};

const defaultTheme = createTheme({
  ...muiTheme,
  palette: {
    primary: {
      light: appColors.red[300],
      main: appColors.red[500],
      dark: appColors.red[700],
      contrastText: muiTheme.palette.common.white,
    },
    secondary: {
      light: appColors.blue[300],
      main: appColors.blue[500],
      dark: appColors.blue[700],
      contrastText: muiTheme.palette.common.white,
    },
    success: {
      main: "#00814A",
      contrastText: muiTheme.palette.common.white,
    },
    error: {
      main: "#FF5E54",
      contrastText: muiTheme.palette.common.white,
    },
    red: { ...appColors.red },
    blue: { ...appColors.blue },
    neutral: { ...appColors.neutral },
    socialMedia: {
      facebook: "#334C8C",
      whatsapp: "#2AA81A",
      instagram:
        "linear-gradient(0deg, #E09B3D 0.46%, #C74C4D 22.72%, #C21975 60.76%, #7024C4 93.22%)",
      darkInstagram: `linear-gradient(0deg, ${darken(
        "#E09B3D",
        muiTheme.palette.action.hoverOpacity
      )} 0.46%, ${darken(
        "#C74C4D",
        muiTheme.palette.action.hoverOpacity
      )} 22.72%, ${darken(
        "#C21975",
        muiTheme.palette.action.hoverOpacity
      )} 60.76%, ${darken(
        "#7024C4",
        muiTheme.palette.action.hoverOpacity
      )} 93.22%)`,
      youtube: "#F20000",
    },
    info: {
      main: "#0085FF",
      contrastText: muiTheme.palette.common.white,
    },
    background: {
      default: muiTheme.palette.common.white,
    },
    divider: appColors.neutral[200],
    text: {
      primary: appColors.neutral[700],
      secondary: appColors.neutral[300],
      disabled: appColors.neutral[200],
    },
    action: {
      tonalOpacity: 0.2,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParams: any) => `
				${generalStyles(themeParams)}
				${overridesStyles(themeParams)}
        ${customStyles(themeParams)}
			`,
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true,
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          zIndex: 1350,
        },
      },
    },
    MuiSkeleton: {
      defaultProps: {
        animation: "wave",
      },
    },
    MuiTypography: {
      defaultProps: {
        variant: "bodyReg16",
        variantMapping: {
          captionReg12: "p",
          captionMed12: "p",
          captionSemi12: "p",
          captionBold12: "p",

          bodyReg14: "p",
          bodyMed14: "p",
          bodySemi14: "p",
          bodyBold14: "p",

          bodyReg16: "p",
          bodyMed16: "p",
          bodySemi16: "p",
          bodyBold16: "p",

          titleReg20: "h6",
          titleMed20: "h6",
          titleSemi20: "h6",
          titleBold20: "h6",

          titleReg24: "h5",
          titleMed24: "h5",
          titleSemi24: "h5",
          titleBold24: "h5",

          headReg32: "h4",
          headMed32: "h4",
          headSemi32: "h4",
          headBold32: "h4",

          headReg48: "h1",
          headMed48: "h1",
          headSemi48: "h1",
          headBold48: "h1",
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        color: appColors.neutral[700],
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: { ...typography },
  zIndex: {
    backdrop: 1350,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  app: {
    shadows: {
      menu: "0px 8px 20px 0px #00000026",
      paper: "16px 16px 8px 0px #00000014",
    },
    sizes: {
      large: 50,
      medium: 44,
      small: 38,
    },
    spacings: {
      gutters: 24,
      guttersSmall: 16,
    },
    utils: {
      remToPx: (rem) =>
        (parseFloat(rem) * typography.htmlFontSize!) /
        (typography.fontSize! / 14),
    },
  },
});

export default defaultTheme;
