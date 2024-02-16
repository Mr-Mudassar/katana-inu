import React from "react";
import Card from "./card";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { GoSortAsc } from "react-icons/go";
import { GrFormCut } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";

const Section2Main = () => {
  return (
    <div className="mt-28">
      <div className="flex flex-col lg:flex-row justify-between ">
        <div className="flex gap-4 justify-between">
          <button className="border border-[#7A7977]  rounded-md px-2 lg:px-4 py-2 text-xs md:text-xl text-[#7A7977] font-semibold mt-4">
            THE LAST
          </button>
          <button className="border border-[#7A7977]  rounded-md px-2 lg:px-4 py-2 text-xs md:text-xl text-[#7A7977] font-semibold mt-4">
            SHOW MORE
          </button>
          <button className="border border-[#7A7977]  rounded-md px-2 lg:px-4 py-2 text-xs md:text-xl text-[#7A7977] font-semibold mt-4">
            CHANGE
          </button>
        </div>

        <div className="flex justify-between md:flex-row gap-14">
          <button className="bg-Default rounded-md px-2 lg:px-4 py-1 lg:py-2 text-xs md:text-2xl text-CustomFontColor font-semibold mt-4">
            DOWNLOAD APP
          </button>
          <div className="flex justify-between gap-2 md:gap-4">
            <button className="border border-[#7A7977]  rounded-md p-4 text-sm md:text-lg text-[#7A7977] font-semibold mt-4">
              <FaChevronLeft />
            </button>
            <button className="bg-Default rounded-md p-4 text-sm md:text-lg text-CustomFontColor font-semibold mt-4">
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>

      <Card />

      <div className="flex  flex-col md:flex-row justify-between mt-16">
        <div className="bg-CustomFontColor text-center items-center rounded-lg px-4 py-4 flex  w-[100%] md:w-[40%] my-2">
          <IoIosSearch size={28} className="text-white mr-3" />
          <input
            className="bg-transparent border-none outline-none text-white border text-xl w-[100%]"
            placeholder="SEARCH FOR GAMES"
          />
        </div>

        <div className="flex justify-between gap-4 my-2">
          <button className="rounded-full text-CustomLight px-4 py-2  bg-CustomFontColor font-semiboldl text-xl">
            <div className="flex">
              <GoSortAsc size={24} className="mt-0.5" />
              <p className="ml-2">SORT</p>
            </div>
          </button>
          <button className="rounded-full text-CustomLight px-4 py-2  bg-CustomFontColor font-semiboldl text-xl">
            <div className="flex">
              <GrFormCut size={26} className="mt-0.5" />
              <p className="ml-2">FILTER</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Section2Main;
