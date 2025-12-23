import { all, fork } from "redux-saga/effects";

import product from "./product/sagas";
import category from "./category/sagas";

export default function* rootSaga() {
  yield all([fork(product), fork(category)]);
}
