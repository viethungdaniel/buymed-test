import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "SchoolCard",
})((theme) => {
  return {
    root: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(5),
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
      overflow: "clip",
      paddingTop: "100%",
      marginBottom: theme.spacing(2.5),
      "& img": {
        objectFit: "cover",
        objectPosition: "center",
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
    location: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
      marginBottom: theme.spacing(1.25),
      color: theme.palette.neutral[600],
    },
    locationIcon: {
      color: "inherit",
      fontSize: 16,
    },
    title: {
      marginBottom: theme.spacing(1.25),
    },
    content: {
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
