import { motion } from "motion/react";
import { FileText, UserCheck, Bike, TrendingUp, ArrowRight, Check, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

const steps = [
  { Icon: FileText, title: "Register", desc: "Submit your details online" },
  { Icon: UserCheck, title: "Get Approved", desc: "Our team will verify and approve" },
  { Icon: Bike, title: "Rent a Bike", desc: "Pick your bike and start your journey" },
  { Icon: TrendingUp, title: "Earn Daily", desc: "Pay just ₹250/day and earn more" },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-brand-soft/30 text-ink py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">
            HOW IT <span className="text-brand">WORKS</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-sm">
            Simple 4-step process to get you on the road and earning with SORA RIDER.
          </p>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] items-center">
          {/* Circular Layout Container */}
          <div className="relative flex items-center justify-center min-h-[350px] sm:min-h-[450px]">
            {/* Outer Decorative Circle */}
            <div className="absolute h-64 w-64 sm:h-80 sm:w-80 rounded-full border border-brand/10" />
            <div className="absolute h-44 w-44 sm:h-60 sm:w-60 rounded-full border border-brand/20" />
            
            {/* Central Hub */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 h-16 w-16 sm:h-24 sm:w-24 rounded-full bg-brand flex items-center justify-center shadow-2xl shadow-brand/40"
            >
              <Zap className="h-6 w-6 sm:h-10 sm:w-10 text-white" />
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.1, 0.3] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute inset-0 rounded-full bg-white"
              />
            </motion.div>

            {/* Steps arranged in circle */}
            {steps.map((s, i) => {
              const positions = [
                "-top-4 left-1/2 -translate-x-1/2", // Step 1: Top
                "top-1/2 -right-4 sm:-right-8 -translate-y-1/2", // Step 2: Right
                "-bottom-4 left-1/2 -translate-x-1/2", // Step 3: Bottom
                "top-1/2 -left-4 sm:-left-8 -translate-y-1/2", // Step 4: Left
              ];

              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2, type: "spring" }}
                  className={`absolute z-20 ${positions[i]} group`}
                >
                  <div className="relative bg-[#fc7121] border border-white/20 p-2.5 sm:p-5 rounded-2xl shadow-lg hover:border-white/50 transition-all flex flex-col items-center text-center w-28 sm:w-44 lg:w-48">
                    <div className="absolute -top-2 -left-2 h-6 w-6 sm:h-8 sm:w-8 bg-white rounded-full flex items-center justify-center text-[10px] sm:text-xs font-bold text-[#fc7121] shadow-lg">
                      {i + 1}
                    </div>
                    <div className="h-7 w-7 sm:h-12 sm:w-12 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center text-white mb-1.5 sm:mb-3 group-hover:scale-110 transition-transform">
                      <s.Icon className="h-4 w-4 sm:h-6 sm:w-6" />
                    </div>
                    <h4 className="text-[9px] sm:text-xs font-bold text-white mb-1 uppercase tracking-wider">{s.title}</h4>
                    <p className="hidden sm:block text-[10px] text-white/80 leading-tight">{s.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Pricing/Action Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[2.5rem] bg-white p-8 text-ink shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-3xl rounded-full" />
            
            <div className="relative">
              <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-[10px] font-bold uppercase tracking-widest mb-4">
                Fixed Pricing
              </span>
              <h3 className="text-xl font-medium uppercase mb-2">Rental Charge</h3>
              <div className="inline-flex items-baseline gap-1 text-brand">
                <span className="text-5xl font-medium tracking-tight">₹250</span>
                <span className="text-lg font-medium text-muted-foreground">/DAY</span>
              </div>
              
              <ul className="mt-8 space-y-4">
                {[
                  "Daily Rental: ₹250",
                  "Unlimited Range (Unlimited Swapping)",
                  "Security Deposit: Fully Refundable*",
                  "Maintenance: Covered by SoraRider",
                  "Insurance: Covered by SoraRider",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm font-medium">
                    <div className="h-5 w-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                        <Check className="h-3 w-3" strokeWidth={3} />
                    </div>
                    {t}
                  </li>
                ))}
              </ul>
              
              <div className="mt-10 flex flex-col gap-3">
                <Link to="/register" className="btn-primary w-full py-4 text-sm">
                  Register Now <ArrowRight className="h-4 w-4" />
                </Link>
                <Link to="/pricing" className="text-center text-xs font-bold text-muted-foreground hover:text-brand transition-colors">
                  View Full Terms & Conditions
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
