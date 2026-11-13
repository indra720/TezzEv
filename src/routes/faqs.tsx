import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Search, ChevronDown } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
  head: () => ({
    meta: [
      { title: "FAQs — Frequently Asked Questions | TezzEV" },
      {
        name: "description",
        content: "Common questions about TezzEV electric scooter rentals, battery swaps, documents, and pricing in Jaipur.",
      },
    ],
  }),
});

const categories = ["All", "Rider", "Pricing", "Battery", "Documents", "Safety"];

const extendedFaqs = [
  ...TEZZ_CONFIG.faqs,
  {
    q: "Who pays for electricity charging?",
    a: "Tezz Hub par battery swapping included rehti hai. Agar aap home charger use karte hain, toh ghar ka regular light bill rider pay karta hai.",
    category: "Battery",
  },
  {
    q: "Kya personal use ke liye scooter rent kar sakte hain?",
    a: "Haan, TezzEV delivery riders ke sath personal city commuters ke liye bhi available hai.",
    category: "Rider",
  },
  {
    q: "Minimum kitne din ke liye rent le sakte hain?",
    a: "Aap 1 din ke trial se lekar weekly ya monthly basis par le sakte hain.",
    category: "Pricing",
  },
  {
    q: "Agar challan ya traffic fine ho jaye toh?",
    a: "Traffic rules follow karna rider ki responsibility hai. Kisi bhi challan ka payment rider ko karna hoga.",
    category: "Safety",
  },
];

function FaqsPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [query, setQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filtered = extendedFaqs.filter((f) => {
    const matchCat = selectedCat === "All" || f.category === selectedCat;
    const matchQ = f.q.toLowerCase().includes(query.toLowerCase()) || f.a.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="FAQs"
        title="Frequently Asked Questions"
        subtitle="Quick answers to common questions about rentals, battery swapping, deposits, and safety."
      />

      {/* 2. Search & Category Filters (Mesh Background) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-5xl mx-auto">
          <div className="clean-card p-4 sm:p-6 mb-8 bg-slate-50/60 border border-slate-200">
            {/* Search Input */}
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white border border-slate-200">
              <Search className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search questions (e.g. 'deposit', 'battery', 'licence')..."
                className="w-full bg-transparent text-sm text-slate-800 placeholder:text-slate-400 outline-none"
              />
            </div>

            {/* Category Chips */}
            <div className="flex gap-2 mt-4 overflow-x-auto whitespace-nowrap scrollbar-none pt-1">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedCat === c
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* 3. Accordion List */}
          <div className="space-y-3">
            {filtered.length > 0 ? (
              filtered.map((faq, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={faq.q}
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="clean-card p-5 cursor-pointer"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="text-xs px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold shrink-0">
                          {faq.category}
                        </span>
                        <h3 className="font-heading font-bold text-base text-[#081330]">
                          {faq.q}
                        </h3>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-400 shrink-0 transition-transform ${
                          isOpen ? "rotate-180 text-blue-600" : ""
                        }`}
                      />
                    </div>
                    {isOpen && (
                      <p className="mt-3 pt-3 border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="p-8 text-center text-sm text-slate-500 clean-card">
                No questions found matching "{query}".
              </div>
            )}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
