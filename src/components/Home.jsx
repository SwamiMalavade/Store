import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import axios from "axios";
import { Spinner } from "./Spinner";

const API = "https://fakestoreapi.com/products";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProducts = async (url) => {
    const res = await axios.get(url);
    setProducts(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <div className="container-fluid ">
      <div className="container pt-5">
        {loading && <Spinner />}
        <div className="row">
          {products.map((product) => {
            return (
              <div className="col-lg-3 col-md-12 my-4" key={product.id}>
                {
                  <Card
                    title={product.title.slice(0, 60)}
                    price={product.price}
                    desc={product.description.slice(0, 130)}
                    img={product.image}
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
