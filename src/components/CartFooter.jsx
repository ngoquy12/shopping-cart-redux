import React from "react";
import { useSelector } from "react-redux";

export default function CartFooter() {
  // Lấy dữ liệu listCart ở trên store về
  const listCart = useSelector((state) => state.listCart);
  // Lấy ra kích thước của giỏ hàng
  let sizeCarts = listCart.length;
  // Tính tổng sôs tiền có trong giỏ hàng
  let totalAmount = listCart.reduce(
    (total, cart) => total + cart.product.price * cart.quantity,
    0
  );
  return (
    <>
      {sizeCarts > 0 ? (
        <>
          {/*  + Nếu trong giỏ hàng có sản phẩm */}
          <tr>
            <td colSpan={4}>
              There are <b>{sizeCarts}</b> items in your shopping cart.
            </td>
            <td colSpan={2} className="total-price text-left">
              {totalAmount} USD
            </td>
          </tr>
        </>
      ) : (
        <>
          <tr>
            <th colSpan={6}>Empty product in your cart</th>
          </tr>
        </>
      )}
    </>
  );
}
