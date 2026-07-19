// Brand marks for the ION Trust Global group of companies.
import logo from "../../assets/images/logo.png";

function MarkIonTrustGlobal() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <circle cx="15" cy="15" r="12" stroke="#0F2A4A" strokeWidth="2" />
      <path
        d="M3 15 H27 M15 3 C10 8 10 22 15 27 C20 22 20 8 15 3 Z"
        stroke="#0F2A4A"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="15" cy="6" r="2.2" fill="#C9962C" />
    </svg>
  );
}

function MarkBuy2Africa() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M3 5 H7 L9.5 19 H23"
        stroke="#0F2A4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 19 L24 19 L26 9 H7.5"
        stroke="#0F2A4A"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 9 C14 9 16 11 16 14 C16 17 13 18 13 21 C13 18 11 17 11 14 C11 11 14 9 14 9 Z"
        fill="#2F8F4E"
      />
      <circle cx="11.5" cy="24" r="1.7" fill="#0F2A4A" />
      <circle cx="21.5" cy="24" r="1.7" fill="#E8792A" />
    </svg>
  );
}

function MarkIonLogistics() {
  return <img src={logo} alt="ION Logistics" className="w-8 h-8 object-contain" />;
}

function MarkIonProperties() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M5 26 V13 L11 8 V26"
        stroke="#C9962C"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 26 V6 L19 3 V26"
        stroke="#0F2A4A"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M3 26 H27" stroke="#0F2A4A" strokeWidth="2" strokeLinecap="round" />
      <rect x="13.5" y="9" width="2.5" height="3" fill="#0F2A4A" />
      <rect x="13.5" y="14" width="2.5" height="3" fill="#0F2A4A" />
    </svg>
  );
}

function MarkIonVentures() {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M4 8 L11 22 L15 12"
        stroke="#0F2A4A"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 22 L18 6 L26 6"
        stroke="#2F8F4E"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 6 L21 4 M26 6 L24 11"
        stroke="#2F8F4E"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const BRANDS = [
  {
    name: "IONTRUST GLOBAL",
    tagline: "Connecting Opportunities, Building Trust",
    Mark: MarkIonTrustGlobal,
    color: "text-slate-800",
  },
  {
    name: "Buy2Africa",
    tagline: "Buy Local. Sell Global.",
    Mark: MarkBuy2Africa,
    color: "text-slate-800",
  },
  {
    name: "ION Logistics",
    tagline: "Delivering Trust, Every Time",
    Mark: MarkIonLogistics,
    color: "text-slate-800",
  },
  {
    name: "ION Properties",
    tagline: "Find. Invest. Thrive.",
    Mark: MarkIonProperties,
    color: "text-slate-800",
  },
  {
    name: "ION Ventures",
    tagline: "Investing in Ideas. Building Futures.",
    Mark: MarkIonVentures,
    color: "text-slate-800",
  },
];

export default function LogoScrollStrip() {
  // Duplicate the list so the loop is seamless
  const items = [...BRANDS, ...BRANDS];

  return (
    <div className="w-full bg-slate-50 border-b border-slate-100 py-7 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
        Part of the ION Trust Global group of companies
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-logo-scroll gap-16 px-8">
          {items.map(({ name, tagline, Mark, color }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-3 select-none"
              title={tagline}
            >
              <Mark />
              <div className="flex flex-col leading-tight">
                <span className={`text-base font-bold tracking-tight whitespace-nowrap ${color}`}>
                  {name}
                </span>
                <span className="text-[10px] text-slate-400 whitespace-nowrap">
                  {tagline}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-50 to-transparent" />
      </div>

      <style>{`
        @keyframes logo-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-logo-scroll {
          animation: logo-scroll 26s linear infinite;
        }
      `}</style>
    </div>
  );
}