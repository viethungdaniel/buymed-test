import { bindActionCreators } from "redux";

import { storeCategoryAction, storeOrderAction } from "@/store";
import { commonConfig } from "@/utils/config";

import { useEffect, useMemo } from "react";
import { useAppDispatch } from "@/hooks";
import { storageService } from "@/services";
import { storageKeyConstants } from "@/utils/constants";

const AppInitialize = () => {
  const dispatch = useAppDispatch();

  const $s_categoryAction = useMemo(
    () => bindActionCreators(storeCategoryAction, dispatch),
    [dispatch]
  );

  const $s_orderAction = useMemo(
    () => bindActionCreators(storeOrderAction, dispatch),
    [dispatch]
  );

  const fetchCategories = () => {
    $s_categoryAction.fetchCategoriesSaga();
  };

  const updateOrder = () => {
    const order = storageService.getLocalItem(storageKeyConstants.APP_ORDER);
    $s_orderAction.updateOrder(order as any);
  };

  useEffect(() => {
    console.log(commonConfig.APP_VERSION);
    fetchCategories();
    updateOrder();
  }, []);

  return null;
};

export default AppInitialize;
