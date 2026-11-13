import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckCircle, ArrowRight, ShieldCheck, HelpCircle } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      { title: "Pricing Plans — Transparent Scooter Rentals | TezzEV" },
      {
        name: "description",
        content: "Transparent daily, weekly and monthly scooter rental plans for delivery partners in Jaipur.",
      },
    ],
  }),
});

function PricingPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Pricing"
        title="Simple, Transparent Plans"
        subtitle="Zero petrol expenses. Unlimited battery swaps and maintenance included in every plan."
      />

      {/* 2. 3 Plan Cards (Sitting on Tinted Mesh with Deep Shadows) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          {/* 3 Plan Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 items-stretch">
            {TEZZ_CONFIG.plans.map((p) => {
              const isPopular = p.isPopular;
              const isThirdCard = p.id === "monthly";
              return (
                <div
                  key={p.id}
                  className={`p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? "featured-card -translate-y-2"
                      : "clean-card bg-white"
                  } ${isThirdCard ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""}`}
                >
                  <div>
                    {isPopular ? (
                      <span className="inline-block px-3.5 py-1 rounded-full bg-white text-blue-700 text-xs font-black mb-4 shadow-sm">
                        ⭐ Most Popular Plan
                      </span>
                    ) : (
                      <span className="inline-block px-3.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
                        Standard Tenure
                      </span>
                    )}

                    <h3 className={`font-heading font-black text-2xl sm:text-3xl ${isPopular ? "text-white" : "text-[#0B1B4D]"}`}>
                      {p.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isPopular ? "text-blue-100" : "text-slate-500"}`}>
                      {p.subtitle}
                    </p>

                    <div className="my-6">
                      <div className={`font-heading text-4xl sm:text-5xl font-black ${isPopular ? "text-white" : "text-[#0B1B4D]"}`}>
                        {p.price}
                        <span className={`text-sm font-normal ml-1 ${isPopular ? "text-blue-100" : "text-slate-500"}`}>
                          / {p.period}
                        </span>
                      </div>
                      <div className={`text-xs font-semibold mt-1 ${isPopular ? "text-cyan-200" : "text-blue-600"}`}>
                        *{p.deposit} (100% Refundable)
                      </div>
                    </div>

                    <div className={`space-y-2.5 pt-4 border-t text-sm ${isPopular ? "border-white/20 text-white" : "border-slate-100 text-[#3A4668]"}`}>
                      {p.features.map((f) => (
                        <div key={f} className="flex items-center gap-2.5">
                          <CheckCircle className={`h-4 w-4 shrink-0 ${isPopular ? "text-cyan-300" : "text-blue-600"}`} />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={`pt-6 mt-6 border-t ${isPopular ? "border-white/20" : "border-slate-100"}`}>
                    <Link
                      to="/waitlist"
                      className={`w-full py-3 text-sm justify-center flex items-center gap-1.5 font-bold rounded-full transition-all ${
                        isPopular
                          ? "bg-white text-blue-700 hover:bg-blue-50 shadow-md"
                          : "btn-primary"
                      }`}
                    >
                      <span>Reserve on Waitlist</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 3. What's Included & Security Deposit Explainer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
            <div className="clean-card p-6 sm:p-8 bg-blue-50/50 border-blue-200">
              <h3 className="font-heading font-bold text-xl text-[#081330] mb-3">
                What is included in every plan
              </h3>
              <ul className="space-y-3 text-sm text-slate-700">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Unlimited Battery Swapping:</strong> Exchange batteries anytime at Tezz Hubs.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Free Regular Maintenance:</strong> Brakes, tyre checks, and electricals on us.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>Third-Party Insurance:</strong> Peace of mind while riding in city traffic.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-blue-600 shrink-0" />
                  <span><strong>24/7 Breakdown Help:</strong> Quick assistance if your vehicle stops.</span>
                </li>
              </ul>
            </div>

            <div className="clean-card p-6 sm:p-8 bg-emerald-50/50 border-emerald-200">
              <h3 className="font-heading font-bold text-xl text-emerald-950 mb-3">
                Security deposit policy
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                A security deposit of <strong>{TEZZ_CONFIG.placeholders.securityDeposit}</strong> is collected at vehicle pickup. It is held securely while you ride.
              </p>
              <p className="text-sm text-slate-700 mt-2 leading-relaxed">
                When you return the scooter in normal running condition, the full deposit is refunded to your bank or UPI account <strong>within 2 hours</strong>.
              </p>
            </div>
          </div>

          {/* 4. Simple Comparison Table */}
          <div className="max-w-5xl mx-auto mb-10">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#081330]">
                Comparing your daily options
              </h3>
            </div>

            <div className="overflow-x-auto clean-card">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs uppercase font-bold text-slate-600">
                  <tr>
                    <th className="p-4">Feature</th>
                    <th className="p-4 text-blue-600 font-bold">TezzEV Scooter</th>
                    <th className="p-4 text-slate-600">Personal Petrol Scooter</th>
                    <th className="p-4 text-slate-600">Other Rentals</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr>
                    <td className="p-4 font-semibold">Fuel / Energy Cost</td>
                    <td className="p-4 text-emerald-600 font-bold">Included (Unlimited Swaps)</td>
                    <td className="p-4 text-red-600">₹250-₹300 daily petrol</td>
                    <td className="p-4">Charge yourself</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Maintenance & Servicing</td>
                    <td className="p-4 text-emerald-600 font-bold">100% Free by TezzEV</td>
                    <td className="p-4">Rider pays from pocket</td>
                    <td className="p-4">Limited coverage</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Battery Swap Speed</td>
                    <td className="p-4 text-blue-600 font-bold">Under 2 minutes</td>
                    <td className="p-4">Not applicable</td>
                    <td className="p-4">4-5 hours charging wait</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Roadside Breakdown Help</td>
                    <td className="p-4 text-emerald-600 font-bold">24/7 (15 min response)</td>
                    <td className="p-4">Call local mechanic</td>
                    <td className="p-4">Slow helpline</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Upfront Vehicle Cost</td>
                    <td className="p-4 text-blue-600 font-bold">₹0 (Only refundable deposit)</td>
                    <td className="p-4">₹80,000+ purchase or EMI</td>
                    <td className="p-4">High deposit</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. 4 Pricing FAQs */}
          <div className="max-w-3xl mx-auto mb-10">
            <h3 className="font-heading font-bold text-2xl text-[#081330] text-center mb-6">
              Frequently asked pricing questions
            </h3>
            <div className="space-y-3">
              {TEZZ_CONFIG.faqs.slice(0, 4).map((f) => (
                <div key={f.q} className="clean-card p-5">
                  <h4 className="font-heading font-bold text-base text-[#081330] mb-1">{f.q}</h4>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 6. CTA */}
          <div className="text-center">
            <Link to="/waitlist" className="btn-primary text-base py-3 px-8">
              <span>Join the Waitlist</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
