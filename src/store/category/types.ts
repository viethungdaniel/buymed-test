import type {
  FetchCategoriesPayload,
  FetchCategoriesResponseData,
} from "@/utils/apis/category";

export enum ProductActionTypes {
  FETCH_REQUESTED = "@@category/FETCH_REQUESTED",
  FETCH_SUCCEEDED = "@@category/FETCH_SUCCEEDED",
  FETCH_FAILED = "@@category/FETCH_FAILED",

  // Saga
  FETCH_CATEGORIES_SAGA = "@@category/FETCH_CATEGORIES_SAGA",
}

// State

export interface ProductState {
  hydrated?: boolean;

  categories: FetchCategoriesResponseData;
  categoriesLoading: boolean;
  categoriesError: string;
}

// ---- Reducer Action ----

export type FetchScope = "categories";

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

export type FetchCategoriesSagaAction = {
  type: ProductActionTypes.FETCH_CATEGORIES_SAGA;
  payload?: FetchCategoriesPayload;
  meta?: {
    isReset?: boolean;
    resolve?: (payload?: any) => void;
  };
};

export type ProductAction =
  | FetchRequestedAction
  | FetchSucceededAction
  | FetchFailedAction
  //
  | FetchCategoriesSagaAction;
