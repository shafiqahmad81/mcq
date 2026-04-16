"use client";

import { useState } from "react";
import Link from "next/link";
import MobileMenuButton from "./mobileMenu";
import SidebarCloseButton from "./closeButton";

export default function SidebarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <MobileMenuButton
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 md:top-20 z-40 h-[90vh] overflow-y-auto w-72 border-r border-gray-200 bg-white p-4 transition-transform duration-300 ease-in-out sm:p-6 lg:static lg:translate-x-0 flex flex-col ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header (RESTORED DESIGN) */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white font-bold">
              M
            </div>
            <div>
              <h2 className="font-bold text-lg">MCQ Dashboard</h2>
              <p className="text-sm text-gray-500">Learning Portal</p>
            </div>
          </div>

          <SidebarCloseButton setMenuOpen={setMenuOpen} />
        </div>

        {/* Navigation (RESTORED STYLE) */}
        <nav className="space-y-2 flex-1">
          <Link
            href="#"
            className="block rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-600"
          >
            Dashboard
          </Link>

          <Link
            href="#"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Your Course
          </Link>

          <Link
            href=""
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Your Payment
          </Link>

          <Link
            href="#"
            className="block rounded-xl px-4 py-3 text-sm text-gray-600 hover:bg-gray-100"
          >
            Your Profile
          </Link>
        </nav>

        {/* User Card (RESTORED) */}
        <div className="mt-10 rounded-2xl bg-gray-100 p-4 ">
          <p className="text-sm text-gray-500">Logged in as</p>
          <h3 className="font-semibold">Shafiqul</h3>
          <p className="text-xs text-emerald-600">Student</p>
        </div>
      </aside>
    </>
  );
}