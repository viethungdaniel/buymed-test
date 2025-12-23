import { makeStyles } from "tss-react/mui";
import _get from "lodash/get";

const useStyles = makeStyles({
  name: "AppTooltip",
})((theme) => {
  return {
    tooltip: {
      backgroundColor: theme.palette.text.primary,
      borderRadius: theme.shape.borderRadius,
      padding: "6.25px 10.25px",
      ...(theme.typography.captionMed12 as React.CSSProperties),
    },
  };
});

export default useStyles;
