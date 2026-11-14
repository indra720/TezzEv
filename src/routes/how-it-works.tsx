import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileCheck,
  Zap,
  Key,
  Bike,
  Sparkles,
  HelpCircle,
  Film,
} from "lucide-react";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { HowToJoinWithAppMockup } from "@/components/HowToJoinWithAppMockup";
import { VideoPlayer } from "@/components/VideoPlayer";
import { VideoCard } from "@/components/VideoCard";
import scooterLight from "@/assets/tezzev-light.jpg";
import scooterDark from "@/assets/tezzev-dark.jpg";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — Step-by-Step Video Guides | TezzEV" },
      {
        name: "description",
        content:
          "Watch step-by-step videos on how to register, get verified, pick up your electric scooter in Jaipur, and start earning.",
      },
    ],
  }),
});

function HowItWorksPage() {
  const steps = [
    {
      number: "01",
      badge: "Step 01",
      title: "Online Digital Registration",
      desc: "Fill in your mobile number, name, and preferred delivery platform (Zomato, Swiggy, Blinkit, etc.). Entirely paperless and completed in under 2 minutes from your phone.",
      videoSrc: TEZZ_VIDEOS.step1,
      poster: scooterLight,
      duration: "0:50",
      videoTitle: "Step 1: 2-Minute App Registration Video Guide",
      highlights: ["No physical paperwork needed", "Pick your delivery platform", "Select flexible rental term"],
    },
    {
      number: "02",
      badge: "Step 02",
      title: "Fast-Track Digital Verification",
      desc: "Upload clear photos of your Driving Licence and Aadhaar Card. Our digital verification system verifies your documents and issues your approval within 2 hours.",
      videoSrc: TEZZ_VIDEOS.step2,
      poster: scooterDark,
      duration: "1:10",
      videoTitle: "Step 2: Driving Licence & Aadhaar Verification Video Guide",
      highlights: ["DigiLocker supported", "Transparent approval within 2 hours", "Zero hidden processing charges"],
    },
    {
      number: "03",
      badge: "Step 03",
      title: "Pick Up Your TEZZ at Nearest Hub",
      desc: "Visit your selected Jaipur Tezz Hub. Inspect your commercial scooter, receive your keys, helmet, vehicle documents, and a quick briefing on battery swapping.",
      videoSrc: TEZZ_VIDEOS.step3,
      poster: scooterLight,
      duration: "1:25",
      videoTitle: "Step 3: Hub Pickup & Vehicle Inspection Video Guide",
      highlights: ["100% road-ready scooter", "Complimentary safety helmet", "Full battery swap station briefing"],
    },
    {
      number: "04",
      badge: "Step 04",
      title: "Ride, Swap & Keep 100% Profits",
      desc: "Start completing deliveries immediately. When battery runs low, stop at any Jaipur Tezz Hub, swap for a fresh 100% battery in 2 minutes, and keep riding all day.",
      videoSrc: TEZZ_VIDEOS.step4,
      poster: scooterDark,
      duration: "1:40",
      videoTitle: "Step 4: 2-Minute Swapping & Daily Operations Video Guide",
      highlights: ["Unlimited 2-minute battery swaps", "100% free tyres & brakes maintenance", "24/7 on-road breakdown help"],
    },
  ];

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean White / Soft Gray) */}
      <PageHeader
        breadcrumb="How It Works"
        title="Start Riding in 4 Simple Steps"
        subtitle="Watch step-by-step videos for registration, document verification, hub vehicle pickup, and daily riding."
      />

      {/* 2. Full Process Video Banner (Soft Slate Background) */}
      <section className="py-10 md:py-14 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              <Film className="h-3.5 w-3.5" />
              <span>Full Video Walkthrough</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
              Watch how TezzEV works from start to finish
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              A complete 2-minute video overview showing you the whole journey from app signup to your first delivery ride.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <VideoPlayer
              src={TEZZ_VIDEOS.howItWorksFull}
              poster={scooterDark}
              title="Complete TezzEV Onboarding & Rider Guide"
              subtitle="Step-by-step video: App signup, DL verification, Jaipur hub vehicle handover, and rapid 2-minute battery swapping."
              badge="Full Process Video"
              aspectRatio="16/9"
              className="shadow-md border border-slate-200"
            />
          </div>
        </div>
      </section>

      {/* 3. EVERY STEP WITH DEDICATED VIDEO CARD (Alternating Left & Right on Pure White) */}
      <section className="py-12 md:py-18 bg-white border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              Step-By-Step Video Series
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Video guide for every stage
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#64748B]">
              Click any video card below to watch the detailed walkthrough for that step.
            </p>
          </div>

          <div className="space-y-10 sm:space-y-14">
            {steps.map((step, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={step.number}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-2xs hover:shadow-md transition-shadow ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Step Video Player / Card */}
                  <div className={`lg:col-span-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <VideoPlayer
                      src={step.videoSrc}
                      poster={step.poster}
                      title={step.videoTitle}
                      subtitle={`Duration ${step.duration} • Official TezzEV Guide`}
                      badge={step.badge}
                      aspectRatio="16/9"
                      className="shadow-sm border border-slate-200"
                    />
                  </div>

                  {/* Step Description Content */}
                  <div className={`lg:col-span-6 space-y-4 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <div className="inline-flex items-center gap-2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#1647E8] text-white font-heading font-black text-sm shadow-xs">
                        {step.number}
                      </span>
                      <span className="text-xs font-extrabold uppercase tracking-wider text-[#1647E8]">
                        Phase {step.number}
                      </span>
                    </div>

                    <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
                      {step.title}
                    </h3>

                    <p className="text-sm sm:text-base text-[#4B587C] leading-relaxed">
                      {step.desc}
                    </p>

                    {/* Highlights bullets */}
                    <div className="space-y-2 pt-2">
                      {step.highlights.map((h) => (
                        <div key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#0B1B4D] font-medium">
                          <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        to="/register"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1647E8] hover:text-[#2D6BFF] transition-colors"
                      >
                        <span>Start this step now</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Interactive Phone Signup Experience (App Mockup) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#1647E8] mb-2 border border-blue-100 shadow-2xs">
              App Experience
            </div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Interactive App Signup Walkthrough
            </h2>
            <p className="mt-2 text-base text-[#64748B]">
              Click through the screens below to preview the rider mobile app:
            </p>
          </div>

          <HowToJoinWithAppMockup />
        </div>
      </section>

      {/* 5. Documents Checklist with Video Help (Sleek Dark Navy Contrast Section) */}
      <section className="py-12 md:py-16 bg-[#0B1B4D] text-white border-b border-blue-900/60">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-4xl mx-auto bg-white/10 p-7 sm:p-10 rounded-3xl border border-white/20 backdrop-blur-md">
            <div className="text-center max-w-xl mx-auto mb-8">
              <span className="inline-block px-3 py-1 rounded-full bg-cyan-400/20 text-cyan-300 text-xs font-bold mb-2">
                Document Checklist
              </span>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white">
                5 simple documents for Jaipur pickup
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Keep photos ready on your phone for instant verification.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Valid Driving Licence (DL)", detail: "Physical or DigiLocker copy accepted" },
                { name: "Aadhaar Card", detail: "For instant digital identity verification" },
                { name: "PAN Card", detail: "For digital rental agreement compliance" },
                { name: "Bank Account / UPI", detail: "For 100% refundable security deposit return" },
                { name: "Clear Selfie Photo", detail: "Quick photo taken on your phone camera" },
              ].map((doc) => (
                <div key={doc.name} className="flex items-start gap-3.5 bg-white/10 p-4 rounded-2xl border border-white/15">
                  <div className="h-8 w-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">{doc.name}</div>
                    <div className="text-xs text-blue-200 mt-0.5">{doc.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-white/15 text-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-8 rounded-full shadow-lg transition-all"
              >
                <span>Upload Documents & Pre-Register</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
