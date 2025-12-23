import { Box } from "@mui/material";
import AppTypography from "@/components/AppTypography";
import AppSelect from "@/components/AppSelect";
import AppSelectMenuItem from "@/components/AppSelectMenuItem";
import AppTextField from "@/components/AppTextField";
import AppPagination from "@/components/AppPagination";
import AppNumberFormat from "@/components/AppNumberFormat";

import { useTranslation } from "next-i18next";
import { forwardRef, useState } from "react";
import { useDebouncedCallback } from "@/hooks";

import useStyles from "./MainPagination.styles";

import type { BoxProps } from "@mui/material";
import type { OverridableComponent } from "@mui/material/OverridableComponent";

type CustomMainPaginationProps = {
  count: number;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: number[];
  onPageChange: (event: React.MouseEvent | null, page: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent, perPage: number) => void;
};

export type MainPaginationProps = BoxProps &
  Omit<BoxProps, keyof CustomMainPaginationProps> &
  CustomMainPaginationProps;

type MainPaginationTypeMap<P = {}, D extends React.ElementType = "div"> = {
  props: P & MainPaginationProps;
  defaultComponent: D;
};
type MainPaginationComponent = OverridableComponent<MainPaginationTypeMap>;

const MainPagination: MainPaginationComponent = forwardRef(
  (props: MainPaginationProps, ref: React.ForwardedRef<any>) => {
    const {
      count,
      page,
      rowsPerPage,
      rowsPerPageOptions = [9, 18, 36],
      className,
      sx,
      onPageChange,
      onRowsPerPageChange,
      ...rest
    } = props;

    const [pageInput, setPageInput] = useState(page);

    const { t } = useTranslation();

    const { classes, theme, css, cx } = useStyles();

    const debounceOnPageChange = useDebouncedCallback(
      onPageChange ?? (() => {}),
      250
    );

    const handlePageInputChange = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const newPage = event.target.value as unknown as number;
      setPageInput(newPage);
      debounceOnPageChange(
        {
          target: {
            value: newPage || 1,
          },
        } as any,
        newPage || 1
      );
    };

    return (
      <Box
        {...rest}
        ref={ref}
        className={cx(
          classes.root,
          className,
          sx && css(theme.unstable_sx(sx) as any)
        )}
      >
        <div className={classes.startItem}>
          <AppTypography>{t("itemsPerPage")}</AppTypography>
          <AppSelect
            className={classes.perPageSelect}
            disabledFormControl
            value={rowsPerPage}
            bgColor="background.default"
            onChange={(event: any) => {
              onRowsPerPageChange &&
                onRowsPerPageChange(event, Number(event.target.value));
            }}
          >
            {rowsPerPageOptions.map((rowsPerPageOption) => (
              <AppSelectMenuItem
                key={rowsPerPageOption}
                value={rowsPerPageOption}
              >
                {rowsPerPageOption}
              </AppSelectMenuItem>
            ))}
          </AppSelect>
          <AppTypography>
            {t("fromToToOfCountItemsWithCount_other", {
              count,
              from: (page - 1) * rowsPerPage + 1,
              to:
                (page - 1) * rowsPerPage + rowsPerPage > count
                  ? count
                  : (page - 1) * rowsPerPage + rowsPerPage,
            })}
          </AppTypography>
        </div>
        <div className={classes.endItem}>
          <AppPagination
            count={Math.ceil(count / rowsPerPage)}
            page={page}
            onChange={onPageChange as any}
          />
          <div className={classes.pageInput}>
            <AppTypography>{t("goTo")}</AppTypography>
            <AppTextField
              value={pageInput}
              disabledFormControl
              className={classes.pageTextField}
              bgColor="background.default"
              inputComponent={AppNumberFormat as any}
              inputProps={{
                decimalScale: 0,
                valueIsNumericString: true,
                isAllowed: (values: any) => {
                  const { floatValue } = values;
                  return (
                    ((floatValue || 0) > 0 &&
                      (floatValue || 0) <= Math.ceil(count / rowsPerPage)) ||
                    typeof floatValue === "undefined"
                  );
                },
              }}
              onChange={handlePageInputChange}
            />
          </div>
        </div>
      </Box>
    );
  }
);

export default MainPagination;
