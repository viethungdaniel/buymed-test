import { ProductActionTypes } from "./types";
import type {
  FetchRequestedAction,
  FetchSucceededAction,
  FetchFailedAction,
  // Saga
  FetchCategoriesSagaAction,
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

export const fetchCategoriesSaga = (
  payload?: FetchCategoriesSagaAction["payload"],
  meta?: FetchCategoriesSagaAction["meta"]
): FetchCategoriesSagaAction => ({
  type: ProductActionTypes.FETCH_CATEGORIES_SAGA,
  payload,
  meta,
});
