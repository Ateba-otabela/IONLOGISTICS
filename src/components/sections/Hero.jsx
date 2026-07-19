import { useState, useEffect } from "react";
import LogoScrollStrip from "../../components/sections/LogoScrollStrip";

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
    <>
      <section className="relative mt-24 w-full min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] overflow-hidden">
        {/* Background images - crossfade per slide */}
        {slides.map((slide, i) => (
          <img
            key={i}
            src={slide.image}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        {/* Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/60 to-slate-950/40" />

        <div className="relative z-10 flex h-full min-h-[520px] sm:min-h-[560px] md:min-h-[620px] lg:min-h-[680px] flex-col justify-center">
          <div className="overflow-hidden w-full">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{
                width: `${slides.length * 100}%`,
                transform: `translateX(-${index * (100 / slides.length)}%)`,
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-4 sm:px-6 md:px-10 py-10 sm:py-14 md:py-20"
                  style={{ width: `${100 / slides.length}%` }}
                >
                  <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
                      {slide.heading}
                    </h1>
                    <p className="text-base sm:text-lg text-slate-200 mb-6 sm:mb-8 max-w-md sm:max-w-lg">
                      {slide.text}
                    </p>
                    <button className="bg-[#1B2A4A] text-white font-semibold px-6 sm:px-8 py-3 sm:py-3.5 text-sm sm:text-base rounded-full hover:bg-[#1B2A4A] transition shadow-sm">
                      {slide.cta}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 pt-8">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === index ? "w-8 bg-[#1B2A4A]" : "w-2.5 bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
      <LogoScrollStrip className="md:mt-32" />
    </>
  );
}