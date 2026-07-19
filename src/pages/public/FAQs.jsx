import { useState } from "react";
import { ChevronDown, Mail, Phone, MessageCircle } from "lucide-react";
import Card from "../../components/cards/Card";
import PageHeader from "../../components/common/PageHeader";
import Navbar from "../../components/navigation/Navbar";
import Footer from "../../components/sections/Footer";

const FAQ_ITEMS = [
  {
    question: "How do I track my shipment?",
    answer:
      "Enter your tracking number on the Tracking page to see live status, checkpoint history, and an estimated delivery time. You'll also get automatic email updates at each major milestone.",
  },
  {
    question: "What shipping methods do you offer?",
    answer:
      "We support local same-day delivery, domestic nationwide shipping, and international freight with automated customs documentation — all bookable from the same platform.",
  },
  {
    question: "How are shipping costs calculated?",
    answer:
      "Costs depend on package weight, dimensions, destination, and service level (standard vs. priority). Use the Quote tool to get an instant, itemized estimate before booking.",
  },
  {
    question: "What happens if my package is delayed or lost?",
    answer:
      "All shipments are insured by default. If a delay or loss occurs, our support team opens a claim automatically and keeps you updated until it's resolved or compensated.",
  },
  {
    question: "Can I integrate my online store with your platform?",
    answer:
      "Yes. We offer native integrations with Shopify, WooCommerce, and Prestashop, plus a REST API for custom platforms — orders and tracking sync automatically.",
  },
  {
    question: "Do you handle international customs and duties?",
    answer:
      "Yes. The bill of lading is generated automatically for international shipments, and you can choose whether you or the recipient pays applicable duties.",
  },
];

function FaqAccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-slate-100 last:border-b-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-slate-900">{item.question}</span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#1B2A4A]" : ""
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-slate-600 leading-relaxed pr-8">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

function FAQs() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <>
      <Navbar />
      <div className="mt-16 space-y-10 pb-16">
        {/* Hero banner */}
        <section className="relative h-[260px] sm:h-[320px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=800&fit=crop"
            alt="Customer support team assisting with logistics questions"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/60 to-slate-950/20" />
          <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-10 sm:px-10 lg:px-16">
            <PageHeader
              title="FAQs"
              description="Common questions about logistics, shipping and support."
              breadcrumbs={[{ label: "FAQs" }]}
              theme="dark"
            />
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 space-y-10 sm:px-6 lg:px-10">
          <Card>
            <div className="space-y-2">
              <p className="text-sm text-slate-600">
                This page answers frequently asked questions. Can't find what
                you're looking for? Reach out to our support team below.
              </p>
            </div>
          </Card>

          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            {/* FAQ accordion */}
            <Card>
              <div>
                {FAQ_ITEMS.map((item, i) => (
                  <FaqAccordionItem
                    key={item.question}
                    item={item}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
                  />
                ))}
              </div>
            </Card>

            {/* Support CTA with image */}
            <Card className="overflow-hidden !p-0">
              <div className="flex flex-col">
                <div className="relative h-44">
                  <img
                    src="https://images.unsplash.com/photo-1553775282-20af80779df7?w=700&h=500&fit=crop"
                    alt="Support agent ready to help"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-semibold">
                      Still have questions?
                    </p>
                    <p className="text-slate-200 text-xs">
                      Our team replies within the hour.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-3 p-6">
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#1B2A4A] hover:text-[#1B2A4A]"
                  >
                    <MessageCircle size={17} className="text-[#1B2A4A]" />
                    Start a live chat
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#1B2A4A] hover:text-[#1B2A4A]"
                  >
                    <Mail size={17} className="text-[#1B2A4A]" />
                    support@ionlogistics.com
                  </a>
                  <a
                    href="#"
                    className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-[#1B2A4A] hover:text-[#1B2A4A]"
                  >
                    <Phone size={17} className="text-[#1B2A4A]" />
                    +1 800 555 0198
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FAQs;