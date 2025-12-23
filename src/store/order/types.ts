import { AppState } from "../rootReducer";

export enum OrderActionTypes {
  ADD_TO_ORDER = "@@order/ADD_TO_ORDER",
  UPDATE_ORDER_PRODUCT_QUANTITY = "@@order/UPDATE_ORDER_PRODUCT_QUANTITY",
  UPDATE_ORDER = "@@order/UPDATE_ORDER",
}

// State

export interface OrderState {
  order: {
    items: {
      id: string;
      product: AppState["product"]["products"][number];
      quantity: number;
    }[];
  };
}

// ---- Reducer Action ----

export type FetchScope = "orders";

export type AddToOrderAction = {
  type: OrderActionTypes.ADD_TO_ORDER;
  payload: {
    product: AppState["product"]["products"][number];
    quantity: number;
  };
};

export type UpdateOrderProductQuantityAction = {
  type: OrderActionTypes.UPDATE_ORDER_PRODUCT_QUANTITY;
  payload: {
    itemId: string;
    quantity: number;
  };
};

export type UpdateOrderAction = {
  type: OrderActionTypes.UPDATE_ORDER;
  payload: OrderState["order"];
};

export type OrderAction =
  | UpdateOrderAction
  | AddToOrderAction
  | UpdateOrderProductQuantityAction;
