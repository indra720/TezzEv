import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CheckSquare, ArrowRight, HelpCircle, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";
import { HowToJoinWithAppMockup } from "@/components/HowToJoinWithAppMockup";

export const Route = createFileRoute("/how-it-works")({
  component: HowItWorksPage,
  head: () => ({
    meta: [
      { title: "How It Works — Simple 4-Step Onboarding | TezzEV" },
      {
        name: "description",
        content: "Register online in 2 minutes, get digital verification, pick up your electric scooter in Jaipur, and start earning.",
      },
    ],
  }),
});

function HowItWorksPage() {
  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="How It Works"
        title="Start Riding in 4 Simple Steps"
        subtitle="Quick, paperless registration. Get your vehicle keys and roll out in less than 24 hours."
      />

      {/* 2. Interactive Phone Signup Experience (Mesh Background with Glowing Blobs) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-badge mb-2">Onboarding Flow</div>
            <h2 className="font-heading font-black text-3xl sm:text-4xl text-[#0B1B4D]">
              Interactive App Signup Walkthrough
            </h2>
            <p className="mt-2 text-base text-[#3A4668]">
              Click through the steps below to see the actual mobile app screens:
            </p>
          </div>

          <HowToJoinWithAppMockup />
        </div>
      </section>

      {/* 3. Documents You Need Checklist (Skywash Background) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="clean-card p-7 sm:p-10 max-w-4xl mx-auto border border-blue-200 shadow-xl bg-white/95">
            <div className="text-center max-w-xl mx-auto mb-8">
              <div className="section-badge mb-2">Required Checklist</div>
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D]">
                Documents you will need for pickup
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Keep photos or digital copies ready on your phone for instant verification.
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
                <div key={doc.name} className="flex items-start gap-3.5 bg-slate-50/70 p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <div className="h-8 w-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[#0B1B4D]">{doc.name}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{doc.detail}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-slate-100 text-center">
              <Link to="/register" className="btn-primary text-sm py-3 px-8">
                <span>Upload Documents & Pre-Register</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Quick Answers Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-6">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-[#081330]">
                Common Onboarding Questions
              </h3>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "How long does verification take?",
                  a: "Digital DL and Aadhaar checks take under 2 minutes. Once verified, your slot is confirmed immediately.",
                },
                {
                  q: "Do I have to pay anything to pre-register?",
                  a: "No. Pre-registration on the waitlist is 100% free with zero upfront charges.",
                },
                {
                  q: "Where do I collect the scooter?",
                  a: "At the nearest authorized Tezz Hub in Jaipur. You will receive the exact hub location on WhatsApp.",
                },
                {
                  q: "Can I swap batteries anywhere?",
                  a: "Yes. You can swap at any Tezz Hub across the city in less than 2 minutes.",
                },
              ].map((faq) => (
                <div key={faq.q} className="clean-card p-4 sm:p-5">
                  <div className="font-heading font-bold text-sm sm:text-base text-[#081330] mb-1">
                    {faq.q}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/faqs" className="btn-secondary text-xs sm:text-sm py-2 px-5">
                <span>View all frequently asked questions</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
