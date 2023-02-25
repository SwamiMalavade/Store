import React, { useState } from 'react'

export const Card = (props) => {

  const [counter, setCounter] = useState(1)

  const handleClick=()=>{
    setCounter(counter+1)
    console.log(counter);
  }

  return (
    <div className="card shadow">
      <img
        src={props.img}
        className="card-img-top p-5 "
        alt="Image Not Found"
        style={{ width: "100%", height: "100%" }}
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.category}</p>
        <p className="card-text">{props.desc}</p>
        <p className="card-text fw-bold">Price: {props.price}</p>
        <button className="btn btn-primary" onClick={handleClick} >
          Add To Cart
        </button>
      </div>
    </div>
  );
};
