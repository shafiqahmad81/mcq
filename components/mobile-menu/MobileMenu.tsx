"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
    ["Home", "/"],
    ["MCQ", "/mcq"],
    ["Result", "/result"],
    ["Cart", "/cart"],
    ["Contact", "/contact"],
    ["Login", "/login"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="text-2xl"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* Menu */}
      {open && (
        <div className="absolute left-0 top-full w-full bg-white border-t px-4 py-4 flex flex-col gap-3 shadow-md">
          {links.map(([name, href]) => (
            <Link
              key={name}
              href={href}
              onClick={() => setOpen(false)}
              className="border-b pb-2 hover:text-blue-600"
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}