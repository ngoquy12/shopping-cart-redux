import React from "react";
import Product from "./Product";
import { useSelector } from "react-redux";

export default function ListProduct() {
  //useSelector: có 1 đối số là state gọi đến list product trong listProduct thuộc reducer
  const listProducts = useSelector((state) => state.listProduct);
  console.log(listProducts);
  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h1 className="panel-title">List Products</h1>
          </div>
          <div className="panel-body" id="list-product">
            {listProducts.map((product) => (
              <Product key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
