import { CART } from 'core/types/cartTypes';

const initialState = {
  cart: {
    data: []
  }
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CART.ADD_TO_CART:

      return {
        ...state,
        cart: {
          data: action.payload
        }
      };
    case CART.INCREASE:
      const increasedCart = state.cart.data.map(cartItem => (
        cartItem.name === action.payload.name ?
          {
            ...cartItem,
            qty: cartItem.qty + 1
          } : cartItem
      ));
      return {
        ...state,
        cart: {
          data: increasedCart
        }
      };
    case CART.REDUCE:
    state.cart.data = state.cart.data.map(cartItem => (
        cartItem.name === action.payload.name ?
          {
            ...cartItem,
            qty: cartItem.qty - 1
          } : cartItem
      ));

      //remove if qty is 0
      const reducedCart = state.cart.data.filter(cartItem=>cartItem.qty!==0)
      return {
        ...state,
        cart: {
          data: reducedCart
        }
      };
    default:
      return state;
  }
}

