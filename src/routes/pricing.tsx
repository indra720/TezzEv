import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Check,
  XCircle,
  ArrowRight,
  ShieldCheck,
  TrendingUp,
  Info,
  Zap,
  HelpCircle,
  Lock,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";

export const Route = createFileRoute("/pricing")({
  component: Pricing,
  head: () => ({
    meta: [
      { title: "Pricing — Transparent Bike Rental Plans | SoraRider" },
      { name: "description", content: "Simple, transparent pricing. Rent from ₹250/day with insurance, maintenance and 24/7 support included." },
    ],
  }),
});

function Pricing() {
  const [dailyKm, setDailyKm] = useState(80);

  const plan = {
    name: "Daily Flex",
    price: 250,
    billing: "per day",
    badge: "Most Popular",
    tagline: "Perfect for temporary work or trying out the EV experience.",
    deposit: 2000,
    totalInitial: 2250,
    included: [
      "Premium Sora EV Scooter",
      "Unlimited Range (Unlimited Swapping)",
      "Free standard maintenance",
      "Third-party insurance coverage",
      "24/7 Roadside breakdown support",
      "Cancel anytime with zero penalty"
    ],
  };

  // Savings Calculator Logic (Calculated based on 250/day rate)
  const petrolFuelCost = Math.round((dailyKm / 40) * 104 * 30);
  const petrolMaintenance = dailyKm > 100 ? 1500 : 1200;
  const totalPetrolCost = petrolFuelCost + petrolMaintenance;

  // SoraRider EV: Flat ₹250/day * 30 = ₹7,500/month.
  const evRentCost = 7500;
  const evChargingCost = Math.round((dailyKm / 75) * 20 * 30);
  const totalEvCost = evRentCost + evChargingCost;

  const monthlySavings = 0; // Simplified for now since calculator is commented out

  const faqs = [
    {
      q: "Are there any hidden costs beyond the rental amount?",
      a: "Absolutely not. Your rental plan includes third-party insurance, regular maintenance, roadside support, and routine servicing. You only pay the flat rental fee plus the cost of electricity you use for charging."
    },
    {
      q: "How does the refundable security deposit work?",
      a: "A security deposit of ₹2,000 is collected at the time of bike pickup. It is held securely in escrow while you ride. When you return the scooter in normal running condition, the full deposit of ₹2,000 is instantly refunded to your UPI or Bank account within 2 hours."
    },
    {
      q: "What happens if the scooter breaks down?",
      a: "Our priority is keeping you on the road so you don't lose earnings. We provide 24/7 breakdown support. In case of any technical issue, simply contact our SOS hotline."
    },
    {
      q: "How do I charge the Sora EV electric scooter?",
      a: "Every rental comes with a portable home charger that plugs into any standard 5A/15A socket. It takes about 4-5 hours to fully charge."
    },
    {
      q: "What documents do I need to start my rental?",
      a: "We keep paperless onboarding fast and simple. You only need a valid driving license (DL), Aadhaar Card, PAN Card, and a bank account in your name to receive security deposit refunds."
    }
  ];

  return (
    <div className="bg-background min-h-screen text-ink pb-16">
      <PageHeader
        title="Transparent Pricing. Maximum Profits."
        subtitle="No hidden charges. Just premium electric scooters to maximize your monthly earnings."
      />

      <section className="py-8 lg:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl border border-border bg-card p-6 md:p-10 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full" />
            
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider mb-2 bg-brand/10 text-brand border-brand/30">
                  {plan.badge}
                </span>
                <h2 className="text-3xl font-black text-ink">{plan.name}</h2>
              </div>
              
              <div className="text-right">
                <div className="flex items-baseline justify-end gap-1">
                  <span className="text-5xl font-black text-brand">₹{plan.price}</span>
                  <span className="text-sm font-semibold text-muted-foreground">/day</span>
                </div>
              </div>
            </div>

            <p className="text-muted-foreground text-sm md:text-base border-b border-border/60 pb-6 mb-6">
              {plan.tagline}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4 flex items-center gap-2">
                  <Check className="h-4 w-4 text-emerald-500" strokeWidth={3} /> Included in Plan
                </h4>
                <ul className="space-y-3.5">
                  {plan.included.map((item, index) => (
                    <motion.li 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.04 }}
                      key={item} 
                      className="flex items-start gap-3 text-sm text-ink font-medium"
                    >
                      <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </div>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-border flex flex-wrap items-center justify-end gap-6">
              <Link
                to="/register"
                className="group inline-flex items-center gap-2.5 rounded-full bg-brand px-8 py-3.5 text-base font-bold text-white transition-all hover:bg-[#EA580C] hover:scale-102 shadow-lg shadow-brand/20"
              >
                Book Scooter <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-muted/30 border-y border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-xs font-bold mb-3 uppercase tracking-wider">
              Profits Calculator
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Calculate Your Monthly Savings
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
            <div className="lg:col-span-7 bg-white rounded-3xl border border-border p-6 md:p-8 flex flex-col justify-between shadow-md">
              <h3 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-brand" /> Daily Kilometers
              </h3>
              <div className="bg-muted/40 rounded-2xl p-6 text-center border border-border/50 mb-6">
                <span className="text-6xl font-black text-brand">{dailyKm}</span>
                <span className="text-xl font-bold text-ink ml-1">KM</span>
              </div>
              <input
                type="range" min="20" max="150" step="5" value={dailyKm}
                onChange={(e) => setDailyKm(Number(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg accent-brand"
              />
            </div>

            <div className="lg:col-span-5 bg-linear-to-br from-brand to-[#EA580C] text-white rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6">Cost Analysis (Monthly)</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-2xl p-4 flex justify-between">
                  <span>Petrol Bike</span>
                  <span className="font-bold">₹{totalPetrolCost}</span>
                </div>
                <div className="bg-white/20 rounded-2xl p-4 flex justify-between">
                  <span>SoraRider EV</span>
                  <span className="font-bold">₹{totalEvCost}</span>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-white/10 text-center">
                <p className="text-sm">Monthly Savings</p>
                <p className="text-3xl font-black mt-2">₹{monthlySavings.toLocaleString("en-IN")}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 border-t border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`i${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-5">
                <AccordionTrigger className="text-left text-sm font-bold text-ink py-4">{f.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground pb-4">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
