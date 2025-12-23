import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppMenu",
  uniqId: "7vgi7B",
})((theme) => {
  return {
    paper: {
      boxShadow: theme.app.shadows.menu,
    },
  };
});

export default useStyles;
