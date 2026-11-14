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
  Play,
  Film,
  Fuel,
  Award,
  SlidersHorizontal,
} from "lucide-react";
import { toast } from "sonner";
import scooterLight from "@/assets/tezzev-light.jpg";
import scooterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { HowToJoinWithAppMockup } from "@/components/HowToJoinWithAppMockup";
import { WhyChooseInteractive } from "@/components/WhyChooseInteractive";
import { VideoCard } from "@/components/VideoCard";
import { VideoPlayer } from "@/components/VideoPlayer";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "TezzEV — Commercial Electric Scooter Rentals | Ride Smart, Earn More" },
      {
        name: "description",
        content:
          "Affordable commercial electric scooter rentals for delivery riders and city commuters in Jaipur. Unlimited 2-minute battery swapping and free maintenance.",
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
      {/* 1. HERO BANNER (RideWay Showroom Style: Clean, Light, Impactful) */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white pt-6 pb-12 md:pt-10 md:pb-16 border-b border-slate-200/80">
        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] border border-blue-200">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="uppercase tracking-wider">New Arrival • {TEZZ_CONFIG.placeholders.targetLaunch}</span>
              </div>

              <h1 className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl text-[#0B1B4D] leading-[1.12] tracking-tight">
                Ride Smart. <br />
                <span className="text-[#1647E8]">Earn More.</span> Ride TEZZ.
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#4B587C] max-w-xl leading-relaxed">
                {TEZZ_CONFIG.brand.subtext} Commercial electric scooter rentals engineered for delivery partners with unlimited 2-minute battery swapping and 100% free maintenance.
              </p>

              <div className="flex flex-wrap gap-3.5 pt-1">
                <Link
                  to="/our-scooter"
                  className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-sm hover:shadow-md transition-all hover:scale-[1.01]"
                >
                  <span>Explore Scooter</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/waitlist"
                  className="inline-flex items-center gap-2 border-2 border-slate-300 hover:border-slate-800 text-[#0B1B4D] font-bold text-sm sm:text-base py-3 px-7 rounded-full hover:bg-slate-50 transition-all"
                >
                  <span>Join Waitlist for Free</span>
                </Link>
              </div>

              {/* RideWay Style 4-Perk Trust Row (Thin Clean Icons on White) */}
              <div className="pt-6 border-t border-slate-200 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-blue-50 text-[#1647E8] flex items-center justify-center shrink-0">
                    <Fuel className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B4D]">Zero Petrol</div>
                    <div className="text-[11px] text-[#64748B]">100% savings</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Battery className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B4D]">2-Min Swap</div>
                    <div className="text-[11px] text-[#64748B]">Quick exchange</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                    <Wrench className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B4D]">Free Servicing</div>
                    <div className="text-[11px] text-[#64748B]">Tyres & brakes</div>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="h-9 w-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="font-bold text-[#0B1B4D]">24/7 SOS</div>
                    <div className="text-[11px] text-[#64748B]">15-min Jaipur help</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Scooter Showcase (RideWay Style: Clean Vehicle Cutout on Crisp Backdrop) */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white p-2 max-w-[500px] w-full">
                <img
                  src={scooterLight}
                  alt="TezzEV Commercial Electric Scooter"
                  className="w-full h-auto object-cover rounded-2xl"
                />

                {/* Floating Clean Badges */}
                <div className="absolute top-5 left-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#1647E8]" />
                  <span className="text-xs font-bold text-[#0B1B4D]">{TEZZ_CONFIG.placeholders.rangeDisplay}</span>
                </div>

                <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-2">
                  <Leaf className="h-4 w-4 text-emerald-600" />
                  <span className="text-xs font-bold text-emerald-700">100% Zero Pollution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY / PILL NAVIGATION ROW (RideWay Style: 6 Clean White Tiles) */}
      <section className="py-8 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {[
              { title: "Zero Petrol Cost", sub: "Save ₹7k/mo", icon: Fuel, to: "/savings" },
              { title: "2-Min Battery Swap", sub: "Unlimited hubs", icon: Battery, to: "/our-scooter" },
              { title: "Free Maintenance", sub: "Zero repair bills", icon: Wrench, to: "/about" },
              { title: "Transparent Pricing", sub: "Daily/weekly plans", icon: Zap, to: "/pricing" },
              { title: "4-Step Process", sub: "Digital check", icon: ShieldCheck, to: "/how-it-works" },
              { title: "Guess The Rent", sub: "Interactive game", icon: Sparkles, to: "/guess-rent" },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.title}
                  to={cat.to}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-blue-300 transition-all text-center flex flex-col items-center justify-center group"
                >
                  <div className="h-10 w-10 rounded-xl bg-blue-50 text-[#1647E8] flex items-center justify-center mb-2 group-hover:bg-[#1647E8] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="font-heading font-bold text-xs sm:text-sm text-[#0B1B4D] group-hover:text-[#1647E8] transition-colors">
                    {cat.title}
                  </h4>
                  <span className="text-[11px] text-[#64748B] mt-0.5">{cat.sub}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. POPULAR SCOOTER SHOWCASE / RENTAL OPTIONS (RideWay "POPULAR SCOOTERS" Grid Style) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <div className="text-xs font-bold text-[#1647E8] uppercase tracking-wider mb-1">
                Flexible Commercial Fleet
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
                POPULAR RENTAL PLANS
              </h2>
            </div>
            <Link
              to="/pricing"
              className="text-xs sm:text-sm font-bold text-[#1647E8] hover:text-[#2D6BFF] flex items-center gap-1"
            >
              <span>View All Pricing Plans</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* 3 Cards: 1 on mobile, 2 on md, 3 on lg (RideWay Showroom Card Style) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TEZZ_CONFIG.plans.map((p) => {
              const isPopular = p.isPopular;
              const isThird = p.id === "monthly";

              return (
                <div
                  key={p.id}
                  className={`bg-white rounded-2xl border ${
                    isPopular ? "border-[#1647E8] ring-1 ring-[#1647E8]/20 shadow-md" : "border-slate-200 shadow-2xs"
                  } p-5 sm:p-6 flex flex-col justify-between hover:shadow-lg transition-all ${
                    isThird ? "md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full" : ""
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3">
                      {isPopular ? (
                        <span className="px-2.5 py-0.5 rounded-md bg-[#1647E8] text-white text-[11px] font-black uppercase tracking-wider">
                          Best Seller
                        </span>
                      ) : (
                        <span className="px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-bold uppercase tracking-wider">
                          Flexible
                        </span>
                      )}
                      <span className="text-xs text-slate-400 font-medium">TezzEV Fleet</span>
                    </div>

                    {/* Scooter Image Cutout */}
                    <div className="h-44 w-full bg-slate-50 rounded-xl overflow-hidden p-2 flex items-center justify-center mb-4">
                      <img
                        src={isPopular ? scooterDark : scooterLight}
                        alt="TezzEV Scooter"
                        className="h-full w-auto object-contain hover:scale-105 transition-transform"
                      />
                    </div>

                    <h3 className="font-heading font-black text-xl text-[#0B1B4D]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#64748B] mt-0.5">
                      {p.subtitle} • {TEZZ_CONFIG.placeholders.rangeDisplay}
                    </p>

                    {/* Price Block */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-baseline justify-between">
                      <div>
                        <div className="font-heading font-black text-2xl text-[#0B1B4D]">
                          {p.price}
                          <span className="text-xs text-[#64748B] font-normal"> / {p.period}</span>
                        </div>
                        <div className="text-[11px] text-emerald-600 font-bold">
                          *{p.deposit}
                        </div>
                      </div>
                      <span className="text-xs text-[#1647E8] bg-blue-50 px-2 py-1 rounded-md font-bold">
                        Unlimited Swaps
                      </span>
                    </div>
                  </div>

                  {/* Buttons (RideWay Style: View Details + Reserve Button) */}
                  <div className="grid grid-cols-2 gap-2 mt-5 pt-4 border-t border-slate-100">
                    <Link
                      to="/our-scooter"
                      className="inline-flex items-center justify-center border border-slate-300 hover:border-slate-400 text-[#0B1B4D] font-bold text-xs py-2.5 px-3 rounded-xl transition-colors text-center"
                    >
                      View Details
                    </Link>
                    <Link
                      to="/waitlist"
                      className="inline-flex items-center justify-center bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-xs py-2.5 px-3 rounded-xl transition-colors text-center shadow-xs"
                    >
                      Join Waitlist
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. SLEEK DARK FEATURE STRIP (RideWay Exchange Banner Style: Sleek High-Contrast Strip) */}
      <section className="py-10 bg-[#0B1B4D] text-white border-b border-blue-900/60">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center">
            <div className="flex items-start gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center shrink-0">
                <Fuel className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white">
                  Zero Petrol Expense
                </h4>
                <p className="text-xs text-blue-200 mt-0.5">
                  Save ₹7,000+ every month by eliminating daily fuel stops.
                </p>
                <Link to="/savings" className="text-[11px] text-cyan-300 font-bold mt-1 inline-block hover:underline">
                  Know More →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center shrink-0">
                <Battery className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white">
                  2-Minute Battery Swap
                </h4>
                <p className="text-xs text-blue-200 mt-0.5">
                  No slow charging wait. Drop empty, slide in 100% full battery.
                </p>
                <Link to="/our-scooter" className="text-[11px] text-cyan-300 font-bold mt-1 inline-block hover:underline">
                  Know More →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center shrink-0">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white">
                  Free Hub Maintenance
                </h4>
                <p className="text-xs text-blue-200 mt-0.5">
                  Tyres, brakes, and electricals serviced 100% free by TezzEV.
                </p>
                <Link to="/about" className="text-[11px] text-cyan-300 font-bold mt-1 inline-block hover:underline">
                  Know More →
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="h-11 w-11 rounded-xl bg-white/10 text-emerald-300 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-sm uppercase tracking-wide text-white">
                  24/7 Breakdown SOS
                </h4>
                <p className="text-xs text-blue-200 mt-0.5">
                  15-minute emergency roadside mobile assistance in Jaipur.
                </p>
                <Link to="/contact" className="text-[11px] text-cyan-300 font-bold mt-1 inline-block hover:underline">
                  Know More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. WATCH TEZZEV IN ACTION (VIDEO-FIRST SECTION on Soft Gray) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100">
                <Film className="h-3.5 w-3.5" />
                <span>Watch TezzEV in Action</span>
              </div>
              <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
                SEE THE SCOOTER & SWAP HUB IN ACTION
              </h2>
              <p className="mt-1 text-sm text-[#64748B] max-w-2xl">
                Watch real fleet footage, battery swap speed, and rider testimonials across Jaipur.
              </p>
            </div>
            <Link
              to="/our-scooter"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-[#1647E8] font-bold text-sm py-2 px-5 rounded-full border border-slate-300 shadow-2xs shrink-0"
            >
              <span>Explore All Scooter Specs</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Large Featured Walkaround Video */}
          <div className="mb-8">
            <VideoPlayer
              src={TEZZ_VIDEOS.scooterTour}
              poster={scooterDark}
              title="Official TezzEV Commercial Scooter Walkaround"
              subtitle="Full walkthrough of high-torque motor, waterproof wiring, and heavy-duty delivery bag carrier."
              badge="Featured Walkaround"
              aspectRatio="21/9"
              className="max-h-[460px] shadow-md border border-slate-200"
            />
          </div>

          {/* 3 Video Cards Below (Strict 3-Card Rule) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            <VideoCard
              src={TEZZ_VIDEOS.actionClip1}
              poster={scooterLight}
              title="2-Minute Battery Swap Demonstration"
              duration="0:45"
              badge="Battery Tech"
              description="See how quick and effortless battery swapping is at any Tezz Hub in Jaipur."
            />
            <VideoCard
              src={TEZZ_VIDEOS.actionClip2}
              poster={scooterDark}
              title="Rider Scooter Handover at Jaipur Hub"
              duration="1:15"
              badge="Hub Process"
              description="Watch a rider verify Aadhaar, pick up keys, and ride out in under 10 minutes."
            />
            <VideoCard
              src={TEZZ_VIDEOS.actionClip3}
              poster={scooterLight}
              title="₹7,000+ Monthly Petrol Savings Breakdown"
              duration="1:30"
              badge="Savings Guide"
              description="Real delivery partner calculates monthly petrol vs TezzEV electric rental savings."
              className="md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none w-full"
            />
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE TEZZEV (RideWay "WHY CHOOSE RIDEWAY?" Style: Clean White) */}
      <section className="py-12 md:py-16 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <WhyChooseInteractive />
        </div>
      </section>

      {/* 7. START IN 4 EASY STEPS WITH LIVE APP MOCKUP */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100">
              Simple 4-Step Process
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
              START RIDING IN 4 EASY STEPS
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              From your phone to the road in less than 24 hours. Each step includes a step-by-step video guide:
            </p>
          </div>

          <HowToJoinWithAppMockup />

          <div className="mt-8 text-center">
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-8 rounded-full shadow-xs transition-all"
            >
              <span>Watch Video Walkthrough for Every Step</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TOP PARTNER PLATFORMS (RideWay "TOP BRANDS" Style) */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px] text-center">
          <p className="text-xs uppercase font-extrabold text-slate-400 tracking-wider mb-4">
            COMPATIBLE WITH MAJOR DELIVERY PLATFORMS
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 max-w-5xl mx-auto">
            {["ZOMATO", "SWIGGY", "BLINKIT", "ZEPTO", "RAPIDO", "UBER"].map((brand) => (
              <div
                key={brand}
                className="bg-[#F8FAFC] rounded-xl py-3 px-4 border border-slate-200/80 font-heading font-black text-base sm:text-lg text-slate-600 hover:text-[#1647E8] hover:border-blue-300 transition-colors flex items-center justify-center shadow-2xs"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. NEWSLETTER / LAUNCH WAITLIST STRIP (RideWay Newsletter Style) */}
      <section className="py-12 bg-[#0B1B4D] text-white border-b border-blue-900/60">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-6 space-y-2">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                Stay Updated With Launch Offers & Priority Access
              </h3>
              <p className="text-xs sm:text-sm text-blue-200">
                Be among the first delivery partners to receive vehicle allocation when operations launch in Jaipur.
              </p>
            </div>

            <div className="lg:col-span-6">
              {!submitted ? (
                <form onSubmit={handleQuickWaitlist} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="text"
                    required
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    placeholder="Your Full Name"
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200 outline-none focus:border-cyan-400 font-medium"
                  />
                  <input
                    type="tel"
                    required
                    value={waitlistMobile}
                    onChange={(e) => setWaitlistMobile(e.target.value)}
                    placeholder="10-digit WhatsApp"
                    className="flex-1 rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-blue-200 outline-none focus:border-cyan-400 font-mono"
                  />
                  <button
                    type="submit"
                    className="bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-colors cursor-pointer shrink-0"
                  >
                    Join Waitlist
                  </button>
                </form>
              ) : (
                <div className="bg-emerald-500/20 border border-emerald-400/40 rounded-xl p-3 text-xs sm:text-sm text-emerald-200 font-semibold flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400 shrink-0" />
                  <span>You're on the priority waitlist! We will update you on WhatsApp.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
