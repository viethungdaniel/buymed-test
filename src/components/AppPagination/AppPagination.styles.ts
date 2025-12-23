import _get from "lodash/get";
import { alpha, darken, rgbToHex } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

type StylesParams = {
  color?: string;
  textColor?: string;
};

const useStyles = makeStyles<StylesParams, "selected">({
  name: "AppPagination",
  uniqId: "LRijS3",
})((theme, params, classes) => {
  let color = "";
  let textColor = "";
  const isDefaultTextColor =
    !params.textColor || params.textColor === "default";

  switch (params.color) {
    case "primary": {
      color = theme.palette.primary.main;
      textColor = theme.palette.common.white;
      if (!isDefaultTextColor) {
        textColor =
          _get(theme.palette, params.textColor ?? "") ??
          (params?.textColor || theme.palette.text.primary);
      }
      break;
    }
    case "secondary": {
      color = theme.palette.secondary.main;
      textColor = theme.palette.common.white;
      if (!isDefaultTextColor) {
        textColor =
          _get(theme.palette, params.textColor ?? "") ??
          (params?.textColor || theme.palette.text.primary);
      }
      break;
    }
    case "error": {
      color = theme.palette.error.main;
      textColor = theme.palette.common.white;
      if (!isDefaultTextColor) {
        textColor =
          _get(theme.palette, params.textColor ?? "") ??
          (params?.textColor || theme.palette.text.primary);
      }
      break;
    }
    default: {
      color =
        _get(theme.palette, params?.color ?? "") ??
        (params?.color || theme.palette.primary.main);
      if (isDefaultTextColor) {
        textColor = theme.palette.getContrastText(color);
      } else {
        textColor =
          _get(theme.palette, params.textColor ?? "") ??
          (params?.textColor || theme.palette.primary.main);
      }
      break;
    }
  }

  return {
    paginationItemText: {
      [`&.${classes.selected}`]: {
        backgroundColor: "transparent",
        color: isDefaultTextColor ? color : textColor,
        fontWeight: theme.typography.bodyBold16.fontWeight,
        // "&:hover": {
        //   backgroundColor: darken(
        //     theme.palette.primary.main,
        //     theme.palette.contrastThreshold / 10
        //   ),
        // },
      },
      "&:hover": {
        backgroundColor: alpha(color, theme.palette.contrastThreshold / 10),
      },
    },
    paginationItemOutlined: {
      borderColor: color,
      color: isDefaultTextColor ? color : textColor,
      [`&.${classes.selected}`]: {
        backgroundColor: alpha(color, theme.palette.contrastThreshold / 10),
        "&:hover": {
          backgroundColor: darken(
            rgbToHex(alpha(color, theme.palette.contrastThreshold / 10)),
            theme.palette.contrastThreshold / 10
          ),
        },
      },
      "&:hover": {
        backgroundColor: alpha(color, theme.palette.contrastThreshold / 10),
      },
    },
    paginationItem: {
      height: 30,
      minWidth: 30,
      padding: 0,
      fontSize: theme.typography.bodyReg16.fontSize,
      fontWeight: theme.typography.bodyReg16.fontWeight,
      fontFamily: theme.typography.bodyReg16.fontFamily,
      lineHeight: theme.typography.bodyReg16.lineHeight,
      borderRadius: theme.shape.borderRadius,
    },
    selected: {},
  };
});

export default useStyles;
