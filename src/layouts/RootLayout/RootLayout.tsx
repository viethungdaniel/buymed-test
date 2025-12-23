import { NextSeo } from "next-seo";

import { NoSsr } from "@mui/material";
import RouterLoadingLinearProgress from "@/components/RouterLoadingLinearProgress";
import AlertDialog from "@/components/AlertDialog";
import AppToastContainer from "@/components/AppToastContainer";
import LoadingScreenOverlay from "@/components/LoadingScreenOverlay";
import AppInitialize from "@/layouts/RootLayout/components/AppInitialize";

import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { useIsMounted } from "@/hooks";

import type { NextSeoProps } from "next-seo";

export type RootLayoutProps = {
  nextSeoProps?: NextSeoProps;
  children: React.ReactNode;
};

const RootLayout = (props: RootLayoutProps) => {
  const { nextSeoProps, children } = props;

  const [pageRefreshing, setPageRefreshing] = useState(false);

  const { i18n } = useTranslation();

  useEffect(() => {
    if (!isMounted()) return;
    setPageRefreshing(true);
  }, [i18n.language]);

  useEffect(() => {
    if (!isMounted()) return;
    pageRefreshing && setPageRefreshing(false);
  }, [pageRefreshing]);

  const isMounted = useIsMounted();

  return (
    <>
      <NextSeo {...nextSeoProps} />
      <NoSsr>
        <AppInitialize />
        <RouterLoadingLinearProgress />
        <AlertDialog />
        <AppToastContainer />
        <LoadingScreenOverlay />
      </NoSsr>
      {!pageRefreshing && <>{children}</>}
    </>
  );
};

export default RootLayout;
