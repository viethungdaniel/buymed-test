import AppButton from "@/components/AppButton";
import AppIconButton from "@/components/AppIconButton";
import AppInputAdornment from "@/components/AppInputAdornment";
import AppPaper from "@/components/AppPaper";
import AppSvgIcon from "@/components/AppSvgIcon";
import AppTextField from "@/components/AppTextField";
import { useIsomorphicLayoutEffect } from "@/hooks";
import {
  Box,
  ClickAwayListener,
  Divider,
  Popper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ArrowDownIcon from "@@/public/images/icons/arrow-drop-down.svg";

import AppListItem from "@/components/AppListItem";
import AppListItemText from "@/components/AppListItemText";
import AppListItemIcon from "@/components/AppListItemIcon";
import AppMenuList from "@/components/AppMenuList";

import useStyles from "./Search.styles";
import { useTranslation } from "next-i18next";
import AppListItemButton from "@/components/AppListItemButton";
import CategorySelect from "./components/CategorySelect";
import { AppState } from "@/store";
import { useRouter } from "next/router";

const ScrollingAppMenuList = forwardRef(
  (
    props: React.ComponentProps<typeof AppMenuList>,
    ref: React.ForwardedRef<any>
  ) => {
    const rootElRef = useRef<HTMLUListElement>(null!);

    useIsomorphicLayoutEffect(() => {
      const rootEl = rootElRef.current;
      if (!rootEl) return;
      const updateRootElTimeout = setTimeout(() => {
        const rootElRect = rootEl.getBoundingClientRect();
        rootEl.style.maxHeight = `calc(100vh - ${rootElRect.y}px - 50px)`;
        rootEl.style.overflow = "auto";
      });
      return () => {
        clearTimeout(updateRootElTimeout);
      };
    });

    useImperativeHandle(ref, () => rootElRef.current);

    return <AppMenuList ref={rootElRef} {...props} />;
  }
);

const Search = () => {
  const { classes, theme } = useStyles();

  const router = useRouter();

  const { t } = useTranslation();

  const isMdDown = useMediaQuery(theme.breakpoints.down("md"));

  const [search, setSearch] = useState<any>(router.query.keyword);
  const [selectedCategory, setSelectedCategory] = useState<
    AppState["category"]["categories"][number] | null
  >(() =>
    !!router.query.category_name
      ? ({
          name: router.query.category_name,
        } as any)
      : null
  );
  const [popperAnchorEl, setPopperAnchorEl] = useState<HTMLDivElement>();
  const [popperOpen, setPopperOpen] = useState(false);

  const searchTextFieldRef = useRef<HTMLDivElement>(undefined!);
  const searchTextFieldInputRef = useRef<HTMLInputElement>(undefined!);

  const [optionMenus, setOptionMenus] = useState<any[]>([]);
  const [optionMenusLoading, setOptionMenusLoading] = useState(false);

  const handlePopperToggle: React.MouseEventHandler = (event) => {
    event.preventDefault();
    setPopperAnchorEl(searchTextFieldRef.current);
    setPopperOpen((prevOpen) => !prevOpen);
  };

  const handlePopperOpen = (_?: React.SyntheticEvent) => {
    setPopperOpen(true);
  };

  const handlePopperClose = (event?: React.SyntheticEvent) => {
    if ([searchTextFieldInputRef.current].includes(event?.target as any))
      return;
    setPopperOpen(false);
  };

  const handleTextFieldClick: React.MouseEventHandler = (event) => {
    if (event.target === event.currentTarget) {
      handlePopperToggle(event);
    }
  };

  const handleTextFieldKeyUp = (
    event?: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event?.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    router.push({
      pathname: "/products",
      query: {
        category_name: selectedCategory?.name,
        keyword: search,
      },
    });
    handlePopperClose();
  };

  const handleOptionMenuClick = (optionMenu: string) => () => {
    setSearch(optionMenu);
    handlePopperClose();
  };

  const handleSearchChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newSearch = event.target.value;
    // setPopperOpen(true);
    setSearch(newSearch);
  };

  const handleCategorySelectChange = (
    category: AppState["category"]["categories"][number] | null
  ) => {
    setSelectedCategory(category);
  };

  return (
    <div className={classes.root}>
      <AppTextField
        disabledFormControl
        className={classes.searchTextField}
        ref={searchTextFieldRef}
        inputRef={searchTextFieldInputRef}
        inputProps={{
          onClick: handleTextFieldClick,
          onKeyUp: handleTextFieldKeyUp as any,
        }}
        autoComplete="off"
        placeholder={`${t("searchItems")}...`}
        startAdornment={
          <AppInputAdornment position="start">
            <CategorySelect
              selectedCategory={selectedCategory}
              onCategorySelect={handleCategorySelectChange}
            />
            <Divider
              orientation="vertical"
              sx={(theme) => ({
                height: 20,
                borderColor: theme.palette.divider,
              })}
            />
          </AppInputAdornment>
        }
        endAdornment={
          <AppInputAdornment position="end">
            <AppIconButton
              borderRadius="circular"
              color="text.primary"
              edge={"x"}
              onClick={handleSubmit}
            >
              <AppSvgIcon component={SearchIcon} />
            </AppIconButton>
          </AppInputAdornment>
        }
        value={search}
        onChange={handleSearchChange}
        onClick={handleTextFieldClick}
      />
      <Popper
        open={popperOpen}
        anchorEl={popperAnchorEl}
        placement="bottom-start"
        keepMounted
        modifiers={[
          {
            name: "offset",
            options: {
              offset: [0, 4],
            },
          },
          {
            name: "sameWidth",
            enabled: true,
            phase: "beforeWrite",
            fn: ({ state }) => {
              if (isMdDown) {
                state.styles.popper.width = "calc(100vw - 32px)";
                return;
              }
              state.styles.popper.width = `${state.rects.reference.width}px`;
            },
            effect: ({ state }) => {
              state.elements.popper.style.width = `${
                (state.elements.reference as HTMLDivElement).offsetWidth
              }px`;
            },
          },
        ]}
        style={{
          zIndex: theme.zIndex.tooltip,
        }}
      >
        <ClickAwayListener onClickAway={handlePopperClose as any}>
          <div>
            {optionMenus.length > 0 && (
              <AppPaper elevation="menu">
                <ScrollingAppMenuList>
                  {optionMenus.map((optionMenu, optionMenuIndex) => {
                    const key = optionMenuIndex;
                    return (
                      <AppListItemButton
                        key={key}
                        onClick={handleOptionMenuClick(optionMenu.name)}
                      >
                        <AppListItem disablePadding disableGutters>
                          <AppListItemIcon>
                            <AppSvgIcon
                              className={classes.optionMenuIcon}
                              component={SearchIcon}
                            />
                          </AppListItemIcon>
                          <AppListItemText primary={optionMenu.name} />
                        </AppListItem>
                      </AppListItemButton>
                    );
                  })}
                </ScrollingAppMenuList>
              </AppPaper>
            )}
          </div>
        </ClickAwayListener>
      </Popper>
    </div>
  );
};

export default Search;
