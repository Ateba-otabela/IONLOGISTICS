import { CheckCircle2, Users, ShieldCheck, HeartHandshake } from "lucide-react";
import ServicesHero from "../../components/sections/Services";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/sections/Footer";

const HIGHLIGHTS = [
  {
    icon: Users,
    text: "A dedicated account manager for every business, not just a ticket number.",
  },
  {
    icon: ShieldCheck,
    text: "Fully insured shipments with transparent, real-time claim handling.",
  },
  {
    icon: HeartHandshake,
    text: "Long-term partnerships built on reliability, not one-off deliveries.",
  },
];

export default function PartnershipSection() {
  return (
    
    <>
  
      <Navbar/>
      <div className="mt-16">
        <ServicesHero />
      </div>

      <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-2 md:items-center">
        {/* Image */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=750&fit=crop"
            alt="Two logistics partners shaking hands"
            className="w-full h-[420px] md:h-[480px] object-cover rounded-3xl shadow-lg"
          />

          {/* floating stat card */}
          <div className="absolute -bottom-6 left-6 right-6 md:left-8 md:right-auto md:w-64 bg-white rounded-2xl shadow-xl border border-slate-100 p-5">
            <p className="text-3xl font-extrabold text-slate-900">98%</p>
            <p className="text-sm text-slate-600 mt-1">
              of clients renew their contract with us every year.
            </p>
          </div>
        </div>

        {/* Text content */}
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Why businesses choose us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
            A logistics partner that treats your business like its own
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            We know that behind every shipment is a customer waiting, a
            deadline to meet, and a business that depends on it arriving on
            time. That's why we pair every account with real people who
            understand your operation — not just a tracking number.
          </p>

          <ul className="mt-8 space-y-5">
            {HIGHLIGHTS.map(({ icon: Icon, text }) => (
              <li key={text} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon size={20} />
                </div>
                <p className="text-slate-700 leading-relaxed pt-1.5">{text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 transition shadow-sm">
              Talk to our team
            </button>
            <button className="inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 font-semibold px-7 py-3.5 rounded-full hover:border-blue-300 hover:text-blue-600 transition">
              <CheckCircle2 size={18} />
              See how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  <Footer/>
    </>
  );
}