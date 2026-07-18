import {
  ShoppingBag,
  Pill,
  Factory,
  Utensils,
  Car,
  Cpu,
  Shirt,
  Wrench,
  ArrowRight,
} from "lucide-react";
import Card from "../../components/cards/Card";
import PageHeader from "../../components/common/PageHeader";
import LogoScrollStrip from "../../components/sections/LogoScrollStrip";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/sections/Footer";

const INDUSTRIES = [
  {
    icon: ShoppingBag,
    name: "E-commerce & Retail",
    description:
      "Same-day and nationwide fulfillment for online stores and retail chains, with real-time order sync.",
    image:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=700&h=500&fit=crop",
  },
  {
    icon: Pill,
    name: "Pharmaceutical & Healthcare",
    description:
      "Temperature-controlled, compliant transport for medical supplies and time-sensitive shipments.",
    image:
      "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=700&h=500&fit=crop",
  },
  {
    icon: Factory,
    name: "Manufacturing",
    description:
      "Reliable freight for raw materials and finished goods, scaled to production schedules.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&h=500&fit=crop",
  },
  {
    icon: Utensils,
    name: "Food & Beverage",
    description:
      "Cold-chain logistics and fast turnaround to keep perishable goods fresh from origin to shelf.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=700&h=500&fit=crop",
  },
  {
    icon: Car,
    name: "Automotive",
    description:
      "Parts and oversized cargo handling with specialized equipment and route planning.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=700&h=500&fit=crop",
  },
  {
    icon: Cpu,
    name: "Technology & Electronics",
    description:
      "Secure, insured handling for high-value components and consumer electronics.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&h=500&fit=crop",
  },
  {
    icon: Shirt,
    name: "Fashion & Apparel",
    description:
      "Seasonal-ready capacity and international customs handling for fast-moving collections.",
    image:
      "https://images.unsplash.com/photo-1445205170230-053b83016050?w=700&h=500&fit=crop",
  },
  {
    icon: Wrench,
    name: "Industrial & Construction",
    description:
      "Heavy freight and equipment transport with flexible scheduling for project timelines.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&h=500&fit=crop",
  },
];

function Industries() {
  return (
    <>
      <Navbar />
      <div className="space-y-10 pb-16">
        {/* Hero banner */}
        <section className="relative h-[320px] sm:h-[380px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1600&h=800&fit=crop"
            alt="Aerial view of a logistics distribution warehouse"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 sm:px-10 lg:px-16">
            <PageHeader
              title="Industries"
              description="Industries served by IONLOGISTICS across global supply chains."
              breadcrumbs={[{ label: "Industries" }]}
              theme="dark"
            />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 space-y-10 sm:px-6 lg:px-10">
          <LogoScrollStrip />

          <Card>
            <div className="space-y-2">
              <p className="text-sm text-slate-600">
                From temperature-sensitive pharmaceuticals to high-volume
                retail fulfillment, we tailor our logistics network to the
                demands of your sector.
              </p>
            </div>
          </Card>

          {/* Industry cards with images */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {INDUSTRIES.map(({ icon: Icon, name, description, image }) => (
              <Card key={name} className="overflow-hidden !p-0">
                <div className="group">
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={image}
                      alt={name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-md">
                      <Icon size={18} className="text-blue-600" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 p-5">
                    <h3 className="text-base font-semibold text-slate-900">
                      {name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Featured spotlight */}
          <Card className="overflow-hidden !p-0">
            <div className="grid md:grid-cols-2">
              <div className="relative h-64 md:h-full min-h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=900&h=700&fit=crop"
                  alt="Pharmaceutical cold-chain warehouse"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-600">
                  Spotlight industry
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Cold-chain logistics for pharma & healthcare
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Temperature-sensitive shipments need more than speed — they
                  need precision. Our monitored cold-chain network keeps
                  medical supplies within compliance range from pickup to
                  final delivery, with full chain-of-custody visibility.
                </p>
                <a
                  href="#"
                  className="inline-flex w-fit items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-2.5 transition-all"
                >
                  Learn more about pharma logistics
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Industries;