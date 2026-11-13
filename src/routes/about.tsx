import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, Variants } from "motion/react";
import {
  Target,
  Heart,
  Users,
  Zap,
  ArrowRight,
  Sparkles,
  MapPin,
  ShieldCheck,
  BatteryCharging,
  Wrench,
  ShieldAlert,
  Gauge,
  Gift,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import scooter from "../assets/img3.jpg";

export const Route = createFileRoute("/about")({
  component: About,
  head: () => ({
    meta: [
      { title: "About SoraRider — Empowering Delivery Partners" },
      {
        name: "description",
        content:
          "Learn how SoraRider is empowering delivery partners across India with affordable, reliable electric bike rentals.",
      },
    ],
  }),
});

const pillars = [
  {
    Icon: Target,
    subtitle: "OUR VISION",
    title: "Our Mission",
    desc: "Empower every rider with affordable transportation and a genuine chance to earn more, every single day.",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    Icon: Heart,
    subtitle: "RIDER FIRST",
    title: "Genuine Support",
    desc: "From onboarding to daily support, we build our service around what riders actually need to succeed.",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    Icon: ShieldCheck,
    subtitle: "TRUSTED QUALITY",
    title: "Reliable Rides",
    desc: "Well-maintained Sora EV electric scooters, transparent pricing, and no hidden charges — ever.",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};

const evSpecs = [
  {
    Icon: BatteryCharging,
    title: "70–90 km Range",
    desc: "Enough charge for a full day of city rides and deliveries without a mid-shift top-up.",
  },
  {
    Icon: Gauge,
    title: "60 km/h Top Speed",
    desc: "Quick enough for city traffic while staying safe and easy to handle for every rider.",
  },
  {
    Icon: Wrench,
    title: "Maintenance Covered",
    desc: "Every Sora EV is serviced and inspected by our team, so riders never pay for upkeep.",
  },
  {
    Icon: ShieldAlert,
    title: "Insurance: Covered by Sora Rider",
    desc: "Every rented scooter comes insured, and riders are backed by our 15-minute breakdown SOS support.",
  },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT US"
        title="SORA RIDER provides affordable | bike rentals"
        subtitle="To help riders earn more and ride smart."
      >
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className="btn-primary text-sm">
            Join as a Rider <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/our-bike"
            className="btn-outline border-white/20 !bg-white/5 !text-white text-sm hover:!border-brand"
          >
            Explore the Bike
          </Link>
        </div>
      </PageHeader>
      {/* about hero section */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-brand/30 via-brand/10 to-transparent blur-2xl" />
            <img
              src={scooter}
              alt="SoraRider scooter"
              width={1200}
              height={900}
              loading="lazy"
              className="rounded-3xl shadow-2xl ring-1 ring-black/5"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-4 shadow-xl ring-1 ring-black/5 sm:block">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand text-white">
                  <Sparkles className="h-5 w-5" />
                </div>
                {/* <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    Since 2022
                  </div>
                  <div className="text-sm font-bold text-ink">Trusted by 10K+ Riders</div>
                </div> */}
              </div>
            </div>
          </motion.div>
          <div>
            <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
              OUR STORY
            </span>
            <h2 className="mt-3 text-2xl font-medium text-ink sm:text-3xl">
              SORA RIDER: <span className="text-brand">Simple, Affordable, Rewarding.</span>
            </h2>
            <p className="mt-4 text-sm text-muted-foreground">
              SORA RIDER was founded with a simple idea: renting a bike should be simple, affordable, and open the door to real earnings. We combine our well-maintained Sora EV electric scooters with a flat ₹250/day rental so every rider can start earning without a big upfront investment — no long-term loans, no ownership headaches, just a reliable ride and a fair price.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              Today our fleet operates out of Jaipur, with a rider-first support model: instant referral rewards, a mandatory 8-day service rotation across our Jaipur service centers to keep every scooter road-ready, and a breakdown SOS button that gets our team to a stranded rider — and a replacement bike — within 15 minutes of confirmation.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Fleet Quick Facts */}
      <section className="py-6 sm:py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                label: "Fleet",
                value: "Sora EV Electric Scooters",
                icon: Users,
                color: "text-purple-500",
              },
              {
                label: "Range",
                value: "Unlimited Range (Unlimited Swapping)",
                icon: BatteryCharging,
                color: "text-blue-500",
              },
              {
                label: "Service Area",
                value: "Jaipur, Rajasthan",
                icon: MapPin,
                color: "text-red-500",
              },
              {
                label: "Referral Bonus",
                value: "₹1,000 per successful referral",
                icon: Gift,
                color: "text-orange-500",
              },
            ].map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-5 rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="p-3 rounded-2xl bg-muted" style={{ color: "#ff7221" }}>
                  <fact.icon className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-[12px] uppercase tracking-wider text-muted-foreground font-medium">
                    {fact.label}
                  </div>
                  <div className="text-md font-bold text-ink">{fact.value}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Sora EV Deep Dive */}
      <section className="pb-16 pt-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <span className="inline-block rounded-full bg-brand-soft px-3 py-1 text-xs font-medium uppercase tracking-wider text-brand">
              OUR BIKE
            </span>
            <h2 className="mt-3 text-2xl font-medium text-ink sm:text-3xl">Built around the Sora EV</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground">
              Every claim we make to riders is backed by the bike itself — here's what makes it work.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {evSpecs.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl"
              >
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-brand/5 transition group-hover:bg-brand/10" />
                <div className="relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand to-brand/70 text-white shadow-lg shadow-brand/30">
                  <v.Icon className="h-6 w-6" />
                </div>
                <h4 className="relative mt-4 text-base font-medium text-ink">{v.title}</h4>
                <p className="relative mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/our-bike" className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand/80">
              See full Sora EV specifications <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
