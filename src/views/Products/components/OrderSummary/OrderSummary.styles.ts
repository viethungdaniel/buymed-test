import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "OrderSummary",
})((theme) => {
  return {
    orderItemList: {
      display: "grid",
      gridTemplateColumns: "1fr auto auto",
      alignItems: "center",
      rowGap: theme.spacing(2),
      columnGap: theme.spacing(2),
    },
    orderItemAction: {
      width: 140,
    },
  };
});

export default useStyles;
