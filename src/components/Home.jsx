import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";

import axios from "axios";
import { Spinner } from "./Spinner";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

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
                  <div className="card shadow">
                    <img
                      src={product.image}
                      className="card-img-top p-5 "
                      alt="Image Not Found"
                      style={{ width: "100%", height: "20rem" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text">{product.category}</p>
                      <p className="card-text">
                        {product.description.slice(0, 150)}...
                      </p>
                      <p className="card-text fw-bold">
                        Price: {product.price}$
                      </p>
                      <button
                        className="btn btn-primary"
                        onClick={() => addItem(product)}
                      >
                        Add To Cart
                      </button>
                    </div>
                  </div>
                }
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
