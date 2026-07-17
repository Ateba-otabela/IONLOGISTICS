import {
  Building2,
  Users,
  PackageCheck,
  Clock3,
} from "lucide-react";

const stats = [
  {
    icon: Building2,
    value: "120+",
    title: "Global Offices",
    description:
      "Serving clients across multiple countries with strategic logistics hubs.",
  },
  {
    icon: Users,
    value: "3,500+",
    title: "Expert Workers",
    description:
      "Professional logistics specialists dedicated to every shipment.",
  },
  {
    icon: PackageCheck,
    value: "1.2M+",
    title: "Successful Deliveries",
    description:
      "Millions of shipments delivered safely and on time.",
  },
  {
    icon: Clock3,
    value: "25+",
    title: "Years Experience",
    description:
      "Decades of expertise in global freight and transportation.",
  },
];

export default function Stats() {
  return (
    <section className="py-24 bg-gray-50">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center mb-16">

          <span className="text-blue-600 font-semibold uppercase tracking-widest">
            Our Achievements
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-900">
            Delivering Excellence Worldwide
          </h2>

          <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses of every size for reliable freight,
            transportation, and supply chain management.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center mb-6">

                  <Icon className="text-blue-600" size={32} />

                </div>

                <h3 className="text-5xl font-black text-blue-600">

                  {item.value}

                </h3>

                <h4 className="mt-3 text-xl font-bold text-gray-900">

                  {item.title}

                </h4>

                <p className="mt-4 text-gray-600 leading-7">

                  {item.description}

                </p>
              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}