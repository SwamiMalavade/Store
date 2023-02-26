import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import axios from "axios";
import { Spinner } from "./Spinner";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleClick= (product)=>{
    //setCartItems([...cartItems, product])
    console.log(product);
  }

  const getProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products");
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container-fluid ">
      <div className="container pt-5">
        {loading && <Spinner />}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-12 my-4 d-flex" key={product.id}>
                {
                  <Card
                    title={product.title.slice(0, 20)}
                    price={product.price}
                    desc={product.description.slice(0, 130)}
                    img={product.image}
                    handleClick={handleClick}
                  />
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
