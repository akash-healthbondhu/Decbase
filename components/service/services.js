import React from "react";
import style from "../../styles/services.module.scss";
import Service from "./service";

const Services = () => {
  return (
    <div className={style.services}>
      <div className={style.heading}>
        <h4>what we do</h4>
        <h1>our service</h1>
      </div>
      <Service />
    </div>
  );
};

export default Services;
