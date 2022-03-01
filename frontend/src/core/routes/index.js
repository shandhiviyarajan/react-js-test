export const ROUTE_NAMES = {
  HOME:`/`,
  CART:`/cart`,
  AUTH:{
    LOGIN:'/login',
    REGISTER:'/register',
    FORGOT_PASSWORD:'/forgot-password',
    RESET_PASSWORD:'/reset-password',
    PROFILE:'/profile'
  },
  PRODUCTS:{
    ALL_PRODUCTS:`/products`,
    SINGLE_PRODUCT:(name)=>`/products/${name}`
  }
}
