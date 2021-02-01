import { FETCH_PRODUCTS, ADD_PRODUCT, EDIT_PRODUCT_ASYNC, DELETE_PRODUCT, EDIT_MODE, FETCH_PRODUCT_BY_ID, ADD_PRODUCT_BUTTON_CLICKED, ADD_PRODUCT_ASYNC, DELETE_PRODUCT_ASYNC } from './actionTypes';



export const fetchProducts = () => ({
    type: FETCH_PRODUCTS
});

export const fetchProductById = (id) => (
    {
        type: FETCH_PRODUCT_BY_ID,
        payload: id
    }
)


export const addProduct = (product) =>
(
    {
        type: ADD_PRODUCT_ASYNC,
        payload: product
    }
)

export const editProduct = (product) =>
(
    {
        type: EDIT_PRODUCT_ASYNC,
        payload: product

    })

export const deleteProduct = (productId) =>
(
    {
        type: DELETE_PRODUCT_ASYNC,
        payload: productId
    }
)

export const editMode = () =>
(
    {
        type: EDIT_MODE
    }
)

export const addProductBtnClicked = () =>
(
    {
        type: ADD_PRODUCT_BUTTON_CLICKED
    }
)