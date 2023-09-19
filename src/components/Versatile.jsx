import React from "react";
import { tes_versatile } from "../assets";
import styles from "../style";

const Versatile = () => {
  return (
    <div className="section-container pt-20 pb-28">
      <div
        style={{ backgroundImage: `url(${tes_versatile})` }}
        className="w-full h-[650px] bg-no-repeat bg-cover bg-center"
      ></div>
      <div className="text-wrapper flex flex-row">
        <div className="w-1/6">
          <h1 className={styles.sideHeading}>VERSATILITY</h1>
        </div>
        <div className="w-7/12">
          <p className={`${styles.paragraph} text-[20px]`}>
            It can take you new places, or make old favorite roads feel fresh.
            It can take up to six of your friends, or make easy work of the
            weekend chores. And wherever you take it, it'll outperform to make
            every drive memorable.
          </p>
        </div>
      </div>
      <div className="mx-60 pt-12">
        {" "}
        <div className="w-1/6">
          <hr className="w-1/5 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default Versatile;
