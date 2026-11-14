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
  Film,
  Play,
} from "lucide-react";
import posterLight from "@/assets/tezzev-light.jpg";
import posterDark from "@/assets/tezzev-dark.jpg";
const scooterLight = posterLight;
const scooterDark = posterDark;
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoCard } from "@/components/VideoCard";

export const Route = createFileRoute("/our-scooter")({
  component: OurScooterPage,
  head: () => ({
    meta: [
      { title: "Our Scooter — Video Tour & Specifications | TezzEV" },
      {
        name: "description",
        content:
          "Watch the video tour of the TezzEV commercial electric scooter. 2-minute battery swaps, dual disc brakes, and reinforced delivery carrier.",
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
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Our Scooter"
        title="Meet the TezzEV Scooter"
        subtitle="Engineered for 12-hour delivery shifts, zero petrol expense, and rapid 2-minute battery swapping."
      />

      {/* 2. Official Scooter Walkaround Tour Video (Top Feature) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              <Film className="h-3.5 w-3.5" />
              <span>Official Video Walkthrough</span>
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Complete vehicle walkthrough video
            </h2>
            <p className="mt-1 text-sm sm:text-base text-[#64748B]">
              Inspect every angle of the commercial chassis, digital display, motor performance, and delivery platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              src={TEZZ_VIDEOS.scooterTour}
              poster={scooterDark}
              title="TezzEV Commercial Scooter Complete Video Tour"
              subtitle="Dual hydraulic disc brakes, puncture-resistant tubeless tyres, and high-torque hub motor."
              badge="Full Tour Video"
              aspectRatio="16/9"
              className="shadow-md border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* 3. 4-PART VIDEO GALLERY (Headlight, Battery Swap, Display, Riding) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              Feature Video Gallery
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Key features up close on video
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Watch short demonstration videos showing the engineering that makes TezzEV reliable.
            </p>
          </div>

          {/* 4 Video Cards Grid (Mobile 1, MD 2, LG 2 or 4) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            <VideoCard
              src={TEZZ_VIDEOS.galleryHeadlight}
              poster={scooterDark}
              title="Twin LED Projector Headlamp Beam"
              duration="0:45"
              badge="Lighting"
              description="Night road test showing wide beam pattern for dark alleys and monsoon rains."
            />
            <VideoCard
              src={TEZZ_VIDEOS.galleryBattery}
              poster={scooterLight}
              title="2-Minute Battery Swap Mechanism"
              duration="1:05"
              badge="Battery Bay"
              description="Step-by-step docking, unlatching, and sliding in fresh battery at Tezz Hub."
            />
            <VideoCard
              src={TEZZ_VIDEOS.galleryDisplay}
              poster={scooterDark}
              title="Digital Speedometer & Trip Computer"
              duration="0:50"
              badge="Console"
              description="Real-time battery percentage, range estimator, and trip meter visibility in direct sunlight."
            />
            <VideoCard
              src={TEZZ_VIDEOS.galleryRiding}
              poster={scooterLight}
              title="City Road Test with 150 kg Delivery Bag"
              duration="1:30"
              badge="Road Test"
              description="Climbing Jaipur flyovers and navigating traffic with heavy commercial cargo."
            />
          </div>
        </div>
      </section>

      {/* 4. Interactive Scooter Studio / Day & Night Showcase (Sleek Dark Navy Contrast Section) */}
      <section className="py-12 md:py-16 bg-[#0B1B4D] text-white border-b border-blue-900/60">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold mb-2">
                Interactive Showcase
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl text-white">
                Engineered for City Deliveries
              </h2>
              <p className="text-sm text-blue-100 mt-1 max-w-xl">
                Explore key components built specifically for 80-100 km daily delivery cycles.
              </p>
            </div>

            {/* Day / Night View Toggle */}
            <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/20 shrink-0">
              <button
                type="button"
                onClick={() => setViewMode("day")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "day"
                    ? "bg-white text-[#0B1B4D] shadow-sm"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                <Sun className="h-3.5 w-3.5" />
                <span>Day Mode</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("night")}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  viewMode === "night"
                    ? "bg-[#1647E8] text-white shadow-sm"
                    : "text-blue-100 hover:text-white"
                }`}
              >
                <Moon className="h-3.5 w-3.5" />
                <span>Night Beam</span>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Scooter Image with Hotspot Pills */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-black/40 p-2.5">
                <img
                  src={viewMode === "day" ? posterLight : posterDark}
                  alt="TezzEV Scooter"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Hotspot Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {hotspots.map((h) => (
                  <button
                    key={h.id}
                    onClick={() => setSelectedHotspot(h.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      selectedHotspot === h.id
                        ? "bg-[#1647E8] text-white shadow-md ring-2 ring-cyan-300"
                        : "bg-white/10 text-blue-100 hover:bg-white/20"
                    }`}
                  >
                    {h.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Hotspot Detail Card */}
            <div className="lg:col-span-5 bg-white/10 p-6 sm:p-8 rounded-3xl border border-white/20 backdrop-blur-md space-y-4">
              <span className="text-xs uppercase font-bold text-cyan-300 tracking-wider">
                {currentHotspot.category}
              </span>
              <h3 className="font-heading font-black text-2xl text-white">
                {currentHotspot.title}
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {currentHotspot.description}
              </p>
              <div className="pt-2">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Advantage: {currentHotspot.metric}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Complete Technical Specifications Matrix (Soft Slate Section) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              Specifications
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
              Full Vehicle Technical Specs
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              All core components built for heavy commercial duty and long operating life.
            </p>
          </div>

          <div className="bg-white rounded-3xl overflow-hidden max-w-4xl mx-auto border border-slate-200 shadow-sm">
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
                  className={`flex-1 py-3.5 px-4 text-center whitespace-nowrap transition-colors cursor-pointer ${
                    specTab === tab.id
                      ? "bg-white text-[#1647E8] border-b-2 border-[#1647E8]"
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
                    <span className="font-bold text-[#0B1B4D]">{TEZZ_CONFIG.specs[1].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Motor Type</span>
                    <span className="font-bold text-[#0B1B4D]">High-Efficiency Electric Hub Motor</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Gradient Climbing Ability</span>
                    <span className="font-bold text-[#0B1B4D]">Up to 12 Degrees (Flyover friendly)</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Payload Capacity</span>
                    <span className="font-bold text-[#0B1B4D]">{TEZZ_CONFIG.specs[4].value}</span>
                  </div>
                </>
              )}

              {specTab === "battery" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Single Swap Range</span>
                    <span className="font-bold text-[#0B1B4D]">{TEZZ_CONFIG.specs[0].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Battery Chemistry</span>
                    <span className="font-bold text-[#0B1B4D]">Safe Lithium-ion Phosphate (LFP)</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Swap Duration</span>
                    <span className="font-bold text-[#0B1B4D]">{TEZZ_CONFIG.specs[3].value}</span>
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
                    <span className="font-bold text-[#0B1B4D]">Tubular Steel Commercial Reinforced</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Suspension</span>
                    <span className="font-bold text-[#0B1B4D]">Telescopic Front + Dual Heavy Rear Springs</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Tyre Type</span>
                    <span className="font-bold text-[#0B1B4D]">Puncture-Resistant Tubeless Tyres</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Seat Height</span>
                    <span className="font-bold text-[#0B1B4D]">Low 760mm (Easy for all rider heights)</span>
                  </div>
                </>
              )}

              {specTab === "safety" && (
                <>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Braking System</span>
                    <span className="font-bold text-[#0B1B4D]">{TEZZ_CONFIG.specs[5].value}</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Lighting</span>
                    <span className="font-bold text-[#0B1B4D]">Dual High-Beam LED with DRL</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Water Resistance</span>
                    <span className="font-bold text-[#0B1B4D]">IP67 Waterproof Battery & Motor</span>
                  </div>
                  <div className="py-3 flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Breakdown SOS</span>
                    <span className="font-bold text-[#1647E8]">15-Minute On-road Mobile Assistance</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Bottom Action CTA */}
          <div className="mt-8 text-center flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/waitlist"
              className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-8 rounded-full shadow-lg transition-all"
            >
              <span>Book Vehicle on Priority Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/register"
              className="inline-flex items-center gap-2 bg-white text-[#0B1B4D] hover:bg-slate-50 font-bold text-sm py-3 px-8 rounded-full border border-blue-200 transition-all"
            >
              <span>Pre-Register as Delivery Rider</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
