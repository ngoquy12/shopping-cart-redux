import React from "react";

export default function Product(props) {
  // Chú ý: tên của props truyền từ component ListProduct xuống component Product thì phải giống nhau
  // thì mới lấy được dữ liệu
  const { product } = props;
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
                defaultValue={1}
                min={1}
              />
              <a data-product={1} href="#" className="price">
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
