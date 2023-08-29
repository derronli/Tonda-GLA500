import React, { useState } from "react";
import styles from "../style";
import { carColours } from "../constants";

const CircleColour = ({ id, colour, selected, onColourSelect }) => {
  return (
    <div
      id={id}
      style={{ backgroundColor: colour }}
      className={
        (selected === id ? "selectedCircle " : "") +
        "circle md:h-[100px] h-[50px] md:w-[100px] w-[50px] cursor-pointer"
      }
      onClick={() => onColourSelect(id, colour)}
    ></div>
  );
};

const BuildColour = () => {
  const [selected, setSelected] = useState(0);
  const [borderGlow, setBorderGlow] = useState({
    boxShadow: "0 0 20px #00246A",
    transition: "all 1.5s ease",
  });
  // Dynamically change the CSS (colour) by creating a JS object as a "dummy" style

  const handleColourSelect = (id, colour) => {
    setSelected(id);
    handleBorderGlow(colour);
  };

  const handleBorderGlow = (colour) => {
    const newGlow = { ...borderGlow };
    newGlow["boxShadow"] = "0 0 20px " + colour;
    setBorderGlow(newGlow);
  };

  return (
    <section className="flex flex-col xl:h-[80vh] h-[100vh] w-full relative">
      <div className="ss:px-28 px-5 ss:text-start text-center">
        <p className={`${styles.paragraph}`}>Tonda GLA500</p>
        <h1 className={`${styles.heading1}`}>Explore the possibilities.</h1>
      </div>
      <div className="flex xl:flex-row flex-col ss:p-28 p-2">
        <div className="ss:w-[40%] w-full flex justify-center ss:pt-0 pt-6">
          <div
            style={borderGlow}
            className="colourSelect flex flex-col md:w-[370px] w-[180px] md:h-auto ss:h-[200px] h-[220px] ss:py-12 py-3"
          >
            <p className="pt-2 pl-6 md:pb-8 pb-0 font-poppins font-normal md:text-[30px] xs:text-[22px] text-[16px] xs:leading-[26.58px] leading-[21.58px] text-gradient">
              {carColours[selected].colourName}
            </p>
            {/* First row of colours */}
            <div className="flex flex-row justify-evenly py-8">
              {carColours.slice(0, 3).map((colour) => {
                return (
                  <CircleColour
                    key={colour.id}
                    id={colour.id}
                    colour={colour.colour}
                    selected={selected}
                    onColourSelect={handleColourSelect}
                  />
                );
              })}
            </div>
            {/* Second row of colours */}
            <div className="flex flex-row justify-evenly">
              {carColours.slice(3, 5).map((colour) => {
                return (
                  <CircleColour
                    key={colour.id}
                    id={colour.id}
                    colour={colour.colour}
                    selected={selected}
                    onColourSelect={handleColourSelect}
                  />
                );
              })}
              {/* DUMMY CIRCLE (FOR SPACING) */}
              <div
                style={{ backgroundColor: "#00040f" }}
                className="circle md:h-[100px] h-[50px] md:w-[100px] w-[50px]"
              ></div>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${carColours[selected].img})`,
          }}
          className="carColImg xl:flex-1 flex bg-contain bg-center bg-no-repeat z-10 duration-500 xl:h-auto h-[400px]"
        ></div>
        <div className="absolute z-[0] w-[40%] h-[50%] -right-[0%] rounded-full blue__gradient bottom-50" />
      </div>
    </section>
  );
};

export default BuildColour;
