import React from "react";
import Image from "next/image";
import continueIcon from "../../../public/Vector (1).png";
import KatanaInu1 from "../../../public/KI-new_pose_Viewport_014.png";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="relative hero-section-main grid grid-cols-1 lg:grid-cols-3 rounded-lg px-2 lg:px-4  2xl:px-10 3xl:px-16">
      {/* section one  */}
      <div className="flex flex-col justify-start space-y-5 py-2 lg:py-8 md:py-16">
        <div>
          <h1 className="text-white text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-bold font-[jost]">
            KATANA INU
          </h1>
          <p className="text-[#7A7977] text-lg md:text-xl lg:text-3xl">
            MINTING NFT ITEMS
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="bg-Default text-CustomFontColor rounded-md py-2 px-4 text-md md:text-lg xl:text-xl">
            MINT <b>ARENA NFT</b>
          </button>
          <button className="text-Default rounded-md py-2 px-4 border border-Default text-md md:text-lg xl:text-xl flex items-center text-center">
            <Image src={continueIcon} alt="continue" className="mr-3" /> PLAY
            TRAILER
          </button>
        </div>
      </div>

      {/* section two  */}
      <div
        className="text-end items-baseline"
        style={{ display: "flex", alignItems: "flex-end" }}
      >
        <Image
          src={KatanaInu1}
          alt="katana inu 1"
          className="text-end items-baseline"
        />
      </div>

      {/* section threee */}
      <div className="flex flex-col justify-end items-end py-2 lg:py-8 md:py-16">
        <p className="text-white font-bold">GAME WITH</p>
        <p className="text-Default font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl font-[jost]">
          MAGIC
        </p>
        <p className="text-Default font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl font-[jost]">
          REWARDS
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
