import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { ArrowRight, RotateCcw, CheckCircle2, Film } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import posterDark from "@/assets/tezzev-dark.jpg";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";

export const Route = createFileRoute("/guess-rent")({
  component: GuessRentPage,
  head: () => ({
    meta: [
      { title: "Daily Rent Guess Karo — TezzEV" },
      {
        name: "description",
        content: "Predict TezzEV electric scooter daily rent. Watch the teaser video and stay tuned for the official launch in Jaipur.",
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
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Guess The Rent"
        title="Daily Rent Guess Karo"
        subtitle="Aapke hisaab se TezzEV commercial electric scooter ka daily rent kitna hona chahiye? Watch the teaser & submit."
      />

      {/* 2. Poster Video Banner & Slider Game (Soft Slate Background) */}
      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          <div className="max-w-5xl mx-auto">
            {/* Campaign Teaser Card with Video (Sleek Dark Navy Style) */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-blue-900/40 bg-[#0B1B4D] mb-10 text-white">
              <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-6 sm:p-8">
                <div className="md:col-span-7 space-y-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/10 text-cyan-300 border border-white/20">
                    <Film className="h-3.5 w-3.5" />
                    <span>Launch Campaign Teaser</span>
                  </span>
                  <h2 className="font-heading font-black text-2xl sm:text-3xl text-white">
                    SPEED KA NAYA CODE UNLOCK HO RAHA HAI
                  </h2>
                  <p className="text-sm text-blue-100">
                    Petrol ka zamana khatam. Ab sheher chalega TEZZ! Watch the teaser video and lock your expected daily rent below.
                  </p>
                </div>

                <div className="md:col-span-5">
                  <VideoPlayer
                    src={TEZZ_VIDEOS.guessRentTeaser}
                    poster={posterDark}
                    title="Speed Ka Naya Code Launch Teaser"
                    badge="Teaser"
                    aspectRatio="16/9"
                    className="shadow-xl border border-white/20"
                  />
                </div>
              </div>
            </div>

            {/* Interactive Game Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-10 text-center max-w-2xl mx-auto border border-slate-200 shadow-sm">
              {!isLocked ? (
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase text-[#4B587C] tracking-wider">
                    Drag the slider to select your guess
                  </span>

                  <div className="p-6 rounded-2xl bg-blue-50/60 border border-blue-100 inline-block w-full max-w-sm mx-auto">
                    <div className="text-xs text-[#4B587C] uppercase font-semibold">Predicted Daily Rent</div>
                    <div className="font-heading font-black text-4xl sm:text-5xl text-[#1647E8] my-1">
                      ₹{guess}
                      <span className="text-base text-[#4B587C] font-normal"> / day</span>
                    </div>
                    <div className="text-xs text-[#4B587C]">Including battery swapping & maintenance</div>
                  </div>

                  <div className="max-w-md mx-auto space-y-2">
                    <div className="flex justify-between text-xs text-[#4B587C] font-semibold">
                      <span>₹150</span>
                      <span className="font-bold text-[#1647E8]">Current: ₹{guess}</span>
                      <span>₹350</span>
                    </div>
                    <input
                      type="range"
                      min="150"
                      max="350"
                      step="10"
                      value={guess}
                      onChange={(e) => setGuess(Number(e.target.value))}
                      className="w-full accent-[#1647E8] h-2.5 bg-slate-200 rounded-lg cursor-pointer"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setIsLocked(true)}
                      className="inline-flex items-center gap-2 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-sm py-3 px-8 rounded-full shadow-lg transition-all cursor-pointer"
                    >
                      <span>Lock My Guess (₹{guess}/day)</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-6 py-4">
                  <div className="h-14 w-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>

                  <h3 className="font-heading font-black text-2xl text-[#0B1B4D]">
                    Great guess! Stay tuned, TEZZ is coming.
                  </h3>
                  <p className="text-sm text-[#4B587C] max-w-md mx-auto">
                    You locked in <span className="font-bold text-[#1647E8]">₹{guess} / day</span>. Actual launch rates will be unveiled soon at the Jaipur launch event.
                  </p>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-full shadow-sm"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      <span>Share on WhatsApp</span>
                    </a>

                    <a
                      href={instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 bg-[#0B1B4D] hover:bg-slate-800 text-white font-bold text-xs py-2.5 px-5 rounded-full"
                    >
                      <FaInstagram className="h-4 w-4" />
                      <span>DM on Instagram</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => setIsLocked(false)}
                      className="p-2.5 rounded-full border border-slate-300 text-slate-600 hover:bg-slate-100 cursor-pointer"
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
