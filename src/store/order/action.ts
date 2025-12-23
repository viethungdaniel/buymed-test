import { OrderActionTypes } from "./types";
import type {
  AddToOrderAction,
  UpdateOrderProductQuantityAction,
  UpdateOrderAction,
} from "./types";

// ---- REDUCER ACTION ----

export const updateOrder = (
  payload: UpdateOrderAction["payload"]
): UpdateOrderAction => ({
  type: OrderActionTypes.UPDATE_ORDER,
  payload,
});

export const addToOrder = (
  payload: AddToOrderAction["payload"]
): AddToOrderAction => ({
  type: OrderActionTypes.ADD_TO_ORDER,
  payload,
});

export const updateOrderProductQuantity = (
  payload: UpdateOrderProductQuantityAction["payload"]
): UpdateOrderProductQuantityAction => ({
  type: OrderActionTypes.UPDATE_ORDER_PRODUCT_QUANTITY,
  payload,
});
