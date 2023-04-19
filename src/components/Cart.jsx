import React from "react";
import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import { useSelector } from "react-redux";

export default function Cart() {
  const listCart = useSelector((state) => state.listCart);
  const notify = useSelector((state) => state.notify);
  console.log(notify);

  return (
    <div>
      <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-danger">
          <div className="panel-heading">
            <h1 className="panel-title">Your Cart</h1>
          </div>
          <div className="panel-body">
            <table className="table">
              <thead>
                <tr>
                  <th width="4%">STT</th>
                  <th>Name</th>
                  <th width="15%">Price</th>
                  <th width="4%">Quantity</th>
                  <th width="25%">Action</th>
                </tr>
              </thead>
              <tbody id="my-cart-body">
                {/* CART BODY */}
                {listCart.map((cart, index) => (
                  <CartItem key={index} cart={cart} stt={index + 1} />
                ))}
              </tbody>
              <tfoot id="my-cart-footer">
                {/* CART FOOTER */}
                <CartFooter />
              </tfoot>
            </table>
          </div>
        </div>
        <div
          className={`alert alert-${notify.class}`}
          role="alert"
          id="mnotification"
        >
          {notify.message}
        </div>
      </div>
    </div>
  );
}
