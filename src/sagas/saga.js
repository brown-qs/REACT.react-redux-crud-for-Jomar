import {
  takeEvery,
  put
  // , delay
} from "redux-saga/effects";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_ASYNC,
} from "../actions/actionTypes";

export default function* rootWatcher() {
  yield takeEvery(FETCH_PRODUCTS, fetchProductsAsync);
}

export function* fetchProductsAsync() {
  let result = yield fetch('data.json'
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(function (response) {
      return response.json();
    });
  yield put({ type: FETCH_PRODUCTS_ASYNC, payload: result });
}
