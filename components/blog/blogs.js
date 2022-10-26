import Image from "next/image";
import React from "react";
import style from "../../styles/blogs.module.scss";
import Blog from "./blog";

const Blogs = () => {
  return (
    <div className="container">
      <div className={style.blogs}>
        <div className={style.heading}>
          <h6>LETEST NEWS</h6>
          <h1>From Our Blog</h1>
        </div>
        <div className={style.blogContainer}>
          <Blog />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
