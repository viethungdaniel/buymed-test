import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "MainPagination",
})((theme) => {
  return {
    root: {
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      gap: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },
    endItem: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    startItem: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    perPageSelect: {
      "& .MuiSelect-select": {
        minWidth: "2ch",
      },
    },
    pageInput: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2),
    },
    pageTextField: {
      "& input": {
        width: "3ch",
      },
    },
  };
});

export default useStyles;
