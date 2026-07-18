import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Menu,
  X,
  Search,
  Globe,
  Compass,
} from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", to: "/services" },
    { label: "Industries", to: "/industries" },
    { label: "Pricing", to: "/pricing" },
    { label: "Fleet", to: "/fleet" },
    { label: "About", to: "/about" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">

        <div className="h-16 sm:h-20 lg:h-24 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex shrink-0 items-center" onClick={closeMenu}>
            <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-xl bg-blue-600 flex items-center justify-center text-white">
              <Compass size={20} strokeWidth={2.5} className="sm:hidden" />
              <Compass size={22} strokeWidth={2.5} className="hidden sm:block" />
            </div>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-9">

            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-600 hover:text-blue-600 transition font-medium text-sm xl:text-base"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">

            <button className="hover:text-blue-600 transition" aria-label="Search">
              <Search size={20} />
            </button>

            <button className="hover:text-blue-600 transition" aria-label="Language">
              <Globe size={20} />
            </button>

            <div className="h-7 w-px bg-gray-300"></div>

            <Link
              to="/track-shipment"
              className="border border-blue-500 text-blue-600 px-4 py-2.5 xl:px-6 xl:py-3 rounded-xl font-semibold text-sm xl:text-base hover:bg-blue-600 hover:text-white transition whitespace-nowrap"
            >
              Track Shipment
            </Link>

            <button className="bg-blue-600 text-white px-4 py-2.5 xl:px-6 xl:py-3 rounded-xl font-semibold text-sm xl:text-base hover:bg-blue-700 transition shadow-lg whitespace-nowrap">
              Request Quote
            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? "max-h-[500px]" : "max-h-0"
        }`}
      >

        <div className="bg-white border-t">

          {links.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block px-6 py-4 border-b hover:bg-gray-50"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <div className="p-6 space-y-4">

          <Link to="/track-shipment" onClick={closeMenu}>
            <button className="w-full border border-blue-600 py-3 rounded-xl text-blue-600 font-semibold">
              Track Shipment
            </button>
          </Link>

            <button className="w-full bg-blue-600 py-3 rounded-xl text-white font-semibold" onClick={closeMenu}>

              Request Quote

            </button>

          </div>

        </div>

      </div>
    </header>
  );
}