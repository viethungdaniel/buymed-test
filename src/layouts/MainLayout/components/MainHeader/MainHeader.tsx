import { AppBar } from "@mui/material";
import AppContainer from "@/components/AppContainer";
import AppLink from "@/components/AppLink";
import MainHeaderAppBarToolbar from "@/components/MainHeaderAppBarToolbar";
import AppImage from "@/components/AppImage";
import LanguageSelect from "@/layouts/MainLayout/components/MainHeader/components/LanguageSelect";

import { useMemo } from "react";
import { useTranslation } from "next-i18next";

import MainHeaderContext from "@/layouts/MainLayout/components/MainHeader/MainHeader.context";

import useStyles from "./MainHeader.styles";
import Search from "./components/Search";

const MainHeader = () => {
  const { classes } = useStyles();

  const { t } = useTranslation();

  const navMenus = useMemo(() => {
    return [
      // {
      //   code: "PRODUCTS",
      //   title: t("products"),
      //   href: "/products",
      //   pathnameReg: new RegExp("^/products"),
      // },
    ];
  }, [t]);

  return (
    <MainHeaderContext.Provider
      value={{
        navMenus,
      }}
    >
      <AppBar
        component="header"
        className={classes.root}
        elevation={0}
        color="default"
      >
        <AppContainer>
          <MainHeaderAppBarToolbar disableGutters sx={{ gap: 2 }}>
            <AppLink href="/" underline="none" hoverColor="none" display="flex">
              <AppImage
                className={classes.logoImg}
                width={500}
                height={500}
                defaultPlaceholderVariant="none"
                src="/images/buymed-logo.png"
                unoptimized
              />
            </AppLink>

            <Search />

            <LanguageSelect />
          </MainHeaderAppBarToolbar>
        </AppContainer>
      </AppBar>
      <MainHeaderAppBarToolbar />
    </MainHeaderContext.Provider>
  );
};

export default MainHeader;
