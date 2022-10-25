import Image from "next/image";
import React from "react";
import style from "../../styles/banner.module.scss";
import AboutImage from "/public/images/aboutBanner.png";

const AboutUs = () => {
  return (
    <div className={style.banner}>
      <div>
        <Image src={AboutImage} layout="responsive" alt="banner images" />
      </div>
      <div className={style.bannerLeft}>
        <h4>ABOUT US</h4>
        <h1>Interioris The Will of An Epoch Mextreo</h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form injected humour, or
          randomised words which dont look even slightly believable.If you are
          going to use a passage of Lorem Ipsum, sure there isnt anything
          embarrassing hidden the middleof text. All the Lorem Ipsum generators
          on the Internettend to repeat predefined chunks as necessary,making
          this the first true generator on the Internet.
        </p>
        <button>LEARN MORE</button>
      </div>
    </div>
  );
};

export default AboutUs;
