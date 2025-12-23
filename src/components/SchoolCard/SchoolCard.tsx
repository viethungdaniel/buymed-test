import { Box, Skeleton } from "@mui/material";
import AppImage from "@/components/AppImage";
import AppTypography from "@/components/AppTypography";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppChip from "@/components/AppChip";

import LocationPinIcon from "@@/public/images/icons/location-pin.svg";
import StarIcon from "@@/public/images/icons/star.svg";

import { forwardRef } from "react";
import { useTranslation } from "next-i18next";

import useStyles from "./SchoolCard.styles";

import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { BadgeProps } from "@mui/material";

export type CustomSchoolCardProps = {
  loading?: boolean;
  school?: {
    name?: string;
    description?: string;
    image?: string;
    city?: {
      id?: number;
      name?: string;
    };
    is_recommend?: boolean;
  };
  fullHeight?: boolean;
  fullWidth?: boolean;
};

export type SchoolCardProps = CustomSchoolCardProps &
  Omit<BadgeProps, keyof CustomSchoolCardProps>;

type SchoolCardTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & SchoolCardProps;
  defaultComponent: D;
};
type SchoolCardComponent = OverridableComponent<SchoolCardTypeMap>;

const SchoolCard: SchoolCardComponent = forwardRef(
  (props: SchoolCardProps, ref: React.ForwardedRef<any>) => {
    const { className, sx, school, loading, fullHeight, fullWidth, ...rest } =
      props;

    const { t } = useTranslation();

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
        <AppChip
          className={cx(
            classes.tag,
            (!school?.is_recommend || !!loading) && classes.hidden
          )}
          borderRadius="rounded"
          label={
            <AppTypography
              variant="inherit"
              component="div"
              display="flex"
              gap={0.5}
            >
              <AppSvgIcon component={StarIcon} fontSize="small" />
              {t("recommended")}
            </AppTypography>
          }
        />
        <div className={classes.mediaPhoto}>
          {loading ? (
            <Skeleton
              variant="rectangular"
              className={classes.mediaPhotoSkeleton}
            />
          ) : (
            <AppImage src={school?.image ?? ""} fill />
          )}
        </div>
        <div className={classes.location}>
          {loading ? (
            <Skeleton variant="text" sx={{ width: 120, maxWidth: "100%" }} />
          ) : (
            <>
              <AppSvgIcon
                className={classes.locationIcon}
                component={LocationPinIcon}
              />
              <AppTypography variant="captionReg12" noWrap>
                {school?.city?.name || "--"}
              </AppTypography>
            </>
          )}
        </div>
        <AppTypography className={classes.title} variant="titleMed20" noWrap>
          {loading ? (
            <Skeleton variant="text" sx={{ width: 180, maxWidth: "100%" }} />
          ) : (
            school?.name || "--"
          )}
        </AppTypography>
        <AppTypography className={classes.content}>
          {loading ? (
            <Skeleton variant="text" sx={{ width: "100%" }} />
          ) : (
            school?.description || "--"
          )}
        </AppTypography>
      </Box>
    );
  }
);

export default SchoolCard;
