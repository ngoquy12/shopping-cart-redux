import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { act_delete, act_update } from "../actions";

export default function CartItem(props) {
  const { cart, stt } = props;
  const [quantity, setQuantity] = useState(1);
  // Khai báo dispatch
  const dispatch = useDispatch();

  // Cứ mỗi lần quantity của product thay đổi thì quantity trong cart thay đổi theo
  useEffect(() => {
    // set lại quantity cho cart
    setQuantity(cart.quantity);
  }, [cart.quantity]);

  // Khai báo hàm để bắn dispatch lên reducer thực hiện chức năng xóa sản phẩm trong giỏ hàng
  const handleDelete = () => {
    dispatch(act_delete(cart.product.productId));
  };

  // Khai báo hàm để bắn dispatch lên reducer thực hiện chức năng sửa thông tin sản phẩm trên giỏ hàng
  const handleUpdate = () => {
    dispatch(act_update(cart.product, quantity));
  };

  return (
    <>
      <tr>
        <th scope="row">{stt}</th>
        <td>{cart.product.productName}</td>
        <td>{cart.product.price} USD</td>
        <td>
          <input
            name="cart-item-quantity-1"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(+e.target.value)}
            min={1}
          />
        </td>
        <td>
          <a
            className="label label-info update-cart-item"
            onClick={handleUpdate}
            data-product=""
          >
            Update
          </a>
          <a
            className="label label-danger delete-cart-item"
            onClick={handleDelete}
            data-product=""
          >
            Delete
          </a>
        </td>
      </tr>
    </>
  );
}
