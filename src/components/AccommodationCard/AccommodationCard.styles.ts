import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AccommodationCard",
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
    mediaPhotoRankSvg: {
      position: "absolute",
      top: 0,
      left: theme.spacing(2.5),
      width: 50,
      height: "auto",
      zIndex: 10,
      pointerEvents: "none",
    },
    mediaPhotoSwiper: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: theme.shape.borderRadius,
      overflow: "clip",
      zIndex: 0,
    },
    mediaPhotoSwiperPrevButton: {
      position: "absolute",
      top: "50%",
      left: 0,
      transform: "translate(-100%,-50%)",
      zIndex: 1,
    },
    mediaPhotoSwiperRightButton: {
      position: "absolute",
      top: "50%",
      right: 0,
      transform: "translate(100%,-50%)",
      zIndex: 10,
    },
    mediaPhotoSwiperButtonDisabled: {
      color: `${theme.palette.action.disabled} !important`,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    mediaPhotoSlideItem: {
      width: "100%",
      paddingTop: "100%",
    },
    mediaPhotoSlideItemImage: {
      objectFit: "cover",
      objectPosition: "center",
    },
    mediaPhoto: {
      position: "relative",
      paddingTop: "100%",
      marginBottom: theme.spacing(2.5),
      "& img": {
        objectFit: "cover",
        objectPosition: "center",
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
      height: 32,
      position: "relative",
      overflow: "clip",
      "& > *": {
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
      },
    },
    content: {
      color: theme.palette.text.secondary,
      display: "grid",
      gridTemplateColumns: "1fr auto",
      rowGap: theme.spacing(1.25),
      columnGap: theme.spacing(2.5),
    },
    hidden: {
      display: "none",
    },
  };
});

export default useStyles;
