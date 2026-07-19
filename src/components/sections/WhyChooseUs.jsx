import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Globe2,
  Clock3,
  PackageCheck,
} from "lucide-react";

import warehouse from "../../assets/images/warehouse.jpg";

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT IMAGE */}

          <div className="relative">

            <img
              src={warehouse}
              alt="Warehouse"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            {/* Floating Card */}

            <div className="absolute -bottom-10 left-8 bg-white rounded-3xl shadow-xl p-6 w-72">

              <div className="text-5xl font-black text-[#1B2A4A]">

                25+

              </div>

              <p className="text-gray-600 mt-2">

                Years Delivering Logistics Excellence

              </p>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div>

            <span className="uppercase tracking-widest text-[#1B2A4A] font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold mt-5 text-gray-900 leading-tight">

              Logistics Built Around
              <br />
              Your Business.

            </h2>

            <p className="mt-8 text-gray-600 leading-8">

              We simplify transportation, warehousing,
              customs clearance and global supply chain
              management using cutting-edge technology
              and experienced professionals.

            </p>

            {/* FEATURES */}

            <div className="grid md:grid-cols-2 gap-6 mt-12">

              <div className="flex gap-4">

                <ShieldCheck className="text-[#1B2A4A] mt-1"/>

                <div>

                  <h4 className="font-bold text-lg">

                    Secure Transport

                  </h4>

                  <p className="text-gray-600 mt-2">

                    Safe handling for every shipment.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Globe2 className="text-[#1B2A4A] mt-1"/>

                <div>

                  <h4 className="font-bold text-lg">

                    Global Coverage

                  </h4>

                  <p className="text-gray-600 mt-2">

                    Delivering across continents.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <Clock3 className="text-[#1B2A4A] mt-1"/>

                <div>

                  <h4 className="font-bold text-lg">

                    Fast Delivery

                  </h4>

                  <p className="text-gray-600 mt-2">

                    On-time transportation services.

                  </p>

                </div>

              </div>

              <div className="flex gap-4">

                <PackageCheck className="text-[#1B2A4A] mt-1"/>

                <div>

                  <h4 className="font-bold text-lg">

                    Shipment Tracking

                  </h4>

                  <p className="text-gray-600 mt-2">

                    Monitor every package in real time.

                  </p>

                </div>

              </div>

            </div>

            {/* CHECKLIST */}

            <div className="space-y-4 mt-12">

              {[
                "Worldwide Freight Forwarding",
                "24/7 Customer Support",
                "Transparent Pricing",
                "Door-to-Door Delivery",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    className="text-green-500"
                    size={22}
                  />

                  <span className="text-gray-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* BUTTON */}

            <button className="mt-12 bg-[#1B2A4A] hover:bg-[#1B2A4A] transition text-white px-8 py-4 rounded-xl flex items-center gap-3 shadow-xl">

              Learn More

              <ArrowRight size={20}/>

            </button>

          </div>

        </div>

      </div>
    </section>
  );
}