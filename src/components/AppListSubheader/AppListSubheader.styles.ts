import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "appListSubheader",
})((theme) => {
  return {
    root: {
      lineHeight: "44px",
    },
    gutters: {
      paddingLeft: theme.spacing(1.25),
      paddingRight: theme.spacing(1.25),
    },
  };
});

export default useStyles;
