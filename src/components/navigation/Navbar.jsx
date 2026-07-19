import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

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
    { label: "About", to: "/about" },
    { label: "FAQ", to: "/faq" },
    { label: "Contact", to: "/contact" },
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
            <img src={logo} alt="IONLOGISTICS" className="w-24 h-24 sm:w-20 sm:h-20 lg:w-33 lg:h-33 object-contain mix-blend-multiply" />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-6 xl:gap-9">

            {links.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-gray-600 hover:text-[#1B2A4A] transition font-medium text-xs sm:text-sm xl:text-sm"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-4 xl:gap-6">

            <button className="hover:text-[#1B2A4A] transition" aria-label="Search">
              <Search size={20} />
            </button>

            <button className="hover:text-[#1B2A4A] transition" aria-label="Language">
              <Globe size={20} />
            </button>

            <div className="h-7 w-px bg-gray-300"></div>

            <Link
              to="/track-shipment"
              className="border border-[#1B2A4A] text-[#1B2A4A] px-3 py-2 xl:px-4 xl:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#1B2A4A] hover:text-white transition whitespace-nowrap"
            >
              Track Shipment
            </Link>

            <button className="bg-[#1B2A4A] text-white px-3 py-2 xl:px-4 xl:py-2.5 rounded-lg font-semibold text-xs sm:text-sm hover:bg-[#1B2A4A] transition shadow-lg whitespace-nowrap">
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
            <button className="w-full border border-[#1B2A4A] py-3 rounded-xl text-[#1B2A4A] font-semibold">
              Track Shipment
            </button>
          </Link>

            <button className="w-full bg-[#1B2A4A] py-3 rounded-xl text-white font-semibold" onClick={closeMenu}>

              Request Quote

            </button>

          </div>

        </div>

      </div>
    </header>
  );
}