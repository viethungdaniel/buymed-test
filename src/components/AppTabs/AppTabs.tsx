import { forwardRef } from "react";

import { Tabs } from "@mui/material";
import AppSvgIcon from "@/components/AppSvgIcon";

import ArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import ArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import useStyles from "./AppTabs.styles";

import type { TabsProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type CustomAppTabsProps = {
  indicatorColor?: "primary" | "inherit" | AppThemeColor;
  textColor?: "primary" | "textPrimary" | "inherit" | AppThemeColor;
  enabledDivider?: boolean;
};

export type AppTabsProps = Omit<TabsProps, keyof CustomAppTabsProps> &
  CustomAppTabsProps;

interface AppTabsTypeMap<P = {}, D extends React.ElementType = "span"> {
  props: P & AppTabsProps;
  defaultComponent: D;
}

type AppTabsComponent = OverridableComponent<AppTabsTypeMap>;

const EndScrollButtonIcon = forwardRef(
  (props: any, ref: React.ForwardedRef<any>) => {
    return <AppSvgIcon ref={ref} {...props} component={ArrowRightIcon} />;
  }
);

const StartScrollButtonIcon = forwardRef(
  (props: any, ref: React.ForwardedRef<any>) => {
    return <AppSvgIcon ref={ref} {...props} component={ArrowLeftIcon} />;
  }
);

const AppTabs: AppTabsComponent = forwardRef(
  (props: AppTabsProps, ref: React.ForwardedRef<any>) => {
    const {
      classes: muiClasses,
      className,
      orientation = "horizontal",
      enabledDivider,
      textColor = "primary",
      indicatorColor = "primary",
      sx,
      ...rest
    } = props;

    const { classes, theme, css, cx } = useStyles({
      textColor,
      indicatorColor,
    });

    return (
      <Tabs
        ref={ref}
        {...rest}
        orientation={orientation}
        classes={{
          ...muiClasses,
          root: cx(
            classes.root,
            {
              [classes.verticalDivider]:
                orientation === "vertical" && !!enabledDivider,
              [classes.horizontalDivider]:
                orientation === "horizontal" && !!enabledDivider,
            },
            muiClasses?.root,
            className,
            sx ? css(theme.unstable_sx(sx) as any) : undefined
          ),
          scrollButtons: cx(classes.scrollButtons, muiClasses?.scrollButtons),
          indicator: cx(classes.indicator, muiClasses?.indicator),
          vertical: cx(classes.vertical, muiClasses?.vertical),
        }}
        slots={{
          EndScrollButtonIcon,
          StartScrollButtonIcon,
          ...rest.slots,
        }}
      />
    );
  }
);

export default AppTabs;
