import { forwardRef } from "react";

import { Pagination, PaginationItem } from "@mui/material";
import AppSvgIcon from "@/components/AppSvgIcon";

import ArrowLeftAltIcon from "@@/public/images/icons/arrow-left-alt.svg";
import ArrowRightAltIcon from "@@/public/images/icons/arrow-right-alt.svg";

import useStyles from "./AppPagination.styles";

import type { PaginationProps } from "@mui/material";

type CustomAppPaginationProps = {
  color?: "primary" | "secondary" | "error" | AppThemeColor;
  textColor?: "default" | AppThemeColor;
};

export type AppPaginationProps = Omit<
  PaginationProps,
  keyof CustomAppPaginationProps | "size"
> &
  CustomAppPaginationProps;

const ArrowPrevIcon = forwardRef((props: any, ref: React.ForwardedRef<any>) => {
  return (
    <AppSvgIcon
      ref={ref}
      {...props}
      component={ArrowLeftAltIcon}
      fontSize="inherit"
    />
  );
});

const ArrowNextIcon = forwardRef((props: any, ref: React.ForwardedRef<any>) => {
  return (
    <AppSvgIcon
      ref={ref}
      {...props}
      component={ArrowRightAltIcon}
      fontSize="inherit"
    />
  );
});

const AppPagination = forwardRef(
  (props: AppPaginationProps, ref: React.ForwardedRef<any>) => {
    const { color = "secondary", textColor = "default", ...rest } = props;

    const { classes, cx } = useStyles({
      color,
      textColor,
    });

    return (
      <Pagination
        ref={ref}
        renderItem={(item) => (
          <PaginationItem
            slots={{ previous: ArrowPrevIcon, next: ArrowNextIcon }}
            {...item}
            classes={{
              root: cx(classes.paginationItem),
              text: cx(classes.paginationItemText),
              outlined: cx(classes.paginationItemOutlined),
              selected: cx(classes.selected),
            }}
          />
        )}
        {...rest}
      />
    );
  }
);

export default AppPagination;
