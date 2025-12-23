import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { axiosHelpers } from "@/utils/helpers";
import { productApi } from "@/utils/apis";

import { ProductActionTypes } from "./types";
import { fetchRequested, fetchFailed, fetchSucceeded } from "./action";

import type { FetchProductsSagaAction, FetchScope } from "./types";

function* fetchProductsSaga(action: FetchProductsSagaAction) {
  const { params, cancelToken } = action.payload || {};
  const { resolve = () => {}, isReset } = action.meta || {};
  const scope = "products" as FetchScope;
  yield put(
    fetchRequested({
      scope,
      isReset,
    })
  );

  try {
    const {
      data: response,
    }: Awaited<ReturnType<typeof productApi.fetchProducts>> = yield call(
      productApi.fetchProducts,
      {
        params,
        cancelToken,
      }
    );
    if (axiosHelpers.checkRequestSuccess(response)) {
      yield put(
        fetchSucceeded({
          scope,
          data: response.data ?? [],
        })
      );
    } else {
      yield put(
        fetchFailed({
          scope,
          error: response.message,
        })
      );
    }
    resolve(response);
  } catch (error) {
    if (axios.isCancel(error)) {
      resolve({ message: error.message, isCancelled: true });
      return;
    }
    const message = axiosHelpers.getErrorMessage(error);
    yield put(
      fetchFailed({
        scope,
        error: message,
      })
    );
    resolve({ message });
  }
}

function* productSaga() {
  yield all([
    takeEvery(ProductActionTypes.FETCH_PRODUCTS_SAGA, fetchProductsSaga),
  ]);
}

export default productSaga;
