import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AlertDialogContentStatus",
})((theme) => {
  return {
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
    icon: {
      width: 80,
      maxWidth: "100%",
      height: "auto",
      marginBottom: theme.spacing(2.5),
    },
    title: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: theme.palette.secondary.main,
      marginBottom: theme.spacing(1.25),
    },
    content: {},
  };
});

export default useStyles;
