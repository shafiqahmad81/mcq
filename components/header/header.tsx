"use client";

import Link from "next/link";
import MobileMenu from "./mobileMenu";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Logo from "../../assets/logo/mcq-logo.png"
import Image from "next/image";

export default function Header() {
  const [mobileMegaOpen, setMobileMegaOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["MCQ", "/mcq"],
    ["Result", "/user"],
    ["Cart", "/cart"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ];

  const megaMenu = [
    {
      items: [
        ["প্রিলি প্রস্তুতি", "/category"],
        ["ব্যাংক নিয়োগ", "/category"],

      ],
    },
    {
      items: [
        ["মডেল টেস্ট", "/category"],
        ["জব সার্কুলার", "/category"],
      ],
    },
    {
      items: [
        ["Contact", "/contact"],
        ["Terms & Conditions", "/terms"],
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm ">
      <div className="relative">
        <div className="container mx-auto px-4">
          <nav className="">
            <div className="py-3 flex justify-between items-center ">
              {/* Logo */}
              <div className="w-full max-w-24 sm:max-w-32">
                <Link href="/">
                  <Image
                    src={Logo}
                    alt="Logo"
                    width={128}
                    height={128}
                  />
                </Link>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex gap-6 items-center">
                <Link href="/" className="transition-all hover:text-blue-600">
                  Home
                </Link>

                {/* Desktop Mega Menu */}
                <div className="hidden md:block relative group">
                  <button className="group-hover:text-blue-600 flex items-center gap-1 cursor-pointer">
                    MCQ <ChevronDown size={18} />
                  </button>

                  <div className="absolute left-1/2 top-full -translate-x-1/2 w-125 xl:w-175 bg-white shadow-xl rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                    <div className="grid grid-cols-3 gap-8">
                      {megaMenu.map((section, index) => (
                        <div key={index}>
                          <ul className="space-y-3">
                            {section.items.map(([name, href]) => (
                              <li key={name}>
                                <Link
                                  href={href}
                                  className="text-gray-600 hover:text-blue-600 transition-all"
                                >
                                  {name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Mobile Mega Menu */}
                <div className="md:hidden">
                  <button
                    onClick={() => setMobileMegaOpen(!mobileMegaOpen)}
                    className="flex items-center gap-1"
                  >
                    MCQ
                    <ChevronDown
                      size={18}
                      className={`transition-transform ${mobileMegaOpen ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {mobileMegaOpen && (
                    <div className="absolute left-4 right-4 top-16 bg-white shadow-lg rounded-2xl p-5 border border-gray-100">
                      <div className="space-y-5">
                        {megaMenu.map((section, index) => (
                          <div key={index}>
                            <ul className="space-y-2">
                              {section.items.map(([name, href]) => (
                                <li key={name}>
                                  <Link
                                    href={href}
                                    className="block text-gray-600 hover:text-blue-600"
                                  >
                                    {name}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {links.slice(2).map(([name, href]) => (
                  <Link
                    key={name}
                    href={href}
                    className="hover:text-blue-600"
                  >
                    {name}
                  </Link>
                ))}
              </div>

              {/* Existing Mobile Menu */}
              <MobileMenu />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}