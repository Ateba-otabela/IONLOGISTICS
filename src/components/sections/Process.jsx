import { Truck, Target, PackageCheck, Mail } from "lucide-react";

const processSteps = [
  {
    icon: Truck,
    title: "Branch pickup and delivery",
    text: "Schedule pick-ups and offer home delivery or branch pickup.",
  },
  {
    icon: Target,
    title: "Track the status of your shipments",
    text: "Offer your customers secure and clear tracking of their shipment. Track their packages in real time.",
  },
  {
    icon: PackageCheck,
    title: "International import and export",
    text: "We guide you step by step to ensure your shipments meet all requirements and arrive without issues.",
  },
  {
    icon: Mail,
    title: "Custom emails and tracking page",
    text: "Schedule and send automated emails with your brand — and keep selling your products.",
  },
];

export default function ProcessSection() {
  return (
    <section className="w-full bg-white py-16 px-6">
        <h2 className="text-2xl">Process</h2>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left: sticky image collage */}
        <div className="relative">
          <div className="md:sticky md:top-24">
            <div className="relative bg-indigo-50 rounded-2xl p-6 overflow-hidden">
              {/* pickup form card */}
              <div className="absolute top-6 left-6 w-56 bg-white rounded-xl shadow-lg p-4 z-20 text-xs">
                <p className="font-semibold text-gray-800 mb-3">Pickup</p>
                <p className="text-gray-500 mb-1">Package Delivery</p>
                <div className="border rounded-md px-2 py-1.5 mb-2 flex items-center gap-1.5 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Package Delivery Service
                </div>
                <p className="text-gray-500 mb-1">Pickup date</p>
                <div className="border rounded-md px-2 py-1.5 mb-2 text-gray-700">
                  Monday 05/20/2024
                </div>
                <div className="flex gap-2 mb-2">
                  <div className="flex-1">
                    <p className="text-gray-500 mb-1">Number of packages</p>
                    <div className="border rounded-md px-2 py-1.5 text-gray-700">
                      3
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 mb-1">Total package weight</p>
                    <div className="border rounded-md px-2 py-1.5 text-gray-700">
                      6 Kg
                    </div>
                  </div>
                </div>
              </div>

              {/* hand delivery photo */}
              <img
                src="https://images.unsplash.com/photo-1616401784845-180882ba9ba8?w=700&h=700&fit=crop"
                alt="Courier delivering a package"
                className="w-full h-[420px] object-cover rounded-xl"
              />

              {/* branch map card */}
              <div className="mt-4 bg-white rounded-xl shadow-lg p-4 grid grid-cols-2 gap-3 text-xs">
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-gray-800">Branch 1</p>
                    <p className="text-gray-500">Mexico 130 1461, Reforma la Presa</p>
                    <p className="text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Branch 2</p>
                    <p className="text-gray-500">Av. Europa, s/n, Parque del Oeste</p>
                    <p className="text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Branch 3</p>
                    <p className="text-gray-500">Av. Rosas 139 1461, Monterrey</p>
                    <p className="text-gray-400">Mon-Fri: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
                <div className="bg-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=400&h=400&fit=crop"
                    alt="Delivery route map"
                    className="w-full h-full object-cover opacity-80"
                  />
                  <span className="absolute bg-white text-gray-800 text-[10px] font-medium px-2 py-1 rounded shadow">
                    Your location
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right: scrolling feature cards */}
        <div className="flex flex-col gap-6">
          {processSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="border border-blue-200 rounded-2xl p-8 bg-white"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {step.text}
                </p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                >
                  View more
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}