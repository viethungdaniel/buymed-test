import { combineReducers } from "@reduxjs/toolkit";

import product from "./product/reducer";
import category from "./category/reducer";
import order from "./order/reducer";

const rootReducer = combineReducers({
  product,
  category,
  order,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
