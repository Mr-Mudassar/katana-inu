import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";

const Card3 = () => {
  return (
    <div className="w-[100%] xl:w-[24%] ">
      <div className="card3-1  background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
        <div className="card3-1-1 w-[100%] h-60 2xl:h-80 text-end items-end">
          <div className="flex justify-between p-4">
            <div className="bg-Background rounded-full">
              <p className="text-CustomLight py-2 px-4">NEW</p>
            </div>
            <div className="bg-Background rounded-full">
              <p className=" p-2 text-Default">
                <FaHeart size={24} />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
