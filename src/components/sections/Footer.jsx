import { Truck } from "lucide-react";
import logo from "../../assets/images/logo.png";

const columns = [
  {
    heading: "Information",
    links: ["Help", "Services", "Tracking", "Blog", "API"],
  },
  {
    heading: "Ecommerce",
    links: ["Shopify", "WooCommerce", "Prestashop", "Kometia", "View all"],
  },
  {
    heading: "Shipments",
    links: ["International Shipping", "Domestic Shipping"],
  },
  {
    heading: "Quote",
    links: ["Parcel costs", "Package quote", "Quote international shipping"],
  },
  {
    heading: "Carriers",
    links: ["UPS", "Daylight", "USPS", "DHL Express", "View all"],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-white">
      <div className="relative bg-[#1B2A4A] pt-24 pb-14 px-6">
        {/* curved top edge - arches upward in the center */}
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute -top-16 md:-top-20 left-0 w-full h-16 md:h-20 text-[#1B2A4A]"
        >
          <path d="M0,100 L0,50 Q720,0 1440,50 L1440,100 Z" fill="currentColor" />
        </svg>

        <div className="max-w-7xl mx-auto relative">
          {/* logo */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="IONLOGISTICS"
                className="w-40 h-40 md:w-[7.5rem] md:h-[7.5rem] lg:w-40 lg:h-40 object-contain mix-blend-multiply"
              />
              <div className="flex items-baseline">
                <span className="text-white text-4xl font-bold">ION</span>
                <span className="text-[#1B2A4A] text-xs font-medium tracking-wide translate-y-1.5 ml-0.5">
                  logistics
                </span>
              </div>
            </div>
          </div>

          {/* link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {columns.map((col) => (
              <div key={col.heading}>
                <h4 className="text-cyan-300 font-semibold text-sm sm:text-base tracking-[0.2em] uppercase mb-3 sm:mb-4">
                  {col.heading}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-slate-300/90 hover:text-white hover:underline transition"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}