import React from "react";
import Card from "./card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const Section2Main = () => {
  return (
    <div className="mt-28">
        <div className="flex flex-col lg:flex-row justify-between ">
            <div className="flex gap-4 justify-between">
                <button className="border border-[#7A7977]  rounded-md px-4 py-2 text-sm md:text-xl text-[#7A7977] font-semibold mt-4">THE LAST</button>
                <button className="border border-[#7A7977]  rounded-md px-4 py-2 text-sm md:text-xl text-[#7A7977] font-semibold mt-4">SHOW MORE</button>
                <button className="border border-[#7A7977]  rounded-md px-4 py-2 text-sm md:text-xl text-[#7A7977] font-semibold mt-4">CHANGE</button>
            </div>

            <div className="flex justify-between md:flex-row gap-14">
                <button className="bg-Default rounded-md px-4 py-2 text-md md:text-2xl text-CustomFontColor font-semibold mt-4">DOWNLOAD APP</button>
                <div className="flex justify-between gap-2 md:gap-4">
                    <button className="border border-[#7A7977]  rounded-md p-4 text-sm md:text-lg text-[#7A7977] font-semibold mt-4"><FaChevronLeft /></button>
                    <button className="bg-Default rounded-md p-4 text-sm md:text-lg text-CustomFontColor font-semibold mt-4"><FaChevronRight /></button>
                </div>
            </div>

     </div>

      <Card />
    </div>
  );
};

export default Section2Main;
