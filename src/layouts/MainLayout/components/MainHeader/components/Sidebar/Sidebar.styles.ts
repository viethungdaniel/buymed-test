import { alpha, darken } from "@mui/material";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<
  void,
  "selected" | "focusVisible" | "expanded" | "hasMenuItems"
>({
  name: "Sidebar",
  uniqId: "Kp6M1V",
})((theme, _, classes) => {
  return {
    menuButton: {
      marginRight: theme.spacing(1.25),
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    logoImg: {
      height: 38,
      width: "auto",
    },
    listItem: {
      padding: theme.spacing(1.25, 3),
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.25, 2),
      },
    },
    menuList: {
      flex: 1,
      overflow: "auto",
    },
    menuListItemButton: {
      padding: theme.spacing(1.25, 3),
      paddingLeft: `calc(${theme.spacing(3)} + var(--level,0)*${theme.spacing(
        4
      )})`,
      [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(1.25, 2),
        paddingLeft: `calc(${theme.spacing(2)} + var(--level,0)*${theme.spacing(
          4
        )})`,
      },
      [`&.${classes.selected}`]: {
        color: theme.palette.primary.main,
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
        [`&:is(.${classes.hasMenuItems})`]: {
          backgroundColor: "transparent",
        },
        [`&.${classes.focusVisible}`]: {
          backgroundColor: darken(
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
            theme.palette.action.focusOpacity
          ),
        },
        "&:hover": {
          backgroundColor: darken(
            alpha(
              theme.palette.primary.main,
              theme.palette.action.selectedOpacity
            ),
            theme.palette.contrastThreshold / 10
          ),
        },
      },
    },
    menuListItemArrowIcon: {
      display: "flex",
      transition: theme.transitions.create(["rotate"]),
      rotate: "0deg",
      [`.${classes.expanded} &`]: {
        rotate: "180deg",
      },
    },
    hasMenuItems: {},
    selected: {},
    focusVisible: {},
    expanded: {},
  };
});

export default useStyles;
