"use client";

import { Menu } from "lucide-react";

type MobileMenuButtonProps = {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function MobileMenuButton({
  menuOpen,
  setMenuOpen,
}: MobileMenuButtonProps) {
  return (
    <>
      <button
        onClick={() => setMenuOpen(true)}
        className="relative z-40 flex items-start rounded-lg bg-white p-3 border border-black/10 shadow lg:hidden mt-5"
      >
        <Menu size={20} />
      </button>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}