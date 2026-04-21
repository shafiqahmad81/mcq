import { X } from "lucide-react";

type SidebarCloseButtonProps = {
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function SidebarCloseButton({
  setMenuOpen,
}: SidebarCloseButtonProps) {
  return (
    <button
      onClick={() => setMenuOpen(false)}
      className="text-xl lg:hidden"
    >
      <X size={20} />
    </button>
  );
}