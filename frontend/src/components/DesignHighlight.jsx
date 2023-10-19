import React from "react";
import styles from "../style";

const DesignHighlight = ({ heroImg, designHeading, designDescrip }) => {
  return (
    <div className="section-container pt-20 pb-28">
      <div
        style={{ backgroundImage: `url(${heroImg})` }}
        className="w-full xl:h-[650px] h-[450px] bg-no-repeat bg-cover bg-center"
      ></div>
      <div className="xl:mx-60 md:mx-36 xs:mx-20 mx-10 xl:pt-12 pt-8 flex sm:flex-row flex-col">
        <div className="xl:w-1/6 w-3/12">
          <h1 className={styles.sideHeading}>{designHeading}</h1>
        </div>
        <div className="md:w-7/12 xs:8/12 w-full md:pl-0 sm:pl-8 sm:pt-0 pt-4">
          <p className={`${styles.paragraph} xl:text-[20px] text-[14px]`}>
            {designDescrip}
          </p>
        </div>
      </div>
      <div className="xl:mx-60 md:mx-36 xs:mx-20 mx-10 pt-12">
        <div className="w-1/6">
          <hr className="md:w-1/5 w-2/5 bg-white" />
        </div>
      </div>
    </div>
  );
};

export default DesignHighlight;
