import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "NoData",
})((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
    },
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
    },
    content: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: theme.spacing(2.5),
      padding: theme.spacing(3.75, 0),
    },
    icon: {
      height: 400,
      width: "auto",
      maxWidth: "100%",
    },
  };
});

export default useStyles;
