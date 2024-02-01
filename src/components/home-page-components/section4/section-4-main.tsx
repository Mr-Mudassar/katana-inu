import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Table from "./table";

const Section4Main = () => {
  return (
    <div>
      <div className="flex justify-between text-center items-center mt-28">
        <div className="flex gap-6">
          <button className=" text-lg md:text-3xl text-Default font-[jost]">
            LATEST BUYES
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

      <Table />
    </div>
  );
};

export default Section4Main;
