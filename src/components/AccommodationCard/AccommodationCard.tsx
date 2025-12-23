import { Box, Skeleton } from "@mui/material";
import AppImage from "@/components/AppImage";
import AppTypography from "@/components/AppTypography";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppChip from "@/components/AppChip";
import AppSwiper from "../AppSwiper";
import { SwiperSlide } from "swiper/react";
import AppIconButton from "../AppIconButton";

import LocationPinIcon from "@@/public/images/icons/location-pin.svg";
import StarIcon from "@@/public/images/icons/star.svg";
import KeyboardArrowLeftIcon from "@@/public/images/icons/keyboard-arrow-left.svg";
import KeyboardArrowRightIcon from "@@/public/images/icons/keyboard-arrow-right.svg";
import RankNumberOneSvg from "@@/public/images/svgs/rank-number-one.svg";
import RankNumberTwoSvg from "@@/public/images/svgs/rank-number-two.svg";
import RankNumberThreeSvg from "@@/public/images/svgs/rank-number-three.svg";

import { forwardRef, useId } from "react";
import { useTranslation } from "next-i18next";

import useStyles from "./AccommodationCard.styles";

import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { BadgeProps } from "@mui/material";
import { commonHelpers } from "@/utils/helpers";

export type CustomAccommodationCardProps = {
  loading?: boolean;
  accommodation?: {
    rank?: number;
    name?: string;
    description?: string;
    rent?: string;
    management_fee?: string;
    images?: string[];
    city?: {
      id?: number;
      name?: string;
    };
    is_recommend?: boolean;
  };
  fullHeight?: boolean;
  fullWidth?: boolean;
};

export type AccommodationCardProps = CustomAccommodationCardProps &
  Omit<BadgeProps, keyof CustomAccommodationCardProps>;

type AccommodationCardTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & AccommodationCardProps;
  defaultComponent: D;
};
type AccommodationCardComponent =
  OverridableComponent<AccommodationCardTypeMap>;

type ThumbnailSwiperProps = {
  thumbnails: string[];
};

const ThumbnailSwiper = (props: ThumbnailSwiperProps) => {
  const { thumbnails } = props;

  const { classes, cx } = useStyles();

  const id = useId();

  const swiperCustomNavigationNextButtonClassName = `ThumbnailSwiper-buttonNext-${id.replaceAll(
    ":",
    ""
  )}`;
  const swiperCustomNavigationPrevButtonClassName = `ThumbnailSwiper-buttonPrev-${id.replaceAll(
    ":",
    ""
  )}`;

  return (
    <>
      <AppIconButton
        size="small"
        borderRadius="circular"
        color="text.primary"
        className={cx(
          classes.mediaPhotoSwiperPrevButton,
          swiperCustomNavigationPrevButtonClassName
        )}
      >
        <AppSvgIcon component={KeyboardArrowLeftIcon} />
      </AppIconButton>
      <AppSwiper
        classes={{
          root: classes.mediaPhotoSwiper,
          navigationArrowButtonDisabled: classes.mediaPhotoSwiperButtonDisabled,
        }}
        initialSlide={0}
        slidesPerView={1}
        navigation={{
          enabled: true,
          nextEl: `.${swiperCustomNavigationNextButtonClassName}`,
          prevEl: `.${swiperCustomNavigationPrevButtonClassName}`,
        }}
      >
        {thumbnails.map((thumbnail, thumbnailIndex) => (
          <SwiperSlide
            key={`index-${thumbnailIndex}`}
            className={cx(classes.mediaPhotoSlideItem)}
          >
            <AppImage
              className={classes.mediaPhotoSlideItemImage}
              defaultImgSrc={"/images/logo.svg"}
              fill
              src={thumbnail}
              alt=""
            />
          </SwiperSlide>
        ))}
      </AppSwiper>
      <div />
      <AppIconButton
        borderRadius="circular"
        size="small"
        color="text.primary"
        className={cx(
          classes.mediaPhotoSwiperRightButton,
          swiperCustomNavigationNextButtonClassName
        )}
      >
        <AppSvgIcon component={KeyboardArrowRightIcon} />
      </AppIconButton>
    </>
  );
};

const AccommodationCard: AccommodationCardComponent = forwardRef(
  (props: AccommodationCardProps, ref: React.ForwardedRef<any>) => {
    const {
      className,
      sx,
      accommodation,
      loading,
      fullHeight,
      fullWidth,
      ...rest
    } = props;

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
            (!accommodation?.is_recommend || !!loading) && classes.hidden
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
          {loading || (accommodation?.images?.length ?? 0) < 1 ? (
            <Skeleton
              variant="rectangular"
              className={classes.mediaPhotoSkeleton}
            />
          ) : (
            <>
              {accommodation?.rank === 1 && (
                <RankNumberOneSvg className={classes.mediaPhotoRankSvg} />
              )}
              {accommodation?.rank === 2 && (
                <RankNumberTwoSvg className={classes.mediaPhotoRankSvg} />
              )}
              {accommodation?.rank === 3 && (
                <RankNumberThreeSvg className={classes.mediaPhotoRankSvg} />
              )}
              <ThumbnailSwiper thumbnails={accommodation?.images ?? []} />
            </>
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
                {accommodation?.city?.name || "--"}
              </AppTypography>
            </>
          )}
        </div>
        <div className={classes.title}>
          <AppTypography variant="titleMed20" noWrap>
            {loading ? (
              <Skeleton variant="text" sx={{ width: 180, maxWidth: "100%" }} />
            ) : (
              accommodation?.name || "--"
            )}
          </AppTypography>
        </div>
        {loading ? (
          <>
            <Skeleton variant="text" sx={{ width: "100%" }} />
            <Skeleton variant="text" sx={{ width: "70%" }} />
          </>
        ) : (
          <div className={classes.content}>
            <AppTypography whiteSpace="nowrap">{t("location")}</AppTypography>
            <AppTypography align="right">
              {accommodation?.city?.name || "--"}
            </AppTypography>
            <AppTypography whiteSpace="nowrap">{t("rent")}</AppTypography>
            <AppTypography align="right">
              {commonHelpers.getAppUnitPrice(accommodation?.rent)}
            </AppTypography>
            <AppTypography whiteSpace="nowrap">
              {t("managementFee")}
            </AppTypography>
            <AppTypography align="right">
              {commonHelpers.getAppUnitPrice(accommodation?.rent)}
            </AppTypography>
          </div>
        )}
      </Box>
    );
  }
);

export default AccommodationCard;
