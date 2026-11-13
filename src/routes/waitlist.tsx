import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Bell,
  Check,
  Sparkles,
  MapPin,
  Clock,
  Share2,
} from "lucide-react";
import { toast } from "sonner";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/waitlist")({
  component: WaitlistPage,
  head: () => ({
    meta: [
      { title: "Join the Waitlist — Priority Scooter Allocation | TezzEV" },
      {
        name: "description",
        content: "Join the official launch waitlist for TezzEV electric scooter rentals in Jaipur. 100% free with zero upfront payment.",
      },
    ],
  }),
});

export function WaitlistPage() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("Jaipur");
  const [riderType, setRiderType] = useState<"rider" | "personal">("rider");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !mobile.trim()) {
      toast.error("Please enter your name and mobile number.");
      return;
    }
    setIsSubmitted(true);
    toast.success("Waitlist Spot Confirmed!", {
      description: `Welcome aboard, ${name}! Your priority access is reserved.`,
    });
  };

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Waitlist"
        title="Join the Launch Waitlist"
        subtitle="Be the first to get vehicle access when TezzEV starts commercial operations in Jaipur. 100% free priority pass."
      />

      {/* 2. Waitlist Stage with Tinted Mesh Background & Layered Card Depth */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-100">
        {/* Soft Background Blurred Blobs */}
        <div className="pointer-events-none absolute -left-20 top-1/4 h-80 w-80 rounded-full bg-blue-500/25 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-10 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-40" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left 6 Cols: Rich Value Proposition */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="section-badge mb-3">
                    <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                    <span>Priority Queue • Jaipur Phase 01</span>
                  </div>

                  <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-[#0B1B4D] tracking-tight leading-[1.15]">
                    Lock your priority slot for <span className="text-gradient-brand">TezzEV</span>
                  </h2>

                  <p className="mt-3 text-base sm:text-lg text-[#3A4668] leading-relaxed">
                    First batch fleet numbers are limited. Pre-registered riders get vehicle key handover preference, free battery swaps, and exclusive launch rental pricing.
                  </p>
                </div>

                {/* 4 Feature Items with 56px Icon Tiles */}
                <div className="space-y-4 pt-2">
                  {[
                    {
                      icon: Zap,
                      title: "Batch 01 Scooter Access",
                      desc: "First preference to pick up your Royal Blue scooter on official launch day.",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Fast-Track Digital Verification",
                      desc: "Instant Driving Licence and Aadhaar check in under 2 minutes with zero paperwork.",
                    },
                    {
                      icon: Clock,
                      title: "Zero Upfront Payment",
                      desc: "Joining the waitlist is 100% free. No card, no deposit deducted until physical vehicle handover.",
                    },
                    {
                      icon: Bell,
                      title: "Direct WhatsApp Launch Alerts",
                      desc: "Be the first to receive exact hub locations, daily rent rates, and key pickup dates.",
                    },
                  ].map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        className="clean-card p-4 sm:p-5 flex items-start gap-4 bg-white/90 backdrop-blur-xs hover:border-blue-400"
                      >
                        <div className="icon-tile-brand shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-base sm:text-lg text-[#0B1B4D]">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#4B587C] mt-0.5 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Trust Badges Strip */}
                <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-bold text-[#0B1B4D]">
                  <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-3 py-1.5 rounded-full border border-emerald-200">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" />
                    <span>100% Free • No Lock-in</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-blue-50 text-blue-800 px-3 py-1.5 rounded-full border border-blue-200">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Jaipur Hubs Only</span>
                  </span>
                </div>
              </div>

              {/* Right 6 Cols: Layered Floating Form Card */}
              <div className="lg:col-span-6 relative">
                {/* Offset Colored Backdrop Panel for Depth */}
                <div className="absolute -inset-2.5 rounded-[32px] bg-gradient-to-tr from-blue-600/20 via-sky-400/20 to-cyan-300/20 rotate-1 blur-xs pointer-events-none" />

                {/* Main White Floating Card */}
                <div className="relative rounded-3xl bg-white p-6 sm:p-10 shadow-2xl border border-blue-200/80">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="border-b border-slate-100 pb-4">
                        <span className="text-xs font-bold text-blue-600 uppercase tracking-wider block mb-1">
                          Step 1 of 1 • Fast Access
                        </span>
                        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B4D]">
                          Enter your details
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                          We will reserve your queue spot and notify you on WhatsApp.
                        </p>
                      </div>

                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Sunil Kumar"
                          className="w-full rounded-xl border border-slate-300 bg-slate-50/50 px-4 py-3 text-base text-[#0B1B4D] placeholder:text-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all"
                        />
                      </div>

                      {/* Mobile Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          WhatsApp Mobile Number (10-Digit) *
                        </label>
                        <div className="relative flex items-center">
                          <span className="absolute left-4 text-sm font-bold text-slate-500 border-r border-slate-300 pr-2">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            placeholder="98765 43210"
                            className="w-full rounded-xl border border-slate-300 bg-slate-50/50 pl-16 pr-4 py-3 text-base text-[#0B1B4D] placeholder:text-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all font-mono"
                          />
                        </div>
                      </div>

                      {/* Operating City */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Operating City
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            disabled
                            value="Jaipur (Launching Phase 01)"
                            className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-700 cursor-not-allowed"
                          />
                          <MapPin className="absolute right-4 top-3.5 h-4 w-4 text-emerald-600" />
                        </div>
                      </div>

                      {/* Rider Type Toggle */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          I plan to ride for:
                        </label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setRiderType("rider")}
                            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                              riderType === "rider"
                                ? "bg-brand-gradient text-white border-transparent shadow-md"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            🛵 Delivery Partner
                          </button>

                          <button
                            type="button"
                            onClick={() => setRiderType("personal")}
                            className={`py-3 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all border ${
                              riderType === "personal"
                                ? "bg-brand-gradient text-white border-transparent shadow-md"
                                : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100"
                            }`}
                          >
                            🏙️ Personal Commuter
                          </button>
                        </div>
                      </div>

                      {/* Submit CTA Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="btn-primary w-full py-3.5 text-base justify-center shadow-lg hover:shadow-xl"
                        >
                          <span>Join Launch Waitlist for Free</span>
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>

                      <p className="text-center text-[11px] text-slate-500 pt-1">
                        🔒 Zero spam. We only message you when vehicle allotment opens in Jaipur.
                      </p>
                    </form>
                  ) : (
                    /* Instant Confirmation Ticket Screen */
                    <div className="py-6 text-center space-y-4 animate-in fade-in duration-300">
                      <div className="h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle2 className="h-10 w-10" />
                      </div>

                      <div className="space-y-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                          Priority Ticket #TEZZ-JP-084
                        </span>
                        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#0B1B4D] pt-2">
                          You're on the VIP Waitlist!
                        </h3>
                        <p className="text-sm text-slate-600 max-w-sm mx-auto leading-relaxed">
                          Thank you, <span className="font-bold text-blue-600">{name}</span>. Your slot is confirmed for Jaipur. We will send you priority launch updates on <span className="font-semibold text-slate-800">{mobile}</span>.
                        </p>
                      </div>

                      {/* Quick Details Box */}
                      <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Status:</span>
                          <span className="font-bold text-emerald-700">Allotment Priority Locked</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">City:</span>
                          <span className="font-bold text-slate-800">Jaipur, Rajasthan</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-500 font-medium">Category:</span>
                          <span className="font-bold text-blue-700 capitalize">{riderType} Plan</span>
                        </div>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                        <a
                          href={`https://wa.me/?text=${encodeURIComponent(`I just joined the TezzEV electric scooter waitlist in Jaipur! Zero petrol cost and 2-minute battery swap. Join here: https://tezzev.com/waitlist`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="btn-primary text-xs py-2.5 px-5 w-full sm:w-auto"
                        >
                          <Share2 className="h-4 w-4" />
                          <span>Share on WhatsApp</span>
                        </a>

                        <Link to="/" className="btn-secondary text-xs py-2.5 px-5 w-full sm:w-auto">
                          Back to Home
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
