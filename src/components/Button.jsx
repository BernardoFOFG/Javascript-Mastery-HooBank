import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-red-gradient font-poppins font-medium text-[18px] text-primary outline-none ${styles} rounded-xl hover:text-white`}
    >
      Get Started
    </button>
  );
};

export default Button;
