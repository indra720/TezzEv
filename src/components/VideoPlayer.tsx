import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, Sparkles } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface VideoPlayerProps {
  src?: string;
  poster?: string;
  title?: string;
  subtitle?: string;
  badge?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1" | "21/9" | "auto";
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  playsInline?: boolean;
  controls?: boolean;
  openModalOnClick?: boolean;
  className?: string;
}

export function VideoPlayer({
  src,
  poster,
  title = "TezzEV Video",
  subtitle,
  badge,
  aspectRatio = "16/9",
  autoPlay = false,
  muted = true,
  loop = true,
  playsInline = true,
  controls = false,
  openModalOnClick = true,
  className = "",
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(muted);
  const [modalOpen, setModalOpen] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const aspectClass = {
    "16/9": "aspect-video",
    "4/3": "aspect-4/3",
    "1/1": "aspect-square",
    "21/9": "aspect-21/9",
    "auto": "h-full w-full",
  }[aspectRatio];

  // Pause when scrolled out of view (saves battery & data for delivery riders on mobile)
  useEffect(() => {
    if (!autoPlay || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!videoRef.current) return;
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {});
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.25 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [autoPlay]);

  const handlePlayToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (openModalOnClick) {
      setModalOpen(true);
      return;
    }

    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      <div
        ref={containerRef}
        onClick={() => openModalOnClick && setModalOpen(true)}
        className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-[#06122E] border border-blue-400/20 shadow-xl transition-all duration-300 hover:border-blue-400/50 ${aspectClass} ${className} ${openModalOnClick ? "cursor-pointer" : ""}`}
      >
        {/* Video Element or Poster Fallback */}
        {src && !hasError ? (
          <video
            ref={videoRef}
            src={src}
            poster={poster}
            autoPlay={autoPlay}
            muted={isMuted}
            loop={loop}
            playsInline={playsInline}
            preload="metadata"
            onError={() => setHasError(true)}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="relative h-full w-full overflow-hidden">
            {poster ? (
              <img
                src={poster}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-[#06122E] via-[#0B1B4D] to-[#1647E8]" />
            )}
            <div className="absolute inset-0 bg-[#06122E]/40" />
          </div>
        )}

        {/* Subtle Navy Gradient Overlay so text and controls pop */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#06122E]/90 via-[#0B1B4D]/30 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
          {badge ? (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] sm:text-xs font-bold tracking-wide uppercase bg-[#1647E8]/90 text-white backdrop-blur-md shadow-sm border border-white/20">
              <Sparkles className="h-3 w-3" />
              {badge}
            </span>
          ) : <div />}

          {src && !openModalOnClick && (
            <button
              type="button"
              onClick={handleMuteToggle}
              className="pointer-events-auto flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-xs"
              aria-label={isMuted ? "Unmute" : "Mute"}
            >
              {isMuted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
            </button>
          )}
        </div>

        {/* Big Center Play Button Overlay (Traditional, clean, familiar) */}
        {(!autoPlay || !isPlaying || openModalOnClick) && (
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-[#1647E8] text-white shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2D6BFF] ring-4 ring-white/30">
              <Play className="h-6 w-6 sm:h-7 sm:w-7 translate-x-0.5 fill-white text-white" />
            </div>
          </div>
        )}

        {/* Bottom Title & Duration / Status Info */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between z-10 text-white pointer-events-none">
          <div className="max-w-[80%]">
            <h4 className="text-sm sm:text-base font-bold leading-tight drop-shadow-md text-white line-clamp-1">
              {title}
            </h4>
            {subtitle && (
              <p className="text-[11px] sm:text-xs text-blue-200/90 leading-tight mt-0.5 line-clamp-1 drop-shadow-xs">
                {subtitle}
              </p>
            )}
          </div>
          {openModalOnClick && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-200 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-xs">
              <Maximize2 className="h-3 w-3" />
              <span>Watch</span>
            </span>
          )}
        </div>
      </div>

      {/* Fullscreen Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={src}
        title={title}
        subtitle={subtitle}
        poster={poster}
      />
    </>
  );
}
