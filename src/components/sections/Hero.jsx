import { useState, useEffect } from "react";

const slides = [
  {
    heading: "The logistics of your business made easy and fast.",
    text: "Get quotes for envelopes, boxes, and pallets. Connect your online store, create multi-shipments, and customize your tracking page. Save time and costs.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&h=1000&fit=crop",
    cta: "Sign up for free",
  },
  {
    heading: "Ship anywhere in the world, without the guesswork.",
    text: "Compare rates across 100+ carriers instantly. Automate label printing, customs paperwork, and delivery notifications from one dashboard.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1200&h=1000&fit=crop",
    cta: "Get a free quote",
  },
  {
    heading: "Track every shipment, every step of the way.",
    text: "Give your customers a branded tracking page with live updates, so they always know exactly where their order is.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&h=1000&fit=crop",
    cta: "Start tracking",
  },
];

export default function LogisticsHeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative mt-24 w-full overflow-hidden">
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&h=1080&fit=crop"
        alt="Logistics warehouse background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-950/40" />

      <div className="relative z-10">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="w-full flex-shrink-0 grid md:grid-cols-2 gap-10 items-center max-w-7xl mx-auto px-6 md:px-10 py-16 md:py-24"
          >
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
                {slide.heading}
              </h1>
              <p className="text-lg text-slate-200 mb-8 max-w-lg">
                {slide.text}
              </p>
              <button className="bg-blue-600 text-white font-semibold px-8 py-3.5 rounded-full hover:bg-blue-700 transition shadow-sm">
                {slide.cta}
              </button>
            </div>

            <div className="relative flex justify-center items-center h-[320px] sm:h-[380px] md:h-[420px] overflow-hidden rounded-3xl">
              <div className="absolute top-0 left-0 md:left-8 bg-white border border-gray-200 rounded-xl shadow-lg px-5 py-4 max-w-[260px] z-10">
                <p className="text-sm text-gray-700 font-semibold">
                  Discover and save with the best deals
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  on domestic and international shipping
                </p>
              </div>
              <img
                src={slide.image}
                alt={slide.heading}
                className="w-full h-full object-cover rounded-3xl shadow-xl"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 pb-8">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? "w-8 bg-blue-600" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
      </div>
    </section>
  );
}