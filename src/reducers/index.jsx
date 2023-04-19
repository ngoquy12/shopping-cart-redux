import { combineReducers } from "redux";
import { listProduct } from "./listProduct";
import { listCart } from "./listCart";

// Gom toàn bộ dữ liệu ở trong reducer
export const reducer = combineReducers({ listProduct, listCart });
