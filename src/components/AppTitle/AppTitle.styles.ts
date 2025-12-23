import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppTitle",
})((theme) => {
  return {
    root: {
      display: "flex",
      gap: theme.spacing(3),
      [theme.breakpoints.down("sm")]: {
        gap: theme.spacing(2),
      },
    },
    rectangle: {
      height: 60,
      width: 20,
      minWidth: 20,
      borderBottomRightRadius: theme.shape.borderRadius,
      borderTopRightRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.primary.main,
      [theme.breakpoints.down("md")]: {
        height: 44,
        width: 14,
        minWidth: 14,
      },
      [theme.breakpoints.down("sm")]: {
        height: 36,
        width: 10,
        minWidth: 10,
        borderBottomRightRadius: theme.shape.borderRadius - 2,
        borderTopRightRadius: theme.shape.borderRadius - 2,
      },
    },
    title: {
      lineHeight: "60px",
      [theme.breakpoints.down("md")]: {
        lineHeight: "44px",
      },
      [theme.breakpoints.down("sm")]: {
        lineHeight: "36px",
      },
    },
  };
});

export default useStyles;
