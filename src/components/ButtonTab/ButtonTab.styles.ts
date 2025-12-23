import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "ButtonTab",
})((theme) => {
  return {
    root: {
      position: "relative",
      zIndex: 1,
      minHeight: 48 - 4 - 1,
      minWidth: 90 - 4 - 1,
      padding: theme.spacing("10px", "23px"),
      color: theme.palette.text.secondary,
      borderRadius: (48 - 4) / 2,
      border: `1px solid ${theme.palette.divider}`,
      backgroundColor: theme.palette.common.white,
      ...(theme.typography.button as any),
    },
    selected: {
      ...(theme.typography.button as any),
      backgroundColor: "transparent",
      color: theme.palette.common.white,
      borderColor: "transparent",
    },
  };
});

export default useStyles;
