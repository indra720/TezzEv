import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import {
  User,
  Wallet,
  Bike,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Send,
  Zap,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/rider-dashboard")({
  component: RiderDashboardPage,
  head: () => ({
    meta: [
      { title: "Rider Cockpit Dashboard Preview — TezzEV" },
      {
        name: "description",
        content: "Preview your TezzEV pilot cockpit: wallet, streak ring, assigned vehicle, and 15-minute breakdown SOS.",
      },
    ],
  }),
});

function RiderDashboardPage() {
  const [walletBalance, setWalletBalance] = useState(500);
  const [suggestion, setSuggestion] = useState("");
  const [sosModalOpen, setSosModalOpen] = useState(false);

  const handleRecharge = () => {
    setWalletBalance((prev) => prev + 250);
    toast.success("Wallet Recharged with ₹250!", {
      description: "Mock payment updated.",
    });
  };

  const handleConfirmSOS = () => {
    setSosModalOpen(false);
    toast.error("15-Minute SOS Alert Sent!", {
      description: `Technician dispatched to your coordinates. Helpline: ${TEZZ_CONFIG.launch.phone}`,
    });
  };

  const handleSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    toast.success("Suggestion Received!", {
      description: "Thank you for helping us improve TezzEV.",
    });
    setSuggestion("");
  };

  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Rider Dashboard"
        title="Rider Cockpit Preview"
        subtitle="Live preview of your rider profile, wallet balance, assigned vehicle, and emergency help."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-6">
              {/* Profile Card */}
              <div className="clean-card p-6 sm:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-14 w-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <User className="h-7 w-7" />
                  </div>
                  <div>
                    <h2 className="font-heading font-bold text-xl text-[#081330]">Rahul Sharma</h2>
                    <p className="text-xs text-slate-500">Pilot ID: TEZZ-PILOT-#000842 • Jaipur Hub</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div>
                    <span className="text-slate-400 font-medium">City:</span>
                    <div className="font-bold text-slate-800 mt-0.5">Jaipur, RJ</div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Document Check:</span>
                    <div className="font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Approved
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Battery Swaps:</span>
                    <div className="font-bold text-blue-600 mt-0.5">Unlimited</div>
                  </div>
                  <div>
                    <span className="text-slate-400 font-medium">Account:</span>
                    <div className="font-bold text-emerald-600 mt-0.5">Active</div>
                  </div>
                </div>
              </div>

              {/* Wallet & Streak Ring Card */}
              <div className="clean-card p-6 sm:p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="icon-box">
                      <Wallet className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-lg text-[#081330]">Rider Wallet</h3>
                      <p className="text-xs text-slate-500">Daily rent deduction & recharge streak</p>
                    </div>
                  </div>
                  <button onClick={handleRecharge} className="btn-primary text-xs py-2 px-4">
                    <Zap className="h-3.5 w-3.5" />
                    <span>Quick Recharge (₹250)</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100 items-center">
                  <div>
                    <span className="text-xs text-slate-500 font-medium">Available Balance</span>
                    <div className="font-heading font-extrabold text-4xl text-[#081330] mt-1">
                      ₹{walletBalance}
                    </div>
                    <span className="text-xs text-emerald-600 font-medium mt-1 inline-block">
                      Good for next {Math.floor(walletBalance / 250)} days of rental
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="flex justify-between text-xs font-semibold mb-1.5">
                      <span className="text-slate-700">Recharge Streak</span>
                      <span className="text-blue-600">Day 4 of 8</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-slate-200 overflow-hidden">
                      <div className="h-full bg-blue-600 w-1/2 rounded-full" />
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2">
                      Maintain 8 consecutive days of active riding to unlock bonus referral perks.
                    </p>
                  </div>
                </div>
              </div>

              {/* Vehicle Telemetry Card */}
              <div className="clean-card p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="icon-box">
                    <Bike className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-[#081330]">Assigned Vehicle</h3>
                    <p className="text-xs text-slate-500">TezzEV Commercial Fleet Edition</p>
                  </div>
                </div>

                {/* Telemetry stats: 1 col mobile, 2 cols md, 3 cols lg */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-slate-100 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 font-medium">Model:</span>
                    <div className="font-bold text-slate-800 mt-0.5">TezzEV Sport Blue</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 font-medium">Chassis Number:</span>
                    <div className="font-bold text-slate-800 mt-0.5">TEZZ-IN-2026-0842</div>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-slate-400 font-medium">Battery Status:</span>
                    <div className="font-bold text-emerald-600 mt-0.5">100% Fully Charged</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Big Red SOS & Suggestion Box */}
            <div className="lg:col-span-4 space-y-6">
              {/* Big Red SOS Card */}
              <div className="clean-card p-6 bg-red-50/50 border-2 border-red-200 text-center">
                <div className="h-12 w-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-3">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-red-900 mb-1">
                  Breakdown SOS
                </h3>
                <p className="text-xs text-red-700 leading-relaxed mb-5">
                  Scooter broken down or flat tyre? Press SOS. Our nearest Jaipur mobile technician will reach you within 15 minutes to fix or swap the bike.
                </p>

                <button
                  onClick={() => setSosModalOpen(true)}
                  className="w-full py-3.5 rounded-full bg-red-600 hover:bg-red-700 text-white font-heading font-bold text-xs uppercase tracking-wider shadow-md shadow-red-500/20 transition-all cursor-pointer"
                >
                  Raise Breakdown SOS
                </button>
                <div className="mt-3 text-[11px] text-red-600/80 font-medium">
                  Direct helpline: {TEZZ_CONFIG.launch.phone}
                </div>
              </div>

              {/* Suggestion Box */}
              <div className="clean-card p-6">
                <h3 className="font-heading font-bold text-base text-[#081330] mb-2">
                  Feedback & Suggestions
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  Share ideas on swap hub locations or new features.
                </p>

                <form onSubmit={handleSuggestion} className="space-y-3">
                  <textarea
                    rows={4}
                    value={suggestion}
                    onChange={(e) => setSuggestion(e.target.value)}
                    placeholder="Write your feedback..."
                    className="w-full rounded-xl border border-slate-300 p-3 text-xs text-slate-800 placeholder:text-slate-400 outline-none focus:border-blue-600"
                  />
                  <button type="submit" className="btn-secondary w-full text-xs py-2.5 justify-center">
                    <Send className="h-3.5 w-3.5" />
                    <span>Submit Feedback</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOS Modal */}
      {sosModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full border border-slate-200 shadow-2xl text-center relative">
            <button
              onClick={() => setSosModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="h-14 w-14 rounded-full bg-red-100 text-red-600 flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-7 w-7" />
            </div>

            <h3 className="font-heading font-bold text-xl text-slate-900 mb-2">
              Confirm Breakdown SOS?
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              This will send an emergency alert to our Jaipur field team with your scooter's location. A technician will call and arrive within 15 minutes.
            </p>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmSOS}
                className="btn-primary bg-red-600 hover:bg-red-700 flex-1 text-xs py-2.5 justify-center shadow-none"
              >
                Yes, Dispatch Help
              </button>
              <button
                onClick={() => setSosModalOpen(false)}
                className="btn-secondary flex-1 text-xs py-2.5 justify-center"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
