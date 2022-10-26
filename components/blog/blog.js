import Image from "next/image";
import React from "react";
import style from "../../styles/blog.module.scss";
import image1 from "/public/images/blog1.png";
import image2 from "/public/images/blog2.png";

const Blog = () => {
  return (
    <>
      <div className={style.blog}>
        <div className={style.blogImg}>
          <Image src={image1} layout="responsive" alt="Blog image" />
        </div>
        <div className={style.content}>
          <h2>2020 Interior Design Trends</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <button>continue reading....</button>
        </div>
      </div>
      <div className={style.blog}>
        <div className={style.blogImg}>
          <Image src={image2} layout="responsive" alt="Blog image" />
        </div>
        <div className={style.content}>
          <h2>28 Notable Product at ARC Interior Design</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod incididunt ut labore et dolore magna aliqua.
          </p>
          <button>continue reading....</button>
        </div>
      </div>
    </>
  );
};

export default Blog;
