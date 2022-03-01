import { PRODUCT_TYPES } from 'core/types/productTypes';
import { apiFetchRobots } from 'core/services/robots';

export const actionFetchRobots = () => async dispatch => {
  dispatch({
    type: PRODUCT_TYPES.FETCH_PRODUCTS_START,
    payload: null
  });
  return await new Promise((resolve, reject) => {
    apiFetchRobots()
      .then(response => {
        //a delay to show the progress bar
   setTimeout(()=>{
     dispatch({
       type: PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS,
       payload: response.data.data
     });
   },500)
        resolve(response);
      })
      .catch(error => {
        dispatch({
          type: PRODUCT_TYPES.FETCH_PRODUCTS_FAILED,
          payload: error
        });
        reject(error);
      });
  });
};

export const actionFilterByMaterial = (payload)=>dispatch=>{
  dispatch({
    type:PRODUCT_TYPES.FILTER_BY_MATERIAL,
    payload
  })
}
export const actionClearFilter = ()=>dispatch=>{
  dispatch({
    type:PRODUCT_TYPES.CLEAR_FILTER
  })
}
export const actionReduceStock = (payload)=>dispatch=>{
  dispatch({
    type:PRODUCT_TYPES.REDUCE_STOCK,
    payload
  })
}

export const actionRestoreStock = (payload)=>dispatch=>{
  dispatch({
    type:PRODUCT_TYPES.RESTORE_STOCK,
    payload
  })
}

export const actionAddToStock = (payload)=>dispatch=>{
  dispatch({
    type:PRODUCT_TYPES.ADD_TO_STOCK,
    payload
  })
}

