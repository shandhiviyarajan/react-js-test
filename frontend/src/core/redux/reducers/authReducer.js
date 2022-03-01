import { AUTH } from 'core/types/authTypes';

const initialState = {
  user: {
    isLoading: false,
    data: null
  }
};
export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH.LOGIN_START:
      return {
        ...state,
        user: {
          isLoading: true,
          data: null
        }
      };
    case AUTH.LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          isLoading: false,
          data: action.payload
        }
      };
    case AUTH.LOGIN_FAILED:
      return {
        ...state,
        user: {
          isLoading: false,
          data: action.payload
        }
      };
    default:
      return state;
  }
}

