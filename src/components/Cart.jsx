import React from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "react-use-cart";

export const Cart = () => {
  const {
    isEmpty,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
    emptyCart,
  } = useCart();

  if (isEmpty)
    return (
      <div className="container text-center">
        <h1 className="text-center mt-5">Your Cart is Empty</h1>
        <NavLink to="/">
          <button className="btn btn-success mt-4">Continue Shopping</button>
        </NavLink>
      </div>
    );
    
  return (
    <>
      <table className="table container mt-5 text-center border border-4">
        <thead>
          <tr>
            <th scope="col">Product Name</th>
            <th scope="col">Product Quantity</th>
            <th scope="col">Product Price</th>
            <th scope="col">Product Remove</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>
                  <button
                    className="btn px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity - 1)
                    }
                  >
                    -
                  </button>
                  <span className="px-2">{item.quantity}</span>
                  <button
                    className="btn px-1"
                    onClick={() =>
                      updateItemQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </td>
                <td>{item.price}</td>
                <td>
                  <i
                    className="btn btn-danger bi bi-trash"
                    onClick={() => removeItem(item.id)}
                  ></i>
                </td>
              </tr>
            );
          })}
          <tr>
            <td className="fw-bold fs-5 align-self-end">
              Total Price: {cartTotal}
            </td>
          </tr>
        </tbody>
      </table>
      <div className="text-end container">
        <button className="btn btn-warning" onClick={() => emptyCart()}>
          Clear Cart
        </button>
      </div>
    </>
  );
};
