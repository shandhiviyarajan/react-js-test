import { AUTH } from 'core/types/authTypes';

export const actionSignIn = (payload) => dispatch => {
  dispatch({
    type: AUTH.LOGIN_START,
    payload: null
  });
  if (payload.name === 'Shan Dhiviyarajan' && payload.email === 'prashasoft@gmail.com') {
    dispatch({
      type: AUTH.LOGIN_SUCCESS,
      payload: {
        name: 'Shan Dhiviyarajan',
        email: 'prashasoft@gmail.com'
      }
    });
  } else {
    dispatch({
      type: AUTH.LOGIN_FAILED,
      payload: null
    });
  }
};
