import { forwardRef } from "react";

import { commonHelpers } from "@/utils/helpers";

import { Box } from "@mui/material";

import useStyles from "./AppContent.styles";

import type { BoxProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type AppContentEdge = "top" | "bottom" | "y";

type CustomAppContentProps = {
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  edge?: AppContentEdge | AppContentEdge[];
};

type AppContentProps = Omit<BoxProps, keyof CustomAppContentProps> &
  CustomAppContentProps;

type AppContentTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & AppContentProps;
  defaultComponent: D;
};
type AppContentComponent = OverridableComponent<AppContentTypeMap>;

const AppContent: AppContentComponent = forwardRef(
  (props: AppContentProps, ref: React.ForwardedRef<any>) => {
    const { className, classes: appClasses, edge, sx, ...rest } = props;

    const edges = Array.isArray(edge)
      ? edge
      : !commonHelpers.isEmpty(edge)
      ? [edge!]
      : [];

    const { classes, theme, cx, css } = useStyles(undefined, {
      props: { classes: appClasses },
    });

    return (
      <Box
        ref={ref}
        className={cx(
          classes.root,
          {
            [classes.edgeTop]: edges.includes("top"),
            [classes.edgeBottom]: edges.includes("bottom"),
            [classes.edgeBottom]: edges.includes("y"),
          },
          !!className && className,
          sx && css(theme.unstable_sx(sx) as any)
        )}
        {...rest}
      />
    );
  }
);

export default AppContent;
