import React from "react";
import FooterTopPart from "./footer-top-part";
import "./footer.css";
import Image from "next/image";
import FooterLogo from "../../../public/Logo (1).png";
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="footer-main-div border border-Default md:py-[32px] md:px-[90px]">
      <FooterTopPart />
      <div className="mt-28 grid grid-cols-3 ">
        {/* first section */}
        <div>
          <Image
            src={FooterLogo}
            alt="Katana Inu logo"
            width={236}
            height={96}
          />
          <p className="text-CustomLight font-[jost] font-[#7A7977] text-2xl mt-4 ">
            DONT MISS OUR LATEST NEWS
          </p>

          <form className="rounded-lg bg-[#30373F] py-2 px-2 mt-4 flex justify-between w-3/4">
            <input className="bg-transparent border-none outline-none text-white" />
            <button type="submit">
              <div className="flex rounded-md py-2 px-4 bg-Default text-xl text-CustomFontColor font-semibold">
                <p>SUBSCRIBE</p>
                <GoArrowUpRight size={28} />
              </div>
            </button>
          </form>

          <p className="text-white mt-8 font-[jost] text-md">
            KATANA INU IS A A PROJECT FROM{" "}
            <span className="text-Default">CHAINVISION GAMES</span>
          </p>
          <p className="text-sm text-[#7A7977] mt-4">
            Nothing on this website constitutes financial advice, and it is
            always recommended to consult a qualified financial advisor before
            participating in any token or NFT purchases.
          </p>
          <br></br>
          <p className="text-sm text-[#7A7977]">
            Buy Katana Inu NFTs only from katanainu.com or kainu.io subdomains
            to be safe. Check the website's address for on our main website
            www.katanainu.com and go to the "Minting NFTs" section to verify.
            <span className="text-Default">
              {" "}
              Ask in our telegram or discord channel for confirmation. Avoid
              other websites!
            </span>
          </p>
        </div>

        {/* Second section */}
        <div className="flex justify-around mt-6">
          <div className="text-white">
            <p className="text-xl text-white">Products</p>
            <div className="ml-1">
              <p className="text-md my-8 text-[#BEC1CE]">Pancakeswap</p>
              <p className="text-md my-8 text-[#BEC1CE]">Uniswap</p>
              <p className="text-md my-8 text-[#BEC1CE]">Whitepaper</p>
              <p className="text-md my-8 text-[#BEC1CE]">Roadmap</p>
              <p className="text-md my-8 text-[#BEC1CE]">Tokenomics</p>
              <p className="text-md my-8 text-[#BEC1CE]">FAQ</p>
              <p className="text-md my-8 text-[#BEC1CE]">Chainplay</p>
            </div>
          </div>

          <div className="text-white">
            <p className="text-xl text-white">Need Help ?</p>
            <div className="ml-1">
              <p className="text-md my-8 text-[#BEC1CE]">Contact us</p>
              <p className="text-md my-8 text-[#BEC1CE]">Discord</p>
              <p className="text-md my-8 text-[#BEC1CE]">Medium</p>
              <p className="text-md my-8 text-[#BEC1CE]">Reddit</p>
              <p className="text-md my-8 text-[#BEC1CE]">Chainvision Games</p>
            </div>
          </div>

        </div>

        {/* Third Section */}
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
