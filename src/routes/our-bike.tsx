import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "@/components/PageHeader";
import { OurBike } from "@/components/sections/OurBike";
import { Zap, Phone, ChevronDown, Battery, Gauge, Weight, Timer, ShieldCheck, ArrowRight } from "lucide-react";
import { useState } from "react";
import scooter from "@/assets/img1.jpg";
import swiggyImg from "@/assets/swiggy.jpg";
import blinkitImg from "@/assets/Blinkit.jpg";
import zeptoImg from "@/assets/zepto.jpg";
import firstImg from "@/assets/first.jpeg";
import secondImg from "@/assets/second.jpeg";
import thirdImg from "@/assets/third.jpeg";

export const Route = createFileRoute("/our-bike")({
  component: Bike,
  head: () => ({
    meta: [
      { title: "Our Bike — SoraRider EV Electric Scooter" },
      {
        name: "description",
        content:
          "Meet the SoraRider EV — a premium electric scooter with 70-90 km range, low maintenance and comfortable ride.",
      },
    ],
  }),
});

function Bike() {
  return (
    <div className="bg-background">
      <PageHeader
        title="Meet the Sora EV"
        subtitle="Built for delivery. Engineered for endurance."
      />

      <section className="py-12 lg:py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 items-center">
            {/* LEFT: Visual Showcase */}
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <div className="absolute -inset-10 bg-brand/20 blur-3xl rounded-full" />
                <motion.div
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative"
                >
                  <img
                    src={scooter}
                    alt="SoraRider EV"
                    className="w-full h-auto object-cover rounded-[40px] shadow-2xl border-4 border-white/10"
                  />
                </motion.div>
              </motion.div>

              {/* Decorative Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-border hidden sm:block"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-soft rounded-lg text-brand">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-muted-foreground">
                      Cost Per Day
                    </div>
                    <div className="text-sm font-black text-ink">250/Day</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT: Bento Specs Grid */}
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="text-4xl font-black text-ink sm:text-5xl leading-tight">
                  Sora <span className="text-brand">Ev</span>
                </h2>
                <p className="mt-4 text-lg text-muted-foreground max-w-xl">
                  Our flagship electric scooter is built for city riding — light, agile and
                  efficient with everything you need to start earning.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Electric Scooter",
                  "Unlimited Range (Unlimited Swapping)",
                  "Low Maintenance",
                  "Spacious & Comfortable",
                  "Insurance: Covered by Sora Rider",
                ].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 rounded-[20px] border border-border bg-card p-6 shadow-sm"
                  >
                    <div className="p-3 bg-brand-soft rounded-xl text-brand">
                      <Zap className="h-6 w-6" />
                    </div>
                    <span className="text-lg font-bold text-ink">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Onboarding Section */}
      {/* <section className="py-10 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-black text-ink mb-4">
              Partner Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Start your journey with our delivery partners directly.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Swiggy", image: swiggyImg, phone: "tel:1234567890", link: "#" },
              { name: "Blinkit", image: blinkitImg, phone: "tel:1234567890", link: "#" },
              { name: "Zepto", image: zeptoImg, phone: "tel:1234567890", link: "#" },
            ].map((partner) => (
              <motion.div
                key={partner.name}
                className="bg-white rounded-[2rem] border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="w-full h-40 overflow-hidden rounded-t-[2rem]">
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-black text-ink">{partner.name}</h3>
                    <div className="flex gap-2">
                      <a
                        href={partner.phone}
                        className="bg-green-500 text-white p-2.5 rounded-full hover:bg-green-600 transition"
                        aria-label="Call partner"
                      >
                        <Phone className="h-5 w-5" />
                      </a>
                      <a
                        href={partner.link}
                        className="bg-brand text-white p-2.5 rounded-full hover:bg-brand/90 transition"
                        aria-label="Connect partner"
                      >
                        <ArrowRight className="h-5 w-5 -rotate-45" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 perspective-1000">
            {[
              { src: firstImg, rotate: "-rotate-6" },
              { src: secondImg, rotate: "rotate-0" },
              { src: thirdImg, rotate: "rotate-6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50, rotate: 0 }}
                whileInView={{ opacity: 1, y: 0, rotate: i === 0 ? -6 : i === 2 ? 6 : 0 }}
                viewport={{ once: true }}
                whileHover={{ rotate: 0, scale: 1.05, zIndex: 10 }}
                transition={{ duration: 0.4 }}
                className={`w-64 md:w-72 bg-white p-3 rounded-2xl shadow-2xl transition-transform ${item.rotate} hover:shadow-3xl`}
              >
                <img src={item.src} alt={`Card ${i + 1}`} className="w-full h-80 object-cover rounded-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <OurBike />
    </div>
  );
}
