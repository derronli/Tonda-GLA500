import React, { useState } from "react";
import styles from "../style";
import { slider1 } from "../constants";

const Slider = () => {
  const [currSlide, setCurrSlide] = useState(0);

  const handleSlideNum = (id) => {
    setCurrSlide(id);
  };

  return (
    <section className="pb-20 flex-col w-full section-container">
      <div className="xs:px-12 px-6">
        <div
          style={{
            backgroundImage: `url(${slider1[currSlide].image})`,
          }}
          className="flex-1 bg-center bg-cover w-full xl:h-[900px] md:h-[600px] h-[500px] duration-500 rounded-xl"
        ></div>
      </div>

      <div className="flex flex-1 ss:flex-row flex-col xs:px-12 px-6 pt-6">
        <div className="ss:w-4/6 w-full">
          <h1
            key={currSlide}
            className={`${styles.paragraph} xs:text-[20px] text-[14px] transition scrollerTextAni`}
          >
            <span className="font-semibold">{slider1[currSlide].title}</span>{" "}
            {slider1[currSlide].text}
          </h1>
        </div>
        <div className="ss:pl-24 pl-0 ss:mt-0 mt-5 ss:w-2/6 w-full flex justify-evenly items-start">
          {slider1.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => handleSlideNum(slide.id)}
              className={
                (currSlide === slide.id
                  ? "font-bold border-b-2 border-white "
                  : "transition duration-200 ease-in-out hover:font-bold hover:text-lg ") +
                styles.paragraph
              }
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;
