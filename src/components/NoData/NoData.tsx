import { forwardRef, useMemo } from "react";

import { commonHelpers } from "@/utils/helpers";

import { Box } from "@mui/material";
import AppTypography from "@/components/AppTypography";
import AppContainer from "@/components/AppContainer";

import NoResultsSvg from "@@/public/images/svgs/no-results.svg";

import { useTranslation } from "next-i18next";

import useStyles from "./NoData.styles";

import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { BoxProps } from "@mui/material";

type CustomNoDataProps = {
  title?: React.ReactNode;
};

export type NoDataProps = Omit<BoxProps, keyof CustomNoDataProps> &
  CustomNoDataProps;

type NoDataTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & NoDataProps;
  defaultComponent: D;
};
type NoDataComponent = OverridableComponent<NoDataTypeMap>;

const NoData: NoDataComponent = forwardRef(
  (props: NoDataProps, ref: React.ForwardedRef<any>) => {
    const { className, title: controlledTitle, sx, ...rest } = props;

    const { t } = useTranslation();

    const title = useMemo(() => {
      if (!commonHelpers.isEmpty(controlledTitle)) return controlledTitle;
      return t("noResultsFound_text");
    }, [t, controlledTitle]);

    const { classes, theme, cx, css } = useStyles();

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
        <AppContainer className={classes.container} maxWidth="sm">
          <div className={classes.content}>
            <Box display="flex" justifyContent="center">
              <NoResultsSvg className={classes.icon} />
            </Box>
            <AppTypography variant="titleReg24" align="center">
              {title}
            </AppTypography>
          </div>
        </AppContainer>
      </Box>
    );
  }
);

export default NoData;
