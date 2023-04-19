import * as types from "../constrains/actionTypes";

const initialState = {
  class: "success",
  message: "Add to cart",
};

export const notify = (state = initialState, action) => {
  switch (action.type) {
    // Khi thêm sản phẩm vào giỏ hàng
    case types.ADD_CART:
      return (state = {
        class: "success",
        message: "Add to cart successfully",
      });
    // Khi xóa sản phẩm
    case types.DELETE_CART:
      return (state = {
        class: "danger",
        message: "Delete cart successfully",
      });
    // Khi cập nhật sản phẩm
    case types.UPDATE_CART:
      return (state = {
        class: "warning",
        message: "Update cart successfully",
      });

    default:
      return state;
  }
};
