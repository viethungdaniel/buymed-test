import { OrderActionTypes } from "./types";
import { v4 as uuidv4 } from "uuid";

import type { OrderState, OrderAction } from "./types";
import { storageService } from "@/services";
import { storageKeyConstants } from "@/utils/constants";

export const initialState: OrderState = {
  order: {
    items: [],
  },
};

const reducer = (state = initialState, action: OrderAction): OrderState => {
  switch (action.type) {
    case OrderActionTypes.UPDATE_ORDER: {
      if (!!action.payload) {
        return {
          order: action.payload,
        };
      }
      return state;
    }

    case OrderActionTypes.ADD_TO_ORDER: {
      const { product, quantity } = action.payload;

      const orderItems = [...state.order.items];
      const orderItemIndex = orderItems.findIndex(
        (orderItem) => orderItem.product.id === product.id
      );
      if (orderItemIndex > -1) {
        orderItems[orderItemIndex].quantity =
          orderItems[orderItemIndex].quantity + quantity;
      } else {
        orderItems.push({
          id: uuidv4(),
          product,
          quantity,
        });
      }

      storageService.saveLocalItem(storageKeyConstants.APP_ORDER, {
        ...state.order,
        items: orderItems,
      });

      return {
        ...state,
        order: {
          ...state.order,
          items: orderItems,
        },
      };
    }

    case OrderActionTypes.UPDATE_ORDER_PRODUCT_QUANTITY: {
      const { itemId, quantity } = action.payload;

      const orderItems = [...state.order.items];
      const orderItemIndex = orderItems.findIndex(
        (orderItem) => orderItem.id === itemId
      );
      if (orderItemIndex > -1) {
        orderItems[orderItemIndex].quantity = quantity;
        if (orderItems[orderItemIndex].quantity <= 0) {
          orderItems.splice(orderItemIndex, 1);
        }
      }

      storageService.saveLocalItem(storageKeyConstants.APP_ORDER, {
        ...state.order,
        items: orderItems,
      });

      return {
        ...state,
        order: {
          ...state.order,
          items: orderItems,
        },
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
