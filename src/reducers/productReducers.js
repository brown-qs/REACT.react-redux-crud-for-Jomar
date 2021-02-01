import {
  FETCH_PRODUCTS_ASYNC,
  EDIT_MODE,
  FETCH_PRODUCT_BY_ID,
  ADD_PRODUCT_ASYNC,
  EDIT_PRODUCT_ASYNC,
  DELETE_PRODUCT_ASYNC,
  FETCH_PRODUCTS_ASYNC_ERROR,
  EDITED,
  ADD_PRODUCT_BUTTON_CLICKED
} from "../actions/actionTypes";

const initialState = {
  products: [],
  product: {},
  editMode: false,
  error: false,
  isSaveBtnClicked: false,
  isEditBtnClicked: false,
  edit: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_PRODUCTS_ASYNC:
      return {
        ...state,
        products: action.payload
      };
    case FETCH_PRODUCTS_ASYNC_ERROR:
      return {
        ...state,
        error: true
      };
    case ADD_PRODUCT_ASYNC: {

      return {
        ...state,
        products: state.products.concat([action.payload]),
        edit: false
      };
    }
    case DELETE_PRODUCT_ASYNC:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload),
        edit: false
      };

    case EDIT_MODE:
      return {
        ...state,
        isEditBtnClicked: true
      };
    case FETCH_PRODUCT_BY_ID: {
      return {
        ...state,
        product: state.products.find(usr => usr.id === action.payload)
      };
    }
    case EDIT_PRODUCT_ASYNC: {
      return {
        ...state,
        products: state.products.map(one => one.id == action.payload.id ? action.payload : one),
        isEditBtnClicked: false,
        edit: true
      };
    }
    case EDITED:
      return {
        ...state,
        edit: true
      };
    case ADD_PRODUCT_BUTTON_CLICKED:
      return {
        ...state,
        edit: false
      };
    default:
      return state;
  }
}
