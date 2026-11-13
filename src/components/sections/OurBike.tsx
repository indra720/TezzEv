import { motion } from "motion/react";
import { Check, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";
import scooter from "../../assets/Screenshot_2026-07-13_164723-removebg-preview.png";
import videoSrc from "@/assets/WhatsApp Video 2026-08-08 at 10.53.45 AM.mp4";

export function OurBike() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="our-bike" className="py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <h2 className="inline-block pb-1 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            OUR BIKE
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Well-maintained bikes for a smooth and safe ride.
          </p>
        </div>

        <div className="grid items-stretch gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid h-full grid-cols-1 overflow-hidden rounded-2xl border border-border bg-card shadow-md md:grid-cols-[1fr_1fr]"
          >
            {/* Left side: Image Container */}
            <div className="flex items-center justify-center bg-white p-5 border-b md:border-b-0 md:border-r border-border">
              <img
                src={scooter}
                alt="SoraRider EV"
                width={800}
                height={600}
                loading="lazy"
                className="max-h-[220px] w-auto object-contain"
              />
            </div>

            {/* Right side: Content Container */}
            <div className="flex flex-col justify-between p-6 md:p-8 h-full">
              <div>
                <h3 className="text-xl font-extrabold text-ink">SORA RIDER EV</h3>
                <ul className="mt-4 space-y-2 text-sm">
                  {[
                    "Electric Scooter",
                    "Unlimited Range (Unlimited Swapping)",
                    "Low Maintenance",
                    "Spacious & Comfortable",
                  ].map((t) => (
                    <li key={t} className="flex items-center gap-2 text-ink/80">
                      <Check className="h-4 w-4 text-brand" strokeWidth={3} /> {t}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 flex flex-col items-end">
                <div className="bg-card rounded-xl inline-flex items-baseline gap-1 text-brand">
                  <span className="text-4xl font-black">₹250</span>
                  <span className="text-lg font-bold text-muted-foreground">/DAY</span>
                </div>
                <div className="text-[10px] text-muted-foreground mt-1">*T&amp;C Applied</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="group relative min-h-[300px] h-full overflow-hidden rounded-2xl bg-secondary"
          >
            <video
              ref={videoRef}
              src={videoSrc}
              className="absolute inset-0 h-full w-full object-cover"
              playsInline
              loop
              muted={isMuted}
              onEnded={() => setIsPlaying(false)}
            />
            <div className="absolute inset-0 bg-black/30" />
            
            {/* Play/Pause Button */}
            <div className="absolute inset-0 grid place-items-center">
              <button
                aria-label={isPlaying ? "Pause video" : "Play video"}
                onClick={togglePlay}
                className="grid h-16 w-16 place-items-center rounded-full bg-white/90 shadow-xl transition hover:scale-110"
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-brand" />
                ) : (
                <Play className="ml-1 h-8 w-8 fill-brand text-brand" />
                )}
              </button>
            </div>

            {/* Volume Control */}
            <button
              aria-label={isMuted ? "Unmute video" : "Mute video"}
              onClick={toggleMute}
              className="absolute bottom-4 right-4 rounded-full bg-black/50 p-2 text-white transition hover:bg-black/70"
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
            
            <div className="absolute left-8 top-8 max-w-[65%] text-white pointer-events-none">
              <h3 className="text-white text-lg md:text-3xl font-bold leading-tight">
                Watch How SORA RIDER Works For You
              </h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
