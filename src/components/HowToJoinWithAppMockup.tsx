import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Smartphone,
  ShieldCheck,
  MapPin,
  KeyRound,
  ArrowRight,
  CheckCircle2,
  Zap,
  BatteryCharging,
  Clock,
  Sparkles,
} from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

interface Step {
  id: number;
  badge: string;
  title: string;
  subtitle: string;
  detail: string;
  icon: typeof Smartphone;
}

const steps: Step[] = [
  {
    id: 1,
    badge: "Step 01",
    title: "Mobile & OTP Sign-in",
    subtitle: "Just your 10-digit phone number.",
    detail: "Receive a quick 4-digit SMS OTP. No complicated password or login required.",
    icon: Smartphone,
  },
  {
    id: 2,
    badge: "Step 02",
    title: "Digital Document Check",
    subtitle: "Driving licence and Aadhaar.",
    detail: "Take a clear phone photo of your DL & Aadhaar. Fast paperless verification in under 2 minutes.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    badge: "Step 03",
    title: "Choose Plan & Tezz Hub",
    subtitle: "Select daily or weekly rent.",
    detail: "Pick your preferred rental tenure and nearest Tezz Hub in Jaipur for quick vehicle pickup.",
    icon: MapPin,
  },
  {
    id: 4,
    badge: "Step 04",
    title: "Unlock & Start Earning",
    subtitle: "Collect keys & ride with zero petrol.",
    detail: "Inspect your allotted Royal Blue scooter, enjoy free 2-minute battery swaps, and deliver with maximum profit.",
    icon: KeyRound,
  },
];

