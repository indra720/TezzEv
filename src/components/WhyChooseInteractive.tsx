import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Zap,
  Wrench,
  BatteryCharging,
  Clock,
  ShieldCheck,
  Gift,
  ArrowRight,
  Leaf,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

const benefits = [
  {
    id: 1,
    icon: Zap,
    title: "Zero Petrol Cost",
    desc: "Save ₹7,000+ every month. Petrol price hikes will never hurt your delivery profit again.",
    stat: "₹0 Petrol",
    tag: "High Profit",
  },
  {
    id: 2,
    icon: BatteryCharging,
    title: "2-Minute Battery Swap",
    desc: "No waiting hours for battery charging. Drop empty, slide in 100% full battery, and roll.",
    stat: "2 Min",
    tag: "Quick Swaps",
  },
  {
    id: 3,
    icon: Wrench,
    title: "Free Hub Maintenance",
    desc: "Brakes, tyres, electricals, and periodic checkups are 100% free at Tezz Hubs.",
    stat: "100% Free",
    tag: "Zero Repair Bills",
  },
  {
    id: 4,
    icon: Clock,
    title: "24/7 Roadside SOS",
    desc: "Puncture or technical trouble on the road? Our mobile support team reaches within 15 mins.",
    stat: "15 Min",
    tag: "Rapid SOS",
  },
  {
    id: 5,
    icon: ShieldCheck,
    title: "Paperless Digital Signup",
    desc: "Quick 2-minute registration with Driving Licence and Aadhaar. Zero tedious paperwork.",
    stat: "2 Mins",
    tag: "Instant Approval",
  },
  {
    id: 6,
    icon: Gift,
    title: "Refer & Earn Rewards",
    desc: "Invite other delivery friends to TezzEV and earn direct cash credits in your rider wallet.",
    stat: "Perks",
    tag: "Extra Cash",
  },
];

