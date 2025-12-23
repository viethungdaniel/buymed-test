import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppContent",
})((theme) => {
  const spacing = `80px`;
  const mdSpacing = theme.spacing(3.75);
  const smSpacing = theme.spacing(2.5);

  return {
    root: {
      paddingTop: spacing,
      paddingBottom: spacing,
      [theme.breakpoints.down("md")]: {
        paddingTop: mdSpacing,
        paddingBottom: mdSpacing,
      },
      [theme.breakpoints.down("sm")]: {
        paddingTop: smSpacing,
        paddingBottom: smSpacing,
      },
    },
    edgeTop: {
      marginTop: `-${spacing}`,
      [theme.breakpoints.down("md")]: {
        marginTop: `-${mdSpacing}`,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `-${smSpacing}`,
      },
    },
    edgeBottom: {
      marginBottom: `-${spacing}`,
      [theme.breakpoints.down("md")]: {
        marginBottom: `-${mdSpacing}`,
      },
      [theme.breakpoints.down("sm")]: {
        marginBottom: `-${smSpacing}`,
      },
    },
    edgeY: {
      marginTop: `-${spacing}`,
      marginBottom: `-${spacing}`,
      [theme.breakpoints.down("md")]: {
        marginTop: `-${mdSpacing}`,
        marginBottom: `-${mdSpacing}`,
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: `-${mdSpacing}`,
        marginBottom: `-${smSpacing}`,
      },
    },
  };
});

export default useStyles;
