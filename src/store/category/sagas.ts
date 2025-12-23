import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import { axiosHelpers } from "@/utils/helpers";
import { categoryApi } from "@/utils/apis";

import { ProductActionTypes } from "./types";
import { fetchRequested, fetchFailed, fetchSucceeded } from "./action";

import type { FetchCategoriesSagaAction, FetchScope } from "./types";

function* fetchCategoriesSaga(action: FetchCategoriesSagaAction) {
  const { cancelToken } = action.payload || {};
  const { resolve = () => {}, isReset } = action.meta || {};
  const scope = "categories" as FetchScope;
  yield put(
    fetchRequested({
      scope,
      isReset,
    })
  );
  try {
    const {
      data: response,
    }: Awaited<ReturnType<typeof categoryApi.fetchCategories>> = yield call(
      categoryApi.fetchCategories,
      {
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

function* categorySaga() {
  yield all([
    takeEvery(ProductActionTypes.FETCH_CATEGORIES_SAGA, fetchCategoriesSaga),
  ]);
}

export default categorySaga;
