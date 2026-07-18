// Original, fictional logo marks — not based on or resembling any real company's branding.

function MarkNorthwind() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 22 L14 6 L24 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 22 L14 13 L19 22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
    </svg>
  );
}

function MarkVertex() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <polygon points="14,3 25,10 25,18 14,25 3,18 3,10" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="14" cy="14" r="3" fill="currentColor" />
    </svg>
  );
}

function MarkBluecrate() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M4 11 H24 M11 4 V24" stroke="currentColor" strokeWidth="2.2" />
    </svg>
  );
}

function MarkSolstice() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="2.2" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <line
          key={deg}
          x1="14"
          y1="3"
          x2="14"
          y2="6.5"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          transform={`rotate(${deg} 14 14)`}
        />
      ))}
    </svg>
  );
}

function MarkCobalt() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3 L24 14 L14 25 L4 14 Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M14 9 L19 14 L14 19 L9 14 Z" fill="currentColor" />
    </svg>
  );
}

function MarkMeridian() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="2.2" />
      <path d="M4 14 H24" stroke="currentColor" strokeWidth="2.2" />
      <path d="M14 4 C 9 9, 9 19, 14 24 C 19 19, 19 9, 14 4 Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function MarkFerrum() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="5" y="12" width="18" height="8" rx="1.5" stroke="currentColor" strokeWidth="2.2" />
      <path d="M9 12 V7 H19 V12" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <circle cx="9" cy="22" r="1.8" fill="currentColor" />
      <circle cx="19" cy="22" r="1.8" fill="currentColor" />
    </svg>
  );
}

function MarkOrbita() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="4" fill="currentColor" />
      <ellipse cx="14" cy="14" rx="11" ry="5" stroke="currentColor" strokeWidth="2" transform="rotate(-20 14 14)" />
    </svg>
  );
}

const BRANDS = [
  { name: "Northwind", Mark: MarkNorthwind },
  { name: "Vertex Retail", Mark: MarkVertex },
  { name: "Bluecrate", Mark: MarkBluecrate },
  { name: "Solstice Foods", Mark: MarkSolstice },
  { name: "Cobalt Tech", Mark: MarkCobalt },
  { name: "Meridian Apparel", Mark: MarkMeridian },
  { name: "Ferrum Industries", Mark: MarkFerrum },
  { name: "Orbita", Mark: MarkOrbita },
];

export default function LogoScrollStrip() {
  // Duplicate the list so the loop is seamless
  const items = [...BRANDS, ...BRANDS];

  return (
    <div className="w-full bg-slate-50 border-b border-slate-100 py-7 overflow-hidden">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-5">
        Trusted by teams shipping at scale
      </p>

      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-logo-scroll gap-14 px-8">
          {items.map(({ name, Mark }, i) => (
            <div
              key={`${name}-${i}`}
              className="flex shrink-0 items-center gap-2.5 text-slate-400 hover:text-slate-600 transition-colors select-none"
            >
              <Mark />
              <span className="text-lg font-bold tracking-tight whitespace-nowrap">
                {name}
              </span>
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
          animation: logo-scroll 28s linear infinite;
        }
      `}</style>
    </div>
  );
}