import { forwardRef } from "react";

import { commonHelpers } from "@/utils/helpers";

import { Box } from "@mui/material";
import parseHtml, { domToReact } from "html-react-parser";
import AppLink from "@/components/AppLink";
import AppTypography from "@/components/AppTypography";
import AppImage from "@/components/AppImage";

import useStyles from "./HtmlParser.styles";

import type { HTMLReactParserOptions } from "html-react-parser";
import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { AppTypographyProps } from "@/components/AppTypography";
import type { BoxProps } from "@mui/material";
import type { AppLinkProps } from "@/components/AppLink";

type CustomHtmlParserProps = {
  html?: string;
  htmlOptions?: HTMLReactParserOptions;
  children?: null;
};

export type HtmlParserProps = Omit<BoxProps, keyof CustomHtmlParserProps> &
  CustomHtmlParserProps;

type HtmlParserTypeMap<P = {}, D extends React.ElementType = "span"> = {
  props: P & HtmlParserProps;
  defaultComponent: D;
};
type HtmlParserComponent = OverridableComponent<HtmlParserTypeMap>;

const HtmlParser: HtmlParserComponent = forwardRef(
  (props: HtmlParserProps, ref: React.ForwardedRef<any>) => {
    const { html, className, htmlOptions, sx, ...rest } = props;

    const { classes, theme, cx, css } = useStyles();

    const tagToPropsMap = {
      a: {
        variant: "bodyReg16",
        component: AppLink,
        color: "primary",
        disabledNextLink: true,
        target: "_blank",
      } as AppLinkProps,
      u: {
        variant: "bodyReg16",
      },
      p: {
        variant: "bodyReg16",
      },
      h1: {
        variant: "headReg48",
      },
      h2: {
        variant: "headReg48",
      },
      h3: {
        variant: "headReg32",
      },
      h4: {
        variant: "titleReg24",
      },
      h5: {
        variant: "titleReg20",
      },
      h6: {
        variant: "bodyReg16",
      },
      pre: {
        variant: "bodyReg16",
      },
      li: {
        variant: "bodyReg16",
      },
    } as {
      [key: string]: AppTypographyProps & {
        [key: string]: any;
      };
    };

    const htmlParserOptions = {
      replace: (options: any) => {
        const { children, attribs, name } = options;

        if (!attribs) {
          return;
        }

        if (!!name) {
          if (!!tagToPropsMap[name]) {
            const { class: attribClass, ...attribsRest } = attribs || {};
            return (
              <AppTypography
                component={name ?? "span"}
                {...tagToPropsMap[name]}
                {...attribsRest}
                className={cx(attribClass)}
                style={commonHelpers.parseStyles(attribs.style)}
              >
                {domToReact(children, htmlParserOptions)}
              </AppTypography>
            );
          }

          if (name === "img") {
            const {
              class: attribClass,
              src,
              width,
              height,
              style,
              ...attribsRest
            } = attribs || {};
            if (!src) return;

            return (
              <AppImage
                src={src}
                width={width || theme.breakpoints.values.xl}
                height={height || theme.breakpoints.values.xl}
                className={cx(attribClass, classes.img)}
                style={commonHelpers.parseStyles(style)}
                {...attribsRest}
              />
            );
          }
        }
      },
    };

    return (
      <Box
        ref={ref}
        className={cx(
          classes.root,
          className,
          sx && css(theme.unstable_sx(sx) as any)
        )}
        {...rest}
        component="section"
      >
        <div className={classes.clearMarginTop} />
        {parseHtml(html || "", { ...htmlParserOptions, ...htmlOptions })}
      </Box>
    );
  }
);

export default HtmlParser;
