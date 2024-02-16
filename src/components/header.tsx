"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const navLinks = [
  { name: "GAMING", href: "/" },
  { name: "TOKENOMICS", href: "/token-omics" },
  { name: "WHITEPAPER", href: "/whitepaper" },
  { name: "ROADMAP", href: "/roadmap" },
  { name: "SELL NFTS", href: "/sell" },
  { name: "AFFILIATE", href: "/affiliate" },
];

import Logo from "../../public/logo.png";
import ButtonLogo from "../../public/Kainu 1.png";
import OpenSeaLogo from "../../public/Vector.png";

export default function Header() {
  const pathName = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      <nav className="bg-transparent py-2 px-3 lg:py-[32px] lg:px-[90px]">
        <div className="mx-auto">
          <div className="relative flex h-20 lg:h-24 items-center justify-between">
            {/* 1st */}
            <div className="flex items-center xl:hidden pr-8">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-CustomLight hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <div className="">
                  <GiHamburgerMenu size={42}/>
                </div>
              </button>
            </div>
            {/* 2nd */}
            <div className="flex flex-1 items-center justify-center xl:items-stretch xl:justify-start">
              <div className="flex flex-shrink-0 items-center w-auto">
                <Image
                  src={Logo}
                  alt="Not found"
                  className="w-14 md:w-18 lg:w-24 xl:w-38"
                />
              </div>
              <div className="hidden ml-0 lg:ml-4 2xl:ml-16 xl:flex items-center">
                <div className="flex space-x-2 lg:space-x-1 2xl:space-x-2">
                  {navLinks.map((link, index) => (
                    <Link
                      href={link.href}
                      key={link.name}
                      className={`px-2 py-2 rounded-lg text-lg lg:text-sm xl:text-lg whitespace-nowrap font-semibold font-[jost] ${
                        pathName === link.href
                          ? "text-Default rounded-md px-3 py-2 text-md font-medium"
                          : "text-white"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* 3rd */}
            <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="flex gap-5">
                <button className="hidden lg:flex items-center gap-2 text-white border border-Default py-1 lg:py-0 xl:py-1 px-5 rounded-md font-semibold">
                  <Image
                    src={OpenSeaLogo}
                    height={22}
                    width={22}
                    alt="Opensea Logo"
                  />
                  <span>OpenSea</span>
                </button>
                <button className="flex items-center text-white border border-Default py-0 px-0 xl:px-5 rounded-md font-bold text-lg bg-Default">
                  <Image
                    src={ButtonLogo}
                    width={100}
                    height={50}
                    alt="Kainu Text"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="xl:hidden" id="mobile-menu">
            <div className="space-y-1 pb-3 pt-2 bg-gray-800 rounded-md p-3">
              {navLinks.map((link, index) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className={`py-2 rounded-lg text-lg whitespace-nowrap block font-semibold font-[jost] ${
                    pathName === link.href
                      ? "text-Default rounded-md py-2 text-md font-medium"
                      : "text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}

              <button className="flex items-center text-white border border-Default py-1 lg:py-2 px-4 rounded-md font-semibold text-lg ">
                <Image
                  src={OpenSeaLogo}
                  height={22}
                  width={22}
                  alt="Opensea Logo"
                />
                <span className="ml-2">OpenSea</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
