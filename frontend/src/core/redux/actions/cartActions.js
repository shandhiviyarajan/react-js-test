import { CART } from 'core/types/cartTypes';

export const actionAddToCart = (payload) => async dispatch => {
  dispatch({
    type: CART.ADD_TO_CART,
    payload: payload
  });

};

export const actionIncrease = (payload) => async dispatch => {
  dispatch({
    type: CART.INCREASE,
    payload: payload
  });
};
export const actionReduce = (payload) => async dispatch => {
  dispatch({
    type: CART.REDUCE,
    payload: payload
  });
};
