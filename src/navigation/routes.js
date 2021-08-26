import {
  HOME_ROUTE,
  CART_ROUTE,
  LOGIN_ROUTE,
  REGISTER_ROUTE,
  RESET_ROUTE,
} from './constants'
import { Home, Cart, Login, Register, Reset } from '../pages'

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    component: Login,
  },
  {
    path: REGISTER_ROUTE,
    component: Register,
  },
  {
    path: RESET_ROUTE,
    component: Reset,
  },
]

export const privateRoutes = [
  {
    path: HOME_ROUTE,
    component: Home,
  },
  {
    path: CART_ROUTE,
    component: Cart,
  },
]
