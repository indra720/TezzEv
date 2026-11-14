import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Target, Eye, ShieldCheck, Heart, Leaf, Zap, MapPin, ArrowRight, User, Film } from "lucide-react";
import posterLight from "@/assets/tezzev-light.jpg";
import posterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About TezzEV — Electric Mobility for India's Riders" },
      {
        name: "description",
        content:
          "We are building simple, affordable electric scooter rentals for India's delivery riders and commuters. Watch our brand story.",
      },
    ],
  }),
});

function AboutPage() {
  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="About"
        title="About TezzEV"
        subtitle="We are building simple, affordable electric scooter rentals for India's riders. Watch our story."
      />

      {/* 2. Our Story with Official Brand Story Video (Sleek Dark Navy Contrast Section) */}
      <section className="py-12 md:py-16 bg-[#0B1B4D] text-white border-b border-blue-900/60">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-cyan-300">
                <Film className="h-3.5 w-3.5" />
                <span>Our Brand Story</span>
              </div>
              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
                Why we created <span className="text-cyan-300">TezzEV</span>
              </h2>
              <p className="text-base text-blue-100 leading-relaxed">
                Petrol prices have risen sharply over recent years. For delivery riders working 10
                to 12 hours every day, petrol expenses eat up to 35% of their hard-earned delivery
                earnings.
              </p>
              <p className="text-base text-blue-100 leading-relaxed">
                TezzEV was started with a single focus: provide reliable commercial electric
                scooters on affordable daily rent with free maintenance and unlimited battery swaps.
                When riders spend zero on petrol, their monthly take-home earnings grow directly.
              </p>
            </div>

            <div className="lg:col-span-6">
              <VideoPlayer
                src={TEZZ_VIDEOS.aboutBrandStory}
                poster={posterDark}
                title="TezzEV Brand Story: Empowering India's Delivery Partners"
                subtitle="Why affordable electric scooter rentals are transforming last-mile delivery."
                badge="Brand Film"
                aspectRatio="16/9"
                className="shadow-2xl border border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Mission & Vision (Soft Slate Section) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 border-l-4 border-l-[#1647E8] border border-slate-200 shadow-2xs">
              <div className="h-12 w-12 rounded-2xl bg-blue-50 text-[#1647E8] flex items-center justify-center mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0B1B4D] mb-2">Our Mission</h3>
              <p className="text-base text-[#4B587C] leading-relaxed">
                To make electric vehicle rentals accessible, dependable, and profitable for every
                gig delivery partner in India.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border-l-4 border-l-emerald-600 border border-slate-200 shadow-2xs">
              <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-2xl text-[#0B1B4D] mb-2">Our Vision</h3>
              <p className="text-base text-[#4B587C] leading-relaxed">
                To build India's most trusted green last-mile fleet, eliminating millions of liters
                of petrol burn from city streets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. What We Believe (Core Values - Strict 3-card rule: mobile 1, md 2, lg 3 on White) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              Core Values
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              What we believe in
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-[#1647E8] flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0B1B4D] mb-1.5">Affordable</h3>
              <p className="text-sm text-[#4B587C] leading-relaxed">
                Predictable rental plans with zero hidden charges and free periodic maintenance.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center border border-slate-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="h-12 w-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0B1B4D] mb-1.5">Reliable</h3>
              <p className="text-sm text-[#4B587C] leading-relaxed">
                Robust commercial scooters with rapid 15-minute roadside breakdown assistance.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl p-6 text-center border border-slate-200 shadow-2xs hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full">
              <div className="h-12 w-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                <Leaf className="h-6 w-6" />
              </div>
              <h3 className="font-heading font-bold text-lg text-[#0B1B4D] mb-1.5">Rider-First & Clean</h3>
              <p className="text-sm text-[#4B587C] leading-relaxed">
                Zero tailpipe pollution and respectful rider support with 2-hour deposit refunds.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Where We Are Launching (Sleek Dark Navy Section) */}
      <section className="py-12 md:py-16 bg-[#0B1B4D] text-white border-b border-blue-900/60 text-center">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold mb-2">
            City Launch
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-4xl text-white">
            Where we are launching
          </h2>
          <p className="text-sm sm:text-base text-blue-100 mt-2 max-w-md mx-auto">
            TezzEV begins operations in {TEZZ_CONFIG.launch.city}. Expansion to more cities will follow.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <div className="px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white font-semibold flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4 text-cyan-300" />
              <span>Jaipur (Phase 01)</span>
            </div>
            <div className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-blue-200 font-medium flex items-center gap-2 text-xs sm:text-sm">
              <MapPin className="h-4 w-4" />
              <span>More cities coming soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. CTA Banner */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] text-center border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
            Ready to ride with TezzEV?
          </h2>
          <p className="text-sm text-[#64748B] mt-1.5 mb-6">
            Join the waitlist today to get priority vehicle allocation on launch day.
          </p>
          <Link
            to="/waitlist"
            className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-8 rounded-full shadow-lg transition-all"
          >
            <span>Join the Waitlist</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
