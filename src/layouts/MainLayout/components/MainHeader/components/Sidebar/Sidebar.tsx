import { commonConfig } from "@/utils/config";

import { Box, Collapse, useMediaQuery } from "@mui/material";
import AppIconButton from "@/components/AppIconButton";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppDrawer from "@/components/AppDrawer";
import AppList from "@/components/AppList";
import AppListItem from "@/components/AppListItem";
import AppLink from "@/components/AppLink";
import AppListItemButton from "@/components/AppListItemButton";
import AppListItemText from "@/components/AppListItemText";
import MainHeaderAppBarToolbar from "@/components/MainHeaderAppBarToolbar";
import AppImage from "@/components/AppImage";
import AppTypography from "@/components/AppTypography";

import KeyboardArrowDown from "@@/public/images/icons/keyboard-arrow-down.svg";

import MenuIcon from "@@/public/images/icons/menu.svg";
import CloseIcon from "@@/public/images/icons/close.svg";

import { Fragment, useContext, useEffect, useMemo, useState } from "react";
import { useIsMounted } from "@/hooks";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import MainHeaderContext from "@/layouts/MainLayout/components/MainHeader/MainHeader.context";

import useStyles from "./Sidebar.styles";

import type { MainHeaderContextValue } from "@/layouts/MainLayout/components/MainHeader/MainHeader.context";

type NavMenuListProps = {
  navMenus: MainHeaderContextValue["navMenus"];
  level?: number;
  onClose?: () => void;
};

const NavMenuList = (props: NavMenuListProps) => {
  const { navMenus, level = 0, onClose } = props;

  const router = useRouter();

  const [subNavMenuOpenMap, setSubNavMenuOpenMap] = useState<{
    [menuIndex: number]: boolean;
  }>(() => {
    const navMenuIndex = navMenus.findIndex(
      (navMenu) =>
        navMenu.pathnameReg.test(router.asPath) &&
        (navMenu.items?.length || 0) > 0
    );
    return navMenuIndex > -1
      ? {
          [navMenuIndex]: true,
        }
      : {};
  });

  const { classes, cx } = useStyles();

  const toggleSubNavMenu = (navMenuIndex: number) => {
    setSubNavMenuOpenMap((prevNavSubMenuOpenMap) => ({
      ...prevNavSubMenuOpenMap,
      [navMenuIndex]: !prevNavSubMenuOpenMap[navMenuIndex],
    }));
  };

  const handleRouteChange = (url: string) => {
    const navMenuIndex = navMenus.findIndex(
      (navMenu) =>
        navMenu.pathnameReg.test(url) && (navMenu.items?.length || 0) > 0
    );
    setSubNavMenuOpenMap(
      navMenuIndex > -1
        ? {
            [navMenuIndex]: true,
          }
        : {}
    );
  };

  useEffect(() => {
    if (isMounted()) {
      handleRouteChange(router.asPath);
    }
  }, [router.asPath]);

  const isMounted = useIsMounted();

  return (
    <AppList className={classes.menuList} disablePadding>
      {navMenus.map((navMenu, navMenuIndex) => {
        const hasMenuItems = (navMenu.items?.length ?? 0) > 0;
        const disabled = !!navMenu.loading;

        return (
          <Fragment key={`index-${navMenuIndex}`}>
            <AppListItemButton
              component={AppLink}
              href={navMenu.href}
              underline="none"
              hoverColor="none"
              disabled={disabled}
              selected={navMenu.pathnameReg.test(router.asPath)}
              classes={{
                root: cx(
                  classes.menuListItemButton,
                  hasMenuItems && classes.hasMenuItems,
                  !!subNavMenuOpenMap[navMenuIndex] &&
                    !disabled &&
                    classes.expanded
                ),
                selected: classes.selected,
                focusVisible: classes.focusVisible,
              }}
              disableGutters
              sx={{ "--level": level }}
              onClick={(event) => {
                if (hasMenuItems) {
                  event.stopPropagation();
                  event.preventDefault();
                  toggleSubNavMenu(navMenuIndex);
                  return;
                }
                onClose && onClose();
              }}
            >
              <AppListItemText
                primary={navMenu.title}
                primaryTypographyProps={{
                  variant: "bodyMed16",
                }}
              />
              {hasMenuItems && (
                <div className={cx(classes.menuListItemArrowIcon)}>
                  <AppSvgIcon component={KeyboardArrowDown} />
                </div>
              )}
            </AppListItemButton>
            {hasMenuItems && !disabled && (
              <Collapse in={!!subNavMenuOpenMap[navMenuIndex]}>
                <NavMenuList
                  navMenus={navMenu.items!}
                  level={level + 1}
                  onClose={onClose}
                />
              </Collapse>
            )}
          </Fragment>
        );
      })}
    </AppList>
  );
};

const Sidebar = () => {
  const { navMenus } = useContext(MainHeaderContext);

  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  const { classes, theme } = useStyles();

  const { t } = useTranslation();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const sidebarNavMenus = useMemo(() => {
    return [
      {
        title: t("homepage"),
        href: "/",
        pathnameReg: new RegExp("^/$"),
      },
      ...navMenus,
    ] as typeof navMenus;
  }, [navMenus, t]);

  const handleMenuDrawerOpen = () => {
    setMenuDrawerOpen(true);
  };

  const handleMenuDrawerClose = () => {
    setMenuDrawerOpen(false);
  };

  useEffect(() => {
    if (!isMounted()) return;
    !isMdDown && setMenuDrawerOpen(false);
  }, [isMdDown]);

  const isMounted = useIsMounted();

  return (
    <>
      <div className={classes.menuButton}>
        <AppIconButton
          color="text.primary"
          edge={"start"}
          onClick={handleMenuDrawerOpen}
        >
          <AppSvgIcon component={MenuIcon} />
        </AppIconButton>
      </div>
      <AppDrawer
        anchor="left"
        open={menuDrawerOpen}
        onClose={handleMenuDrawerClose}
      >
        <MainHeaderAppBarToolbar>
          <AppLink
            href="/"
            underline="none"
            hoverColor="none"
            display="flex"
            onClick={handleMenuDrawerClose}
          >
            <AppImage
              className={classes.logoImg}
              width={500}
              height={500}
              src="/images/logo-text.svg"
              defaultPlaceholderVariant="none"
              unoptimized
            />
          </AppLink>
          <Box flex={1} />
          <AppIconButton
            edge="end"
            color="text.primary"
            onClick={handleMenuDrawerClose}
          >
            <AppSvgIcon component={CloseIcon} />
          </AppIconButton>
        </MainHeaderAppBarToolbar>

        <NavMenuList
          navMenus={sidebarNavMenus}
          onClose={handleMenuDrawerClose}
        />

        <AppList disablePadding>
          <AppListItem className={classes.listItem} component="div">
            <AppListItemText
              primary={
                <Box display="flex" alignItems="center" component="span">
                  <Box flex={1} />
                  <AppTypography
                    component="span"
                    variant="inherit"
                    color="textSecondary"
                  >
                    v.{commonConfig.APP_VERSION}
                  </AppTypography>
                </Box>
              }
              primaryTypographyProps={{
                variant: "bodyMed16",
                component: "div" as any,
              }}
            />
          </AppListItem>
        </AppList>
      </AppDrawer>
    </>
  );
};

export default Sidebar;
