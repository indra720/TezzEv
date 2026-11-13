import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { 
  User, 
  Wallet, 
  Bike, 
  AlertTriangle, 
  PlayCircle, 
  MessageSquare, 
  ChevronRight, 
  CheckCircle2, 
  Clock,
  QrCode,
  ShieldCheck,
  CreditCard
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/rider-dashboard")({
  component: RiderDashboard,
  head: () => ({
    meta: [
      { title: "Rider Dashboard — Manage Your SORA RIDER Account" },
    ],
  }),
});

function RiderDashboard() {
  const [suggestion, setSuggestion] = useState("");
  const handleSOS = () => {
    toast.error("Breakdown SOS Raised!", {
      description: "Our nearest support team will contact you within 15 minutes.",
    });
    window.location.href = "tel:9950455461";
  };

  const handleSuggestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (!suggestion.trim()) return;
    toast.success("Suggestion Submitted!", {
      description: "Thank you for helping us make SORA RIDER better.",
    });
    setSuggestion("");
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-20">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-10 pb-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-medium text-ink">RIDER DASHBOARD</h1>
          <p className="text-sm text-muted-foreground mt-1">Your profile, wallet balance, KYC status and vehicle details at a glance.</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Profile & Wallet */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Rider Profile Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <User className="h-8 w-8" />
                </div>
                <div>
                    <h2 className="text-lg font-medium text-ink">Rider Profile</h2>
                    <p className="text-xs text-muted-foreground">Basic information linked to your SORA RIDER rider ID.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 border-t border-gray-50">
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">ID</p>
                    <p className="text-sm font-medium text-brand">SORA-000016</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">Rider Name</p>
                    <p className="text-sm font-medium text-ink">Registered Rider</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">City</p>
                    <p className="text-sm font-medium text-ink">Jaipur</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">KYC Status</p>
                    <div className="flex items-center gap-1.5 text-amber-500">
                        <Clock className="h-3 w-3" />
                        <span className="text-sm font-medium uppercase">Pending</span>
                    </div>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-xl w-fit">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span className="text-xs font-medium text-emerald-700">Account Status: Active</span>
              </div>
            </motion.section>

            {/* Wallet & Recharge Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm overflow-hidden relative"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full" />
              
              <div className="flex items-center gap-4 mb-6 relative">
                <div className="h-16 w-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <Wallet className="h-8 w-8" />
                </div>
                <div>
                    <h2 className="text-lg font-medium text-ink">Wallet & Recharge</h2>
                    <p className="text-xs text-muted-foreground">Minimum ₹250/day recharge required.</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-gray-50 relative">
                <div className="space-y-6">
                    <div>
                        <p className="text-xs font-medium text-muted-foreground mb-1 uppercase tracking-wider">Wallet Balance</p>
                        <p className="text-4xl font-medium text-ink">₹250</p>
                    </div>
                    <div>
                        <div className="flex justify-between text-xs font-medium mb-2">
                            <span className="text-muted-foreground">Recharge Streak</span>
                            <span className="text-brand">Day 1 of 8</span>
                        </div>
                        <Progress value={12.5} className="h-2" />
                        <p className="text-[10px] text-muted-foreground mt-2 italic">8 consecutive days compulsory for continued access.</p>
                    </div>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5 border border-gray-100">
                    <p className="text-xs font-medium text-ink mb-4">Quick Recharge via UPI/Card</p>
                    <div className="flex gap-2 mb-4">
                        <div className="relative flex-1 text-2xl font-medium text-ink bg-white border rounded-xl flex items-center px-4">
                            <span className="text-muted-foreground mr-1 text-base font-normal">₹</span> 250
                        </div>
                        <Button className="h-12 bg-brand hover:bg-brand/90 px-6 rounded-xl font-medium shadow-md shadow-brand/20">
                            Recharge
                        </Button>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 opacity-60">
                        <QrCode className="h-4 w-4" />
                        <CreditCard className="h-4 w-4" />
                        <p className="text-[10px] font-medium">Powered by Razorpay</p>
                    </div>
                </div>
              </div>
            </motion.section>

            {/* Vehicle Details Card */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-brand/10 flex items-center justify-center text-brand">
                    <Bike className="h-8 w-8" />
                </div>
                <div>
                    <h2 className="text-lg font-medium text-ink">Vehicle Details</h2>
                    <p className="text-xs text-muted-foreground">Scooter registered to this rider account.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-gray-50">
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">Model</p>
                    <p className="text-sm font-medium text-ink">SORA EV</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">VIN / Chassis</p>
                    <p className="text-sm font-medium text-muted-foreground italic">Will be updated after verification</p>
                </div>
                <div className="space-y-1">
                    <p className="text-[10px] font-medium uppercase text-muted-foreground tracking-wider">Registration</p>
                    <p className="text-sm font-medium text-amber-500">Pending Verification</p>
                </div>
              </div>
            </motion.section>
          </div>

          {/* Right Column: SOS, Tutorials, Suggestions */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Breakdown SOS */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="rounded-3xl bg-red-50 border border-red-100 p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 text-red-600 mb-4">
                <AlertTriangle className="h-6 w-6" />
                <h2 className="text-lg font-medium">Breakdown SOS</h2>
              </div>
              <p className="text-xs text-red-700/80 leading-relaxed mb-6">
                Vehicle broken down? Raise an SOS — our nearest support team collects it within 15 minutes of confirmation and issues you a replacement bike.
              </p>
              <Button 
                onClick={handleSOS}
                variant="destructive" 
                className="w-full h-12 rounded-xl font-medium shadow-lg shadow-red-200"
              >
                Raise Breakdown SOS
              </Button>
              <p className="text-[10px] text-red-600/60 mt-3 text-center italic">
                Registered vehicle and driver details are shared automatically.
              </p>
            </motion.section>

            {/* Tutorials */}
            {/* <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <PlayCircle className="h-6 w-6 text-brand" />
                <h2 className="text-lg font-medium text-ink">Tutorials</h2>
              </div>
              <p className="text-xs text-muted-foreground mb-6">
                How to use the app, recharge wallet, referrals, and connect with support.
              </p>
              <Button variant="outline" className="w-full h-12 rounded-xl border-brand/20 text-brand font-medium group">
                Watch Tutorial Videos <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.section> */}

            {/* Suggestion Box */}
            <motion.section 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-brand" />
                <h2 className="text-lg font-medium text-ink">Suggestion Box</h2>
              </div>
              <form onSubmit={handleSuggestion} className="space-y-4">
                <textarea 
                  value={suggestion}
                  onChange={(e) => setSuggestion(e.target.value)}
                  placeholder="Share your idea or feedback..."
                  className="w-full min-h-[100px] rounded-2xl border border-gray-100 bg-gray-50 p-4 text-xs outline-none focus:border-brand/40 transition-colors"
                />
                <Button type="submit" className="w-full h-11 rounded-xl bg-ink hover:bg-ink/90 font-medium">
                  Submit Suggestion
                </Button>
              </form>
            </motion.section>

            {/* Trusted Shield */}
            <div className="flex flex-col items-center justify-center pt-4 opacity-40 grayscale">
                <ShieldCheck className="h-10 w-10 text-brand mb-2" />
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-ink">Secured by SORA RIDER</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
