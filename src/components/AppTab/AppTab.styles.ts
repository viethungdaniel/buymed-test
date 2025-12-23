import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppTab",
})((theme) => {
  return {
    root: {
      minHeight: 48 + 12,
      minWidth: 90 + 12,
      padding: theme.spacing(1.5, `${16 + 12}px`),
      color: theme.palette.text.primary,
      ...(theme.typography.bodySemi16 as any),
    },
    selected: {
      ...(theme.typography.bodySemi16 as any),
    },
  };
});

export default useStyles;
