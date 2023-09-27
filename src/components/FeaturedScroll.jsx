import React, { useEffect, useState } from "react";
import { featured_imgSet } from "../constants";
import styles from "../style";

const FeaturedScroll = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const imgElem = document.getElementById("imgChanger").classList;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target.classList.contains("scrollBound")) {
              imgElem.remove("scrollImg");
              imgElem.add("pastScroll");
            } else if (imgElem.contains("pastScroll")) {
              imgElem.remove("pastScroll");
              imgElem.add("scrollImg");
            } else {
              setImgNum(entry.target.id);
            }
          }
        });
      },
      { threshold: 1 }
    );
    const paragraphElements = document.querySelectorAll(".scrollText");
    paragraphElements.forEach((el) => observer.observe(el));
  }, []);

  const [imgNum, setImgNum] = useState("img-1");

  return (
    <section className="flex flex-1 xs:p-28 p-10 flex-col w-full justify-start">
      <div className="scrollText scrollBound pb-96"></div>
      <div className="flex scrollElement xl:flex-row flex-col xl:items-center items-start relative">
        <div className="absolute z-[0] w-[15%] h-[15%] left-6 rounded-full blue__gradient bottom-84" />
        <div
          id="img-1"
          className="flex-1 flex scrollText flex-col xl:max-w-lg lg:max-w-xs"
        >
          <h1 className={`${styles.heading2} py-4 z-10`}>Fear nothing.</h1>
          <p
            className={`${styles.paragraph} leading-[36px] z-10 xs:text-[18px] text-[14px]`}
          >
            The Tonda GLA500 uses a 100% grade V steel chasis. The chasis pairs
            invincible protection with sleek performance. Tried and tested
            against 1000lbs of force, there is nothing it can't withstand.
          </p>
        </div>
        <div
          style={{
            backgroundImage: `url(${featured_imgSet[imgNum]})`,
          }}
          id="imgChanger"
          className="flex-1 bg-cover bg-center mx-8 duration-500 pastScroll lg:block hidden"
        ></div>
        <img
          src={featured_imgSet["img-1"]}
          alt=""
          className="lg:hidden flex max-h-[60%] pt-20 ss:w-1/2 w-full"
        />
      </div>
      {/*  */}
      <div className="flex scrollElement xl:flex-row flex-col xl:items-center items-start">
        <div
          id="img-2"
          className="xl:flex-1 flex scrollText flex-col xl:max-w-lg lg:max-w-xs"
        >
          <h1 className={`${styles.heading2} py-4`}>Never miss a beat.</h1>
          <p
            className={`${styles.paragraph} leading-[36px] xs:text-[18px] text-[14px]`}
          >
            Get a real-time view of your surroundings with the Tonda's available
            360° Camera Monitoring system, which uses an omnidirectional camera
            to provide you with added peace of mind.
          </p>
        </div>
        <img
          src={featured_imgSet["img-2"]}
          alt=""
          className="lg:hidden flex max-h-[60%] pt-20 ss:w-1/2 w-full"
        />
      </div>
      {/*  */}
      <div className="flex scrollElement xl:flex-row flex-col xl:items-center items-start">
        <div
          id="img-3"
          className="xl:flex-1 flex scrollText flex-col xl:max-w-lg lg:max-w-xs"
        >
          <h1 className={`${styles.heading2} py-4`}>Inspire your senses.</h1>
          <p
            className={`${styles.paragraph} leading-[36px] xs:text-[18px] text-[14px]`}
          >
            State of the art sensors and safety units introduce additional
            features and improve the driving experience making your car more
            capable over time.
          </p>
        </div>
        <img
          src={featured_imgSet["img-3"]}
          alt=""
          className="lg:hidden flex max-h-[60%] pt-20 ss:w-1/2 w-full"
        />
      </div>
      <div className="scrollText scrollBound pt-96"></div>
    </section>
  );
};

export default FeaturedScroll;
