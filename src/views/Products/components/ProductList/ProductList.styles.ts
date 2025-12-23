import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "ProductList",
})((theme) => {
  return {
    productCard: {
      display: "flex",
      flexDirection: "column",
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
      height: "100%",
      boxShadow: theme.app.shadows.menu,
    },
    productCardBadge: {
      position: "absolute",
      top: theme.spacing(2),
      zIndex: 1,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
    },
    productCardPhoto: {
      position: "relative",
      width: "100%",
      paddingTop: "100%",
    },
    productCardContent: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      padding: theme.spacing(1),
      flex: 1,
    },
    productCardQuantity: {
      marginBottom: theme.spacing(1),
      "& input": {
        textAlign: "center",
      },
    },
    productCardFooter: {
      padding: theme.spacing(1),
    },
  };
});

export default useStyles;
