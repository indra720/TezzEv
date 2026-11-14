import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Zap, Fuel, ArrowRight, CheckCircle, TrendingUp, Film } from "lucide-react";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";
import posterLight from "@/assets/tezzev-light.jpg";
import posterDark from "@/assets/tezzev-dark.jpg";

export const Route = createFileRoute("/savings")({
  component: SavingsPage,
  head: () => ({
    meta: [
      { title: "Savings Calculator — Calculate Your Monthly EV Profits | TezzEV" },
      {
        name: "description",
        content:
          "Watch our savings explainer video and calculate how much delivery riders save every month with TezzEV electric scooters over petrol bikes.",
      },
    ],
  }),
});

function SavingsPage() {
  const [dailyKm, setDailyKm] = useState(80);
  const [petrolPrice, setPetrolPrice] = useState(105);

  const monthlyPetrolFuel = Math.round((dailyKm / 40) * petrolPrice * 30);
  const monthlyPetrolMaintenance = 1200;
  const totalPetrolCost = monthlyPetrolFuel + monthlyPetrolMaintenance;

  const tezzMonthlyCost = 7500;
  const monthlySavings = Math.max(0, totalPetrolCost - tezzMonthlyCost);

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Savings"
        title="Rider Savings Calculator"
        subtitle="See how much money stays in your pocket every month when you switch to TezzEV. Watch our explainer."
      />

      {/* 2. Savings Explainer Video */}
      <section className="py-10 md:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              <Film className="h-3.5 w-3.5" />
              <span>Savings Video Breakdown</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
              How delivery riders save ₹7,000+ monthly
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              Watch our breakdown comparing petrol expenses, periodic repairs, and flat TezzEV rentals.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              src={TEZZ_VIDEOS.savingsExplainer}
              poster={posterLight}
              title="Delivery Partner Petrol vs TezzEV Savings Breakdown"
              subtitle="Real numbers: ₹250-₹300 daily petrol burn eliminated with unlimited 2-minute battery swapping."
              badge="Savings Video"
              aspectRatio="16/9"
              className="shadow-md border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* 3. Calculator Sliders & Comparison */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-5xl mx-auto">
            {/* Sliders Card */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Slider 1: KM */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#0B1B4D]">Daily Distance (KM)</span>
                    <span className="font-heading font-bold text-base text-[#1647E8] bg-blue-50 px-3 py-1 rounded-lg border border-blue-100">
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
                    className="w-full accent-[#1647E8] h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#64748B] mt-1.5 font-medium">
                    <span>40 km (Part-time)</span>
                    <span>80 km (Normal)</span>
                    <span>160 km (Full-time)</span>
                  </div>
                </div>

                {/* Slider 2: Petrol Price */}
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-bold text-[#0B1B4D]">Petrol Price (₹ / Litre)</span>
                    <span className="font-heading font-bold text-base text-slate-800 bg-slate-100 px-3 py-1 rounded-lg border border-slate-200">
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
                    className="w-full accent-[#1647E8] h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-[#64748B] mt-1.5 font-medium">
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
              <div className="bg-[#F8FAFC] p-6 rounded-3xl border border-slate-200 shadow-2xs">
                <div className="flex items-center gap-2 text-rose-600 font-heading font-bold text-lg mb-4">
                  <Fuel className="h-5 w-5" />
                  <span>Petrol Scooter (Monthly)</span>
                </div>
                <div className="space-y-2.5 text-sm text-[#4B587C]">
                  <div className="flex justify-between">
                    <span>Fuel expense:</span>
                    <span className="font-bold text-rose-700">₹{monthlyPetrolFuel.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Engine oil & servicing:</span>
                    <span className="font-bold text-rose-700">₹{monthlyPetrolMaintenance.toLocaleString("en-IN")}</span>
                  </div>
                  <div className="pt-3 border-t border-slate-200 flex justify-between items-baseline">
                    <span className="text-xs uppercase font-bold text-slate-500">Total Monthly Outflow</span>
                    <span className="font-heading text-2xl font-black text-rose-600">
                      ₹{totalPetrolCost.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>
              </div>

              {/* TezzEV */}
              <div className="bg-blue-50/40 p-6 rounded-3xl border border-blue-200 shadow-2xs">
                <div className="flex items-center gap-2 text-[#1647E8] font-heading font-bold text-lg mb-4">
                  <Zap className="h-5 w-5" />
                  <span>TezzEV Electric (Monthly)</span>
                </div>
                <div className="space-y-2.5 text-sm text-[#4B587C]">
                  <div className="flex justify-between">
                    <span>Petrol expense:</span>
                    <span className="font-bold text-emerald-600">₹0 (Zero petrol)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Regular maintenance:</span>
                    <span className="font-bold text-[#1647E8]">Free (Included)</span>
                  </div>
                  <div className="pt-3 border-t border-blue-200 flex justify-between items-baseline">
                    <span className="text-xs uppercase font-bold text-slate-500">Estimated Rental</span>
                    <span className="font-heading text-2xl font-black text-[#1647E8]">
                      {TEZZ_CONFIG.placeholders.dailyRentDisplay}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Big Sleek Dark Navy Savings Result */}
            <div className="bg-[#0B1B4D] text-white rounded-3xl p-8 text-center mb-8 shadow-md border border-blue-900/60">
              <span className="text-xs uppercase font-bold text-cyan-300 tracking-wider">
                Net Estimated Monthly Profit Gain
              </span>
              <div className="font-heading font-black text-4xl sm:text-5xl text-white mt-2">
                You Save <span className="text-emerald-400">₹{monthlySavings.toLocaleString("en-IN")}+</span>
                <span className="text-lg font-normal text-blue-200"> / month</span>
              </div>
              <p className="text-xs text-blue-200 mt-3 italic">
                *Based on estimated placeholder rates. Final commercial pricing will be announced at launch.
              </p>
            </div>

            {/* 3 Short Reasons Why EV Saves Money */}
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs mb-10">
              <h3 className="font-heading font-bold text-xl text-[#0B1B4D] mb-4">
                3 reasons why TezzEV saves you money
              </h3>
              <div className="space-y-3 text-sm text-[#4B587C]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No petrol price shocks:</strong> Petrol rates keep fluctuating, but your EV rent stays steady and predictable.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Zero engine repair headaches:</strong> Electric hub motors have minimal moving parts, eliminating oil changes and sudden breakdown expenses.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Instant battery swap:</strong> You don't lose earning hours waiting at slow charging points. Swap in 2 minutes and keep delivering.</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link
                to="/waitlist"
                className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-base py-3 px-8 rounded-full shadow-md transition-all hover:scale-[1.02]"
              >
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
