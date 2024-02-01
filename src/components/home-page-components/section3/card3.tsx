import React from "react";
import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import Ethereum from "../../../../public/Frame 625940.png";

const Card3 = () => {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row justify-between">
      {/* card 1 */}
      <div className="w-[100%] sm:w-[49%] lg:w-[24%] my-2">
        <div className="card3-1  background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
          <div className="card3-1-1 w-full h-60 2xl:h-80 flex flex-col justify-between p-4">
            <div className="flex justify-between ">
              <div className="bg-Background rounded-full">
                <p className="text-CustomLight py-2 px-4">NEW</p>
              </div>
              <div className="bg-Background rounded-full">
                <p className="p-2 text-Default">
                  <FaHeart size={24} />
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-Default rounded-md px-4 py-2 text-md md:text-xl text-CustomFontColor font-semibold">
                MINT NOW!
              </button>
            </div>
          </div>
        </div>
        <p className="text-CustomLight text-2xl font-semibold my-4">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight text-lg">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>

        <div className="flex lg:flex-col xl:flex-row justify-between mt-6">
          {/* section 1 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Price:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              0.04 ETH
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block "></span>

          {/* section 2 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Sold/Total:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              825/5555
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block"></span>

          {/* section 3 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <div className="text-lg text-CustomLight mx-auto lg:mx-0 xl:mx-auto mb-2 ">
              <Image src={Ethereum} alt="ethereum" />
            </div>
            <p className="font-[jost] text-Default text-xl font-semibold">
              Ethereum
            </p>
          </div>
        </div>
      </div>

      {/* card 2  */}
      <div className="w-[100%] sm:w-[49%] lg:w-[24%] my-2">
        <div className="card3-1  background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
          <div className="card3-1-1 w-full h-60 2xl:h-80 flex flex-col justify-between p-4">
            <div className="flex justify-between ">
              <div className="bg-Background rounded-full">
                <p className="text-CustomLight py-2 px-4">NEW</p>
              </div>
              <div className="bg-Background rounded-full">
                <p className="p-2 text-Default">
                  <FaHeart size={24} />
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-Default rounded-md px-4 py-2 text-md md:text-xl text-CustomFontColor font-semibold">
                MINT NOW!
              </button>
            </div>
          </div>
        </div>
        <p className="text-CustomLight text-2xl font-semibold my-4">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight text-lg">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>

        <div className="flex lg:flex-col xl:flex-row justify-between mt-6">
          {/* section 1 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Price:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              0.04 ETH
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block "></span>

          {/* section 2 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Sold/Total:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              825/5555
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block"></span>

          {/* section 3 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <div className="text-lg text-CustomLight mx-auto lg:mx-0 xl:mx-auto mb-2 ">
              <Image src={Ethereum} alt="ethereum" />
            </div>
            <p className="font-[jost] text-Default text-xl font-semibold">
              Ethereum
            </p>
          </div>
        </div>
      </div>

      {/* card 3  */}
      <div className="w-[100%] sm:w-[49%] lg:w-[24%] my-2">
        <div className="card3-1  background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
          <div className="card3-1-1 w-full h-60 2xl:h-80 flex flex-col justify-between p-4">
            <div className="flex justify-between ">
              <div className="bg-Background rounded-full">
                <p className="text-CustomLight py-2 px-4">NEW</p>
              </div>
              <div className="bg-Background rounded-full">
                <p className="p-2 text-Default">
                  <FaHeart size={24} />
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-Default rounded-md px-4 py-2 text-md md:text-xl text-CustomFontColor font-semibold">
                MINT NOW!
              </button>
            </div>
          </div>
        </div>
        <p className="text-CustomLight text-2xl font-semibold my-4">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight text-lg">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>

        <div className="flex lg:flex-col xl:flex-row justify-between mt-6">
          {/* section 1 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Price:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              0.04 ETH
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block "></span>

          {/* section 2 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Sold/Total:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              825/5555
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block"></span>

          {/* section 3 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <div className="text-lg text-CustomLight mx-auto lg:mx-0 xl:mx-auto mb-2 ">
              <Image src={Ethereum} alt="ethereum" />
            </div>
            <p className="font-[jost] text-Default text-xl font-semibold">
              Ethereum
            </p>
          </div>
        </div>
      </div>

      {/* card 4  */}
      <div className="w-[100%] sm:w-[49%] lg:w-[24%] my-2">
        <div className="card3-1  background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
          <div className="card3-1-1 w-full h-60 2xl:h-80 flex flex-col justify-between p-4">
            <div className="flex justify-between ">
              <div className="bg-Background rounded-full">
                <p className="text-CustomLight py-2 px-4">NEW</p>
              </div>
              <div className="bg-Background rounded-full">
                <p className="p-2 text-Default">
                  <FaHeart size={24} />
                </p>
              </div>
            </div>

            <div className="flex justify-end">
              <button className="bg-Default rounded-md px-4 py-2 text-md md:text-xl text-CustomFontColor font-semibold">
                MINT NOW!
              </button>
            </div>
          </div>
        </div>
        <p className="text-CustomLight text-2xl font-semibold my-4">
          Champion Forging Collection Gen1
        </p>
        <p className="text-CustomLight text-lg">
          Check for Katana Inu Ecosystem for Renting, Staking, our Marketplace
          or for purchasing our $Kata Token:
        </p>

        <div className="flex lg:flex-col xl:flex-row justify-between mt-6">
          {/* section 1 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Price:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              0.04 ETH
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block "></span>

          {/* section 2 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <p className="text-lg text-CustomLight">Sold/Total:</p>
            <p className="font-[jost] text-Default text-xl font-semibold">
              825/5555
            </p>
          </div>

          <span className="h-10 w-[0.5px] bg-CustomFontColor mt-1 lg:hidden xl:block"></span>

          {/* section 3 */}
          <div className="flex flex-col justify-start text-start items-start ">
            <div className="text-lg text-CustomLight mx-auto lg:mx-0 xl:mx-auto mb-2 ">
              <Image src={Ethereum} alt="ethereum" />
            </div>
            <p className="font-[jost] text-Default text-xl font-semibold">
              Ethereum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
