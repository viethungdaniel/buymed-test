import { darken } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "selected">({
  name: "AppMenuItem",
  uniqId: "BuxwSj",
})((theme, _, classes) => {
  return {
    root: {
      padding: theme.spacing(1.25),
      minHeight: 44,
      [`&.${classes.selected}`]: {
        backgroundColor: theme.palette.neutral[200],
        "&.Mui-focusVisible": {
          backgroundColor: darken(
            theme.palette.neutral[200],
            theme.palette.action.hoverOpacity
          ),
        },
        "&:hover": {
          backgroundColor: darken(
            theme.palette.neutral[200],
            theme.palette.action.hoverOpacity
          ),
        },
      },
      "&.Mui-focusVisible": {
        backgroundColor: darken(
          theme.palette.neutral[100],
          theme.palette.action.hoverOpacity
        ),
      },
      "&:hover": {
        backgroundColor: theme.palette.neutral[100],
      },
    },
    selected: {},
  };
});

export default useStyles;
