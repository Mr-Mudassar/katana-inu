import React from "react";
import "./subscribe-section.css";
import Image from "next/image";
import KatanaCharacterLogo from "../../../public/subscribe-section-character.png";
import { GoArrowUpRight } from "react-icons/go";

const CallToAction = () => {
  return (
    <div className="py-2 px-3 lg:py-[32px] lg:px-[90px]">
      <div className="relative h-[440px] xl:h-[400px]  mt-24 mb-0 lg:mb-14 z-50 border border-Background">
        <div className="subscribe-section-1  h-[440px] m:h-[600px] xl:h-[300px] bottom-0 mt-0 xl:mt-[100px] overflow-hidden">
          <div className="flex-col justify-center text-center items-center pt-16">
            <div>
              <p className="font-[jost] text-2xl lg:text-3xl text-CustomLight">
                DON'T MISS OUR LATEST NEWS
              </p>
            </div>

            <div className="m-auto flex justify-center text-center items-center">
              <form className="rounded-lg bg-Background py-2 px-2 mt-4 flex justify-between w-[90%] md:w-[60%] xl:w-[30%]">
                <input className="bg-transparent border-none outline-none text-white w-[66%]" />
                <button type="submit">
                  <div className="flex rounded-md py-2 px-1 md:px-4 bg-Default text-md md:text-xl text-CustomFontColor font-semibold">
                    <p>SUBSCRIBE</p>
                    <GoArrowUpRight size={28} />
                  </div>
                </button>
              </form>
            </div>

            <Image
              src={KatanaCharacterLogo}
              alt="Katana character"
              className="flex xl:hidden h-[100%] justify-center z-20 text-center items-center mt-auto mx-auto w-[282px] sm:w-[320px] md:w-[390px]"
            />
          </div>
        </div>

        <Image
          src={KatanaCharacterLogo}
          alt="Katana character"
          className="hidden xl:block absolute bottom-0 left-16 z-20"
        />
      </div>
    </div>
  );
};

export default CallToAction;
