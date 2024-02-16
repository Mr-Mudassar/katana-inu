import React from "react";
import Image from "next/image";
import Image1 from "../../../../public/KI-new_pose_Viewport_013.png";
import Image2 from "../../../../public/KI-new_pose_Viewport_002.png";
import Image3 from "../../../../public/KI-new_pose_Viewport_017 (1).png";
import "./card.css";

const Card = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-center gap-2 lg:gap-8">
      {/* demo card 1 */}
      <div className="card w-[100%] xl:w-[32%] h-auto 2xl:h-auto background rounded-xl mt-12  overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-xl lg:text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex flex-col-reverse xl:flex-row items-center lg:items-end w-[100%]">
          <Image
            src={Image1}
            alt="katana character 1"
            className="item-ends text-end items-baseline xl:w-[60em]"
          />

          <div className="flex flex-col justify-center text-center items-center m-auto xl:items-end xl:w-[40em] xl:pr-4 xl:pb-4">
            <p className="text-3xl md:text-4xl 2xl:text-6xl text-white font-bold mb-0 lg:mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-1 xl:px-4 py-2 bg-CustomFontColor text-white font-semibold text-sm md:text-md 2xl:text-lg">
              GET BONUS
            </button>
          </div>
        </div>
      </div>

      {/* demo card 2 */}
      <div className="card2 w-[100%] xl:w-[32%] h-auto 2xl:h-auto background rounded-xl mt-12 overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-xl lg:text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex flex-col-reverse xl:flex-row items-center lg:items-end w-[100%]">
          <Image
            src={Image2}
            alt="katana character 1"
            className="item-ends text-end items-baseline xl:w-[60em]"
          />

          <div className="flex flex-col justify-center text-center items-center m-auto xl:items-end xl:w-[40em] xl:pr-4 xl:pb-4">
            <p className="text-3xl md:text-4xl 2xl:text-6xl text-white font-bold mb-0 lg:mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-1 xl:px-4 py-2 bg-CustomFontColor text-white font-semibold text-sm md:text-md 2xl:text-lg">
              GET BONUS
            </button>
          </div>
        </div>
      </div>

      {/* demo card 3  */}
      <div className="card3 w-[100%] xl:w-[32%] h-auto 2xl:h-auto background rounded-xl mt-12  overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-xl lg:text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex flex-col-reverse xl:flex-row items-center lg:items-end w-[100%]">
          <Image
            src={Image3}
            alt="katana character 1"
            className="item-ends text-end items-baseline xl:w-[60em]"
          />

          <div className="flex flex-col justify-center text-center items-center m-auto xl:items-end xl:w-[40em] xl:pr-4 xl:pb-4">
            <p className="text-3xl md:text-4xl 2xl:text-6xl text-white font-bold mb-0 lg:mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-1 xl:px-4 py-2 bg-CustomFontColor text-white font-semibold text-sm md:text-md 2xl:text-lg">
              GET BONUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
