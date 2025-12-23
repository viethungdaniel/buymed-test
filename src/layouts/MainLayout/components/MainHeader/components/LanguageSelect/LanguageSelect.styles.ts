import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<void, "expanded">({
  name: "LanguageSelect",
  uniqId: "IAR2wN",
})((theme, _, classes) => {
  return {
    arrowIcon: {
      marginRight: -4,
      marginLeft: theme.spacing(0.5),
      color: theme.palette.text.primary,
      transition: theme.transitions.create(["rotate"]),
      rotate: "0deg",
      [`.${classes.expanded} &`]: {
        rotate: "180deg",
      },
    },
    expanded: {},
  };
});

export default useStyles;
