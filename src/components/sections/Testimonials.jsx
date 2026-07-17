import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Johnson",
    position: "Supply Chain Director",
    company: "Amazon",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "IONLOGISTICS transformed our shipping operations. Every delivery arrives on time, and their customer support is exceptional.",
  },
  {
    name: "Sarah Williams",
    position: "Operations Manager",
    company: "FedEx Partner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "We've reduced delivery delays by over 30% since switching to IONLOGISTICS. Their tracking platform is incredibly reliable.",
  },
  {
    name: "David Brown",
    position: "Warehouse Supervisor",
    company: "DHL Supplier",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    review:
      "Professional drivers, transparent pricing, and outstanding communication throughout every shipment.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="flex flex-col lg:flex-row justify-between items-center">

          <div>

            <span className="uppercase tracking-[4px] text-blue-600 font-semibold">
              Testimonials
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
              What Our Clients Say
            </h2>

            <p className="mt-6 text-gray-600 max-w-xl leading-8">
              Thousands of companies trust IONLOGISTICS for
              reliable freight forwarding and supply chain
              management around the globe.
            </p>

          </div>

        </div>

        <div className="mt-16 overflow-x-auto pb-4">
          <div className="grid min-w-[980px] grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="snap-start rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
              >
                <Quote className="mb-6 text-blue-600" size={42} />

                <p className="leading-8 text-gray-600">"{item.review}"</p>

                <div className="mt-8 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      fill="#FFD43B"
                      color="#FFD43B"
                    />
                  ))}
                </div>

                <div className="mt-8 flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="ml-4">
                    <h4 className="text-lg font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.position}</p>
                    <span className="text-sm font-semibold text-blue-600">
                      {item.company}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
}