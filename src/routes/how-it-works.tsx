import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Requirements } from "@/components/sections/Requirements";
import { ArrowRight, Clock, Wallet, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  component: Page,
  head: () => ({
    meta: [
      { title: "How It Works — Rent, Ride, Earn with SoraRider" },
      { name: "description", content: "Register, get approved, rent your bike and start earning in 4 simple steps." },
    ],
  }),
});

function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="How it | works"
        subtitle="From registration to your first ride in under 24 hours — no paperwork chaos, no hidden steps."
      >
        <div className="grid gap-3 sm:grid-cols-3 sm:gap-4">
          {[
            { Icon: Clock, label: "24 Hours", desc: "Avg. onboarding time" },
            { Icon: Wallet, label: "₹0", desc: "Advance payment" },
            { Icon: TrendingUp, label: "3x", desc: "Faster than buying" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-white">
                <s.Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-black text-white">{s.label}</div>
                <div className="text-[11px] uppercase tracking-wider text-white/60">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </PageHeader>
      <HowItWorks />
      <Requirements />

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand to-brand/70 p-10 text-center text-white shadow-2xl shadow-brand/30 sm:p-14">
            <h3 className="text-3xl font-black sm:text-4xl">You're 4 steps from your first ride</h3>
            <p className="mx-auto mt-3 max-w-lg text-white/90">Register today and our team will get in touch within 2 hours.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-brand transition hover:-translate-y-0.5 hover:shadow-xl">
              Start Registration <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}