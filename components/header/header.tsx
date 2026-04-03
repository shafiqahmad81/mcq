import Link from "next/link";
import MobileMenu from "../mobile-menu/MobileMenu";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const links = [
    ["Home", "/"],
    ["MCQ", "/mcq"],
    ["Result", "/result"],
    ["Cart", "/cart"],
    ["Contact", "/contact"],
    ["Login", "/login"],
  ];

  const megaMenu = [
    {
      items: [
        ["All Questions", "/mcq"],
        ["Model Test", "/model-test"],
        ["Current Affairs", "/current-affairs"],
      ],
    },
    {
      items: [
        ["Job Circular", "/job-circular"],
        ["Job Solution", "/job-solution"],
        ["Top Scorer", "/top-scorer"],
      ],
    },
    {
      items: [
        ["Contact", "/contact"],
        ["Privacy Policy", "/privacy-policy"],
        ["Terms & Conditions", "/terms"],
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="border-b border-gray-200">
          <div className="py-3 flex justify-between items-center">
            {/* Logo */}
            <h1 className="text-2xl font-bold text-pink-500">
              <Link href="/">MCQ Master</Link>
            </h1>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-6 items-center">
              <Link href="/" className="hover:text-blue-600">
                Home
              </Link>

              {/* Mega Menu */}
              <div className="relative group">
                <button className="group-hover:text-blue-600 py-4 flex items-center gap-1 cursor-pointer">
                  MCQ <ChevronDown size={18} />
                </button>

                <div className="absolute left-1/2 top-full -translate-x-1/2 w-full max-w-200 bg-white shadow-xl rounded-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                  <div className="grid grid-cols-3 gap-8">
                    {megaMenu.map((section) => (
                      <div>
                      
                        <ul className="space-y-3">
                          {section.items.map(([name, href]) => (
                            <li key={name}>
                              <Link
                                href={href}
                                className="text-gray-600 hover:text-blue-600 transition"
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

            {/* Mobile Menu */}
            <MobileMenu />
          </div>
        </nav>
      </div>
    </header>
  );
}
