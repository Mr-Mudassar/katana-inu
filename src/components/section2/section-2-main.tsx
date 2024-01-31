import React from "react";
import Card from "./card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const Section2Main = () => {
  return (
    <div className="mt-28">
        <div className="flex flex-col md:flex-row justify-between ">
            <div className="flex gap-4 justify-center">
                <button className="border border-[#7A7977] px-2 md:px-4 py-1 md:py-2 rounded-md text-[#7A7977] font-semibold text-sm md:text-xl">THE LAST</button>
                <button className="border border-[#7A7977] px-2 md:px-4 py-1 md:py-2 rounded-md text-[#7A7977] font-semibold text-sm md:text-xl">SHOW MORE</button>
                <button className="border border-[#7A7977] px-2 md:px-4 py-1 md:py-2 rounded-md text-[#7A7977] font-semibold text-sm md:text-xl">CHANGE</button>
            </div>

            <div className="flex flex-col md:flex-row gap-14">
                <button className="bg-Default rounded-md px-4 py-2 text-md md:text-2xl text-CustomFontColor font-semibold mt-4">DOWNLOAD APP</button>
                <div className="flex justify-between gap-2 md:gap-4">
                    <button className="p-2 md:p-4 border border-[#7A7977] rounded-md text-[#7A7977]"><FaChevronLeft /></button>
                    <button className="p-2 md:p-4 rounded-md text-CustomFontColor  bg-Default"><FaChevronRight /></button>
                </div>
            </div>

     </div>

      <Card />
    </div>
  );
};

export default Section2Main;
