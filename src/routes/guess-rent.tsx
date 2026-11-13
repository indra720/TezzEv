import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, RotateCcw, CheckCircle2 } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import posterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/guess-rent")({
  component: GuessRentPage,
  head: () => ({
    meta: [
      { title: "Daily Rent Guess Karo — TezzEV" },
      {
        name: "description",
        content: "Predict TezzEV electric scooter daily rent. Stay tuned for the official launch in Jaipur.",
      },
    ],
  }),
});

function GuessRentPage() {
  const [guess, setGuess] = useState(250);
  const [isLocked, setIsLocked] = useState(false);

  const shareText = `Maine TezzEV scooter ka daily rent guess kiya: ₹${guess}/day! Speed ka naya code unlock ho raha hai Jaipur me. Aap bhi guess karo!`;
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " https://tezzev.com/guess-rent")}`;
  const instagramUrl = TEZZ_CONFIG.launch.socials.instagram;

  return (
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Guess The Rent"
        title="Daily Rent Guess Karo"
        subtitle="Aapke hisaab se TezzEV commercial electric scooter ka daily rent kitna hona chahiye?"
      />

      {/* 2. Poster Banner & Slider Game (Mesh Background) */}
      <section className="relative overflow-hidden py-12 md:py-16 bg-mesh border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-5xl mx-auto">
          {/* Poster 1 Dark Banner */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-800 bg-[#081330] mb-12">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center">
              <div className="md:col-span-7 p-6 sm:p-10 space-y-3 text-white">
                <span className="text-xs uppercase font-bold text-blue-400 tracking-wider">
                  Campaign Teaser
                </span>
                <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  SPEED KA NAYA CODE UNLOCK HO RAHA HAI
                </h2>
                <p className="text-sm text-slate-300">
                  Petrol ka zamana khatam. Ab sheher chalega TEZZ! Guess your expected daily rent below.
                </p>
              </div>

              <div className="md:col-span-5 h-48 md:h-full overflow-hidden">
                <img
                  src={posterDark}
                  alt="TezzEV Tunnel Poster"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Interactive Game Card */}
          <div className="clean-card p-6 sm:p-10 text-center max-w-2xl mx-auto border border-slate-200">
            {!isLocked ? (
              <div className="space-y-6">
                <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">
                  Drag the slider to select your guess
                </span>

                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 inline-block w-full max-w-sm mx-auto">
                  <div className="text-xs text-slate-500 uppercase font-semibold">Predicted Daily Rent</div>
                  <div className="font-heading font-extrabold text-4xl sm:text-5xl text-blue-600 my-1">
                    ₹{guess}
                    <span className="text-base text-slate-500 font-normal"> / day</span>
                  </div>
                  <div className="text-xs text-slate-500">Including battery swapping & maintenance</div>
                </div>

                <div className="max-w-md mx-auto space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>₹150</span>
                    <span className="font-semibold text-blue-600">Current: ₹{guess}</span>
                    <span>₹350</span>
                  </div>
                  <input
                    type="range"
                    min="150"
                    max="350"
                    step="10"
                    value={guess}
                    onChange={(e) => setGuess(Number(e.target.value))}
                    className="w-full accent-blue-600 h-2 bg-slate-200 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => setIsLocked(true)}
                    className="btn-primary text-sm py-3 px-8 shadow-md"
                  >
                    Lock My Guess (₹{guess}/day)
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-6 py-4">
                <div className="h-14 w-14 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>

                <h3 className="font-heading font-extrabold text-2xl text-[#081330]">
                  Great guess! Stay tuned, TEZZ is coming.
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  You locked in <span className="font-bold text-blue-600">₹{guess} / day</span>. Actual launch rates will be unveiled soon at the Jaipur launch event.
                </p>

                <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary text-xs py-2.5 px-5 bg-emerald-600 hover:bg-emerald-700 shadow-none flex items-center gap-2"
                  >
                    <FaWhatsapp className="h-4 w-4" />
                    Share on WhatsApp
                  </a>

                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary text-xs py-2.5 px-5 flex items-center gap-2"
                  >
                    <FaInstagram className="h-4 w-4" />
                    DM on Instagram
                  </a>

                  <button
                    onClick={() => setIsLocked(false)}
                    className="p-2.5 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50"
                    title="Change guess"
                  >
                    <RotateCcw className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
          </div>
        </div>
      </section>
    </div>
  );
}
