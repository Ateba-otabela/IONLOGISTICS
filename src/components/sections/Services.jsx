import { useRef, useState, useEffect, useCallback } from "react";

const services = [
  {
    title: "Local Shipments",
    text: "Fast and secure deliveries in your local area, guaranteeing same-day delivery and on-demand shipments in less than 45 minutes.",
    image:
      "https://images.unsplash.com/photo-1595079676339-1534801ad6cf?w=800&h=600&fit=crop",
  },
  {
    title: "Domestic Shipments",
    text: "We offer nationwide shipping to help you reach your customers in every part of the country.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&h=600&fit=crop",
  },
  {
    title: "International Shipments",
    text: "The bill of lading is created automatically, and you can select who will pay the duties.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=800&h=600&fit=crop",
  },
  {
    title: "Freight Shipments",
    text: "Move pallets and bulk cargo across the country with real-time tracking and dedicated support.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
  },
  {
    title: "Warehousing",
    text: "Store your inventory in strategically located warehouses and fulfill orders faster than ever.",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
  },
  {
    title: "E-commerce Integrations",
    text: "Connect your online store and automatically sync orders, labels, and tracking in one place.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const [cardsPerView, setCardsPerView] = useState(3);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      setCardsPerView(window.innerWidth < 768 ? 1 : 3);
    };
    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const pageCount = Math.ceil(services.length / cardsPerView);

  const scrollToPage = useCallback(
    (page) => {
      const container = scrollRef.current;
      if (!container) return;
      const cardWidth = container.scrollWidth / services.length;
      container.scrollTo({
        left: cardWidth * cardsPerView * page,
        behavior: "smooth",
      });
      setActivePage(page);
    },
    [cardsPerView]
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePage((prev) => {
        const next = (prev + 1) % pageCount;
        scrollToPage(next);
        return next;
      });
    }, 4000);
    return () => clearInterval(timer);
  }, [pageCount, scrollToPage]);

  return (
    <section className="w-full bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth"
          style={{ scrollbarWidth: "none" }}
        >
          {services.map((service, i) => (
            <article
              key={i}
              className="snap-start flex-shrink-0 w-full md:w-[calc((100%-3rem)/3)] bg-white border border-[#1B2A4A]/20 rounded-2xl overflow-hidden"
            >
              <div className="p-3">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-56 object-cover rounded-xl"
                />
              </div>
              <div className="px-6 pb-8 pt-2">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.text}
                </p>
                <a
                  href="#"
                  className="text-[#1B2A4A] font-medium hover:underline"
                >
                  View more
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === activePage ? "w-8 bg-[#1B2A4A]" : "w-2.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}