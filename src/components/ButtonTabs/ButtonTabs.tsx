import { forwardRef } from "react";

import { Tabs } from "@mui/material";
import AppSvgIcon from "@/components/AppSvgIcon";

import KeyboardArrowLeftIcon from "@@/public/images/icons/keyboard-arrow-left.svg";
import KeyboardArrowRightIcon from "@@/public/images/icons/keyboard-arrow-right.svg";

import useStyles from "./ButtonTabs.styles";

import type { TabsProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

export type CustomButtonTabsProps = {
  indicatorColor?: "primary" | "inherit" | AppThemeColor;
  textColor?: "primary" | "textPrimary" | "inherit" | AppThemeColor;
  enabledDivider?: boolean;
  noWrap?: boolean;
};

export type ButtonTabsProps = Omit<TabsProps, keyof CustomButtonTabsProps> &
  CustomButtonTabsProps;

interface ButtonTabsTypeMap<P = {}, D extends React.ElementType = "span"> {
  props: P & ButtonTabsProps;
  defaultComponent: D;
}

type ButtonTabsComponent = OverridableComponent<ButtonTabsTypeMap>;

const EndScrollButtonIcon = forwardRef(
  (props: any, ref: React.ForwardedRef<any>) => {
    return (
      <AppSvgIcon ref={ref} {...props} component={KeyboardArrowRightIcon} />
    );
  }
);

const StartScrollButtonIcon = forwardRef(
  (props: any, ref: React.ForwardedRef<any>) => {
    return (
      <AppSvgIcon ref={ref} {...props} component={KeyboardArrowLeftIcon} />
    );
  }
);

const ButtonTabs: ButtonTabsComponent = forwardRef(
  (props: ButtonTabsProps, ref: React.ForwardedRef<any>) => {
    const {
      classes: muiClasses,
      orientation = "horizontal",
      enabledDivider,
      textColor,
      indicatorColor = "textPrimary",
      noWrap,
      ...rest
    } = props;

    const { classes, cx } = useStyles({
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
              [classes.labelNoWrap]: !!noWrap,
              [classes.verticalDivider]:
                orientation === "vertical" && !!enabledDivider,
              [classes.horizontalDivider]:
                orientation === "horizontal" && !!enabledDivider,
            },
            muiClasses?.root
          ),
          scrollButtons: cx(classes.scrollButtons, muiClasses?.scrollButtons),
          indicator: cx(classes.indicator, muiClasses?.indicator),
          vertical: cx(classes.vertical, muiClasses?.vertical),
          flexContainer: cx(classes.flexContainer, muiClasses?.flexContainer),
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

export default ButtonTabs;
