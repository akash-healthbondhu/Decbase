import React from "react";
import style from "../../styles/workHistry.module.scss";

const WorkHistry = () => {
  return (
    <div className={style.WorkHistry}>
      <div className={style.heading}>
        <h1>3000+ Completed Work Which WE have Successfully Done</h1>
      </div>
      <div className={style.workDetails}>
        <div className={style.box}>
          <h2>980</h2>
          <p>Project</p>
        </div>
        <div className={style.box}>
          <h2>980</h2>
          <p>Project</p>
        </div>
        <div className={style.box}>
          <h2>980</h2>
          <p>Project</p>
        </div>
        <div className={style.box}>
          <h2>980</h2>
          <p>Project</p>
        </div>
      </div>
    </div>
  );
};

export default WorkHistry;
