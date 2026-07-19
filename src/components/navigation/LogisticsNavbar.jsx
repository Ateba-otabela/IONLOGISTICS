import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  Globe,
  Activity,
} from "lucide-react";
import logo from "../../assets/images/logo.png";

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
    "Services",
    "Industries",
    "Pricing",
    "Fleet",
    "About",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-md"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="h-24 flex items-center justify-between">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="IONLOGISTICS" className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 object-contain mix-blend-multiply" />
            <span className="text-3xl font-extrabold text-[#1B2A4A] tracking-tight">
              IONLOGISTICS
            </span>
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">

            {links.map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-600 hover:text-[#1B2A4A] transition font-medium"
              >
                {item}
              </a>
            ))}

          </nav>

          {/* Right Side */}

          <div className="hidden lg:flex items-center gap-6">

            <button className="hover:text-[#1B2A4A] transition">
              <Search size={22} />
            </button>

            <button className="hover:text-[#1B2A4A] transition">
              <Globe size={22} />
            </button>

            <div className="h-7 w-px bg-gray-300"></div>

            <button className="border border-[#1B2A4A] text-[#1B2A4A] px-6 py-3 rounded-xl font-semibold hover:bg-[#1B2A4A] hover:text-white transition">

              Track Shipment

            </button>

            <button className="bg-[#1B2A4A] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#1B2A4A] transition shadow-lg">

              Request Quote

            </button>

          </div>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
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
            <a
              key={item}
              href="#"
              className="block px-6 py-5 border-b hover:bg-gray-50"
            >
              {item}
            </a>
          ))}

          <div className="p-6 space-y-4">

            <button className="w-full border border-[#1B2A4A] py-3 rounded-xl text-[#1B2A4A] font-semibold">

              Track Shipment

            </button>

            <button className="w-full bg-[#1B2A4A] py-3 rounded-xl text-white font-semibold">

              Request Quote

            </button>

          </div>

        </div>

      </div>
    </header>
  );
}