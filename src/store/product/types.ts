import type {
  FetchProductsPayload,
  FetchProductsResponseData,
} from "@/utils/apis/product";

export enum ProductActionTypes {
  FETCH_REQUESTED = "@@product/FETCH_REQUESTED",
  FETCH_SUCCEEDED = "@@product/FETCH_SUCCEEDED",
  FETCH_FAILED = "@@product/FETCH_FAILED",

  // Saga
  FETCH_PRODUCTS_SAGA = "@@product/FETCH_PRODUCTS_SAGA",
}

// State

export interface ProductState {
  hydrated?: boolean;

  products: FetchProductsResponseData;
  productsLoading: boolean;
  productsError: string;
}

// ---- Reducer Action ----

export type FetchScope = "products";

export type FetchRequestedAction = {
  type: ProductActionTypes.FETCH_REQUESTED;
  payload: {
    scope: FetchScope;
    isReset?: boolean;
  };
};

export type FetchSucceededAction = {
  type: ProductActionTypes.FETCH_SUCCEEDED;
  payload: {
    scope: FetchScope;
    data: ProductState[FetchScope];
    count?: number;
    isLoadMore?: boolean;
  };
};

export type FetchFailedAction = {
  type: ProductActionTypes.FETCH_FAILED;
  payload: {
    scope: FetchScope;
    error: string;
  };
};

// ---- Saga Action ----

export type FetchProductsSagaAction = {
  type: ProductActionTypes.FETCH_PRODUCTS_SAGA;
  payload?: FetchProductsPayload;
  meta?: {
    isLoadMore?: boolean;
    isReset?: boolean;
    resolve?: (payload?: any) => void;
  };
};

export type ProductAction =
  | FetchRequestedAction
  | FetchSucceededAction
  | FetchFailedAction
  //
  | FetchProductsSagaAction;
