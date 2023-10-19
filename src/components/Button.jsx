import React from "react";

const Button = ({ styles }) => (
  <button
    type="button"
    className={`xl:py-4 py-3 xl:px-6 px-5 font-poppins font-medium xl:text-[18px] text-[12px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
  >
    View Offers
  </button>
);

export default Button;
