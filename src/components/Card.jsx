import React from "react";
import { NavLink } from "react-router-dom";

export const Card = (props) => {
  const addToCart = (e) => {
    console.log(e);
  };

  return (
    <div className="card shadow">
      <img
        src={props.img}
        className="card-img-top p-5 "
        alt="Image Not Found"
        style={{ width: "100%", height: "20rem" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.category}</p>
        <p className="card-text">{props.desc}...</p>
        <p className="card-text fw-bold">Price: {props.price}$</p>
        <NavLink to="/cart" onClick={() => addToCart(props)}>
          <button className="btn btn-primary">Add To Cart</button>
        </NavLink>
      </div>
    </div>
  );
};
