import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Zap, Fuel, ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/savings")({
  component: SavingsPage,
  head: () => ({
    meta: [
      { title: "Savings Calculator — Calculate Your Monthly EV Profits | TezzEV" },
      {
        name: "description",
        content: "Calculate how much delivery riders save every month with TezzEV electric scooters over personal petrol bikes.",
      },
    ],
  }),
});

function SavingsPage() {
  const [dailyKm, setDailyKm] = useState(80);
  const [petrolPrice, setPetrolPrice] = useState(105);

  // Math:
  // Petrol bike: 40 km/l -> daily petrol = dailyKm / 40
  // Monthly petrol = (dailyKm / 40) * petrolPrice * 30
  // Monthly maintenance = ₹1,200
  const monthlyPetrolFuel = Math.round((dailyKm / 40) * petrolPrice * 30);
  const monthlyPetrolMaintenance = 1200;
  const totalPetrolCost = monthlyPetrolFuel + monthlyPetrolMaintenance;

  // TezzEV:
  // Benchmark rate placeholder: ₹7,500/month (at ~₹250/day)
  const tezzMonthlyCost = 7500;
  const monthlySavings = Math.max(0, totalPetrolCost - tezzMonthlyCost);

  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Savings"
        title="Rider Savings Calculator"
        subtitle="See how much money stays in your pocket every month when you switch to TezzEV."
      />

      {/* 2. Calculator Body (Mesh Background with Deep Floating Cards) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-5xl mx-auto">
          {/* Sliders Card */}
          <div className="clean-card p-6 sm:p-8 mb-8 bg-slate-50/50 border border-slate-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Slider 1: KM */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">Daily Distance (KM)</span>
                  <span className="font-heading font-bold text-lg text-blue-600 bg-blue-50 px-3 py-0.5 rounded-lg">
                    {dailyKm} km / day
                  </span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  step="5"
                  value={dailyKm}
                  onChange={(e) => setDailyKm(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>40 km (Part-time)</span>
                  <span>80 km (Normal)</span>
                  <span>160 km (Full-time)</span>
                </div>
              </div>

              {/* Slider 2: Petrol Price */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">Petrol Price (₹ / Litre)</span>
                  <span className="font-heading font-bold text-lg text-slate-800 bg-slate-100 px-3 py-0.5 rounded-lg">
                    ₹{petrolPrice} / L
                  </span>
                </div>
                <input
                  type="range"
                  min="95"
                  max="120"
                  step="1"
                  value={petrolPrice}
                  onChange={(e) => setPetrolPrice(Number(e.target.value))}
                  className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>₹95/L</span>
                  <span>₹105/L (Jaipur avg)</span>
                  <span>₹120/L</span>
                </div>
              </div>
            </div>
          </div>

          {/* Result Cards Side-by-Side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Petrol */}
            <div className="clean-card p-6 border-red-200 bg-red-50/30">
              <div className="flex items-center gap-2 text-red-600 font-heading font-bold text-lg mb-4">
                <Fuel className="h-5 w-5" />
                <span>Petrol Scooter (Monthly)</span>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Fuel expense:</span>
                  <span className="font-semibold text-slate-900">₹{monthlyPetrolFuel.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between">
                  <span>Engine oil & servicing:</span>
                  <span className="font-semibold text-slate-900">₹{monthlyPetrolMaintenance.toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-3 border-t border-red-200 flex justify-between items-baseline">
                  <span className="text-xs uppercase font-bold text-slate-500">Total Monthly Outflow</span>
                  <span className="font-heading text-2xl font-extrabold text-red-600">
                    ₹{totalPetrolCost.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            {/* TezzEV */}
            <div className="clean-card p-6 border-blue-200 bg-blue-50/30">
              <div className="flex items-center gap-2 text-blue-600 font-heading font-bold text-lg mb-4">
                <Zap className="h-5 w-5" />
                <span>TezzEV Electric (Monthly)</span>
              </div>
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex justify-between">
                  <span>Petrol expense:</span>
                  <span className="font-semibold text-emerald-600 font-bold">₹0 (Zero petrol)</span>
                </div>
                <div className="flex justify-between">
                  <span>Regular maintenance:</span>
                  <span className="font-semibold text-blue-600 font-bold">Free (Included)</span>
                </div>
                <div className="pt-3 border-t border-blue-200 flex justify-between items-baseline">
                  <span className="text-xs uppercase font-bold text-slate-500">Estimated Rental</span>
                  <span className="font-heading text-2xl font-extrabold text-blue-600">
                    {TEZZ_CONFIG.placeholders.dailyRentDisplay}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Big Green Savings Result */}
          <div className="clean-card p-8 bg-emerald-50 border-2 border-emerald-300 text-center mb-8 shadow-sm">
            <span className="text-xs uppercase font-bold text-emerald-800 tracking-wider">
              Net Estimated Monthly Profit Gain
            </span>
            <div className="font-heading font-extrabold text-4xl sm:text-5xl text-emerald-700 mt-2">
              You Save ₹{monthlySavings.toLocaleString("en-IN")}+
              <span className="text-lg font-normal text-emerald-900"> / month</span>
            </div>
            <p className="text-xs text-slate-600 mt-3 italic">
              *Based on placeholder rent. Final price will be announced at launch.
            </p>
          </div>

          {/* 3 Short Reasons Why EV Saves Money */}
          <div className="clean-card p-6 sm:p-8 bg-white border border-slate-200 mb-12">
            <h3 className="font-heading font-bold text-xl text-[#081330] mb-4">
              3 reasons why TezzEV saves you money
            </h3>
            <div className="space-y-3 text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>No petrol price shocks:</strong> Petrol rates keep fluctuating, but your EV rent stays steady and predictable.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Zero engine repair headaches:</strong> Electric motors have fewer moving parts, so no engine oil changes or sudden mechanical breakdowns.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Instant battery swap:</strong> You don't lose earning hours waiting at slow charging points.</span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link to="/waitlist" className="btn-primary text-base py-3 px-8">
              <span>Lock your launch priority slot</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
