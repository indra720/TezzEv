import { motion } from "motion/react";
import phone from "@/assets/phone-mockup.png";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

export function DownloadApp() {
  return (
    <section className="bg-[#F97316] overflow-hidden">
      <div className="mx-auto max-w-350 px-6 py-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        {/* Left Group: Phone and Text */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          {/* Phone Image */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="hidden md:block relative w-45"
          >
            <img
              src={phone}
              alt="SoraRider App"
              className="absolute -top-20 left-0 h-45 rotate-[-18deg]"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase leading-tight text-white">
              TRACK, EARN & GROW
            </h2>

            <p className="mt-2 max-w-xl mx-auto md:mx-0 text-lg md:text-xl leading-relaxed text-orange-100">
              Download the SoraRider Partner App
              <br className="hidden md:block" />
              to manage your bookings and earnings.
            </p>
          </motion.div>
        </div>

        {/* Right Group: Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Google Play Button */}
          <button className="rounded-xl bg-black px-6 py-3 text-white shadow-lg transition hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
            <FaGooglePlay size={24}/>
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400 leading-none">GET IT ON</p>
              <h4 className="text-xl font-semibold leading-tight">Google Play</h4>
            </div>
          </button>

          {/* App Store Button */}
          <button className="rounded-xl bg-black px-6 py-3 text-white shadow-lg transition hover:scale-105 flex items-center gap-3 w-full sm:w-auto justify-center">
            <FaApple size={24}/>  
            <div className="text-left">
              <p className="text-[10px] uppercase text-gray-400 leading-none">Download on the</p>
              <h4 className="text-xl font-semibold leading-tight">App Store</h4>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
