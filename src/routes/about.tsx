import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Target, Eye, ShieldCheck, Heart, Leaf, Zap, MapPin, ArrowRight, User } from "lucide-react";
import posterLight from "@/assets/tezzev-light.jpg";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About TezzEV — Electric Mobility for India's Riders" },
      {
        name: "description",
        content:
          "We are building simple, affordable electric scooter rentals for India's delivery riders and commuters.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="About"
        title="About TezzEV"
        subtitle="We are building simple, affordable electric scooter rentals for India's riders."
      />

      {/* 2. Our Story (Skywash Background with Glowing Blobs) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="section-badge">Our Story</div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B1B4D] tracking-tight">
                Why we created <span className="text-gradient-brand">TezzEV</span>
              </h2>
              <p className="text-base text-[#3A4668] leading-relaxed">
                Petrol prices have risen sharply over recent years. For delivery riders working 10
                to 12 hours every day, petrol expenses eat up to 35% of their hard-earned delivery
                earnings.
              </p>
              <p className="text-base text-[#3A4668] leading-relaxed">
                TezzEV was started with a simple focus: provide reliable commercial electric
                scooters on affordable daily rent with free maintenance and unlimited battery swaps.
                When riders spend zero on petrol, their monthly take-home earnings grow directly.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 rotate-1 blur-xs" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-white p-2">
                <img
                  src={posterLight}
                  alt="TezzEV Story"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="clean-card p-8 bg-white border-l-4 border-l-blue-600">
              <div className="icon-tile-brand mb-4">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0B1B4D] mb-2">Our Mission</h3>
              <p className="text-base text-[#3A4668] leading-relaxed">
                To make electric vehicle rentals accessible, dependable, and profitable for every
                gig delivery partner in India.
              </p>
            </div>

            <div className="clean-card p-8 bg-white border-l-4 border-l-emerald-600">
              <div className="icon-tile-brand mb-4 bg-emerald-600">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0B1B4D] mb-2">Our Vision</h3>
              <p className="text-base text-[#3A4668] leading-relaxed">
                To build India's most trusted green last-mile fleet, eliminating millions of liters
                of petrol burn from city streets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Believe (Mesh Background + 56px Icon Tiles) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-badge mb-2">Core Values</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              What we believe in
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Affordable",
                desc: "Predictable rental plans with no hidden charges or surprise deductions.",
              },
              {
                icon: ShieldCheck,
                title: "Reliable",
                desc: "Well-maintained scooters with quick roadside breakdown assistance.",
              },
              {
                icon: Leaf,
                title: "Clean",
                desc: "Zero tailpipe emission, keeping our Indian cities greener and healthier.",
              },
              {
                icon: Heart,
                title: "Rider-First",
                desc: "Respectful support, paperless verification, and fast deposit refunds.",
              },
            ].map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="clean-card p-6 text-center bg-white">
                  <div className="icon-tile-brand mx-auto mb-4">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[#0B1B4D] mb-1.5">
                    {v.title}
                  </h3>
                  <p className="text-sm text-[#4B587C] leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Go Green Go Far Band */}
      <section className="py-8 bg-emerald-50 border-b border-emerald-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px] text-center">
          <div className="flex items-center justify-center gap-2 text-emerald-800 font-bold mb-1.5">
            <Leaf className="h-5 w-5 text-emerald-600" />
            <span className="font-heading tracking-wide uppercase text-sm">Go Green Go Far</span>
          </div>
          <p className="text-sm sm:text-base text-emerald-900 font-medium max-w-2xl mx-auto">
            Every kilometer ridden on a TezzEV scooter cuts tailpipe carbon emissions and noise
            pollution from our bustling streets.
          </p>
        </div>
      </section>

      {/* 6. Where We Are Launching */}
      <section className="py-8 md:py-12 border-b border-slate-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px] text-center">
          <div className="section-badge mb-2">City Launch</div>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081330]">
            Where we are launching
          </h2>
          <p className="text-sm text-slate-600 mt-1 max-w-md mx-auto">
            TezzEV begins operations in {TEZZ_CONFIG.launch.city}. Expansion to more cities will
            follow soon.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="px-5 py-2.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 font-semibold flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4" />
              <span>Jaipur (Phase 01)</span>
            </div>
            <div className="px-5 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-500 font-medium flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4" />
              <span>More cities coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Meet The Team */}
      <section className="py-8 md:py-12 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <h2 className="font-heading font-extrabold text-2xl text-[#081330]">
              Meet the founding team
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Experienced fleet operators and engineers passionate about electric mobility.
            </p>
          </div>

          {/* Values: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { role: "Fleet & Operations", name: "Operations Lead [TBD]" },
              { role: "Technology & IoT", name: "Engineering Lead [TBD]" },
              { role: "Rider Community", name: "Support Manager [TBD]" },
            ].map((m) => (
              <div key={m.role} className="clean-card p-5 text-center">
                <div className="h-14 w-14 rounded-full bg-slate-100 border border-slate-200 mx-auto mb-2.5 flex items-center justify-center text-slate-400">
                  <User className="h-7 w-7" />
                </div>
                <h3 className="font-heading font-bold text-sm text-[#081330]">{m.name}</h3>
                <p className="text-[11px] text-blue-600 font-medium mt-0.5">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section className="py-8 md:py-12 bg-white text-center">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#081330]">
            Ready to ride with TezzEV?
          </h2>
          <p className="text-sm text-slate-600 mt-1.5 mb-5">
            Join the waitlist today to get priority vehicle allocation on launch day.
          </p>
          <Link to="/waitlist" className="btn-primary text-sm py-2.5 px-7">
            <span>Join the Waitlist</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
