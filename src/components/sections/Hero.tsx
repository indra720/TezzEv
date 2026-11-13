  import { motion } from "motion/react";
  import { Link } from "@tanstack/react-router";
  import { ArrowRight, UserPlus, ShieldCheck, Zap, Headphones, MapPin } from "lucide-react";
  import scooter from "../../assets/HeroScreen.png";

  export function Hero() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-brand-soft/40 via-background to-background lg:min-h-[70vh] flex flex-col lg:block">
      <div className="pointer-events-none absolute -right-24 h-90 w-96 rounded-full bg-brand/10 blur-3xl" />

      <div className="relative z-20 w-full lg:mx-auto lg:max-w-7xl px-4 pb-12  sm:px-6 lg:grid lg:grid-cols-2 lg:px-14 lg:pb-24 pt-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 w-full lg:w-auto"
        >
          <h3 className="text-4xl leading-[1.05] font-bold text-ink sm:text-5xl lg:text-7xl">
            RIDE SMART,
            <br />
            <span className="text-brand">RIDE SORA</span>
          </h3>
          <p className="mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base lg:max-w-md">
            Affordable electric bike rentals for delivery partners.
            <br />Flexible. Affordable. Reliable.
          </p>

          <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm">
            <div className="text-xs font-medium uppercase leading-tight text-brand">
              Rent a Bike<br />For Just
            </div>
            <div className="border-l border-border pl-4">
              <div className="text-3xl font-medium text-ink">
                ₹250<span className="text-lg font-medium text-muted-foreground">/DAY</span>
                <sup className="ml-1 text-xs text-brand">*</sup>
              </div>
              <div className="text-[10px] text-muted-foreground">*T&amp;C Applied</div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/our-bike" className="btn-primary text-sm">
              Rent a Bike Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline text-sm">
              Rider Registration <UserPlus className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink lg:text-black">
            {[
              [Zap, "Easy Registration"],
              [ShieldCheck, "Instant Approval"],
              [Headphones, "24/7 Support"],
            ].map(([Icon, label], i) => {
              const I = Icon as typeof Zap;
              return (
                <div key={i} className="flex items-center gap-2 text-ink/80">
                  <I className="h-4 w-4 text-brand" /> {label as string}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Empty div to maintain the 50% grid layout for the text side on large screens */}
        <div className="hidden lg:block" />
      </div>

      {/* Image container - Relative on mobile, Absolute on large screens */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="relative lg:absolute lg:top-0 lg:right-0 h-auto lg:h-full w-full lg:w-1/2 z-10"
      >
        {/* Gradient Overlay - mostly for large screens to merge image with text */}
        <div className="absolute inset-y-0 left-0 z-20 hidden w-10 bg-linear-to-r from-background via-background/60 to-transparent lg:block" />

        <img 
          src={scooter} 
          alt="Electric Scooter" 
          className="h-auto w-full object-cover object-right rounded-2xl lg:absolute lg:inset-0 lg:h-full rounded-tl-2xl lg:rounded-tl-none"
        />
      </motion.div>
    </section>
  );
  }