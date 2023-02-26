import React from "react";

export const Cart = (props) => {
  const { title, price, id } = props;
  return (
    <table className="table container mt-5 text-center border border-4">
      <thead>
        <tr>
          <th scope="col">Product ID</th>
          <th scope="col">Product Name</th>
          <th scope="col">Product Quantity</th>
          <th scope="col">Product Price</th>
          <th scope="col">Product Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{id}</th>
          <td>{id}</td>
          <td>{title}</td>
          <td>{price}</td>
        </tr>
      </tbody>
    </table>
  );
};
