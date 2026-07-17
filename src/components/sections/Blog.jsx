import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posts = [
  {
    date: "May 12, 2025",
    title: "Strategic Partnership with Global Cargo Alliance",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=600&h=400&fit=crop",
    category: "AIRLINES",
  },
  {
    date: "April 30, 2025",
    title: "IONLOGISTICS – Online Quotes",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&h=400&fit=crop",
    category: "FREIGHT FORWARDER",
  },
  {
    date: "March 18, 2024",
    title: "IONLOGISTICS – Pharmaceutical Logistics, Pharma USA 2024",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    category: "IATA",
  },
  {
    date: "March 8, 2024",
    title: "WCA Annual Conference 2024",
    image:
      "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&h=400&fit=crop",
    category: "AIRPORT",
  },
  {
    date: "December 15, 2023",
    title: "IONLOGISTICS – Free Transport for Relief Cargo",
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&h=400&fit=crop",
    category: "TRANSPORTATION OF LUXURY CARS",
  },
];

const categories = [
  "All Posts",
  "AIR FREIGHT FORWARDING",
  "AIRLINES",
  "AIRPORT",
  "FREIGHT FORWARDER",
  "IATA",
  "TRANSPORTATION OF LUXURY CARS",
];

export default function LogisticsBlogSection() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-white py-16 px-6">
      {/* Heading */}
      <h2 className="text-center text-red-600 text-4xl md:text-5xl font-serif tracking-wide mb-10">
        IONLOGISTICS&nbsp;-&nbsp;Blog
      </h2>

      {/* Category tabs */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 px-4">
        {categories.map((cat, i) => (
          <button
            key={cat}
            className={`text-sm md:text-base font-medium uppercase tracking-wide transition-colors ${
              i === 0
                ? "text-red-600 border-b-2 border-red-600 pb-1"
                : "text-gray-700 hover:text-red-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Carousel */}
      <div className="relative max-w-7xl mx-auto">
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll left"
          className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar px-2 py-2"
          style={{ scrollbarWidth: "none" }}
        >
          {posts.map((post, idx) => (
            <article
              key={idx}
              className="flex-shrink-0 w-72 md:w-80 bg-white"
            >
              <div className="w-full h-48 overflow-hidden rounded-md mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-medium text-gray-900 mb-3 leading-snug">
                {post.title}
              </h3>
              <a
                href="#"
                className="text-red-600 font-semibold text-sm hover:underline"
              >
                Continue Reading
              </a>
            </article>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          aria-label="Scroll right"
          className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-md items-center justify-center hover:bg-gray-100 transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </section>
  );
}