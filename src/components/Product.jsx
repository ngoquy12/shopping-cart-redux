import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { act_add } from "./../actions/index";

export default function Product(props) {
  // Chú ý: tên của props truyền từ component ListProduct xuống component Product thì phải giống nhau
  // thì mới lấy được dữ liệu
  const { product } = props;
  // Khai báo dispatch để nhận biết hành động
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  // Hàm thêm mới sản phẩm vào giỏ hàng
  const handleAdd = () => {
    dispatch(act_add(product, quantity));
  };
  return (
    <div>
      <div className="media product">
        <div className="media-left">
          <a href="#">
            <img className="media-object" src={product.image} alt="pizza" />
          </a>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{product.productName}</h4>
          <p>{product.title}</p>
          {/* Kiểm tra xem có sản phẩm nào số lượng lớn hơn 0? */}
          {product.quantity > 0 ? (
            // Nếu lớn hơn 0
            <>
              <input
                name="quantity-product-1"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(+e.target.value)}
                min={1}
              />
              <a data-product={1} className="price" onClick={handleAdd}>
                {product.price} USD{" "}
              </a>
            </>
          ) : (
            // Nếu nhỏ hơn 0 thì button bị disable
            <>
              <span className="price"> {product.price} USD</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
