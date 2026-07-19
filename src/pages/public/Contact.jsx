import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import Card from "../../components/cards/Card";
import PageHeader from "../../components/common/PageHeader";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/sections/Footer";

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    label: "Head office",
    value: "480 Freight Avenue, Chicago, IL 60607",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 800 555 0198",
  },
  {
    icon: Mail,
    label: "Email",
    value: "support@ionlogistics.com",
  },
  {
    icon: Clock,
    label: "Support hours",
    value: "Mon–Fri, 8:00 AM – 8:00 PM (CST)",
  },
];

function Contact() {
  return (
    <>
      <Navbar />
      <div className="mt-16 space-y-10 pb-16">
      {/* Hero banner */}
      <section className="relative h-[260px] sm:h-[320px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&h=800&fit=crop"
          alt="Modern logistics office building"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
        <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 sm:px-10 lg:px-16">
          <PageHeader
            title="Contact"
            description="Contact information and inquiries for IONLOGISTICS."
            breadcrumbs={[{ label: "Contact" }]}
            theme="dark"
          />
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 space-y-10 sm:px-6 lg:px-10">
        <Card>
          <div className="space-y-2">
            <p className="text-sm text-slate-600">
              This page provides contact details and forms. Reach out and
              our team will get back to you within one business day.
            </p>
          </div>
        </Card>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.3fr]">
          {/* Contact info + office image */}
          <div className="space-y-6">
            <Card className="overflow-hidden !p-0">
              <div className="relative h-48">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&h=500&fit=crop"
                  alt="Logistics team at the office"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4">
                  <p className="text-white font-semibold">Meet our team</p>
                  <p className="text-slate-200 text-xs">
                    Real people, ready to help.
                  </p>
                </div>
              </div>

              <div className="divide-y divide-slate-100">
                {CONTACT_DETAILS.map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3 p-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1B2A4A] text-white">
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        {label}
                      </p>
                      <p className="text-sm font-medium text-slate-800 mt-0.5">
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Map image */}
            <Card className="overflow-hidden !p-0">
              <div className="relative h-40">
                <img
                  src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=700&h=400&fit=crop"
                  alt="Map showing office location"
                  className="h-full w-full object-cover"
                />
                <span className="absolute bottom-3 right-3 rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow">
                  Chicago, IL — Head office
                </span>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <Card>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">
                  Send us a message
                </h3>
                <p className="text-sm text-slate-500 mt-1">
                  Fill out the form and our team will respond shortly.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#1B2A4A]"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#1B2A4A]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Shipping quote request"
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#1B2A4A]"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us a bit about what you need..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none transition focus:border-[#1B2A4A] resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1B2A4A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1B2A4A] shadow-sm"
              >
                Send message
                <Send size={16} />
              </button>
            </form>
          </Card>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;