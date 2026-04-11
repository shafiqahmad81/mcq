"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Result", "/result"],
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

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [mcqOpen, setMcqOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Menu Button */}
      <button onClick={() => setOpen(!open)} className="text-2xl">
        {open ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute left-0 right-0 top-full w-full bg-white px-4 py-4 flex flex-col gap-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className=" pb-2 hover:text-blue-600"
          >
            Home
          </Link>

          {/* MCQ Dropdown */}
          <div className=" pb-2">
            <button
              onClick={() => setMcqOpen(!mcqOpen)}
              className="w-full flex justify-between items-center hover:text-blue-600"
            >
              MCQ
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  mcqOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {mcqOpen && (
              <div className="mt-3 pl-3 space-y-3">
                {megaMenu.map((section, index) => (
                  <div key={index}>
                    <ul className="space-y-2">
                      {section.items.map(([name, href]) => (
                        <li key={name}>
                          <Link
                            href={href}
                            onClick={() => setOpen(false)}
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
            )}
          </div>

          {links.slice(1).map(([name, href]) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className=" pb-2 hover:text-blue-600"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}