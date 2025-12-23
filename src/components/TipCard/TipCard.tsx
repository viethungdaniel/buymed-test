import { Box, Skeleton } from "@mui/material";
import AppImage from "@/components/AppImage";
import AppTypography from "@/components/AppTypography";
import AppSvgIcon from "@/components/AppSvgIcon";

import TagIcon from "@@/public/images/icons/tag.svg";

import { forwardRef } from "react";

import useStyles from "./TipCard.styles";

import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { BadgeProps } from "@mui/material";

export type CustomTipCardProps = {
  loading?: boolean;
  tip?: {
    title?: string;
    description?: string;
    image?: string;
    tip_category?: {
      id?: number;
      title?: string;
    };
  };
  fullHeight?: boolean;
  fullWidth?: boolean;
};

export type TipCardProps = CustomTipCardProps &
  Omit<BadgeProps, keyof CustomTipCardProps>;

type TipCardTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & TipCardProps;
  defaultComponent: D;
};
type TipCardComponent = OverridableComponent<TipCardTypeMap>;

const TipCard: TipCardComponent = forwardRef(
  (props: TipCardProps, ref: React.ForwardedRef<any>) => {
    const { className, sx, tip, loading, fullHeight, fullWidth, ...rest } =
      props;

    const { classes, theme, cx, css } = useStyles();

    return (
      <Box
        ref={ref}
        {...rest}
        className={cx(
          classes.root,
          {
            [classes.fullHeight]: !!fullHeight,
            [classes.fullWidth]: !!fullWidth,
          },
          className,
          !!sx && css(theme.unstable_sx(sx) as any)
        )}
      >
        <div className={classes.mediaPhoto}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              className={classes.mediaPhotoSkeleton}
            />
          ) : (
            <AppImage src={tip?.image ?? ""} alt={tip?.title} fill />
          )}
        </div>
        <div className={classes.cardContent}>
          <div className={classes.tipCategory}>
            {loading ? (
              <Skeleton variant="text" sx={{ width: 120, maxWidth: "100%" }} />
            ) : (
              <>
                <AppSvgIcon
                  className={classes.tipCategoryIcon}
                  component={TagIcon}
                />
                <AppTypography variant="captionReg12" noWrap>
                  {tip?.title || "--"}
                </AppTypography>
              </>
            )}
          </div>
          <AppTypography
            className={classes.tipTitle}
            variant="titleMed20"
            noWrap
          >
            {loading ? (
              <Skeleton variant="text" sx={{ width: 180, maxWidth: "100%" }} />
            ) : (
              tip?.title || "--"
            )}
          </AppTypography>
          <AppTypography className={classes.tipContent}>
            {loading ? (
              <Skeleton variant="text" sx={{ width: "100%" }} />
            ) : (
              tip?.description || "--"
            )}
          </AppTypography>
        </div>
      </Box>
    );
  }
);

export default TipCard;
