import { forwardRef } from "react";

import { Box } from "@mui/material";
import AppTypography from "@/components/AppTypography";

import FireworkSvg from "@@/public/images/svgs/firework.svg";
import AlertErrorSvg from "@@/public/images/svgs/alert-error.svg";

import useStyles from "./AlertDialogContentStatus.styles";

import type { BoxProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type CustomAlertDialogContentStatusProps = {
  variant?: "succeeded" | "failed";
  title?: React.ReactNode;
  content?: React.ReactNode;
  children?: null;
  appClasses?: Partial<ReturnType<typeof useStyles>>;
};

export type AlertDialogContentStatusProps =
  CustomAlertDialogContentStatusProps &
    Omit<BoxProps, keyof CustomAlertDialogContentStatusProps>;

type AlertDialogContentStatusTypeMap<
  P = {},
  D extends React.ElementType = "div"
> = {
  props: P & AlertDialogContentStatusProps;
  defaultComponent: D;
};
type AlertDialogContentStatusComponent =
  OverridableComponent<AlertDialogContentStatusTypeMap>;

const AlertDialogContentStatus: AlertDialogContentStatusComponent = forwardRef(
  (props: AlertDialogContentStatusProps, ref: React.ForwardedRef<any>) => {
    const {
      appClasses,
      variant = "succeeded",
      title,
      content,
      className,
      sx,
      ...rest
    } = props;

    const { classes, theme, css, cx } = useStyles(undefined, {
      props: {
        classes: appClasses,
      },
    });

    return (
      <Box
        ref={ref}
        {...rest}
        className={cx(
          classes.root,
          className,
          sx && css(theme.unstable_sx(sx) as any)
        )}
      >
        {variant === "succeeded" && <FireworkSvg className={classes.icon} />}
        {variant === "failed" && <AlertErrorSvg className={classes.icon} />}
        {title && (
          <AppTypography className={classes.title} variant="titleSemi20">
            {title}
          </AppTypography>
        )}
        {content && (
          <AppTypography className={classes.content}>{content}</AppTypography>
        )}
        <Box width={theme.breakpoints.values.sm / 2} maxWidth="100%" />
      </Box>
    );
  }
);

export default AlertDialogContentStatus;
