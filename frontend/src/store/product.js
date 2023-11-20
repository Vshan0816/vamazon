import csrfFetch from "./csrf";

export const RECEIVE_PRODUCTS = 'products/RECEIVE_PRODUCTS'
export const RECEIVE_PRODUCT = 'products/RECEIVE_PRODUCT'

export const receiveProducts = products => {
    return {
        type: RECEIVE_PRODUCTS,
        products    
    }
}

export const receiveProduct = product => {
    return {
        type: RECEIVE_PRODUCT,
        product
    }
}

// selectors

export const getProduct = productId => {
    return state => {
        if (state.products) return state.products[productId];
        return null;
    }
}

export const getProducts = state => {
    if (state.products) return Object.values(state.products);
    return [];
}

// thunk action creators

export const fetchProducts = () => async dispatch => {
    const res = await csrfFetch('/api/products');

    if (res.ok) {
        const products = await res.json();
        dispatch(receiveProducts(products));
    }
}

export const fetchProduct = productId => async dispatch => {
    const res = await csrfFetch(`/api/products/${productId}`);

    if (res.ok) {
        const product = await res.json();
        dispatch(receiveProduct(product));
    }
}

const productsReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return { ...action.products };
        case RECEIVE_PRODUCT:
            nextState[action.product.id] = action.product;
            return nextState;
        default:
            return state;
    }
};

export default productsReducer;
