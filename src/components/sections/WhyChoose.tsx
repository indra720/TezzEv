import { motion } from "motion/react";
import { UserRound, ShieldCheck, IndianRupee, Headphones, FileText } from "lucide-react";
import { RegistrationForm } from "@/components/RegistrationForm";

const features = [
  { Icon: UserRound, title: "Affordable", desc: "Just ₹250 per day to rent a bike" },
  { Icon: ShieldCheck, title: "Reliable Bikes", desc: "Well-maintained and energy efficient" },
  { Icon: IndianRupee, title: "Earn More", desc: "Maximum earnings with minimum investment" },
  { Icon: Headphones, title: "24/7 Support", desc: "We're here for you anytime" },
  { Icon: FileText, title: "Hassle Free", desc: "Quick documentation and easy process" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export function WhyChoose() {
  return (
    <section id="why" className="relative -mt-6 pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="rounded-3xl border border-border bg-card p-8 shadow-xl shadow-black/5 sm:p-10"
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
                WHY CHOOSE <span className="text-brand">SORA RIDER</span>?
              </h2>
            </motion.div>
            <motion.div variants={containerVariants} className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 ">
              {features.map((f) => (
                <motion.div
                  key={f.title}
                  variants={itemVariants}
                  className="group flex flex-col items-center text-center"
                >
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="grid h-16 w-16 place-items-center rounded-full border-2 border-brand/30 bg-brand-soft text-brand transition group-hover:bg-brand group-hover:text-white"
                  >
                    <f.Icon className="h-7 w-7" />
                  </motion.div>
                  <h4 className="mt-4 text-sm font-medium text-ink">{f.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          <RegistrationForm />
        </div>
      </div>
    </section>
  );
}