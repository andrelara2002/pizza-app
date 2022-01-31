import { createStore } from 'redux';

const initialState = {
    app: {
        colors: [],
        language: 'pt-BR',
        data: {},
        theme: 'light'
    },
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action) {
        case 'CHANGE_APP_THEME':
            return {
                ...state,
                app: {
                    ...state.app,
                    theme: action.payload
                }
            }
        case 'ADD_CART_ITEM':
            return { ...state, cart: state.cart.push(payload) }
        case 'REMOVE_CART_ITEM':
            return { ...state, cart: state.cart.splice(payload, 1) }
    }
}

export default createStore(reducer);