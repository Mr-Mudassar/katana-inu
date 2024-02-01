"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
const navLinks = [
  { name: "GAMING", href: "/" },
  { name: "TOKENOMICS", href: "/tokenomics" },
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
            <div className="flex items-center lg:hidden pr-8">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={toggleMobileMenu}
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>

                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* 2nd */}
            <div className="flex flex-1 items-center justify-center lg:items-stretch lg:justify-start">
              <div className="flex flex-shrink-0 items-center w-auto">
                <Image src={Logo} alt="Not found" className="w-14 md:w-18 lg:w-28 xl:w-38" />
              </div>
              <div className="hidden ml-0 xl:ml-16 lg:flex items-center">
                <div className="flex space-x-2 xl:space-x-4">
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
          <div className="lg:hidden" id="mobile-menu">
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
