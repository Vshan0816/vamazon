import csrfFetch from "./csrf";

export const RECEIVE_CARTITEMS = 'cartItems/RECEIVE_CARTITEMS'
export const RECEIVE_CARTITEM = 'cartItems/RECEIVE_CARTITEM'
export const REMOVE_CARTITEM = 'cartItems/REMOVE_CARTITEM'

export const receiveCartItems = cartItems => {
    return {
        type: RECEIVE_CARTITEMS,
        cartItems
    }
};

export const receiveCartItem = cartItem => {
    return {
        type: RECEIVE_CARTITEM,
        cartItem
    }
};

export const removeCartItem = cartItemId => {
    return {
        type: REMOVE_CARTITEM,
        cartItemId
    }
};

// selectors

export const getCartItem = cartItemId => {
    return state => {
        if (state.cartItems) return state.cartItems[cartItemId];
        return null;
    }
}

export const getCartItems = state => {
    if (state.cartItems) return Object.values(state.cartItems)
    return [];
}


// thunk action creators

export const fetchCartItems = () => async dispatch => {
    const res = await csrfFetch('/api/cart_items');

    if (res.ok) {
        const cartItems = await res.json();
        dispatch(receiveCartItems(cartItems));
    }
}

export const fetchCartItem = cartItemId => async dispatch => {
    const res = await csrfFetch(`/api/cart_items/${cartItemId}`);

    if (res.ok) {
        const cartItem = await res.json();
        dispatch(receiveCartItem(cartItem));
    }
}

export const createCartItem = cartItem => async dispatch => {
    const res = await csrfFetch('api/cart_items', {
        method: 'POST',
        body: JSON.stringify(cartItem),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        const cartItem = await res.json();
        dispatch(receiveCartItem(cartItem));
    }
}

export const updateCartItem = cartItem => async dispatch => {
    const res = await csrfFetch(`api/cart_items/${cartItem.id}`, {
        method: 'PATCH',
        body: JSON.stringify(cartItem),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (res.ok) {
        const cartItem = await res.json();
        dispatch(receiveCartItem(cartItem));
    }
}

export const deleteCartItem = cartItemId => async dispatch => {
    const res = await csrfFetch(`api/cart_items/${cartItemId}`, {
        method: 'DELETE'
    });

    if (res.ok) {
        dispatch(removeCartItem(cartItemId));
    }
}


// Reducer

const cartItemsReducer = (state = {}, action) => {
    const nextState = Object.assign({}, state)
    switch(action.type) {
        case RECEIVE_CARTITEMS:
            return { ...action.cartItems}
        case RECEIVE_CARTITEM:
            nextState[action.cartItem.id] = action.cartItem
            return nextState
        case REMOVE_CARTITEM:
            delete nextState[action.cartItemId];
            return nextState;
        default:
            return state;
    }
}