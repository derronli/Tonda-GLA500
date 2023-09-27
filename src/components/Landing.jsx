import React from "react";

const Landing = () => {
  // lg: is 100%
  // xl: is anything < 100%
  return (
    <div className="landing">
      <div className="landing-text ss:top-[40%] md:top-[30%] xl:top-[25%] top-[33%]">
        <h2 className="font-poppins xs:text-[30px] lg:text-[22px] xl:text-[30px] text-[16px] tracking-tight text-white xl:leading-[80.8px] md:leading-[40px] leading-[66.8px] w-full xs:pb-4 pb-0">
          Tonda GLA500
        </h2>
        <h1 className="font-poppins font-semibold xl:text-[80px] md:text-[54px] text-[40px] tracking-tight text-white xs:leading-[80.8px] md:leading-[40px] leading-[42.8px] w-full">
          Don't dream it. Drive it.
        </h1>
        <div className="flex flex-row justify-center xl:mt-16 mt-8">
          <button className="bg-white hover:opacity-20 text-[#8F97AA] xl:py-3 md:py-2 xs:px-5 px-12 rounded font-poppins xl:text-[20px] md:text-[15px] text-[10px] mx-6">
            Build & Price
          </button>
          <button className="bg-transparent hover:opacity-20 text-white xl:py-3 md:py-2 xs:px-5 px-12 rounded border border-white font-poppins xl:text-[20px] md:text-[15px] text-[10px]">
            Demo Drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
