import Link from "next/link";
import React from "react";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const FooterLowerPart = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row md:justify-between px-[90px] py-4 w:h-32 items-center text-center text-[#BEC1CE] border-t border-[#504f4f] bg-black">
      <div className="py-4">
        <p>© All Right Reserved, mint.katanainu.com</p>
      </div>

      <div className="flex py-4 justify-center">
        <div className="bg-CustomFontColor p-2 rounded-lg mx-3">
          <FaTwitter size={20} />
        </div>
        <div className="bg-CustomFontColor p-2 rounded-lg mx-3">
          <FaFacebook size={20} />
        </div>
        <div className="bg-CustomFontColor p-2 rounded-lg mx-3">
          <FaInstagram size={20} />
        </div>
        <div className="bg-CustomFontColor p-2 rounded-lg mx-3">
          <FaLinkedin size={20} />
        </div>
      </div>

      <div className="flex py-4 justify-center">
        <Link href={"#"} className="mx-3">Terms of Service</Link>
        <Link href={"#"} className="mx-3">Cookies policy</Link>
      </div>
    </div>
  );
};

export default FooterLowerPart;
