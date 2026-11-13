import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  Zap,
  Battery,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sun,
  Moon,
  Gauge,
  Sliders,
  Layers,
  Sparkles,
  RotateCw,
  Clock,
  Compass,
} from "lucide-react";
import posterLight from "@/assets/tezzev-light.jpg";
import posterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/our-scooter")({
  component: OurScooterPage,
  head: () => ({
    meta: [
      { title: "Our Scooter — TezzEV Electric Delivery Scooter" },
      {
        name: "description",
        content:
          "Discover the TezzEV electric scooter. Engineered for delivery riders with 2-minute battery swaps, dual disc brakes, and maximum daily savings.",
      },
    ],
  }),
});

interface FeatureHotspot {
  id: string;
  title: string;
  category: string;
  description: string;
  metric: string;
}

const hotspots: FeatureHotspot[] = [
  {
    id: "battery",
    title: "Dual Swappable Battery Bay",
    category: "Power System",
    description: "Modular high-density lithium cells. Swap in 2 minutes at any Tezz Hub in Jaipur with zero wait time.",
    metric: "2-Min Swap",
  },
  {
    id: "motor",
    title: "High-Torque Hub Motor",
    category: "Powertrain",
    description: "Tuned for quick pickup with full delivery loads up to 150 kg on flyovers and city inclines.",
    metric: "Instant Pickup",
  },
  {
    id: "brakes",
    title: "Dual Hydraulic Disc Brakes",
    category: "Safety",
    description: "Front and rear ventilated discs provide instant, stable braking on rain-slicked monsoon streets.",
    metric: "Short Stopping Dist",
  },
  {
    id: "headlight",
    title: "Twin Projector LED Headlamps",
    category: "Visibility",
    description: "Ultra-wide illumination pattern keeps night delivery riders fully aware of potholes and road hazards.",
    metric: "Laser Clarity",
  },
  {
    id: "footboard",
    title: "Wide Delivery Bag Footboard",
    category: "Ergonomics",
    description: "Reinforced flat platform specifically designed to hold grocery boxes, 20L water cans, or delivery backpacks.",
    metric: "Maximum Cargo",
  },
];

