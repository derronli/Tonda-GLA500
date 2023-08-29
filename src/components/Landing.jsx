import React from "react";

const Landing = () => {
  return (
    <div className="landing">
      <div className="landing-text">
        <h2 className="font-poppins xs:text-[30px] text-[16px] tracking-tight text-white xs:leading-[76.8px] leading-[66.8px] w-full xs:pb-4 pb-0">
          Tonda GLA500
        </h2>
        <h1 className="font-poppins font-semibold xs:text-[80px] text-[40px] tracking-tight text-white xs:leading-[76.8px] leading-[42.8px] w-full">
          Don't dream it. Drive it.
        </h1>
        <div className="flex flex-row justify-center xs:mt-12 mt-8">
          <button className="bg-white hover:opacity-20 text-[#8F97AA] xs:py-3 xs:px-5 px-12 rounded font-poppins xs:text-[20px] text-[10px] mx-6">
            Build & Price
          </button>
          <button className="bg-transparent hover:opacity-20 text-white xs:py-3 xs:px-5 px-12 rounded border border-white font-poppins xs:text-[20px] text-[10px]">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
