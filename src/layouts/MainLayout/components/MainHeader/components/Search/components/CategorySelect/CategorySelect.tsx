import AppButton from "@/components/AppButton";
import AppPaper from "@/components/AppPaper";
import AppSvgIcon from "@/components/AppSvgIcon";
import { useAppSelector, useIsomorphicLayoutEffect } from "@/hooks";
import { ClickAwayListener, Popper, Typography, useTheme } from "@mui/material";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

import ArrowDownIcon from "@@/public/images/icons/arrow-drop-down.svg";

import AppListItem from "@/components/AppListItem";
import AppListItemText from "@/components/AppListItemText";
import AppMenuList from "@/components/AppMenuList";
import AppListItemButton from "@/components/AppListItemButton";

import { useTranslation } from "next-i18next";

// import useStyles from "./Search.styles";

import type { AppState } from "@/store";

type CategorySelectProps = {
  selectedCategory?: Partial<AppState["category"]["categories"][number]> | null;
  onCategorySelect?: (
    category: AppState["category"]["categories"][number] | null
  ) => void;
};

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

const CategorySelect = (props: CategorySelectProps) => {
  const { selectedCategory, onCategorySelect } = props;

  const theme = useTheme();

  const { t } = useTranslation();

  const [popperAnchorEl, setPopperAnchorEl] = useState<any>();
  const [popperOpen, setPopperOpen] = useState(false);

  const categoryButtonAnchorRef = useRef<HTMLButtonElement | null>(null);

  const $s_categories = useAppSelector((state) => state.category.categories);

  const handlePopperToggle: React.MouseEventHandler = () => {
    setPopperAnchorEl(categoryButtonAnchorRef.current);
    setPopperOpen((prevOpen) => !prevOpen);
  };

  const handlePopperClose = (event: any) => {
    if (
      !!event &&
      ([categoryButtonAnchorRef.current].includes(event?.target as any) ||
        categoryButtonAnchorRef.current?.contains(event?.target))
    )
      return;
    setPopperOpen(false);
  };

  const handleOptionMenuClick =
    (optionMenu: (typeof $s_categories)[number] | null) => () => {
      onCategorySelect && onCategorySelect(optionMenu);
      setPopperOpen(false);
    };

  return (
    <>
      <AppButton
        ref={categoryButtonAnchorRef}
        edge={"start"}
        endIcon={<AppSvgIcon component={ArrowDownIcon} sx={{ fontSize: 12 }} />}
        onClick={handlePopperToggle}
      >
        <Typography
          variant="inherit"
          noWrap
          sx={{ maxWidth: 120 }}
          component="span"
        >
          {!!selectedCategory?.name ? selectedCategory.name : t("category")}
        </Typography>
      </AppButton>
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
              // if (isMdDown) {
              //   state.styles.popper.width = "calc(100vw - 32px)";
              //   return;
              // }
              // state.styles.popper.width = `${state.rects.reference.width}px`;
              state.styles.popper.width = `auto`;
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
            {$s_categories.length > 0 && (
              <AppPaper elevation="menu">
                <ScrollingAppMenuList>
                  <AppListItemButton onClick={handleOptionMenuClick(null)}>
                    <AppListItem disablePadding disableGutters>
                      <AppListItemText primary={t("all")} />
                    </AppListItem>
                  </AppListItemButton>
                  {$s_categories.map((optionMenu, optionMenuIndex) => {
                    const key = optionMenuIndex;
                    return (
                      <AppListItemButton
                        key={key}
                        onClick={handleOptionMenuClick(optionMenu)}
                      >
                        <AppListItem disablePadding disableGutters>
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
    </>
  );
};

export default CategorySelect;