export function OurScooterPage() {
  const [viewMode, setViewMode] = useState<"day" | "night">("day");
  const [selectedHotspot, setSelectedHotspot] = useState<string>("battery");
  const [specTab, setSpecTab] = useState<"performance" | "battery" | "chassis" | "safety">("performance");

  const currentHotspot = hotspots.find((h) => h.id === selectedHotspot) || hotspots[0];

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Our Scooter"
        title="Meet the TezzEV Scooter"
        subtitle="Engineered for 12-hour delivery shifts, zero petrol expense, and rapid 2-minute battery swapping."
      />

      {/* 2. Interactive Scooter Studio / Showcase */}
      <section className="relative overflow-hidden py-10 md:py-14 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          {/* Day / Night Mode Switcher Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                Fleet Visualizer
              </span>
              <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081330]">
                TezzEV Commercial Pilot Edition
              </h2>
            </div>

            {/* View Mode Switcher Pills */}
            <div className="inline-flex items-center rounded-full bg-slate-100 p-1 border border-slate-200 self-start sm:self-auto">
              <button
                onClick={() => setViewMode("day")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === "day"
                    ? "bg-white text-[#081330] shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Sun className="h-3.5 w-3.5 text-amber-500" />
                <span>Daylight Urban</span>
              </button>

              <button
                onClick={() => setViewMode("night")}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                  viewMode === "night"
                    ? "bg-[#081330] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <Moon className="h-3.5 w-3.5 text-blue-400" />
                <span>Cyber Night</span>
              </button>
            </div>
          </div>

          {/* Main Visual Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Scooter Image with Overlays */}
            <div className="lg:col-span-8">
              <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-900 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
                <img
                  src={viewMode === "day" ? posterLight : posterDark}
                  alt={`TezzEV Scooter ${viewMode} view`}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />

                {/* Floating Spec Badges */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm flex items-center gap-1.5 text-xs font-bold text-[#081330]">
                  <Gauge className="h-3.5 w-3.5 text-blue-600" />
                  <span>Range: {TEZZ_CONFIG.placeholders.rangeDisplay}</span>
                </div>

                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/80 shadow-sm flex items-center gap-1.5 text-xs font-bold text-[#081330]">
                  <Battery className="h-3.5 w-3.5 text-emerald-600" />
                  <span>2-Min Quick Swap</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md p-3 rounded-2xl text-white text-xs flex flex-wrap items-center justify-between gap-2 border border-white/10">
                  <span className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-medium">Fleet Color: Royal Blue Metallic</span>
                  </span>
                  <span className="text-slate-300">Tested on Indian City Pavements</span>
                </div>
              </div>
            </div>

            {/* Hotspot Explorer Card */}
            <div className="lg:col-span-4 space-y-4">
              <div className="clean-card p-5 border-blue-200 bg-gradient-to-b from-blue-50/40 to-white">
                <span className="text-[11px] font-bold text-blue-600 uppercase tracking-wider block mb-1">
                  Feature Inspector
                </span>
                <h3 className="font-heading font-extrabold text-xl text-[#081330]">
                  {currentHotspot.title}
                </h3>
                <span className="inline-block mt-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700">
                  {currentHotspot.category} • {currentHotspot.metric}
                </span>
                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentHotspot.description}
                </p>
              </div>

              {/* Hotspot Selector Pills */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block">
                  Select Part to Inspect:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                  {hotspots.map((h) => {
                    const isSelected = h.id === selectedHotspot;
                    return (
                      <button
                        key={h.id}
                        onClick={() => setSelectedHotspot(h.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                            : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                        }`}
                      >
                        <span>{h.title}</span>
                        <span className={`text-[10px] ${isSelected ? "text-blue-100" : "text-blue-600"}`}>
                          {h.metric}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Battery Swapping Technology Section (Skywash Gradient) */}
      <section className="py-12 md:py-16 bg-skywash border-b border-blue-200/80 relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-1/2 h-72 w-72 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="section-badge mb-2">
              <Zap className="h-3.5 w-3.5 text-blue-600" />
              <span>Zero Charging Waiting Time</span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081330]">
              How 2-Minute Battery Swap Works
            </h2>
            <p className="mt-1.5 text-sm text-slate-600">
              Never wait 4-5 hours for a battery plug. Swap like picking up a fresh water bottle.
            </p>
          </div>

          {/* 3 Steps: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="clean-card p-5 text-center">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                1
              </div>
              <h3 className="font-heading font-bold text-base text-[#081330] mb-1">
                Drive into Tezz Hub
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Located near major Jaipur commercial hotspots. Zero parking hassles.
              </p>
            </div>

            <div className="clean-card p-5 text-center border-blue-300 ring-1 ring-blue-200 bg-blue-50/20">
              <div className="h-12 w-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                2
              </div>
              <h3 className="font-heading font-bold text-base text-[#081330] mb-1">
                Slide Out Empty Battery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lightweight ergonomic handle with safe plug-and-play latch.
              </p>
            </div>

            <div className="clean-card p-5 text-center">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-lg mx-auto mb-3">
                3
              </div>
              <h3 className="font-heading font-bold text-base text-[#081330] mb-1">
                Plug In 100% Full Battery
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take a fully charged battery from the swap dock and roll out in under 120 seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Complete Technical Specifications Matrix */}
      <section className="py-8 md:py-12 bg-[#F8FAFC]">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="section-badge mb-2">Specifications</div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081330]">
              Full Vehicle Technical Specs
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              All core components built for heavy commercial duty and long operating life.
            </p>
          </div>

          <div className="clean-card overflow-hidden max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex border-b border-slate-200 bg-slate-50 text-xs sm:text-sm font-bold overflow-x-auto">
              {[
                { id: "performance", label: "Performance" },
                { id: "battery", label: "Battery & Range" },
                { id: "chassis", label: "Chassis & Comfort" },
                { id: "safety", label: "Safety & Brakes" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSpecTab(tab.id as any)}
                  className={`flex-1 py-3 px-4 text-center whitespace-nowrap transition-colors ${
                    specTab === tab.id
                      ? "bg-white text-blue-700 border-b-2 border-blue-600"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Spec Table Rows */}
            <div className="p-6 divide-y divide-slate-100 text-xs sm:text-sm">
              {specTab === "performance" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Top Speed</span>
                    <span className="font-bold text-[#081330]">{TEZZ_CONFIG.specs[1].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Motor Type</span>
                    <span className="font-bold text-[#081330]">High-Efficiency Electric Hub Motor</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Gradient Climbing Ability</span>
                    <span className="font-bold text-[#081330]">Up to 12 Degrees (Flyover friendly)</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Payload Capacity</span>
                    <span className="font-bold text-[#081330]">{TEZZ_CONFIG.specs[4].value}</span>
                  </div>
                </>
              )}

              {specTab === "battery" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Single Swap Range</span>
                    <span className="font-bold text-[#081330]">{TEZZ_CONFIG.specs[0].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Battery Chemistry</span>
                    <span className="font-bold text-[#081330]">Safe Lithium-ion Phosphate (LFP)</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Swap Duration</span>
                    <span className="font-bold text-[#081330]">{TEZZ_CONFIG.specs[3].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Swaps per Day</span>
                    <span className="font-bold text-emerald-600">Unlimited on active rental plan</span>
                  </div>
                </>
              )}

              {specTab === "chassis" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Frame Architecture</span>
                    <span className="font-bold text-[#081330]">Tubular Steel Commercial Reinforced</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Suspension</span>
                    <span className="font-bold text-[#081330]">Telescopic Front + Dual Heavy Rear Springs</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Tyre Type</span>
                    <span className="font-bold text-[#081330]">Puncture-Resistant Tubeless Tyres</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Seat Height</span>
                    <span className="font-bold text-[#081330]">Low 760mm (Easy for all rider heights)</span>
                  </div>
                </>
              )}

              {specTab === "safety" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Braking System</span>
                    <span className="font-bold text-[#081330]">{TEZZ_CONFIG.specs[5].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Lighting</span>
                    <span className="font-bold text-[#081330]">Dual High-Beam LED with DRL</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Water Resistance</span>
                    <span className="font-bold text-[#081330]">IP67 Waterproof Battery & Motor</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Breakdown SOS</span>
                    <span className="font-bold text-blue-600">15-Minute On-road Mobile Assistance</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3">
            <Link to="/waitlist" className="btn-primary text-sm py-3 px-8">
              <span>Book Vehicle on Priority Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/register" className="btn-secondary text-sm py-3 px-8">
              <span>Pre-Register as Delivery Rider</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
