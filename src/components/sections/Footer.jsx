import { Truck } from "lucide-react";

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
      <div className="relative bg-blue-950 pt-24 pb-14 px-6">
        {/* curved top edge - arches upward in the center */}
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute -top-16 md:-top-20 left-0 w-full h-16 md:h-20 text-blue-950"
        >
          <path d="M0,100 L0,50 Q720,0 1440,50 L1440,100 Z" fill="currentColor" />
        </svg>

        <div className="max-w-7xl mx-auto relative">
          {/* logo */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2">
              <Truck className="w-9 h-9 text-white" />
              <span className="text-white text-4xl font-bold">
                IONLOGISTICS
              </span>
            </div>
            <span className="text-blue-300 text-sm font-medium tracking-wide -mt-1 self-end mr-1">
              logistics
            </span>
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