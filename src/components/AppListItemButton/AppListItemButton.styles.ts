import { darken } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "selected" | "focusVisible">({
  name: "AppListItemButton",
  uniqId: "T1UyK6",
})((theme, _, classes) => {
  return {
    root: {
      minHeight: 44,
      [`&.${classes.focusVisible}`]: {
        backgroundColor: darken(
          theme.palette.neutral[100],
          theme.palette.action.hoverOpacity
        ),
      },
      "&:hover": {
        backgroundColor: theme.palette.neutral[100],
      },
      [`&.${classes.selected}`]: {
        backgroundColor: theme.palette.neutral[200],
        [`&.${classes.focusVisible}`]: {
          backgroundColor: darken(
            theme.palette.neutral[200],
            theme.palette.action.focusOpacity
          ),
        },
        "&:hover": {
          backgroundColor: darken(
            theme.palette.neutral[200],
            theme.palette.action.hoverOpacity
          ),
        },
      },
    },
    gutters: {
      padding: theme.spacing(1.25),
    },
    disableHover: {
      "&:hover": {
        cursor: "auto",
        backgroundColor: "initial",
      },
    },
    selected: {},
    focusVisible: {},
  };
});

export default useStyles;
