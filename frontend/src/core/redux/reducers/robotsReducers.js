import { PRODUCT_TYPES } from '../../types/productTypes';

const initialState = {
  products: {
    isLoading: false,
    data: null,
    materials:null,
    prevData:null
  }
};
export default function (state = initialState, action) {
  switch (action.type) {
    /**
     * Fetch products (robots)
     */
    case PRODUCT_TYPES.FETCH_PRODUCTS_START:
      return {
        ...state,
        products: {
          isLoading: true,
          data: null,
          prevData: null
        }
      };
    case PRODUCT_TYPES.FETCH_PRODUCTS_SUCCESS:

      return {
        ...state,
        products: {
          isLoading: false,
          data: action.payload,
          materials:[...new Set(action.payload.map(robot => robot.material))]
        }
      };
    case PRODUCT_TYPES.FETCH_PRODUCTS_FAILED:
      return {
        ...state,
        products: {
          isLoading: false,
          data: action.payload,
          prevData: action.payload,
        }
      };

    /**
     * Filter by material
     */
    case PRODUCT_TYPES.FILTER_BY_MATERIAL:

      return{
        ...state,
        products: {
          isLoading: false,
          data:action.payload,
          materials:[...new Set(action.payload.map(robot => robot.material))]
        }
      }


    /**
     * Stock updates
     */
    case PRODUCT_TYPES.REDUCE_STOCK:
      const updatedData = state.products.data.map(item=>(item.name===action.payload.name ?
        {...item,
          stock:item.stock === 0 ? item.stock : item.stock-1}:item));
      return {
        ...state,
        products: {
          isLoading: false,
          data:updatedData
        }
      };
    case PRODUCT_TYPES.ADD_TO_STOCK:
      const addedData = state.products.data.map(item=>(item.name===action.payload.name ?
        {...item,
          stock:item.stock+1}:item));
      return {
        ...state,
        products:{
          isLoading: false,
          data:addedData
        }
      }
    case PRODUCT_TYPES.RESTORE_STOCK:
      const restoreData = state.products.data.map(item=>(item.name===action.payload.name ?
        {...item, stock:item.stock+action.payload.qty}:item));
      return {
        ...state,
        products:{
          isLoading: false,
          data:restoreData
        }
      }
    default:
      return state;
  }
}

