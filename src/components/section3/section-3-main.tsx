import React from "react";
import Card3 from "./card3";
import "./card3.css"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Section3Main = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mt-16 text-center items-center">
        <div className="flex gap-6">
          <button className=" text-lg md:text-3xl text-Default underline font-[jost]">
            CURRENT LIVE
          </button>
          <span className="h-10 w-[0.5px] bg-CustomLight mt-1"></span>
          <button className=" text-lg md:text-3xl text-CustomLight font-[jost]">
            CURRENT LIVE
          </button>
        </div>

        <div className="flex justify-between gap-2 md:gap-4 text-center items-center ">
          <button className="border border-[#7A7977]  rounded-md p-4 text-sm md:text-lg text-[#7A7977] font-semibold mt-4">
            <FaChevronLeft />
          </button>
          <button className="bg-Default rounded-md p-4 text-sm md:text-lg text-CustomFontColor font-semibold mt-4">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <hr className="mt-6"></hr>

      <Card3 />

    </div>
  );
};

export default Section3Main;
