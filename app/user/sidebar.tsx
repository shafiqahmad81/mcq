"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 👈 add this
import MobileMenuButton from "./mobileMenu";
import SidebarCloseButton from "./closeButton";
import { LogOut } from "lucide-react";

export default function SidebarWrapper() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 👈 current route

  // function to check active
  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Mobile menu button */}
      <MobileMenuButton
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-14 z-40 h-[90vh] overflow-y-auto w-75 border-r border-gray-200 bg-gray-200 p-4 transition-transform duration-300 ease-in-out sm:p-6 lg:static lg:translate-x-0 flex flex-col ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
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

        {/* Navigation */}
        <nav className="space-y-2 flex-1">
          <Link
            href="/user"
            className={`block rounded-xl px-4 py-3 text-sm font-medium ${
              isActive("/user")
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Dashboard
          </Link>

          <Link
            href="/user/course-history"
            className={`block rounded-xl px-4 py-3 text-sm font-medium ${
              isActive("/user/course-history")
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Your Course
          </Link>

          <Link
            href="/user/payment-history"
            className={`block rounded-xl px-4 py-3 text-sm font-medium ${
              isActive("/user/payment-history")
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Your Payment
          </Link>

          <Link
            href="/user/profile-history"
            className={`block rounded-xl px-4 py-3 text-sm font-medium ${
              isActive("/user/profile-history")
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Your Profile
          </Link>
          <Link
            href="/user/change-password"
            className={`block rounded-xl px-4 py-3 text-sm font-medium ${
              isActive("/user/change-password")
                ? "bg-emerald-50 text-emerald-600"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Change Password
          </Link>
        </nav>

        {/* User Card */}
        <div className="mt-10 rounded-2xl bg-gray-100 p-4 ">
          <p className="text-sm text-gray-500">Logged in as</p>
          <h3 className="font-semibold">Shafiqul</h3>
            <button
              className="mt-3 flex items-center justify-center gap-2 w-full rounded-lg bg-red-500 py-2 text-sm text-white hover:bg-red-600 transition cursor-pointer"
            >
              <LogOut size={18} />
              Logout
            </button>
        </div>
      </aside>
    </>
  );
}