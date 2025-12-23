import { alpha, darken, rgbToHex } from "@mui/material/styles";
import _get from "lodash/get";
import { makeStyles } from "tss-react/mui";

type StylesParams = {
  color?: string;
  textColor?: string;
};

const useStyles = makeStyles<
  StylesParams,
  | "clickable"
  | "avatarMedium"
  | "deleteIcon"
  | "iconMedium"
  | "iconSmall"
  | "sizeMedium"
  | "sizeSmall"
>({
  name: "AppChip",
  uniqId: "m11y7A",
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
    root: {
      [`& .${classes.avatarMedium}`]: {
        marginRight: theme.spacing(-1.25 / 2),
        marginLeft: 4,
        width: 22,
        height: 22,
      },
      [`& .${classes.iconMedium}`]: {
        marginRight: theme.spacing(-1.25 / 2),
        marginLeft: 4,
      },
      [`& .${classes.iconSmall}`]: {
        marginRight: theme.spacing(-1.25 / 2),
        marginLeft: 4,
      },
      [`& .${classes.deleteIcon}`]: {
        fontSize: 20,
        marginRight: 30 / 4,
        marginLeft: -2,
        "&:hover": {
          color: darken(textColor!, theme.palette.action.hoverOpacity),
        },
      },
      [`&.${classes.sizeSmall} .${classes.deleteIcon}`]: {
        marginRight: `${24 / 4 - 2}px`,
      },
    },
    borderRadiusRounded: {
      borderRadius: theme.shape.borderRadius / 2,
    },
    label: {
      ...(theme.typography.bodyMed14 as any),
    },
    sizeMedium: {
      height: 30,
    },
    sizeSmall: {
      height: 24,
    },
    labelMedium: {
      paddingLeft: theme.spacing(1.25),
      paddingRight: theme.spacing(1.25),
    },
    labelSmall: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    filled: {
      backgroundColor: color,
      color: textColor,
      border: `1px solid transparent`,
      [`&.${classes.clickable}`]: {
        backgroundColor: color,
        "&:hover": {
          backgroundColor: darken(color, theme.palette.contrastThreshold / 10),
        },
      },
      [`& .${classes.iconMedium}`]: {
        color: textColor,
      },
      [`& .${classes.iconSmall}`]: {
        color: textColor,
      },
      [`& .${classes.deleteIcon}`]: {
        color: textColor,
        "&:hover": {
          color: darken(textColor, theme.palette.action.hoverOpacity),
        },
      },
    },
    filledTonal: {
      backgroundColor: alpha(color, theme.palette.action.tonalOpacity),
      color: isDefaultTextColor ? color : textColor,
      [`&.${classes.clickable}`]: {
        "&:hover": {
          backgroundColor: darken(
            rgbToHex(alpha(color, theme.palette.action.tonalOpacity)),
            theme.palette.contrastThreshold / 10
          ),
        },
      },
    },
    outlined: {
      borderColor: color,
      color: isDefaultTextColor ? color : textColor,
      [`&.${classes.clickable}`]: {
        "&:hover": {
          backgroundColor: alpha(color, theme.palette.action.hoverOpacity),
        },
      },
      [`& .${classes.iconMedium}`]: {
        color: isDefaultTextColor ? color : textColor,
      },
      [`& .${classes.iconSmall}`]: {
        color: isDefaultTextColor ? color : textColor,
      },
      [`& .${classes.deleteIcon}`]: {
        color: isDefaultTextColor ? color : textColor,
      },
    },
    avatarMedium: {},
    iconMedium: {},
    iconSmall: {},
    deleteIcon: {},
    clickable: {},
  };
});

export default useStyles;
