import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import RootLayout from "@/layouts/RootLayout";
import MainLayout from "@/layouts/MainLayout";
import PageLazyLoading from "@/components/PageLazyLoading";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetStaticProps } from "next";

const View404 = dynamic(() => import("@/views/404"), {
  ssr: true,
  loading: () => <PageLazyLoading />,
});

const _404: NextPageWithLayout = () => {
  return <View404 />;
};

_404.getLayout = (page, _, { translation }) => {
  const { t } = translation;

  return (
    <RootLayout
      nextSeoProps={{
        title: t("pageNotFound")!,
      }}
    >
      <MainLayout>{page}</MainLayout>
    </RootLayout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  return {
    props: {
      ...(await serverSideTranslations(ctx.locale || "")),
    },
  };
};

export default _404;
