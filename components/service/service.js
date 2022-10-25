import Image from "next/image";
import React from "react";
import style from "../../styles/service.module.scss";
import image1 from "/public/images/serviceImage1.png";

const Service = () => {
  return (
    <div className={style.container}>
      <div className={style.service}>
        <div className={style.imgContainer}>
          <Image src={image1} layout="responsive" alt="banner image" />
        </div>
        <div className={style.serviceDetails}>
          <h2>Interior Design</h2>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
      <div className={style.service}>
        <div className={style.imgContainer}>
          <Image src={image1} layout="responsive" alt="banner image" />
        </div>
        <div className={style.serviceDetails}>
          <h2>Architecture</h2>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
      <div className={style.service}>
        <div className={style.imgContainer}>
          <Image src={image1} layout="responsive" alt="banner image" />
        </div>
        <div className={style.serviceDetails}>
          <h2>Planning</h2>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit sed eiusmod
            tempor incididunt ut labore.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
