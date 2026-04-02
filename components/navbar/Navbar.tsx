import Link from "next/link";
import MobileMenu from "../mobile-menu/MobileMenu";

export default function Navbar() {
  const links = [
    ["Home", "/"],
    ["MCQ", "/mcq"],
    ["Result", "/result"],
    ["Cart", "/cart"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ];

  return (
    <div className="sticky top-0 z-50">
        <div className="container">
                <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
                    <div className="px-4 py-4 flex justify-between items-center">
                        
                        {/* Logo */}
                        <h1 className="text-2xl font-bold text-pink-500">
                        <Link href="/">MCQ Master</Link>
                        </h1>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex gap-5">
                        {links.map(([name, href]) => (
                            <Link
                            key={name}
                            href={href}
                            className="hover:text-blue-600"
                            >
                            {name}
                            </Link>
                        ))}
                        </div>

                        {/* Mobile Menu Component */}
                        <MobileMenu />
                    </div>
                </nav>
            </div>
    </div>
    
  );
}