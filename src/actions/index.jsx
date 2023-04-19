import * as types from "../constrains/actionTypes";

/**
 * action thêm sản phẩm vào giỏ hàng
 * @param {*} product Đối tượng sản phẩm được gửi lên
 * @param {*} quantity Số lượng sản phẩm
 * @returns
 */
export const act_add = (product, quantity) => {
  return {
    type: types.ADD_CART,
    payload: { product, quantity },
  };
};

export const act_delete = (productId) => {
  return {
    type: types.DELETE_CART,
    payload: productId,
  };
};

export const act_update = (product, quantity) => {
  return {
    type: types.UPDATE_CART,
    payload: { product, quantity },
  };
};
