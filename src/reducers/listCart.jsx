import * as types from "../constrains/actionTypes";

let initialState = [];
// Lấy dữ liệu từ local
const listCartLocal = JSON.parse(localStorage.getItem("listCart"));
// Gán giá trị local cho biến khởi tạo
// + Nếu trên local có dữ liệu thì sẽ gán giá trị khởi tạo cho listCartLocal
// + Nếu trên local không có dữ liệu thì lấy initialState là trị khởi tạo
initialState =
  listCartLocal != null && listCartLocal.length > 0
    ? listCartLocal
    : initialState;
export const listCart = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case types.ADD_CART:
      // Nếu hàm checkExits trả về true thì tiêns hành tăng số lượng
      if (checkExits(state, action.payload.product.productId)) {
        // Lấy vị trí của sản phẩm trong cart
        let index = getIndex(state, action.payload.product.productId);
        // Từ vị trí này thì đi vào key là quantity để tăng sóo lượng
        state[index].quantity += parseInt(action.payload.quantity);
      } else {
        // Tiến hành thêm sản phẩm vào giỏ hàng
        state.push(action.payload);
      }

      // Lưu dữ liệu lên local
      saveLocal(state);
      return [...state];

    case types.UPDATE_CART:
      // Lấy vị trí của sản phầm trong giỏ hàng
      let index = getIndex(state, action.payload.product.productId);
      // Gắn lại giá trị của action gửi lên từ component thông qua dispatch
      state[index].quantity = parseInt(action.payload.quantity);
      // lưu dữ liệu lên local
      saveLocal(state);
      return [...state];
    case types.DELETE_CART:
      // Tiến hành lọc mảng theo id. Nếu id truyền vào mà tồn tại trong listCart thì tiến hành xóa khởi giỏ hàng
      let newCarts = state.filter(
        (element) => element.product.productId != action.payload
      );
      saveLocal(newCarts);
      return newCarts;
    // Tiến hành lưu dữ liệu lên local
    default:
      return state;
  }
};

// Hàm kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
// Nếu chưa thì sẽ thêm sản phẩm vào giỏ hàng
// Nếu đã tồn tại thì sẽ tăng số lượng

const checkExits = (carts, productId) => {
  // Tạo ra một biến cờ
  let isExits = false;
  // Dùng vòng lặp để kiểm tra
  carts.forEach((element) => {
    if (element.product.productId === productId) {
      isExits = true;
    }
  });
  return isExits;
};

// Hàm kiểm tra vị trí của sản phẩm trong giỏ hàng
const getIndex = (carts, productId) => {
  for (let i = 0; i < carts.length; i++) {
    if (carts[i].product.productId === productId) {
      return i;
    }
  }
  return -1;
};

// KHai báo hàm để lưu dữ liệu trên localstorage
const saveLocal = (array) => {
  localStorage.setItem("listCart", JSON.stringify(array));
};
