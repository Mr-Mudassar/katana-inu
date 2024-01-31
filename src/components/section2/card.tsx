import React from "react";
import Image from "next/image";
import Image1 from "../../../public/KI-new_pose_Viewport_013.png";
import Image2 from "../../../public/KI-new_pose_Viewport_002.png";
import Image3 from "../../../public/KI-new_pose_Viewport_017 (1).png";
import "./card.css";

const Card = () => {
  return (
    <div className="flex gap-8">
      {/* demo card 1 */}
      <div className="card w-[32%] h-[340px] background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex items-end ">
          <Image
            src={Image1}
            alt="katana character 1"
            className="item-ends text-end"
          />

          <div className="flex flex-col justify-center text-center items-end pr-8 pb-8">
            <p className="text-6xl text-white font-bold mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-4 py-2 bg-CustomFontColor text-white font-semibold">
              GET BONUS
            </button>
          </div>
        </div>
      </div>

      {/* demo card 2 */}
      <div className="card2 w-[32%] h-[340px] background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex items-end overflow-hidden">
          <div className="overflow-hidden">
            <Image src={Image2} alt="katana character 2" />
          </div>
          <div className="flex flex-col justify-center text-center items-end pr-8 pb-8">
            <p className="text-6xl text-white font-bold mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-4 py-2 bg-CustomFontColor text-white font-semibold">
              GET BONUS
            </button>
          </div>
        </div>
      </div>

      {/* demo card 3  */}
      <div className="card3 w-[32%] h-[340px] background rounded-xl mt-12  border-Default bg-Default overflow-hidden">
        <p className="text-CustomFontColor font-[jost] text-3xl font-semibold mx-6 pt-6">
          ARENA GENISIS NFT
        </p>

        <div className="flex items-end overflow-hidden">
          <div className="overflow-hidden">
            <Image src={Image3} alt="katana character 3" />
          </div>
          <div className="flex flex-col justify-center text-center items-end pr-8 pb-8">
            <p className="text-6xl text-white font-bold mb-2 font-[jost]">
              30%
            </p>
            <p className="text-CustomFontColor text-lg mb-2 font-semibold">
              Discount on Games
            </p>
            <button className="rounded px-4 py-2 bg-CustomFontColor text-white font-semibold">
              GET BONUS
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
