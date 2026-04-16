"use client";

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
        className="relative z-40 flex items-start rounded-lg bg-white p-3 shadow lg:hidden"
      >
        ☰
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