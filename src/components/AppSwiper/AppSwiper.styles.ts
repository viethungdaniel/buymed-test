import { alpha } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles({
  name: "AppSwiper",
})((theme) => {
  return {
    root: {
      position: "relative",
      // "--swiper-pagination-bottom": "12px",
      // "--swiper-pagination-bullet-horizontal-gap": "4px",
      // "--swiper-pagination-bullet-inactive-opacity": "1",
    },
    // pagination: {
    //   display: "flex",
    //   justifyContent: "center",
    //   alignItems: "center",
    // },
    // paginationBullet: {
    //   backgroundColor: theme.palette.text.secondary,
    //   width: 8,
    //   height: 8,
    //   "&.swiper-pagination-bullet-active": {
    //     backgroundColor: theme.palette.text.secondary,
    //   },
    // },
    pagination: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "clip",
    },
    paginationBullet: {
      background: "transparent !important",
      opacity: "1 !important",
      borderRadius: "initial",
      width: 30,
      maxWidth: "100%",
      flex: 1,
      height: 6,
      margin: "0px !important",
      position: "relative",
      // "&.swiper-pagination-bullet-active": {},
      "&:before": {
        content: '""',
        position: "absolute",
        top: "50%",
        left: 0,
        width: "100%",
        height: 3,
        transform: "translateY(-50%)",
        backgroundColor: `${alpha(theme.palette.blue[400], 0.3)} !important`,
      },
      "&:first-of-type": {
        "&:after": {
          content: '""',
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: "calc(100% * var(--slide-index,0))",
          width: "100%",
          height: 6,
          backgroundColor: theme.palette.blue[500],
          pointerEvents: "none",
          transition: theme.transitions.create(["left"]),
        },
      },
    },
    sliderAction: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      marginTop: theme.spacing(3.75 * 2),
      display: "grid",
      gridTemplateColumns: "1fr minmax(0, auto) 1fr",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        marginTop: theme.spacing(3.75),
      },
    },
    sliderActionCenter: {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(2.5),
      height: 20,
      overflow: "clip",
    },
    sliderActionLeft: {},
    sliderActionRight: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: theme.spacing(1.25),
      minWidth: 124,
      [theme.breakpoints.down("md")]: {
        display: "none",
      },
    },
    navigationArrowButtonDisabled: {
      // backgroundColor: theme.palette.action.disabled,
      // "&:hover": {
      //   backgroundColor: theme.palette.action.disabled,
      // },
    },
    hidden: {
      display: "none",
    },
  };
});

export default useStyles;
