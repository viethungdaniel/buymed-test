import { ProductActionTypes } from "./types";
import { commonHelpers } from "@/utils/helpers";
import { HYDRATE } from "next-redux-wrapper";

import type { ProductState, ProductAction } from "./types";

export const initialState: ProductState = {
  hydrated: false,

  products: [],
  productsError: "",
  productsLoading: true,
};

const reducer = (state = initialState, action: ProductAction): ProductState => {
  switch (action.type) {
    case HYDRATE as any: {
      const { hydrated } = (action as any).payload.product as ProductState;

      const newState = {};

      if (typeof hydrated !== "undefined") {
        Object.entries(newState).forEach(([key, _state]) => {
          if (typeof _state === "undefined") delete (newState as any)[key];
        });
      }

      return {
        ...state,
        ...(typeof hydrated !== "undefined" ? newState : {}),
        hydrated: true,
      };
    }

    case ProductActionTypes.FETCH_REQUESTED: {
      const { scope, isReset } = action.payload;

      const newState = {
        ...state,
        ...(typeof state[`${scope}Loading` as keyof typeof state] !==
        "undefined"
          ? {
              [`${scope}Loading`]: true,
            }
          : {}),
        ...(typeof state[`${scope}Error` as keyof typeof state] !== "undefined"
          ? {
              [`${scope}Error`]: "",
            }
          : {}),
      };

      if (isReset) {
        Object.assign(newState, {
          [scope]: Array.isArray(newState[scope]) ? [] : null,
        });
      }

      return newState;
    }
    case ProductActionTypes.FETCH_SUCCEEDED: {
      const { scope, data, count, isLoadMore } = action.payload;

      let newData = data;
      const stateData = state[scope];

      if (isLoadMore && Array.isArray(stateData) && Array.isArray(data)) {
        const filteredData = data.filter((item) => {
          return stateData.every(
            (stateDataItem) => item.id !== stateDataItem.id
          );
        });
        newData = [...stateData, ...(filteredData as any)] as any;
      }

      return {
        ...state,
        [scope]: newData,
        ...(typeof state[`${scope}Loading` as keyof typeof state] !==
        "undefined"
          ? {
              [`${scope}Loading`]: false,
            }
          : {}),
        ...(commonHelpers.isNumber(count)
          ? {
              [`${scope}Count`]: count,
            }
          : {}),
      };
    }
    case ProductActionTypes.FETCH_FAILED: {
      const { scope, error } = action.payload;

      return {
        ...state,
        ...(typeof state[`${scope}Loading` as keyof typeof state] !==
        "undefined"
          ? {
              [`${scope}Loading`]: false,
            }
          : {}),
        ...(typeof state[`${scope}Error` as keyof typeof state] !== "undefined"
          ? {
              [`${scope}Error`]: error,
            }
          : {}),
      };
    }

    default: {
      return state;
    }
  }
};

export default reducer;
