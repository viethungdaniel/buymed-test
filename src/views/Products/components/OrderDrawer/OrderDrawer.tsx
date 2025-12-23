import React, { Fragment, useMemo, useState } from "react";
import useStyles from "./OrderDrawer.styles";
import AppTypography from "@/components/AppTypography";
import { commonHelpers } from "@/utils/helpers";
import AppTextField from "@/components/AppTextField";
import AppNumberFormat from "@/components/AppNumberFormat";
import AppInputAdornment from "@/components/AppInputAdornment";
import AppIconButton from "@/components/AppIconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import { useTranslation } from "next-i18next";
import AppButton from "@/components/AppButton";
import { Divider, Portal } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { bindActionCreators } from "redux";
import { storeOrderAction } from "@/store";
import AppDrawer from "@/components/AppDrawer";
import AppDrawerActions from "@/components/AppDrawerActions";
import AppDrawerContent from "@/components/AppDrawerContent";
import { Box } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppBadge from "@/components/AppBadge";

const OrderDrawer = () => {
  const { classes, cx } = useStyles();
  const { t } = useTranslation();

  const [drawerOpen, setDrawerOpen] = useState(false);

  const $s_orderItems = useAppSelector((state) => state.order.order.items);
  const dispatch = useAppDispatch();

  const $s_orderAction = useMemo(
    () => bindActionCreators(storeOrderAction, dispatch),
    [dispatch]
  );

  const orderItemPriceTotal = useMemo(() => {
    return $s_orderItems.reduce((totalPrice, orderItem) => {
      return totalPrice + orderItem.quantity * orderItem.product.price;
    }, 0);
  }, [$s_orderItems]);

  const orderItemCount = useMemo(() => {
    return $s_orderItems.reduce((itemCount, orderItem) => {
      return itemCount + orderItem.quantity;
    }, 0);
  }, [$s_orderItems]);

  return (
    <>
      <Portal>
        <Box className={cx(classes.floatAction)}>
          <AppIconButton
            color="info.main"
            borderRadius="circular"
            variant="contained"
            onClick={() => setDrawerOpen(true)}
          >
            <AppBadge color="primary" badgeContent={orderItemCount}>
              <ShoppingCartIcon />
            </AppBadge>
          </AppIconButton>
        </Box>
      </Portal>
      <AppDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <AppDrawerContent>
          <AppTypography variant="titleMed24" mb={2}>
            {t("orderSummary")}
          </AppTypography>
          <div className={classes.orderItemList}>
            {$s_orderItems.length > 0 ? (
              $s_orderItems.map((orderItem) => {
                const curQuantity = orderItem.quantity;
                return (
                  <Fragment key={orderItem.id}>
                    <div>
                      <AppTypography>{orderItem.product.name}</AppTypography>
                      <AppTypography color="text.secondary">
                        {orderItem.product.category}
                      </AppTypography>
                    </div>
                    <div className={classes.orderItemAction}>
                      <AppTextField
                        inputComponent={AppNumberFormat as any}
                        placeholder="00.00"
                        type="tel"
                        value={orderItem.quantity}
                        inputProps={{
                          pattern: "[0-9]*",
                          decimalScale: 2,
                          valueIsNumericString: true,
                          allowNegative: false,
                          isAllowed: (values: any) => {
                            const { floatValue } = values;
                            return (
                              typeof floatValue === "undefined" ||
                              ((floatValue || 0) >= 1 &&
                                (floatValue || 0) <= 99)
                            );
                          },
                        }}
                        onChange={(event) => {
                          $s_orderAction.updateOrderProductQuantity({
                            itemId: orderItem.id,
                            quantity: Number(event.target.value),
                          });
                        }}
                        startAdornment={
                          <AppInputAdornment position="start">
                            <AppIconButton
                              edge="start"
                              borderRadius="circular"
                              onClick={() => {
                                $s_orderAction.updateOrderProductQuantity({
                                  itemId: orderItem.id,
                                  quantity:
                                    ((curQuantity as number) || 0) - 1 >= 0
                                      ? ((curQuantity as number) || 0) - 1
                                      : 0,
                                });
                              }}
                            >
                              <RemoveOutlinedIcon />
                            </AppIconButton>
                          </AppInputAdornment>
                        }
                        endAdornment={
                          <AppInputAdornment position="end">
                            <AppIconButton
                              edge="end"
                              borderRadius="circular"
                              onClick={() => {
                                $s_orderAction.updateOrderProductQuantity({
                                  itemId: orderItem.id,
                                  quantity: curQuantity + 1,
                                });
                              }}
                            >
                              <AddOutlinedIcon />
                            </AppIconButton>
                          </AppInputAdornment>
                        }
                      />
                    </div>
                    <AppTypography textAlign="end" color="info.main">
                      {commonHelpers.formatNumber(
                        orderItem.product.price * orderItem.quantity
                      )}
                    </AppTypography>
                  </Fragment>
                );
              })
            ) : (
              <AppTypography
                align="center"
                color="text.secondary"
                sx={{ gridColumn: "span 3" }}
              >
                {t("empty")}
              </AppTypography>
            )}
            <Divider sx={{ gridColumn: "span 3" }} />
            <AppTypography>{t("total")}</AppTypography>
            <AppTypography textAlign="center">
              {commonHelpers.formatNumber(orderItemCount)}
            </AppTypography>
            <AppTypography textAlign="end" color="info.main">
              {commonHelpers.formatNumber(orderItemPriceTotal)}
            </AppTypography>
          </div>
        </AppDrawerContent>
        <AppDrawerActions>
          <AppButton fullWidth variant="contained">
            {t("order")}
          </AppButton>
        </AppDrawerActions>
      </AppDrawer>
    </>
  );
};

export default OrderDrawer;
