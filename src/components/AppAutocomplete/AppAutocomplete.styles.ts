import { appButtonClasses } from "@/components/AppButton";
import { appIconButtonClasses } from "@/components/AppIconButton";
import { darken } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles<
  void,
  "input" | "root" | "hasClearIcon" | "hasPopupIcon" | "endAdornment"
>({
  name: "appAutocomplete",
  uniqId: "CTmsfJ",
})((theme, _, classes) => {
  return {
    root: {
      [`&  .MuiOutlinedInput-root .${classes.endAdornment}`]: {
        right: `calc(${theme.spacing(1.25)} - 6px)`,
      },
      [`& .MuiOutlinedInput-root`]: {
        padding: `6px ${theme.spacing(1.25 / 2)}`, // input height
        "& .MuiAutocomplete-input": {
          padding: `4.5px ${theme.spacing(1.25 / 2)} 4.5px ${theme.spacing(
            1.25 / 2
          )}`,
          "&.MuiInputBase-inputAdornedEnd": {
            paddingRight: 0,
          },
          "&.MuiInputBase-inputAdornedStart": {
            paddingLeft: 0,
          },
        },
        "& .MuiInputAdornment-positionStart, & .MuiInputAdornment-positionEnd":
          {
            [`& .${appButtonClasses.root}`]: {
              height: 44,
              [`&.${appButtonClasses.textEdgeStart},&.${appButtonClasses.textEdgeEnd},&.${appButtonClasses.textEdgeX},&.${appButtonClasses.textEdgeXY}`]:
                {
                  paddingLeft: theme.spacing(1.25),
                  paddingRight: theme.spacing(1.25),
                },

              [`&.${appButtonClasses.textEdgeX},&.${appButtonClasses.textEdgeXY},&.${appButtonClasses.containedEdgeX},&.${appButtonClasses.containedEdgeXY},&.${appButtonClasses.containedTonalEdgeX},&.${appButtonClasses.containedTonalEdgeXY},&.${appButtonClasses.outlinedEdgeX},&.${appButtonClasses.outlinedEdgeXY}`]:
                {
                  marginLeft: theme.spacing(-1.25 / 2),
                  marginRight: theme.spacing(-1.25 / 2),
                },

              [`&.${appButtonClasses.textEdgeStart},&.${appButtonClasses.containedEdgeStart},&.${appButtonClasses.containedTonalEdgeStart},&.${appButtonClasses.outlinedEdgeStart}`]:
                {
                  marginLeft: theme.spacing(-1.25 / 2),
                },

              [`&.${appButtonClasses.textEdgeEnd},&.${appButtonClasses.containedEdgeEnd},&.${appButtonClasses.containedTonalEdgeEnd},&.${appButtonClasses.outlinedEdgeEnd}`]:
                {
                  marginRight: theme.spacing(-1.25 / 2),
                },
            },

            [`& .${appIconButtonClasses.root}`]: {
              [`&.${appIconButtonClasses.textEdgeStart},&.${appIconButtonClasses.textEdgeEnd},&.${appIconButtonClasses.textEdgeX},&.${appIconButtonClasses.textEdgeXY}`]:
                {
                  padding: theme.spacing(1.25),
                },
              [`&.${appIconButtonClasses.textEdgeX},&.${appIconButtonClasses.textEdgeXY},&.${appIconButtonClasses.containedEdgeX},&.${appIconButtonClasses.containedEdgeXY},&.${appIconButtonClasses.containedTonalEdgeX},&.${appIconButtonClasses.containedTonalEdgeXY},&.${appIconButtonClasses.outlinedEdgeX},&.${appIconButtonClasses.outlinedEdgeXY}`]:
                {
                  marginLeft: theme.spacing(-1.25 / 2),
                  marginRight: theme.spacing(-1.25 / 2),
                },

              [`&.${appIconButtonClasses.textEdgeStart},&.${appIconButtonClasses.containedEdgeStart},&.${appIconButtonClasses.containedTonalEdgeStart},&.${appIconButtonClasses.outlinedEdgeStart}`]:
                {
                  marginLeft: theme.spacing(-1.25 / 2),
                },

              [`&.${appIconButtonClasses.textEdgeEnd},&.${appIconButtonClasses.containedEdgeEnd},&.${appIconButtonClasses.containedTonalEdgeEnd},&.${appIconButtonClasses.outlinedEdgeEnd}`]:
                {
                  marginRight: theme.spacing(-1.25 / 2),
                },
            },
          },
      },
    },
    input: {},
    option: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-start",
      overflow: "auto",
    },
    listbox: {
      paddingTop: 0,
      paddingBottom: 0,
      "& .MuiAutocomplete-option": {
        padding: theme.spacing(1.25),
        position: "relative",
        minHeight: 44,
        // "&:after": {
        //   content: '""',
        //   position: "absolute",
        //   bottom: 0,
        //   left: "50%",
        //   transform: "translateX(-50%)",
        //   width: "calc(100% - 24px - 16px)",
        //   height: 1,
        //   backgroundColor: theme.palette.divider,
        // },
        // "&:last-of-type:after": {
        //   height: 0,
        // },
        [`&[aria-selected="true"]`]: {
          backgroundColor: theme.palette.neutral[200],
          "&:hover": {
            backgroundColor: darken(
              theme.palette.neutral[200],
              theme.palette.action.hoverOpacity
            ),
          },
          "&.Mui-focused": {
            backgroundColor: darken(
              theme.palette.neutral[200],
              theme.palette.action.focusOpacity
            ),
          },
          "&.Mui-focusVisible": {
            backgroundColor: darken(
              theme.palette.neutral[200],
              theme.palette.action.hoverOpacity
            ),
          },
        },
        "&.Mui-focused": {
          backgroundColor: darken(
            theme.palette.neutral[100],
            theme.palette.action.focusOpacity
          ),
        },
        "&:hover": {
          backgroundColor: darken(
            theme.palette.neutral[100],
            theme.palette.action.focusOpacity
          ),
        },
      },
    },
    noOptions: {
      padding: theme.spacing(1.25),
      minHeight: 44,
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.primary,
      fontSize: theme.typography.bodyReg16.fontSize,
      fontWeight: theme.typography.bodyReg16.fontWeight,
      lineHeight: theme.typography.bodyReg16.lineHeight,
      fontFamily: theme.typography.bodyReg16.fontFamily,
    },
    loading: {
      padding: theme.spacing(1.25),
      minHeight: 60,
      display: "flex",
      alignItems: "center",
      color: theme.palette.text.primary,
      fontSize: theme.typography.bodyReg16.fontSize,
      fontWeight: theme.typography.bodyReg16.fontWeight,
      lineHeight: theme.typography.bodyReg16.lineHeight,
      fontFamily: theme.typography.bodyReg16.fontFamily,
    },
    hasPopupIcon: {
      [`&.${classes.root} .MuiOutlinedInput-root`]: {
        paddingRight: 28 + 10 + 1 - 6,
      },
      [`&.${classes.hasClearIcon}.${classes.root} .MuiOutlinedInput-root`]: {
        paddingRight: 28 * 2 + 10 + 1 - 6,
      },
      "& .MuiInputBase-inputAdornedEnd": {
        paddingLeft: 0,
      },
      "& .MuiInputBase-inputAdornedStart": {
        paddingRight: 0,
      },
    },
    hasClearIcon: {
      [`&.${classes.root} .MuiOutlinedInput-root`]: {
        paddingRight: 28 + 8 + 1,
      },
      [`&.${classes.hasClearIcon}.${classes.root} .MuiOutlinedInput-root`]: {
        paddingRight: 28 * 2 + 8 + 1,
      },
      "& .MuiInputBase-inputAdornedEnd": {
        paddingLeft: 0,
      },
      "& .MuiInputBase-inputAdornedStart": {
        paddingRight: 0,
      },
    },
    popupIndicator: {
      transition: theme.transitions.create(["transform"]),
    },
    endAdornment: {},
    selectedIcon: {
      fontSize: 24,
      marginRight: -2,
      color: "inherit",
    },
    popupIcon: {
      fontSize: 24,
      color: theme.palette.text.primary,
    },
    clearIcon: {
      fontSize: 24,
      color: theme.palette.text.primary,
    },
    tag: {
      [`.${classes.root} &`]: {
        margin: 3,
        marginLeft: 0,
        "& + .MuiAutocomplete-input.MuiInputBase-inputAdornedStart": {
          paddingLeft: 3,
        },
      },
    },
  };
});

export default useStyles;
