import { useState, useEffect } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  CheckCircle,
  Clock,
  Wrench,
  Zap,
  ArrowRight,
  ShieldCheck,
  Battery,
  Users,
  ChevronRight,
  Sparkles,
  MapPin,
  Leaf,
} from "lucide-react";
import { toast } from "sonner";
import scooterLight from "@/assets/tezzev-light.jpg";
import scooterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG } from "@/lib/config";
import { HowToJoinWithAppMockup } from "@/components/HowToJoinWithAppMockup";
import { WhyChooseInteractive } from "@/components/WhyChooseInteractive";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TezzEV — Go Green Go Far | Electric Scooter Rentals" },
      {
        name: "description",
        content:
          "Affordable electric scooter rentals for delivery riders and city commuters in Jaipur. Unlimited battery swapping and free maintenance.",
      },
    ],
  }),
});

function HomePage() {
  const [waitlistName, setWaitlistName] = useState("");
  const [waitlistMobile, setWaitlistMobile] = useState("");
  const [waitlistCity, setWaitlistCity] = useState("Jaipur");
  const [riderType, setRiderType] = useState<"rider" | "personal">("rider");
  const [submitted, setSubmitted] = useState(false);

  const [timeLeft, setTimeLeft] = useState({
    days: "14",
    hours: "08",
    minutes: "45",
    seconds: "12",
  });

  useEffect(() => {
    const launchDate = new Date("2026-12-01T00:00:00").getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate - now;
      if (difference <= 0) {
        clearInterval(interval);
        return;
      }
      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setTimeLeft({
        days: d.toString().padStart(2, "0"),
        hours: h.toString().padStart(2, "0"),
        minutes: m.toString().padStart(2, "0"),
        seconds: s.toString().padStart(2, "0"),
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleQuickWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!waitlistName.trim() || !waitlistMobile.trim()) {
      toast.error("Please enter your name and mobile number.");
      return;
    }
    setSubmitted(true);
    toast.success("Added to Waitlist!", {
      description: `Thank you, ${waitlistName}. We'll notify you on launch.`,
    });
  };

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. HERO SECTION (Skywash Gradient + 2 Large Blurred Blobs + Dotted Grid + Halo) */}
      <section className="relative overflow-hidden bg-skywash pt-10 pb-14 md:pt-16 md:pb-20 border-b border-blue-200/80">
        {/* Soft Blurred Ambient Glow Blobs */}
        <div className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-blue-600/30 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-20 h-96 w-96 rounded-full bg-cyan-400/25 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-35" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div className="section-badge">
                <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                <span>{TEZZ_CONFIG.brand.status} in Jaipur</span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0B1B4D] leading-[1.12] tracking-tight">
                Go Green. Go Far. <br />
                Ride <span className="text-gradient-brand italic">TEZZ.</span>
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#3A4668] max-w-xl leading-relaxed">
                {TEZZ_CONFIG.brand.subtext} Simple electric scooter rentals with unlimited 2-minute battery swapping and free maintenance.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-2">
                <Link to="/waitlist" className="btn-primary text-sm sm:text-base py-3 px-8">
                  <span>Join Waitlist for Free</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/register" className="btn-secondary text-sm sm:text-base py-3 px-8">
                  Pre-Register as Rider
                </Link>
              </div>

              {/* Trust Row with 56px Styled Tiles (1 col on mobile, 3 cols on sm+) */}
              <div className="pt-6 border-t border-blue-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-sm text-[#0B1B4D]">
                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-xs">
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm">Zero Petrol</div>
                    <div className="text-[11px] text-[#4B587C]">100% savings</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Wrench className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm">Free Servicing</div>
                    <div className="text-[11px] text-[#4B587C]">Tyres & brakes</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0 shadow-xs">
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div>
                    <div className="font-extrabold text-xs sm:text-sm">24/7 SOS</div>
                    <div className="text-[11px] text-[#4B587C]">15 min help</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Scooter Visual with Faint Ring & Layered Halo */}
            <div className="lg:col-span-5 relative flex justify-center">
              {/* Big Faint Circle Ring Behind the Scooter */}
              <div className="pointer-events-none absolute -inset-6 rounded-full border-2 border-dashed border-blue-300/50 -rotate-12" />
              <div className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-tr from-blue-600/20 to-cyan-400/20 blur-2xl" />

              {/* Scooter Showcase Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-blue-200 bg-white p-2.5 max-w-[460px] w-full">
                <img
                  src={scooterLight}
                  alt="TezzEV Electric Scooter"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Floating Chip 1: Range */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Range</div>
                    <div className="text-sm font-extrabold text-[#0B1B4D]">{TEZZ_CONFIG.placeholders.rangeDisplay}</div>
                  </div>
                </div>

                {/* Floating Chip 2: Zero Emission */}
                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-blue-200 flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                    <Leaf className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Emission</div>
                    <div className="text-sm font-extrabold text-emerald-700">Zero Pollution</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK WAITLIST BAR (Full-width floating container) */}
      <section className="py-6 sm:py-8 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="rounded-3xl bg-gradient-to-r from-[#EAF2FF] via-[#D6E6FF]/50 to-indigo-50 border border-blue-200 p-6 sm:p-8 shadow-sm">
            <div className="max-w-3xl mb-4">
              <h2 className="font-heading font-black text-xl sm:text-2xl text-[#0B1B4D]">
                Reserve your launch priority slot
              </h2>
              <p className="text-sm text-[#3A4668] mt-0.5">
                Be among the first delivery riders to get vehicle access when TezzEV starts in Jaipur.
              </p>
            </div>

            {!submitted ? (
              <form onSubmit={handleQuickWaitlist} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
                <input
                  type="text"
                  required
                  value={waitlistName}
                  onChange={(e) => setWaitlistName(e.target.value)}
                  placeholder="Your Full Name"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1B4D] placeholder:text-slate-400 outline-none focus:border-blue-600 shadow-xs"
                />
                <input
                  type="tel"
                  required
                  value={waitlistMobile}
                  onChange={(e) => setWaitlistMobile(e.target.value)}
                  placeholder="10-digit WhatsApp"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1B4D] placeholder:text-slate-400 outline-none focus:border-blue-600 shadow-xs font-mono"
                />
                <input
                  type="text"
                  required
                  value={waitlistCity}
                  onChange={(e) => setWaitlistCity(e.target.value)}
                  placeholder="City"
                  className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1B4D] placeholder:text-slate-400 outline-none focus:border-blue-600 shadow-xs"
                />
                <select
                  value={riderType}
                  onChange={(e) => setRiderType(e.target.value as "rider" | "personal")}
                  className="rounded-xl border border-slate-300 bg-white px-3 py-3 text-sm text-[#0B1B4D] outline-none focus:border-blue-600 shadow-xs font-semibold"
                >
                  <option value="rider">🛵 Delivery Rider</option>
                  <option value="personal">🏙️ Personal Commuter</option>
                </select>
                <button type="submit" className="btn-primary text-sm py-3 px-4 w-full justify-center">
                  Join Now
                </button>
              </form>
            ) : (
              <div className="bg-white rounded-2xl p-4 border border-emerald-200 text-sm text-emerald-800 flex items-center gap-2.5 shadow-sm">
                <CheckCircle className="h-5 w-5 text-emerald-600 shrink-0" />
                <span className="font-bold">You are on the VIP waitlist! We will reach out on your WhatsApp number.</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE TEZZEV (Sky-100 Mesh Gradient + Centerpiece Circular Ring) */}
      <section className="py-12 md:py-16 bg-mesh relative border-b border-blue-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <WhyChooseInteractive />
        </div>
      </section>

      {/* 4. HIGHLIGHT / SCOOTER SHOWCASE (DEEP Navy Gradient Section with Cyan Glow) */}
      <section className="py-12 md:py-16 bg-deep-gradient text-white relative overflow-hidden border-b border-blue-900">
        {/* Soft Cyan Glow Behind Scooter */}
        <div className="pointer-events-none absolute right-1/4 top-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots-dark opacity-20" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-white/5 p-2.5 backdrop-blur-xs">
                <img
                  src={scooterDark}
                  alt="TezzEV Scooter Cyber Night View"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Cyan Pill */}
              <div className="absolute bottom-5 left-5 bg-black/70 backdrop-blur-md px-4 py-2 rounded-2xl border border-cyan-400/30 text-xs font-bold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>LED Projector Beam • IP67 Waterproof</span>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-cyan-300">
                <Zap className="h-3.5 w-3.5" />
                <span>The Commercial Machine</span>
              </div>

              <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
                Engineered for <span className="text-gradient-cyan">12-Hour Daily Rides</span>
              </h2>

              <p className="text-base text-slate-300 leading-relaxed">
                Lightweight, comfortable, and designed specifically for delivery partners on city streets. Low center of gravity, heavy-duty suspension, and 2-minute battery swaps.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-200">
                    <strong className="text-white">{TEZZ_CONFIG.placeholders.rangeDisplay}:</strong> Continuous riding with rapid 2-minute battery swap hubs across Jaipur.
                  </span>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-200">
                    <strong className="text-white">Delivery Bag Ready:</strong> Wide flat footboard & reinforced carrier for Zomato, Swiggy, and Blinkit bags.
                  </span>
                </div>

                <div className="flex items-start gap-3 bg-white/5 p-3.5 rounded-2xl border border-white/10">
                  <div className="h-6 w-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <span className="text-sm text-slate-200">
                    <strong className="text-white">All-Weather Safety:</strong> Dual hydraulic disc brakes and laser-bright headlights for rainy monsoon nights.
                  </span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link to="/our-scooter" className="btn-primary text-sm py-3 px-8 shadow-xl">
                  <span>Explore 360° Scooter Studio</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. START IN 4 EASY STEPS WITH LIVE APP MOCKUP */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100 relative">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-badge mb-2">Simple Process</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Start riding in 4 easy steps
            </h2>
            <p className="mt-2 text-[#3A4668] text-base">
              From your phone to the road in less than 24 hours. See how effortless the app signup is:
            </p>
          </div>

          <HowToJoinWithAppMockup />
        </div>
      </section>

      {/* 6. PRICING TEASER (Skywash Gradient + Featured Gradient Card) */}
      <section className="py-12 md:py-16 bg-skywash border-b border-blue-200/80 relative">
        <div className="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-badge mb-2">Transparent Rates</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Simple and flexible rental plans
            </h2>
            <p className="mt-2 text-[#3A4668] text-base">
              Flat rates with unlimited battery swaps, servicing, and roadside assistance included.
            </p>
          </div>

          {/* 3 Plan Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEZZ_CONFIG.plans.map((p) => {
              const isPopular = p.isPopular;
              const isThirdCard = p.id === "monthly";

              return (
                <div
                  key={p.id}
                  className={`p-7 flex flex-col justify-between transition-all duration-300 ${
                    isPopular
                      ? "featured-card -translate-y-2"
                      : "clean-card bg-white"
                  } ${isThirdCard ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""}`}
                >
                  <div>
                    {isPopular ? (
                      <span className="inline-block px-3 py-1 rounded-full bg-white text-blue-700 text-xs font-black mb-3 shadow-xs">
                        ⭐ Most Popular Plan
                      </span>
                    ) : (
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-3">
                        Flexible Option
                      </span>
                    )}

                    <h3 className={`font-heading font-black text-2xl ${isPopular ? "text-white" : "text-[#0B1B4D]"}`}>
                      {p.name}
                    </h3>
                    <p className={`text-xs mt-1 ${isPopular ? "text-blue-100" : "text-slate-500"}`}>
                      {p.subtitle}
                    </p>

                    <div className="my-5">
                      <div className={`font-heading text-3xl sm:text-4xl font-black ${isPopular ? "text-white" : "text-[#0B1B4D]"}`}>
                        {p.price}
                        <span className={`text-sm font-normal ml-1 ${isPopular ? "text-blue-100" : "text-slate-500"}`}>
                          / {p.period}
                        </span>
                      </div>
                      <div className={`text-xs mt-1 font-semibold ${isPopular ? "text-cyan-200" : "text-blue-600"}`}>
                        *{p.deposit} (100% Refundable)
                      </div>
                    </div>

                    <ul className={`space-y-2.5 text-xs sm:text-sm border-t pt-4 ${isPopular ? "border-white/20 text-white" : "border-slate-100 text-[#3A4668]"}`}>
                      {p.features.slice(0, 4).map((f) => (
                        <li key={f} className="flex items-center gap-2.5">
                          <CheckCircle className={`h-4 w-4 shrink-0 ${isPopular ? "text-cyan-300" : "text-blue-600"}`} />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`pt-5 mt-5 border-t ${isPopular ? "border-white/20" : "border-slate-100"}`}>
                    <Link
                      to="/pricing"
                      className={`w-full text-xs sm:text-sm py-2.5 rounded-full font-bold justify-center flex items-center gap-1 transition-all ${
                        isPopular
                          ? "bg-white text-blue-700 hover:bg-blue-50 shadow-md"
                          : "btn-secondary"
                      }`}
                    >
                      <span>Check plan details</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-center">
            <Link to="/pricing" className="btn-primary text-sm py-3 px-8">
              <span>View Full Pricing Comparison</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. SAVINGS CALCULATOR TEASER (Layered Floating Dark Card) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="dark-card p-8 sm:p-12 relative overflow-hidden">
            <div className="pointer-events-none absolute -right-10 -bottom-10 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-3 max-w-xl">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 bg-white/10 px-3 py-1 rounded-full">
                  Savings Calculator
                </span>
                <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-white">
                  See how much money stays in your pocket
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  Delivery riders riding 80 km daily save between ₹6,000 to ₹8,000 every month by switching from petrol bikes to TezzEV.
                </p>
              </div>

              <div className="shrink-0 text-center md:text-right">
                <div className="text-xs text-slate-300 uppercase font-semibold">Average Monthly Profit Gain</div>
                <div className="font-heading text-4xl sm:text-5xl font-black text-emerald-400 my-1.5">
                  Save ₹7,000+
                  <span className="text-base text-white font-normal"> / mo</span>
                </div>
                <div className="mt-4">
                  <Link to="/savings" className="btn-primary text-sm py-3 px-7 bg-white text-[#0B1B4D] hover:bg-slate-100 shadow-xl">
                    <span>Open Savings Calculator</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. RIDE FOR ANY PLATFORM STRIP */}
      <section className="py-8 bg-skywash border-b border-blue-200/80">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px] text-center">
          <p className="text-xs uppercase font-extrabold text-blue-700 tracking-wider mb-4">
            Compatible with all major delivery platforms
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-14 font-heading font-black text-xl sm:text-2xl text-slate-400">
            <span className="hover:text-blue-600 transition-colors">ZOMATO</span>
            <span className="hover:text-blue-600 transition-colors">SWIGGY</span>
            <span className="hover:text-blue-600 transition-colors">BLINKIT</span>
            <span className="hover:text-blue-600 transition-colors">ZEPTO</span>
            <span className="hover:text-blue-600 transition-colors">RAPIDO</span>
            <span className="hover:text-blue-600 transition-colors">UBER</span>
          </div>
        </div>
      </section>

      {/* 9. DAILY RENT GUESS KARO BANNER */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-100">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="dark-card p-7 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="space-y-3 max-w-lg">
              <span className="text-xs uppercase font-bold text-cyan-300 tracking-wider bg-white/10 px-3 py-1 rounded-full">
                Interactive Launch Game
              </span>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Daily Rent Guess Karo
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                Aapke hisaab se TezzEV commercial electric scooter ka daily rent kitna hona chahiye? Guess lock karein aur WhatsApp par dosto ke saath share karein!
              </p>
              <div className="pt-2">
                <Link to="/guess-rent" className="btn-primary text-sm py-2.5 px-6">
                  <span>Play Guess The Rent</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="w-full md:w-72 h-44 rounded-2xl overflow-hidden border border-white/20 shrink-0 shadow-lg">
              <img
                src={scooterDark}
                alt="TezzEV Tunnel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. FINAL LAUNCH COUNTDOWN BANNER (Deep Navy Gradient + Glowing Timer) */}
      <section className="py-14 md:py-20 bg-deep-gradient text-white text-center relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots-dark opacity-20" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-cyan-300 mb-4">
            <MapPin className="h-3.5 w-3.5 text-cyan-400" />
            <span>Coming to Jaipur</span>
          </div>

          <h2 className="font-heading font-black text-3xl sm:text-5xl text-white tracking-tight">
            {TEZZ_CONFIG.brand.launchTagline}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Priority onboarding slots will be assigned based on waitlist order. Reserve your spot for free today!
          </p>

          {/* Countdown timer */}
          <div className="grid grid-cols-4 gap-3 sm:gap-4 max-w-md mx-auto my-8">
            {[
              { label: "DAYS", val: timeLeft.days },
              { label: "HOURS", val: timeLeft.hours },
              { label: "MINS", val: timeLeft.minutes },
              { label: "SECS", val: timeLeft.seconds },
            ].map((t) => (
              <div key={t.label} className="bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20 shadow-lg">
                <div className="font-heading font-black text-3xl sm:text-4xl text-[#19C8FF]">
                  {t.val}
                </div>
                <div className="text-[11px] font-extrabold text-slate-300 mt-1">{t.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/waitlist" className="btn-primary text-base py-3 px-8 shadow-xl">
              <span>Join Waitlist for Free</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-secondary text-base py-3 px-8 text-[#0B1B4D]">
              Contact Fleet Desk
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
