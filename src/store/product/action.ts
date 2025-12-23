import { ProductActionTypes } from "./types";
import type {
  FetchRequestedAction,
  FetchSucceededAction,
  FetchFailedAction,
  // Saga
  FetchProductsSagaAction,
} from "./types";

// ---- REDUCER ACTION ----

export const fetchRequested = (
  payload: FetchRequestedAction["payload"]
): FetchRequestedAction => ({
  type: ProductActionTypes.FETCH_REQUESTED,
  payload,
});

export const fetchSucceeded = (
  payload: FetchSucceededAction["payload"]
): FetchSucceededAction => ({
  type: ProductActionTypes.FETCH_SUCCEEDED,
  payload,
});

export const fetchFailed = (
  payload: FetchFailedAction["payload"]
): FetchFailedAction => ({
  type: ProductActionTypes.FETCH_FAILED,
  payload,
});

// ---- SAGA ACTION ----

export const fetchProductsSaga = (
  payload?: FetchProductsSagaAction["payload"],
  meta?: FetchProductsSagaAction["meta"]
): FetchProductsSagaAction => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SAGA,
  payload,
  meta,
});
