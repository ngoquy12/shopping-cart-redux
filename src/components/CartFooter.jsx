import React from "react";

export default function CartFooter() {
  return (
    <>
      <tr>
        <th colSpan={6}>Empty product in your cart</th>
      </tr>
      <tr>
        <td colSpan={4}>
          There are <b>1</b> items in your shopping cart.
        </td>
        <td colSpan={2} className="total-price text-left">
          12 USD
        </td>
      </tr>
    </>
  );
}
