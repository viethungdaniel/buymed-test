import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "Search",
})((theme) => {
  return {
    root: {
      flex: 1,
    },
    searchTextField: {
      width: 480,
      maxWidth: "100%",
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.down("md")]: {
        width: "100%",
      },
    },
    optionMenuIcon: {
      fontSize: 24,
      color: theme.palette.text.primary,
    },
    optionMenuClear: {
      display: "flex",
      padding: theme.spacing(0.5),
      margin: theme.spacing(-0.5),
      color: theme.palette.text.primary,
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    optionMenuClearIcon: {
      color: "inherit",
      fontSize: 14,
    },
  };
});

export default useStyles;
