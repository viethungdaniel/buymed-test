import { makeStyles } from "tss-react/mui";
import _get from "lodash/get";

type StylesParams = {
  color?: string;
  textColor?: string;
};

const useStyles = makeStyles<StylesParams>({
  name: "AppBadge",
})((theme, params) => {
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
        (params?.color || "transparent");
      if (isDefaultTextColor) {
        textColor =
          color === "transparent"
            ? theme.palette.text.primary
            : theme.palette.getContrastText(color);
      } else {
        textColor =
          _get(theme.palette, params.textColor ?? "") ??
          (params?.textColor || theme.palette.text.primary);
      }
      break;
    }
  }

  console.log("color", color);

  return {
    root: {
      fontSize: theme.typography.captionMed12.fontSize,
      fontWeight: theme.typography.captionMed12.fontWeight,
      fontFamily: theme.typography.captionMed12.fontFamily,
      lineHeight: theme.typography.captionMed12.fontFamily,
    },
    badge: {
      lineHeight: 1,
      backgroundColor: color,
      color: textColor,
    },
    standard: {
      backgroundColor: "transparent",
      color: isDefaultTextColor ? color : textColor,
    },
  };
});

export default useStyles;
