import { createRoot } from "react-dom/client";
import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import createCache from "@emotion/cache";

import { AppThemeProvider } from "@/theme";
import { Box } from "@mui/material";

import { useEventCallback, useIsMounted } from "@/hooks";

import type { BoxProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type CustomAppShadowRootProps = {};

export type AppShadowRootProps = CustomAppShadowRootProps &
  Omit<BoxProps, keyof CustomAppShadowRootProps>;

type AppShadowRootTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & AppShadowRootProps;
  defaultComponent: D;
};
type AppShadowRootComponent = OverridableComponent<AppShadowRootTypeMap>;

const AppShadowRoot: AppShadowRootComponent = forwardRef(
  (props: AppShadowRootProps, ref: React.ForwardedRef<any>) => {
    const { children, ...rest } = props;

    const rootAnchorRef = useRef<HTMLDivElement | null>(null);
    const reactRootRef = useRef<any>();
    const cacheDivRef = useRef<HTMLDivElement | null>(null);
    const shadowRootRef = useRef<ShadowRoot | null>(null);

    const renderChildren = useEventCallback(
      ({
        appEmotionCache,
        muiEmotionCache,
      }: {
        appEmotionCache: ReturnType<typeof createCache>;
        muiEmotionCache: ReturnType<typeof createCache>;
      }) => {
        return (
          <AppThemeProvider
            appEmotionCache={appEmotionCache}
            muiEmotionCache={muiEmotionCache}
          >
            {children}
          </AppThemeProvider>
        );
      }
    );

    useEffect(() => {
      if (!isMounted()) return;

      cacheDivRef.current = document.createElement("div");

      const appEmotionCache = createCache({
        key: "shadowapp",
        container: shadowRootRef.current!,
      });
      const muiEmotionCache = createCache({
        key: "shadowmui",
        prepend: true,
        container: shadowRootRef.current!,
      });

      reactRootRef.current = createRoot(cacheDivRef.current!);

      const updateChildrenTimeout = setTimeout(() => {
        reactRootRef.current.render(
          renderChildren({
            appEmotionCache,
            muiEmotionCache,
          })
        );
      });
      return () => {
        clearTimeout(updateChildrenTimeout);
      };
    });

    useEffect(() => {
      shadowRootRef.current = rootAnchorRef.current?.attachShadow({
        mode: "open",
      })!;

      // Tạo một thẻ div cho CacheProvider
      cacheDivRef.current = document.createElement("div");

      shadowRootRef.current.appendChild(cacheDivRef.current);

      const appEmotionCache = createCache({
        key: "shadowapp",
        container: shadowRootRef.current,
      });
      const muiEmotionCache = createCache({
        key: "shadowmui",
        prepend: true,
        container: shadowRootRef.current,
      });

      reactRootRef.current = createRoot(cacheDivRef.current);

      reactRootRef.current.render(
        renderChildren({
          appEmotionCache,
          muiEmotionCache,
        })
      );

      return () => {
        const reactRoot = reactRootRef.current;
        reactRootRef.current = undefined;

        setTimeout(() => {
          reactRoot?.unmount();
        });
      };
    }, []);

    useImperativeHandle(ref, () => rootAnchorRef.current);

    const isMounted = useIsMounted();

    return <Box ref={rootAnchorRef} {...rest} />;
  }
);

export default AppShadowRoot;
