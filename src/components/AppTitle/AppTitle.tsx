import { forwardRef } from "react";

import { Box } from "@mui/material";

import useStyles from "./AppTitle.styles";

import type { BoxProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import AppTypography from "@/components/AppTypography";

type CustomAppTitleProps = {
  appClasses?: Partial<ReturnType<typeof useStyles>["classes"]>;
};

type AppTitleProps = Omit<BoxProps, keyof CustomAppTitleProps> &
  CustomAppTitleProps;

type AppTitleTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & AppTitleProps;
  defaultComponent: D;
};
type AppTitleComponent = OverridableComponent<AppTitleTypeMap>;

const AppTitle: AppTitleComponent = forwardRef(
  (props: AppTitleProps, ref: React.ForwardedRef<any>) => {
    const { className, appClasses, sx, children, ...rest } = props;

    const { classes, theme, cx, css } = useStyles(undefined, {
      props: { classes: appClasses },
    });

    return (
      <Box
        ref={ref}
        className={cx(
          classes.root,
          !!className && className,
          sx && css(theme.unstable_sx(sx) as any)
        )}
        {...rest}
      >
        <span className={classes.rectangle} />
        <AppTypography variant="headBold48" className={classes.title}>
          {children}
        </AppTypography>
      </Box>
    );
  }
);

export default AppTitle;
