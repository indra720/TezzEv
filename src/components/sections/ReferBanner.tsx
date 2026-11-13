import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import screen from "../../assets/sreen2.png";
import screen2 from "../../assets/refer2.png";

export function ReferBanner() {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden rounded-xl border border-[#F3D7B3] bg-[#FFFDF8] shadow-sm"
        >
          <div className="grid items-stretch lg:grid-cols-[25%_50%_25%]">

            {/* LEFT */}
            <div className="flex items-center justify-center border-r border-[#F3D7B3] px-4">
              <img
                src={screen}
                alt="Refer"
                className="h-full w-auto object-cover"
              />
            </div>

            {/* CENTER */}
            <div className="flex flex-col justify-center px-8 py-6 text-center">
              <h2 className="text-2xl font-black uppercase leading-tight text-black sm:text-3xl">
                REFER & EARN
              </h2>

              <p className="mt-3 max-w-md mx-auto text-base leading-relaxed text-gray-700 sm:text-lg">
                Invite your friends to join
                <span className="font-semibold"> SORA RIDER </span>
                and get
                <span className="font-bold text-[#F97316]">
                  {" "}₹1000 Cashback{" "}
                </span>
                for each successful referral.
              </p>

              <button className="mt-4 flex w-fit mx-auto items-center gap-2 rounded-md bg-[#F97316] px-6 py-2 text-base font-semibold text-white transition hover:bg-[#EA580C]">
                Invite Now
                <ArrowRight size={16} />
              </button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center justify-center px-4">
              <img
                src={screen2}
                alt="Cashback"
                className="h-full w-auto object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
