import React from "react";
import Image from "next/image";
import UserImage from "../../../../public/user-img.png";

const Table = () => {
  return (
    <div className="bg-CustomFontColor rounded-lg mt-10 p-4 space-y-6 overflow-x-scroll md:overflow-x-auto">
      {/* heading */}
      <div className="bg-Default rounded-lg py-3 px-4 flex justify-between w-[900px] md:w-auto ">
        <p className="text-CustomFontColor text-xs md:text-lg lg:text-2xl font-semibold font-[jost]">
          WALLET ADDRESS
        </p>
        <p className="text-CustomFontColor text-xs md:text-lg lg:text-2xl font-semibold font-[jost] ">
          BUYER NAME
        </p>
        <p className="text-CustomFontColor text-xs md:text-lg lg:text-2xl font-semibold font-[jost]">
          COLLECTION NAME
        </p>
        <p className="text-CustomFontColor text-xs md:text-lg lg:text-2xl font-semibold font-[jost]">
          PRICE
        </p>
        <p className="text-CustomFontColor text-xs md:text-lg lg:text-2xl font-semibold font-[jost]">
          TIME
        </p>
      </div>

      {/* data  */}

      {/* one  */}
      <div className="bg-Background rounded-lg py-3 px-4 flex justify-between w-[900px] md:w-auto">
        <div className="flex-col space-y-1 justify-center text-center items-center text-xs md:text-lg">
          <p className="text-CustomLight font-[jost]">
            0xd6d24c5c89001c028261 <br />
            27957D05535fFABe5c2c
          </p>
        </div>

        <div className="flex gap-2 space-y-1 justify-center text-md text-center items-center text-xs md:text-lg">
          <Image
            src={UserImage}
            alt="User profile"
            className="rounded-[100%]"
          />
          <p className="text-CustomLight font-[jost]">Wadee Waran</p>
        </div>

        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          PRICE
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          TIME
        </p>
      </div>

      {/* two  */}
      <div className="bg-Background rounded-lg py-3 px-4 flex justify-between w-[900px] md:w-auto">
        <div className="flex-col space-y-1 justify-center text-center items-center text-xs md:text-lg">
          <p className="text-CustomLight font-[jost]">
            0xd6d24c5c89001c028261 <br />
            27957D05535fFABe5c2c
          </p>
        </div>

        <div className="flex gap-2 space-y-1 justify-center text-md text-center items-center text-xs md:text-lg">
          <Image
            src={UserImage}
            alt="User profile"
            className="rounded-[100%]"
          />
          <p className="text-CustomLight font-[jost]">Wadee Waran</p>
        </div>

        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          PRICE
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          TIME
        </p>
      </div>

      {/* three */}
      <div className="bg-Background rounded-lg py-3 px-4 flex justify-between w-[900px] md:w-auto">
        <div className="flex-col space-y-1 justify-center text-center items-center text-xs md:text-lg">
          <p className="text-CustomLight font-[jost]">
            0xd6d24c5c89001c028261 <br />
            27957D05535fFABe5c2c
          </p>
        </div>

        <div className="flex gap-2 space-y-1 justify-center text-md text-center items-center text-xs md:text-lg">
          <Image
            src={UserImage}
            alt="User profile"
            className="rounded-[100%]"
          />
          <p className="text-CustomLight font-[jost]">Wadee Waran</p>
        </div>

        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          PRICE
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          TIME
        </p>
      </div>

      {/* Four  */}
      <div className="bg-Background rounded-lg py-3 px-4 flex justify-between w-[900px] md:w-auto">
        <div className="flex-col space-y-1 justify-center text-center items-center text-xs md:text-lg">
          <p className="text-CustomLight font-[jost]">
            0xd6d24c5c89001c028261 <br />
            27957D05535fFABe5c2c
          </p>
        </div>

        <div className="flex gap-2 space-y-1 justify-center text-md text-center items-center text-xs md:text-lg">
          <Image
            src={UserImage}
            alt="User profile"
            className="rounded-[100%]"
          />
          <p className="text-CustomLight font-[jost]">Wadee Waran</p>
        </div>

        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          PRICE
        </p>
        <p className="text-CustomLight font-[jost] text-xs md:text-lg flex justify-center text-center items-center">
          TIME
        </p>
      </div>
    </div>
  );
};

export default Table;
