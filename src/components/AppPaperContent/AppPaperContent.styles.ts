import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppPaperContent",
})((theme) => {
  return {
    root: {
      padding: theme.spacing(2.5),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(2),
      },
    },
  };
});

export default useStyles;
