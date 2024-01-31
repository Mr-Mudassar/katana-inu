import React from "react";
import { GoArrowUpRight } from "react-icons/go";


const FooterTopPart = () => {
  return (
      <div className="text-center">
        <h3 className="text-white text-3xl md:text-5xl font-semibold mt-8 font-[jost]">
          Katana Inu is a <span className="text-Default">MMO NFT PC Game</span>
        </h3>
        <p className="text-CustomLight mt-8 text-md md:text-xl">
          With focus on free2play and play2earn to attract web2 gamers.
        </p>
        <p className="text-CustomLight mt-8 text-md md:text-xl">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>
        <div className="flex justify-center flex-wrap mt-8">
          <button className="bg-Default mx-1 my-1 py-2 px-4  rounded-md text-CustomFontColor text-md md:text-xl font-bold">
            <div className="flex">
              <p>PLAY KATANAINU</p>
              <GoArrowUpRight size={28} />
            </div>
          </button>

          <button className="border border-Default mx-1 my-1 py-2 px-4  text-md md:text-xl font-semibold rounded-md text-white">
            <div className="flex">
              <p>BUY $KATA TOKENU</p>
              <GoArrowUpRight size={28} />
            </div>
          </button>

          <button className="border border-Default mx-1 my-1 py-2 px-4 text-md md:text-xl font-semibold rounded-md text-white">
            <div className="flex">
              <p>GO TO KAINU.IO MARKETPLACE</p>
              <GoArrowUpRight size={28} />
            </div>
          </button>
        </div>
      </div>
  );
};

export default FooterTopPart;
