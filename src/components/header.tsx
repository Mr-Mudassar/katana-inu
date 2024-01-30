import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import ButtonLogo from "../../public/Kainu 1.png";
import OpenSeaLogo from "../../public/Vector.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <div>
        <Image src={Logo} alt="Katana logo" width={100} height={104} />
      </div>

      <div className="w-[836px] flex justify-between">
        <Link href={"#"} className="no-underline text-Default text-[20px] ">
          GAMING
        </Link>
        <Link href={"#"} className="no-underline text-white text-[20px] ">
          TOKENOMICS
        </Link>
        <Link href={"#"} className="no-underline text-white text-[20px] ">
          WHITEPAPER
        </Link>
        <Link href={"#"} className="no-underline text-white text-[20px] ">
          ROADMAP
        </Link>
        <Link href={"#"} className="no-underline text-white text-[20px] ">
          SELL NFTS
        </Link>
        <Link href={"#"} className="no-underline text-white text-[20px] ">
          AFFILIATE
        </Link>
      </div>

      <div className="flex">
        <button className="w-[165px] h-[52px] border border-Default rounded-md text-white mx-1">
          <div className="flex h-[30px] w-[115px] ml-7 ">
            <Image src={OpenSeaLogo} alt="opensea logo" />
            <p className=" ml-1 text-lg">OpenSea</p>
          </div>
        </button>
        <button className="w-[165px] h-[52px] bg-Default rounded-md text-white mx-1">
          <Image
            src={ButtonLogo}
            alt="KAINU"
            width={101}
            height={44}
            className="text-center ml-7"
          />
        </button>
      </div>
    </div>
  );
};

export default Header;
