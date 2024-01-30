import React from "react";
import FooterTopPart from "./footer-top-part";
import "./footer.css"
import Image from "next/image";
import FooterLogo from "../../../public/Logo (1).png"

const Footer = () => {
  return (
    <div className="footer-main-div border border-Default md:py-[32px] md:px-[90px]">
      <FooterTopPart />
      <div className="flex mt-28"> 
        {/* first section */}
          <div>
            <Image src={FooterLogo} alt="Katana Inu logo" width={236} height={96}/>
             <p></p>
             <div>
              <input></input>
             </div>
          </div>
 
        {/* Second section */}
          <div>
            
          </div>
   
        {/* Third Section */}
          <div>
            
          </div>

        {/* forth section */}
          <div>
            
          </div>
      </div>
    </div>
  );
};

export default Footer;
