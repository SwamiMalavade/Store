import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Cart } from "./Cart";

export const Card = ({props, handleClick}) => {
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
        <button className="btn btn-primary" onClick={() => handleClick(props)}>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