export function HowToJoinWithAppMockup() {
  const [activeStep, setActiveStep] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  // Auto advance step every 5 seconds unless hovered/interacting
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev % steps.length) + 1);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
        {/* Left Side: Step Selectors */}
        <div className="lg:col-span-7 space-y-4">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`cursor-pointer rounded-2xl p-5 sm:p-6 transition-all duration-300 border text-left ${
                  isActive
                    ? "bg-white border-blue-500 shadow-xl ring-2 ring-blue-500/20 translate-x-2"
                    : "bg-white/80 border-blue-100 hover:bg-white hover:border-blue-300 shadow-xs"
                }`}
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className={`h-12 w-12 sm:h-14 sm:w-14 rounded-2xl flex items-center justify-center shrink-0 font-bold transition-all shadow-sm ${
                      isActive
                        ? "bg-brand-gradient text-white shadow-blue-500/30"
                        : "bg-sky-100 border border-blue-200 text-blue-700"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span
                        className={`text-xs font-black uppercase tracking-wider ${
                          isActive ? "text-blue-600" : "text-slate-400"
                        }`}
                      >
                        {step.badge}
                      </span>
                      {isActive && (
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <Sparkles className="h-3.5 w-3.5" />
                          <span>Screen Preview</span>
                        </span>
                      )}
                    </div>

                    <h3 className="font-heading font-black text-lg sm:text-xl text-[#0B1B4D]">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#3A4668] mt-1 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link to="/register" className="btn-primary text-sm py-3 px-8">
              <span>Start 2-Min Pre-Registration</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
            <span className="text-xs font-bold text-[#0B1B4D] flex items-center gap-1.5 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-200">
              <CheckCircle2 className="h-4 w-4 text-emerald-600" />
              <span>Zero Paperwork • Instant Approval</span>
            </span>
          </div>
        </div>

        {/* Right Side: High-Fidelity Smartphone Mockup with Real App Screens */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[320px] sm:max-w-[350px]">
            {/* Outer Offset Glow */}
            <div className="absolute -inset-3 rounded-[48px] bg-gradient-to-tr from-blue-600/20 to-cyan-400/25 blur-xl pointer-events-none" />

            {/* Phone Outer Chassis */}
            <div className="relative rounded-[44px] border-[7px] border-[#06122E] bg-[#06122E] p-2.5 shadow-2xl shadow-blue-900/30">
              {/* Phone Speaker Notch / Island */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-black rounded-full z-30 flex items-center justify-end px-2.5">
                <div className="h-2 w-2 rounded-full bg-blue-950" />
              </div>

              {/* Phone Inner Screen */}
              <div className="relative rounded-[34px] overflow-hidden bg-white min-h-[540px] flex flex-col border border-slate-100 select-none">
                {/* Phone Top Status Bar */}
                <div className="pt-3 pb-2 px-6 flex items-center justify-between text-xs font-extrabold text-[#0B1B4D] bg-slate-50/90 border-b border-slate-100">
                  <span>9:41</span>
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <span className="text-[10px] font-bold">5G</span>
                    <BatteryCharging className="h-4 w-4 text-emerald-600" />
                  </div>
                </div>

                {/* App Screen Content depending on activeStep */}
                <div className="flex-1 p-4 sm:p-5 flex flex-col justify-between bg-gradient-to-b from-sky-50/70 via-white to-white">
                  {/* SCREEN 1: Mobile & OTP */}
                  {activeStep === 1 && (
                    <div className="space-y-4 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pt-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-heading font-black italic text-xl text-[#0B1B4D]">TEZZ</span>
                          <span className="font-heading font-black text-sm text-blue-600">EV</span>
                        </div>
                        <span className="text-[10px] bg-blue-100 text-blue-700 font-extrabold px-2.5 py-0.5 rounded-full">
                          Rider App
                        </span>
                      </div>

                      <div className="pt-2">
                        <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#0B1B4D]">
                          Enter Mobile Number
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          We will send a 4-digit verification code.
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="rounded-xl border border-slate-300 bg-white p-3 flex items-center gap-2 text-sm shadow-xs">
                          <span className="font-extrabold text-slate-500 border-r border-slate-200 pr-2">+91</span>
                          <span className="font-mono font-bold text-slate-800">98765 43210</span>
                        </div>

                        <div>
                          <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider block mb-1.5">
                            Enter SMS OTP
                          </label>
                          <div className="grid grid-cols-4 gap-2">
                            {["4", "8", "2", "9"].map((digit, i) => (
                              <div
                                key={i}
                                className="h-11 rounded-xl border-2 border-blue-500 bg-blue-50 flex items-center justify-center font-mono font-black text-lg text-blue-700 shadow-xs"
                              >
                                {digit}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-bold pt-1">
                          <CheckCircle2 className="h-4 w-4 shrink-0" />
                          <span>OTP Verified Successfully</span>
                        </div>
                      </div>

                      <div className="pt-3">
                        <div className="w-full py-3 bg-brand-gradient text-white rounded-xl text-center text-xs font-bold shadow-md">
                          Continue to Document Check →
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 2: Digital KYC */}
                  {activeStep === 2 && (
                    <div className="space-y-3.5 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-[#0B1B4D]">Step 2 of 4</span>
                        <span className="text-[10px] bg-emerald-100 text-emerald-800 font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="h-3 w-3 text-emerald-600" /> Verified
                        </span>
                      </div>

                      <div>
                        <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#0B1B4D]">
                          Quick Identity Scan
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Both documents are checked digitally.
                        </p>
                      </div>

                      {/* Document Card 1 */}
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                            <ShieldCheck className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B1B4D]">Driving Licence</div>
                            <div className="text-[10px] text-slate-500">RJ-14-2022-XXXXX</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-extrabold text-emerald-700">Valid</span>
                      </div>

                      {/* Document Card 2 */}
                      <div className="rounded-xl border border-emerald-200 bg-emerald-50/50 p-3 flex items-center justify-between shadow-xs">
                        <div className="flex items-center gap-2.5">
                          <div className="h-8 w-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold">
                            <ShieldCheck className="h-4.5 w-4.5" />
                          </div>
                          <div>
                            <div className="text-xs font-bold text-[#0B1B4D]">Aadhaar Card</div>
                            <div className="text-[10px] text-slate-500">XXXX-XXXX-4812</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-extrabold text-emerald-700">e-Signed</span>
                      </div>

                      <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1.5">
                        <div className="flex justify-between font-medium">
                          <span>Verification Speed:</span>
                          <span className="text-emerald-600 font-extrabold">1 Min 12 Sec</span>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Status:</span>
                          <span className="text-blue-600 font-extrabold">Eligible for Rental</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="w-full py-3 bg-brand-gradient text-white rounded-xl text-center text-xs font-bold shadow-md">
                          Select Scooter Plan →
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 3: Choose Plan & Hub */}
                  {activeStep === 3 && (
                    <div className="space-y-3.5 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-bold text-[#0B1B4D]">Select Plan</span>
                        <span className="text-[10px] bg-blue-100 text-blue-700 font-extrabold px-2.5 py-0.5 rounded-full">
                          Jaipur Hubs
                        </span>
                      </div>

                      <div>
                        <h4 className="font-heading font-extrabold text-base sm:text-lg text-[#0B1B4D]">
                          Choose Rental Tenure
                        </h4>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Unlimited free battery swapping included.
                        </p>
                      </div>

                      {/* Plan Active Card */}
                      <div className="rounded-xl border-2 border-blue-600 bg-blue-50/70 p-3.5 shadow-sm">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-black text-blue-900">Weekly Delivery Plan</span>
                          <span className="text-xs font-black text-blue-700">₹[XXX]/wk</span>
                        </div>
                        <p className="text-[11px] text-slate-600">
                          Best for full-time Swiggy/Zomato riders. Includes 24/7 breakdown help.
                        </p>
                      </div>

                      {/* Hub Selection */}
                      <div className="rounded-xl border border-slate-200 bg-white p-3 space-y-1.5 shadow-xs">
                        <div className="flex items-center gap-1.5 text-xs font-extrabold text-[#0B1B4D]">
                          <MapPin className="h-4 w-4 text-blue-600" />
                          <span>Pickup Tezz Hub:</span>
                        </div>
                        <div className="text-xs text-slate-600 pl-5">
                          Mansarovar Central Station (0.8 km away)
                        </div>
                        <div className="text-[11px] text-emerald-600 font-bold pl-5">
                          ✓ 12 Scooters Available
                        </div>
                      </div>

                      <div className="pt-2">
                        <div className="w-full py-3 bg-brand-gradient text-white rounded-xl text-center text-xs font-bold shadow-md">
                          Confirm & Allocate Scooter →
                        </div>
                      </div>
                    </div>
                  )}

                  {/* SCREEN 4: Unlock & Ride */}
                  {activeStep === 4 && (
                    <div className="space-y-3.5 animate-in fade-in duration-300">
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
                          Vehicle Assigned
                        </span>
                        <span className="text-[11px] font-mono font-black text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md">
                          #TEZZ-104
                        </span>
                      </div>

                      <div className="text-center py-2">
                        <div className="inline-block p-3.5 rounded-2xl bg-blue-50 border border-blue-200 mb-2 shadow-xs">
                          <Zap className="h-8 w-8 text-blue-600 mx-auto" />
                        </div>
                        <h4 className="font-heading font-black text-lg text-[#0B1B4D]">
                          Scooter Ready to Ride!
                        </h4>
                        <p className="text-xs text-slate-500">
                          Key handover done at Tezz Hub desk.
                        </p>
                      </div>

                      {/* Scooter Status Badges */}
                      <div className="grid grid-cols-2 gap-2 text-center">
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-[10px] text-slate-500 font-bold uppercase">Battery Level</div>
                          <div className="font-heading font-black text-sm text-emerald-600">100% Full</div>
                        </div>
                        <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <div className="text-[10px] text-slate-500 font-bold uppercase">Daily Range</div>
                          <div className="font-heading font-black text-sm text-[#0B1B4D]">Unlimited*</div>
                        </div>
                      </div>

                      {/* Slide to Unlock */}
                      <div className="pt-2">
                        <div className="w-full py-3 bg-emerald-600 text-white rounded-xl text-center text-xs font-bold shadow-md flex items-center justify-center gap-1.5">
                          <KeyRound className="h-4 w-4" />
                          <span>Start Ride / Ignition ON</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Phone Bottom Home Bar */}
                <div className="pb-2.5 pt-1 flex justify-center bg-white border-t border-slate-100">
                  <div className="w-28 h-1 rounded-full bg-slate-300" />
                </div>
              </div>
            </div>

            {/* Step Indicator Bullets below Phone */}
            <div className="flex justify-center items-center gap-2.5 mt-5">
              {steps.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveStep(s.id)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeStep === s.id ? "w-8 bg-brand-gradient shadow-xs" : "w-2.5 bg-slate-300 hover:bg-slate-400"
                  }`}
                  aria-label={`Go to step ${s.id}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
