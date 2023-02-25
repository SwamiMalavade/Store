import React, { useEffect, useState } from "react";
import { Card } from "./Card";

import axios from "axios";

export const Home = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setPosts(res.data);
        console.log(posts);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container-fluid bg-primary-subtle">
      <div className="container pt-5">
        <div className="row">
          {posts.map((post) => {
            return (
              <div className="col-3 mt-4" key={post.id}>
                {
                  <Card
                    title={post.title}
                    price={post.price}
                    desc={post.description}
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
