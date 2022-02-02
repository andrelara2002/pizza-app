import { createStore } from 'redux';

const initialState = {
    app: {
        colors: {
            card: "#f5f5f5",
            text: "#0f0f0f",
            error: "#f53232",
            primary100: "#f9c415",
            primary40: "#3c2e02",
            secondary100: "#54d463",
            secondary40: "#061808"
        },
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