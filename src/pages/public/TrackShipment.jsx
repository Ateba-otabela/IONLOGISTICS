import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  MapPin,
  Package,
  Phone,
  Search,
  Truck,
} from "lucide-react";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/sections/Footer";

const stats = [
  { label: "Tracking Number", value: "ION-48291", icon: Package },
  { label: "Current Status", value: "In Transit", icon: Truck },
  { label: "ETA", value: "2 hrs 15 min", icon: Clock3 },
];

const milestones = [
  { title: "Picked up", detail: "Warehouse A · 08:10", done: true },
  { title: "Border clearance", detail: "Customs · 11:20", done: true },
  { title: "Departed hub", detail: "Regional Hub · 14:05", done: true },
  { title: "Out for delivery", detail: "Delivery center · 17:40", done: false },
];

function TrackShipment() {
  const completedCount = milestones.filter((m) => m.done).length;
  const progressPercent = (completedCount / milestones.length) * 100;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-slate-40 pt-28">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80"
              alt="Cargo containers being tracked at a shipping terminal"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/85 via-slate-950/65 to-blue-950/40" />

            <div className="relative z-10 p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-blue-200 backdrop-blur">
                    <Truck size={14} />
                    Shipment tracking
                  </span>
                  <h1 className="mt-4 text-3xl  leading-tight text-white sm:text-4xl lg:text-5xl">
                    Track your cargo in real time
                  </h1>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-slate-200 sm:text-base">
                    Follow your freight through every checkpoint with clear
                    updates, timestamped milestones, and accurate delivery
                    estimates — wherever it is in the world.
                  </p>
                </div>

                <div className="w-full max-w-xl rounded-2xl border border-slate-700/50 bg-slate-800/90 p-4 shadow-xl backdrop-blur">
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Enter tracking number
                  </label>
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <div className="flex flex-1 items-center rounded-xl border border-slate-600 bg-slate-900/60 px-3 py-3 focus-within:border-slate-400 transition">
                      <Search size={18} className="text-slate-400" />
                      <input
                        type="text"
                        placeholder="ION-48291"
                        className="ml-2 w-full bg-transparent text-sm text-white placeholder:text-slate-500 outline-none"
                      />
                    </div>
                    <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
                      Track
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {stats.map(({ label, value, icon: Icon }) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-700 shadow-sm">
                        <Icon size={18} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-300">{label}</p>
                        <p className="text-base font-semibold text-white">
                          {value}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Progress + details */}
          <section className="mt-8 grid gap-6 lg:grid-cols-[1.7fr_0.9fr]">
            <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm sm:p-6 lg:p-8">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    Delivery progress
                  </h2>
                  <p className="text-sm text-slate-600">
                    Your shipment is moving smoothly through the network.
                  </p>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
                  <CheckCircle2 size={16} />
                  On schedule
                </span>
              </div>

              {/* progress bar */}
              <div className="mt-6">
                <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 transition-all"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="mt-2 text-xs font-medium text-slate-500">
                  {completedCount} of {milestones.length} checkpoints completed
                </p>
              </div>

              {/* milestone timeline */}
              <div className="mt-6 space-y-0">
                {milestones.map((item, index) => (
                  <div key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
                    {index < milestones.length - 1 && (
                      <span
                        className={`absolute left-4 top-9 h-full w-px ${
                          item.done ? "bg-emerald-300" : "bg-slate-200"
                        }`}
                      />
                    )}
                    <div
                      className={`relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        item.done
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-100 text-slate-500"
                      }`}
                    >
                      {item.done ? (
                        <CheckCircle2 size={16} />
                      ) : (
                        <Clock3 size={16} />
                      )}
                    </div>
                    <div className="flex-1 rounded-2xl border border-slate-100 bg-slate-50/60 px-4 py-3">
                      <p className="font-semibold text-slate-900">
                        {item.title}
                      </p>
                      <p className="text-sm text-slate-600">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* sidebar */}
            <aside className="flex flex-col gap-6">
              <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-900 text-white shadow-sm">
                <div className="relative h-36 w-full">
                  <img
                    src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80"
                    alt="Freight truck en route"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-slate-950/50" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 backdrop-blur">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-200">
                        Current location
                      </p>
                      <p className="font-semibold">Regional hub · Chicago</p>
                    </div>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Driver update</p>
                    <p className="mt-2 text-base font-semibold leading-snug">
                      The container is being staged for final handoff.
                    </p>
                  </div>

                  <div className="mt-6 space-y-3 text-sm text-slate-300">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>Carrier</span>
                      <span className="font-medium text-white">
                        ION Freight
                      </span>
                    </div>
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span>Service level</span>
                      <span className="font-medium text-white">Priority</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Contact</span>
                      <span className="flex items-center gap-1.5 font-medium text-white">
                        <Phone size={14} />
                        +1 800 555 0198
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TrackShipment;