export function WhyChooseInteractive() {
  const [activeBenefit, setActiveBenefit] = useState(0);

  return (
    <div className="w-full">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="section-badge mb-3">
            <Leaf className="h-3.5 w-3.5 text-emerald-600" />
            <span>Why Delivery Riders Choose TezzEV</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B1B4D] tracking-tight">
            Built for everyday <span className="text-gradient-brand">delivery profit</span>
          </h2>
          <p className="mt-2 text-[#3A4668] text-base sm:text-lg max-w-2xl leading-relaxed">
            Everything you need to ride with peace of mind, swap batteries in 2 minutes, and keep 100% of your earnings.
          </p>
        </div>
        <Link to="/about" className="btn-secondary text-sm shrink-0">
          <span>Our Brand Story</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* ZYPP-STYLE CENTERPIECE (Circular Ring Visual with Floating Chips) */}
      <div className="relative rounded-3xl bg-gradient-to-b from-[#EAF2FF] via-[#D6E6FF]/40 to-white border border-blue-200/80 p-8 sm:p-12 mb-10 overflow-hidden shadow-xl">
        {/* Decorative Grid Pattern */}
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Centerpiece Visual */}
          <div className="lg:col-span-6 flex justify-center items-center py-6">
            <div className="relative w-72 h-72 sm:w-84 sm:h-84 flex items-center justify-center">
              {/* Outer Dashed Orbit Ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-300 animate-spin" style={{ animationDuration: "60s" }} />

              {/* Glowing Brand Gradient SVG Arc Ring */}
              <svg className="w-64 h-64 sm:w-76 sm:h-76 -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-blue-100"
                  strokeWidth="7"
                  fill="none"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  stroke="url(#brandGradRing)"
                  strokeWidth="7"
                  strokeDasharray="264"
                  strokeDashoffset="45"
                  strokeLinecap="round"
                  fill="none"
                />
                <defs>
                  <linearGradient id="brandGradRing" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1647E8" />
                    <stop offset="60%" stopColor="#2D6BFF" />
                    <stop offset="100%" stopColor="#19C8FF" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Core Hub Badge */}
              <div className="absolute w-44 h-44 sm:w-50 sm:h-50 rounded-full bg-white shadow-2xl border-2 border-blue-100 flex flex-col items-center justify-center text-center p-4">
                <div className="h-10 w-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mb-1">
                  <Leaf className="h-5 w-5" />
                </div>
                <div className="font-heading font-black text-2xl sm:text-3xl text-gradient-brand">
                  Zero Petrol
                </div>
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                  Go Green Go Far
                </div>
              </div>

              {/* Floating Orbit Chip 1 (Top Right) */}
              <div className="absolute -top-3 right-0 sm:-right-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "4s" }}>
                <div className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Energy</div>
                  <div className="text-xs font-bold text-[#0B1B4D]">Zero Emission</div>
                </div>
              </div>

              {/* Floating Orbit Chip 2 (Bottom Left) */}
              <div className="absolute -bottom-3 left-0 sm:-left-4 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "5s" }}>
                <div className="h-8 w-8 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
                  <BatteryCharging className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Swapping</div>
                  <div className="text-xs font-bold text-[#0B1B4D]">2-Min Battery Swap</div>
                </div>
              </div>

              {/* Floating Orbit Chip 3 (Bottom Right) */}
              <div className="absolute bottom-6 -right-4 sm:-right-8 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5 animate-bounce" style={{ animationDuration: "4.5s" }}>
                <div className="h-8 w-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">Support</div>
                  <div className="text-xs font-bold text-[#0B1B4D]">24/7 Roadside SOS</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Explainer Text & Highlights */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block">
              Direct Rider Profit
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B4D]">
              Save ₹6,000–₹8,000 every month on fuel expenses
            </h3>
            <p className="text-sm sm:text-base text-[#3A4668] leading-relaxed">
              When riding on petrol bikes, a full-time delivery partner spends ₹250 to ₹300 per day solely at petrol pumps. With TezzEV, unlimited battery swaps and free servicing are included in your flat rent.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-2xl border border-blue-200/80 shadow-sm">
                <div className="font-heading font-extrabold text-2xl text-blue-600">₹0</div>
                <div className="text-xs font-bold text-slate-600 mt-0.5">Petrol Bills</div>
              </div>
              <div className="bg-white p-3.5 rounded-2xl border border-blue-200/80 shadow-sm">
                <div className="font-heading font-extrabold text-2xl text-emerald-600">100%</div>
                <div className="text-xs font-bold text-slate-600 mt-0.5">Free Servicing</div>
              </div>
            </div>

            <div className="pt-2">
              <Link to="/savings" className="btn-primary text-sm py-2.5 px-6">
                <span>Calculate Your Exact Savings</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of 6 Deep Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((b, index) => {
          const Icon = b.icon;
          const isSelected = activeBenefit === index;

          return (
            <div
              key={b.title}
              onClick={() => setActiveBenefit(index)}
              className={`clean-card p-6 cursor-pointer relative overflow-hidden transition-all duration-300 ${
                isSelected
                  ? "border-blue-500 ring-2 ring-blue-500/20 bg-gradient-to-b from-blue-50/40 to-white shadow-xl -translate-y-1.5"
                  : "bg-white hover:border-blue-300"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="icon-tile-brand">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                  {b.stat}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg sm:text-xl text-[#0B1B4D] mb-1.5 flex items-center gap-2">
                <span>{b.title}</span>
                {isSelected && <CheckCircle2 className="h-4 w-4 text-blue-600" />}
              </h3>
              <p className="text-sm text-[#4B587C] leading-relaxed">
                {b.desc}
              </p>

              <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-emerald-700 font-bold flex items-center gap-1">
                  <Leaf className="h-3.5 w-3.5 text-emerald-600" />
                  <span>{b.tag}</span>
                </span>
                <span className="text-blue-600 font-bold">
                  View details →
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Delivery Platform Compatibility Banner */}
      <div className="mt-8 rounded-2xl bg-gradient-to-r from-blue-50 via-sky-50 to-indigo-50 border border-blue-200/80 p-5 sm:p-7 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-4">
          <div className="icon-tile-brand">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <div>
            <h4 className="font-heading font-bold text-base sm:text-lg text-[#0B1B4D]">
              Ride for Zomato, Swiggy, Blinkit, Zepto, or Rapido
            </h4>
            <p className="text-xs sm:text-sm text-[#4B587C] mt-0.5">
              100% commercial registration compliant. Zero commercial permit hassle for delivery riders.
            </p>
          </div>
        </div>

        <Link to="/register" className="btn-primary text-xs sm:text-sm py-2.5 px-6 whitespace-nowrap">
          <span>Pre-Register Now</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
