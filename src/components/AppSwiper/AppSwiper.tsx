import React, { Children, forwardRef, useId, useState } from "react";

import { Swiper } from "swiper/react";
import {
  Pagination,
  Navigation,
  Virtual,
  Autoplay,
  EffectFade,
  Thumbs,
  Controller,
  EffectCoverflow,
  FreeMode,
  Grid,
} from "swiper/modules";
import AppSvgIcon from "@/components/AppSvgIcon";
import { Box } from "@mui/material";
import AppContainer from "@/components/AppContainer";
import AppTypography from "@/components/AppTypography";
import AppButton from "@/components/AppButton";

import ArrowLeftAltIcon from "@@/public/images/icons/arrow-left-alt.svg";
import ArrowRightAltIcon from "@@/public/images/icons/arrow-right-alt.svg";

import useStyles from "./AppSwiper.styles";

import type { BoxProps } from "@mui/material";
import type { SwiperProps } from "swiper/react";
import type { PaginationOptions, NavigationOptions } from "swiper/types";
import type { AppContainerProps } from "@/components/AppContainer";

type CustomAppSwiperProps = {
  pagination?: PaginationOptions;
  navigation?: NavigationOptions;
  classes?: Partial<ReturnType<typeof useStyles>["classes"]>;
  rootProps?: BoxProps;
  beforePagination?: React.ReactNode;
  sliderActionContainerProps?: AppContainerProps;
};

export type AppSwiperProps = Omit<
  SwiperProps,
  "modules" & keyof CustomAppSwiperProps
> &
  CustomAppSwiperProps;

const AppSwiper = forwardRef(
  (props: AppSwiperProps, ref: React.ForwardedRef<any>) => {
    const {
      pagination,
      navigation,
      speed = 1000,
      classes: appClasses,
      rootProps,
      initialSlide = 0,
      sliderActionContainerProps,
      children,
      beforePagination,
      onSlideChange,
      ...rest
    } = props;

    const [slideIndex, setSlideIndex] = useState(initialSlide);

    const slideItemCount = Children.count(children);

    const id = useId();

    const { classes, theme, css, cx } = useStyles(undefined, {
      props: {
        classes: appClasses,
      },
    });

    const swiperCustomPaginationClassName = `AppSwiper-customPagination-${id.replaceAll(
      ":",
      ""
    )}`;
    const swiperCustomNavigationNextButtonClassName = `AppSwiper-buttonNext-${id.replaceAll(
      ":",
      ""
    )}`;
    const swiperCustomNavigationPrevButtonClassName = `AppSwiper-buttonPrev-${id.replaceAll(
      ":",
      ""
    )}`;
    const navigationEnabled =
      (typeof navigation === "boolean" && !!navigation) ||
      !!navigation?.enabled;
    const paginationEnabled =
      (typeof pagination === "boolean" && !!pagination) ||
      !!pagination?.enabled;

    return (
      <Box
        {...rootProps}
        className={cx(
          classes.root,
          slideItemCount < 1 && classes.hidden,
          rootProps?.className
        )}
      >
        <Swiper
          ref={ref}
          {...rest}
          speed={speed}
          navigation={{
            disabledClass: classes.navigationArrowButtonDisabled,
            nextEl: `.${swiperCustomNavigationNextButtonClassName}`,
            prevEl: `.${swiperCustomNavigationPrevButtonClassName}`,
            ...(navigation as any),
            enabled: navigationEnabled,
          }}
          pagination={{
            el: `.${swiperCustomPaginationClassName}`,
            clickable: true,
            renderBullet: function (_, className) {
              return `<span class="${cx(
                className,
                classes.paginationBullet
              )}"></span>`;
            },
            ...(pagination as any),
          }}
          modules={[
            Pagination,
            Navigation,
            Virtual,
            Autoplay,
            Thumbs,
            EffectFade,
            FreeMode,
            Controller,
            EffectCoverflow,
            Grid,
          ]}
          {...rest}
          initialSlide={initialSlide}
          onSlideChange={(swiper) => {
            onSlideChange && onSlideChange(swiper);
            setSlideIndex(swiper.realIndex);
          }}
        >
          {children}
        </Swiper>
        <AppContainer
          {...sliderActionContainerProps}
          className={cx(
            classes.sliderAction,
            !paginationEnabled &&
              (!navigationEnabled ||
                (!!navigation.prevEl && !!navigation.nextEl)) &&
              !beforePagination &&
              classes.hidden,
            sliderActionContainerProps?.className,
            sliderActionContainerProps?.sx &&
              css(theme.unstable_sx(sliderActionContainerProps.sx) as any)
          )}
        >
          <div className={classes.sliderActionLeft}></div>
          <div
            className={cx(
              classes.sliderActionCenter,
              !beforePagination && !paginationEnabled && classes.hidden
            )}
            style={
              {
                "--slide-index": !!paginationEnabled ? slideIndex : undefined,
              } as React.CSSProperties
            }
          >
            {beforePagination}
            <AppTypography
              variant="captionMed12"
              color="secondary"
              whiteSpace="nowrap"
              className={cx(!paginationEnabled && classes.hidden)}
            >
              {slideIndex + 1 >= 10 ? slideIndex + 1 : `0${slideIndex + 1}`}
            </AppTypography>
            <div
              className={cx(
                swiperCustomPaginationClassName,
                classes.pagination,
                !paginationEnabled && classes.hidden
              )}
            />
            <AppTypography
              variant="captionMed12"
              color="secondary"
              whiteSpace="nowrap"
              className={cx(!paginationEnabled && classes.hidden)}
            >
              {slideItemCount >= 10 ? slideItemCount : `0${slideItemCount}`}
            </AppTypography>
          </div>
          <div>
            {(!navigation?.nextEl || !navigation.prevEl) && (
              <div
                className={cx(
                  classes.sliderActionRight,
                  !navigationEnabled && classes.hidden
                )}
              >
                {!navigation?.prevEl && (
                  <AppButton
                    variant="contained"
                    color="neutral.100"
                    size="small"
                    edge="y"
                    className={cx(swiperCustomNavigationPrevButtonClassName)}
                  >
                    <AppSvgIcon
                      component={ArrowLeftAltIcon}
                      sx={{ my: "-1px" }}
                    />
                  </AppButton>
                )}
                {!navigation?.nextEl && (
                  <AppButton
                    variant="contained"
                    color="neutral.100"
                    size="small"
                    edge="y"
                    className={cx(swiperCustomNavigationNextButtonClassName)}
                  >
                    <AppSvgIcon
                      component={ArrowRightAltIcon}
                      sx={{ my: "-1px" }}
                    />
                  </AppButton>
                )}
              </div>
            )}
          </div>
        </AppContainer>
      </Box>
    );
  }
);

export default AppSwiper;
