import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle, ArrowRight, ShieldCheck, HelpCircle, Film } from "lucide-react";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";
import posterDark from "@/assets/tezzev-dark.jpg";
import posterLight from "@/assets/tezzev-light.jpg";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing Plans — Transparent Scooter Rentals | TezzEV" },
      {
        name: "description",
        content:
          "Watch the pricing explainer video. Transparent daily, weekly and monthly scooter rental plans for delivery partners in Jaipur.",
      },
    ],
  }),
});

function PricingPage() {
  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Pricing"
        title="Simple, Transparent Plans"
        subtitle="Zero petrol expenses. Unlimited battery swaps and maintenance included in every plan. Watch our explainer video."
      />

      {/* 2. Pricing Explainer Video Section */}
      <section className="py-10 md:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              <Film className="h-3.5 w-3.5" />
              <span>Pricing Video Explainer</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
              How TezzEV rental plans work
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              A short 60-second video explaining daily flat rates, refundable deposit, and unlimited battery swaps.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              src={TEZZ_VIDEOS.pricingExplainer}
              poster={posterDark}
              title="TezzEV Flat Rental & Battery Swapping Explainer"
              subtitle="Everything included: unlimited swaps, full maintenance, insurance, and 24/7 on-road support."
              badge="Pricing Explainer"
              aspectRatio="16/9"
              className="shadow-md border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* 3. 3 Plan Cards (Clean Showroom Style) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          {/* 3 Plan Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
            {TEZZ_CONFIG.plans.map((p) => {
              const isPopular = p.isPopular;
              const isThirdCard = p.id === "monthly";
              return (
                <div
                  key={p.id}
                  className={`p-7 rounded-2xl flex flex-col justify-between transition-all duration-300 shadow-2xs hover:shadow-lg ${
                    isPopular
                      ? "bg-white text-[#0B1B4D] border-2 border-[#1647E8] ring-1 ring-[#1647E8]/20 -translate-y-1 shadow-md"
                      : "bg-white text-[#0B1B4D] border border-slate-200"
                  } ${isThirdCard ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""}`}
                >
                  <div>
                    {isPopular ? (
                      <span className="inline-block px-3.5 py-1 rounded-full bg-[#1647E8] text-white text-xs font-black mb-4 shadow-2xs">
                        ⭐ Best Seller Plan
                      </span>
                    ) : (
                      <span className="inline-block px-3.5 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-bold mb-4">
                        Standard Tenure
                      </span>
                    )}

                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
                      {p.name}
                    </h3>
                    <p className="text-xs mt-1 text-[#64748B]">
                      {p.subtitle}
                    </p>

                    <div className="my-6">
                      <div className="font-heading text-4xl sm:text-5xl font-black text-[#0B1B4D]">
                        {p.price}
                        <span className="text-sm font-normal ml-1 text-[#64748B]">
                          / {p.period}
                        </span>
                      </div>
                      <div className="text-xs font-semibold mt-1 text-[#1647E8]">
                        *{p.deposit} (100% Refundable)
                      </div>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-slate-100 text-sm text-[#4B587C]">
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5">
                          <CheckCircle className="h-4 w-4 shrink-0 text-[#1647E8]" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100">
                    <Link
                      to="/waitlist"
                      className="w-full py-3 text-sm justify-center flex items-center gap-1.5 font-bold rounded-full transition-all bg-[#1647E8] hover:bg-[#2D6BFF] text-white shadow-xs"
                    >
                      <span>Reserve on Waitlist</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4. What's Included & Security Deposit Explainer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
              <h3 className="font-heading font-bold text-xl text-[#0B1B4D] mb-3">
                What is included in every plan
              </h3>
              <ul className="space-y-3 text-sm text-[#4B587C]">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Unlimited Battery Swapping:</strong> Exchange batteries anytime at Tezz Hubs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Free Regular Maintenance:</strong> Brakes, tyre checks, and electricals on us.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>Third-Party Insurance:</strong> Peace of mind while riding in city traffic.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-600 shrink-0" />
                  <span><strong>24/7 Breakdown Help:</strong> Quick assistance if your vehicle stops.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs">
              <h3 className="font-heading font-bold text-xl text-emerald-800 mb-3">
                Security deposit policy
              </h3>
              <p className="text-sm text-[#4B587C] leading-relaxed">
                A security deposit of <strong>{TEZZ_CONFIG.placeholders.securityDeposit}</strong> is collected at vehicle pickup. It is held securely while you ride.
              </p>
              <p className="text-sm text-[#4B587C] mt-2 leading-relaxed">
                When you return the scooter in normal running condition, the full deposit is refunded to your bank or UPI account <strong>within 2 hours</strong>.
              </p>
            </div>
          </div>

          {/* 5. Simple Traditional Comparison Table */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#0B1B4D]">
                Comparing your daily options
              </h3>
            </div>

            <div className="overflow-x-auto bg-white rounded-3xl border border-slate-200 shadow-sm">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#0B1B4D] text-white text-xs uppercase font-bold">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-cyan-300 font-bold">TezzEV Scooter</th>
                    <th className="p-4 text-slate-300">Personal Petrol Scooter</th>
                    <th className="p-4 text-slate-300">Other Rentals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-[#4B587C]">
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1B4D]">Fuel / Energy Cost</td>
                    <td className="p-4 text-emerald-600 font-bold">Included (Unlimited Swaps)</td>
                    <td className="p-4 text-rose-600">₹250-₹300 daily petrol</td>
                    <td className="p-4">Charge yourself</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1B4D]">Maintenance & Servicing</td>
                    <td className="p-4 text-emerald-600 font-bold">100% Free by TezzEV</td>
                    <td className="p-4">Rider pays from pocket</td>
                    <td className="p-4">Limited coverage</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1B4D]">Battery Swap Speed</td>
                    <td className="p-4 text-[#1647E8] font-bold">Under 2 minutes</td>
                    <td className="p-4">Not applicable</td>
                    <td className="p-4">4-5 hours charging wait</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1B4D]">Roadside Breakdown Help</td>
                    <td className="p-4 text-emerald-600 font-bold">24/7 (15 min response)</td>
                    <td className="p-4">Call local mechanic</td>
                    <td className="p-4">Slow helpline</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold text-[#0B1B4D]">Upfront Vehicle Cost</td>
                    <td className="p-4 text-[#1647E8] font-bold">₹0 (Only refundable deposit)</td>
                    <td className="p-4">₹80,000+ purchase or EMI</td>
                    <td className="p-4">High deposit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 6. Pricing FAQs */}
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-[#0B1B4D] text-center mb-6">
              Frequently asked pricing questions
            </h3>
            <div className="space-y-3">
              {TEZZ_CONFIG.faqs.slice(0, 4).map((f) => (
                <div key={f.q} className="bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/90 shadow-2xs">
                  <h4 className="font-heading font-bold text-base text-[#0B1B4D] mb-1">{f.q}</h4>
                  <p className="text-sm text-[#4B587C] leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 7. CTA */}
          <div className="text-center">
            <Link
              to="/waitlist"
              className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-base py-3 px-8 rounded-full shadow-md transition-all hover:scale-[1.02]"
            >
              <span>Join the Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
