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
} from "lucide-react";

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
  return (
    <div className="w-full">
      {/* Top Header (RideWay Style: Clean & Centered or Left Aligned) */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100">
            <Leaf className="h-3.5 w-3.5 text-emerald-600" />
            <span>Why Delivery Riders Choose TezzEV</span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D] tracking-tight">
            WHY CHOOSE <span className="text-[#1647E8]">TEZZEV?</span>
          </h2>
          <p className="mt-1 text-[#64748B] text-sm sm:text-base max-w-2xl leading-relaxed">
            Everything you need to ride with peace of mind, swap batteries in 2 minutes, and keep 100% of your earnings.
          </p>
        </div>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1647E8] hover:text-[#2D6BFF] transition-colors shrink-0"
        >
          <span>Our Brand Story</span>
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* 6 Clean White Benefit Cards (RideWay Style: Crisp White, Thin Borders, Soft Hover Lift) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {benefits.map((b) => {
          const Icon = b.icon;
          return (
            <div
              key={b.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-12 w-12 rounded-xl bg-blue-50/80 text-[#1647E8] flex items-center justify-center border border-blue-100/60 group-hover:bg-[#1647E8] group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold text-[#1647E8] bg-blue-50 px-2.5 py-1 rounded-md">
                    {b.stat}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-lg text-[#0B1B4D] mb-1.5 group-hover:text-[#1647E8] transition-colors">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#64748B] leading-relaxed">
                  {b.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                  {b.tag}
                </span>
                <span className="text-[#1647E8] group-hover:translate-x-0.5 transition-transform">
                  Details →
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
