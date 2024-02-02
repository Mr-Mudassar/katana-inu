import React from "react";
import Image from "next/image";
import continueIcon from "../../../../public/Vector (1).png";
import KatanaInu1 from "../../../../public/KI-new_pose_Viewport_014.png";
import "./heroSection.css";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] sm:h-[690px] md:h-[600px] lg:-w-[500px] xl:h-[600px] mt-0 mb-0 lg:mb-14 z-50 overflow-hidden">
      <div className="hero-section-main rounded-lg px-2 lg:px-4 2xl:px-10 3xl:px-16 h-[500px] sm:h-[690px] md:h-[600px] xl:h-[520px] mt-0 xl:mt-[80px] flex flex-col md:flex-row justify-start md:justify-between">
        {/* section one  */}
        <div className="flex flex-col justify-start space-y-5 py-2 lg:py-8 md:py-16 self-end">
          <div>
            <h1 className="text-white text-3xl lg:text-3xl xl:text-5xl 2xl:text-7xl font-bold font-[jost]">
              KATANA INU
            </h1>
            <p className="text-[#7A7977] text-lg md:text-xl lg:text-3xl">
              MINTING NFT ITEMS
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <button className="bg-Default text-CustomFontColor rounded-md py-2 px-1 md:px-4 text-md md:text-lg xl:text-xl">
              MINT <b>ARENA NFT</b>
            </button>
            <button className="text-Default rounded-md py-2  px-1 md:px-4 border border-Default text-md md:text-lg xl:text-xl flex items-center text-center">
              <Image src={continueIcon} alt="continue" className="mr-3" /> PLAY
              TRAILER
            </button>
          </div>
        </div>

        {/* section two */}
        <div className="flex flex-col justify-end items-end py-2 md:py-6 lg:py-8 ">
          <p className="text-white font-bold text-md md:text-lg ">GAME WITH</p>
          <p className="text-Default font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl font-[jost]">
            MAGIC
          </p>
          <p className="text-Default font-bold text-lg md:text-2xl lg:text-3xl xl:text-5xl font-[jost]">
            REWARDS
          </p>
        </div>

        <Image
          src={KatanaInu1}
          alt="katana inu 1"
          className="block md:hidden "
        />
      </div>
      <Image
        src={KatanaInu1}
        alt="katana inu 1"
        className="hidden lg:w-[600px] xl:w-[800px] md:block absolute bottom-0 left-1/2 transform -translate-x-1/2"
      />
    </div>
  );
};

export default HeroSection;
