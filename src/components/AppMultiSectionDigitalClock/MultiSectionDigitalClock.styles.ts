import { darken } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "selected" | "disabled">({
  name: "MultiSectionDigitalClock",
  uniqId: "TrZhG8",
})((theme, _, classes) => {
  const mainColor = theme.palette.secondary.main;

  return {
    root: {
      border: "initial",
      "& .MuiMultiSectionDigitalClockSection-root": {
        width: "auto",
        display: "flex",
        flexDirection: "column",
        padding: theme.spacing(1.25 / 2),
        gap: theme.spacing(1.25 / 2),
      },
    },
    digitalClockSectionItem: {
      color: mainColor,
      [`&.${classes.selected}`]: {
        backgroundColor: mainColor,
        color: theme.palette.primary.contrastText,
        "&:hover": {
          backgroundColor: darken(mainColor, theme.palette.action.hoverOpacity),
        },
        [`&.${classes.disabled}`]: {
          backgroundColor: theme.palette.action.disabled,
          color: theme.palette.common.white,
        },
      },
    },
    selected: {},
    disabled: {},
  };
});

export default useStyles;
