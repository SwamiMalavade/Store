import React, { useState } from "react";

const dataSet = [
  {
    title: "Shoes",
    img: "IMAGE",
    btn: "Increment BUtton",
    price: "price",
  },
  {
    title: "Shirt",
    img: "IMAGE",
    btn: "Increment BUtton",
    price: "price",
  },
  {
    title: "chappal",
    img: "IMAGE",
    btn: "Increment BUtton",
    price: "price",
  },
  {
    title: "belt",
    img: "IMAGE",
    btn: "Increment BUtton",
    price: "price",
  },
];

export const Cart = () => {
  const [cartItems, setCartItems] = useState("Cart is Empty");

  return (
    <div className="container text-center py-5 bg-warning-subtle text-center">
      <h2>{cartItems}</h2>
      {dataSet.map((data) => {
        return (
          <div className="row py-5">
            <div className="col-3">{data.title}</div>
            <div className="col-3">{data.img}</div>
            <div className="col-3">{data.btn}</div>
          </div>
        );
      })}
    </div>
  );
};
