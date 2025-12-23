import AppContainer from "@/components/AppContainer";
import { Box, Grid2 } from "@mui/material";
import React, { useEffect, useMemo } from "react";
import ProductList from "./components/ProductList/ProductList";
import OrderSummary from "./components/OrderSummary";
import { bindActionCreators } from "redux";
import { storeProductAction } from "@/store";
import { useAppDispatch } from "@/hooks";
import { useRouter } from "next/router";
import OrderDrawer from "./components/OrderDrawer";

const FetchData = () => {
  const router = useRouter();

  const dispatch = useAppDispatch();

  const $s_productAction = useMemo(
    () => bindActionCreators(storeProductAction, dispatch),
    [dispatch]
  );

  const fetchProducts = () => {
    $s_productAction.fetchProductsSaga({
      params: {
        category: router.query.category_name as any,
        search: router.query.keyword as any,
      },
    });
  };

  useEffect(() => {
    fetchProducts();
  }, [router.query.keyword, router.query.category_name]);

  return null;
};

const Products = () => {
  return (
    <>
      <FetchData />
      <OrderDrawer />
      <AppContainer>
        <Box py={2}>
          <Grid2 container spacing={2}>
            <Grid2 size={{ xs: 12, md: 8 }}>
              <ProductList />
            </Grid2>
            <Grid2
              size={{ xs: 12, md: 4 }}
              display={{ xs: "none", md: "block" }}
            >
              <OrderSummary />
            </Grid2>
          </Grid2>
        </Box>
      </AppContainer>
    </>
  );
};

export default Products;
