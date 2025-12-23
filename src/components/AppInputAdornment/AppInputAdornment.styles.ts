import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppInputAdornment",
})((theme) => {
  return {
    positionStart: {
      marginRight: theme.spacing(1.25),
    },
    positionEnd: {
      marginLeft: theme.spacing(1.25),
    },
  };
});

export default useStyles;
