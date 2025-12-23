import dynamic from "next/dynamic";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { commonHelpers } from "@/utils/helpers";

import MainLayout from "@/layouts/MainLayout";
import RootLayout from "@/layouts/RootLayout";
import PageLazyLoading from "@/components/PageLazyLoading";

import type { NextPageWithLayout } from "@/pages/_app";
import type { GetServerSideProps } from "next";

const ViewHome = dynamic(() => import("@/views/Products"), {
  ssr: false,
  loading: () => <PageLazyLoading />,
});

const Home: NextPageWithLayout = () => {
  return <ViewHome />;
};

Home.getLayout = (page) => {
  return (
    <RootLayout>
      <MainLayout>{page}</MainLayout>
    </RootLayout>
  );
};

export default Home;

export const getServerSideProps = (async (ctx) => {
  return {
    props: {
      ...(await commonHelpers.serverSideAppSettings(ctx)),
      ...(await serverSideTranslations(ctx.locale || "")),
    },
  };
}) satisfies GetServerSideProps;
