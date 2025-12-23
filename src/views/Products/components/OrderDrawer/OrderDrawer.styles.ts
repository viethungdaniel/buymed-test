import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "OrderDrawer",
})((theme) => {
  return {
    floatAction: {
      position: "fixed",
      right: theme.spacing(2),
      bottom: theme.spacing(2),
      zIndex: theme.zIndex.appBar,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: theme.spacing(3.75),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
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
