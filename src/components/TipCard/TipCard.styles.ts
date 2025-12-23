import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "TipCard",
})((theme) => {
  return {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      maxWidth: "100%",
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: theme.shape.borderRadius,
      "&:hover": {
        "& img": {
          transform: "scale(1.2)",
        },
      },
    },
    fullWidth: {
      width: "100%",
    },
    fullHeight: {
      height: "100%",
    },
    tag: {
      position: "absolute",
      top: 0,
      left: "50%",
      transform: "translate(-50%,-50%)",
    },
    mediaPhoto: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      overflow: "clip",
      paddingTop: "calc(100%*194/398)",
      "& img": {
        transformOrigin: "top",
        objectFit: "cover",
        objectPosition: "top",
        transition: theme.transitions.create(["transform"]),
      },
    },
    mediaPhotoSkeleton: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    cardContent: {
      padding: theme.spacing(2.5),
    },
    tipCategory: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
      marginBottom: theme.spacing(1.25),
      color: theme.palette.neutral[600],
    },
    tipCategoryIcon: {
      color: "inherit",
      fontSize: 16,
    },
    tipTitle: {
      marginBottom: theme.spacing(1.25),
    },
    tipContent: {
      color: theme.palette.text.secondary,
      overflow: "clip",
      display: "-webkit-box",
      WebkitLineClamp: 2,
      WebkitBoxOrient: "vertical",
      minHeight: `calc(${theme.typography.bodyReg16.lineHeight}*2)`,
    },
    hidden: {
      display: "none",
    },
  };
});

export default useStyles;
