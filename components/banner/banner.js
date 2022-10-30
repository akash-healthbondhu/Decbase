import Image from "next/image";
import React from "react";
import bannerImg from "/public/images/banner.png";
import style from "../../styles/banner.module.scss";

const Banner = () => {
  return (
    <div className={style.banner}>
      <div className={style.bannerLeft}>
        <h4>MODERN INTERIOR.</h4>
        <h1>Create Your Interior Design.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation.
        </p>
        <button>CONTACT</button>
      </div>
      <div>
        <Image src={bannerImg} layout="responsive" alt="banner images" />
      </div>
    </div>
  );
};

export default Banner;
