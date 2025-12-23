import AppImage from "@/components/AppImage";
import AppTypography from "@/components/AppTypography";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { AppState, storeOrderAction } from "@/store";
import { Grid2 } from "@mui/material";
import React, { useMemo, useState } from "react";
import useStyles from "./ProductList.styles";
import AppButton from "@/components/AppButton";
import { useTranslation } from "next-i18next";
import LoadingOverlay from "@/components/LoadingOverlay";
import AppIconButton from "@/components/AppIconButton";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import RemoveOutlinedIcon from "@mui/icons-material/RemoveOutlined";
import AppTextField from "@/components/AppTextField";
import AppInputAdornment from "@/components/AppInputAdornment";
import AppNumberFormat from "@/components/AppNumberFormat";
import { commonHelpers } from "@/utils/helpers";
import AppChip from "@/components/AppChip";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";

type ProductCardProps = {
  product?: AppState["product"]["products"][number];
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;

  const dispatch = useAppDispatch();

  const $s_orderAction = useMemo(
    () => bindActionCreators(storeOrderAction, dispatch),
    [dispatch]
  );

  const [quantity, setQuantity] = useState<EmptySafeNumber>("");

  const { classes } = useStyles();

  const { t } = useTranslation();

  const handleAddToCart = () => {
    toast.success(t("addToCardSuccess"));
    setQuantity("");
    $s_orderAction.addToOrder({
      product: product!,
      quantity: quantity as number,
    });
  };

  return (
    <div className={classes.productCard}>
      {!!product?.isPrescription && (
        <AppChip
          label={"Rx"}
          color="primary"
          borderRadius="rounded"
          className={classes.productCardBadge}
        />
      )}
      <div className={classes.productCardPhoto}>
        <AppImage src="/images/buymed-logo.png" fill />
      </div>
      <div className={classes.productCardContent}>
        <AppTypography>{product?.name}</AppTypography>
        <AppTypography color="text.secondary">
          {product?.category}
        </AppTypography>
        <AppTypography color="info.main">
          {commonHelpers.formatNumber(product?.price)}
        </AppTypography>
      </div>
      <div className={classes.productCardFooter}>
        <div className={classes.productCardQuantity}>
          <AppTextField
            inputComponent={AppNumberFormat as any}
            placeholder="00.00"
            type="tel"
            value={quantity}
            inputProps={{
              pattern: "[0-9]*",
              decimalScale: 2,
              valueIsNumericString: true,
              allowNegative: false,
              isAllowed: (values: any) => {
                const { floatValue } = values;
                return (
                  typeof floatValue === "undefined" ||
                  ((floatValue || 0) >= 1 && (floatValue || 0) <= 99)
                );
              },
            }}
            onChange={(event) => {
              setQuantity(event.target.value as EmptyNumber);
            }}
            startAdornment={
              <AppInputAdornment position="start">
                <AppIconButton
                  edge="start"
                  borderRadius="circular"
                  onClick={() =>
                    setQuantity((curQuantity) =>
                      ((curQuantity as number) || 0) - 1 > 0
                        ? ((curQuantity as number) || 0) - 1
                        : ""
                    )
                  }
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
                  onClick={() =>
                    setQuantity((curQuantity) =>
                      ((curQuantity as number) || 0) + 1 <= 99
                        ? ((curQuantity as number) || 0) + 1
                        : 99
                    )
                  }
                >
                  <AddOutlinedIcon />
                </AppIconButton>
              </AppInputAdornment>
            }
          />
        </div>
        <AppButton
          disabled={!quantity}
          fullWidth
          noWrap
          variant="contained"
          size="small"
          onClick={handleAddToCart}
        >
          {t("addToCard")}
        </AppButton>
      </div>
    </div>
  );
};

const ProductList = () => {
  const $s_products = useAppSelector((state) => state.product.products);
  const $s_productsLoading = useAppSelector(
    (state) => state.product.productsLoading
  );

  const { t } = useTranslation();

  return (
    <div>
      <LoadingOverlay loading={$s_productsLoading}>
        <Grid2 container spacing={2}>
          {$s_products.length > 0 ? (
            $s_products.map((product) => (
              <Grid2 key={product.id} size={{ xs: 6, sm: 4, lg: 3 }}>
                <ProductCard product={product} />
              </Grid2>
            ))
          ) : (
            <AppTypography>{t("notFound")}</AppTypography>
          )}
        </Grid2>
      </LoadingOverlay>
    </div>
  );
};

export default ProductList;
