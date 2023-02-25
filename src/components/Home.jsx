import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import axios from "axios";
import { Spinner } from "./Spinner";

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-fluid ">
      <div className="container pt-5">
        {loading && <Spinner />}

        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col-lg-3 col-md-12 mt-4" key={post.id}>
                {
                  <Card
                    title={post.title}
                    price={post.price}
                    desc={post.description.splice(0, 130)}
                    img={post.image}
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
