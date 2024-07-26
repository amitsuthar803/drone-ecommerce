/* eslint-disable react/prop-types */
import React from "react";

function ButtonGroup({ buttons, isSelected, setIsSelected }) {
  return (
    <div className=" max-md:flex-row  gap-5 w-full flex flex-col max-md:justify-between">
      {buttons.map((btn, index) => {
        return (
          <button
            onClick={() => setIsSelected(index)}
            className={`capitalize p-2 max-md:text-[10px] font-semibold    active:text-white  hover:bg-btn_dark hover:text-white   w-full text-center ${
              isSelected === index ? "bg-btn_dark text-white" : "bg-gray-300"
            }`}
            key={index}
          >
            {btn}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
