import React, { useEffect, useState } from "react";

import axios from "axios";
import { Spinner } from "./Spinner";
import { CardItem } from "./CardItem";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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
                  <CardItem
                    title={product.title}
                    price={product.price}
                    img={product.image}
                    desc={product.description}
                    id={product.id}
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