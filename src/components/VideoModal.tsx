import { useEffect, useRef } from "react";
import { X, Play, Volume2, ShieldCheck } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc?: string;
  title: string;
  subtitle?: string;
  poster?: string;
}

export function VideoModal({
  isOpen,
  onClose,
  videoSrc,
  title,
  subtitle,
  poster,
}: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // Close on Escape key press
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
      }
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
      // Auto-play when opened
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {
          // Autoplay policy fallback
        });
      }
    } else {
      document.body.style.overflow = "";
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#06122E]/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="video-modal-title"
    >
      <div
        className="relative w-full max-w-4xl bg-[#0B1B4D] rounded-2xl sm:rounded-3xl shadow-2xl border border-blue-500/30 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 bg-[#06122E] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <h3 id="video-modal-title" className="text-sm sm:text-base font-bold text-white leading-tight">
                {title}
              </h3>
              {subtitle && (
                <p className="text-[11px] sm:text-xs text-blue-200/80">{subtitle}</p>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-black flex items-center justify-center">
          {videoSrc ? (
            <video
              ref={videoRef}
              src={videoSrc}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="flex flex-col items-center justify-center text-center p-6 text-white space-y-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1647E8]/30 border border-blue-400">
                <Play className="h-6 w-6 text-cyan-300" />
              </div>
              <p className="font-bold text-lg">Official Video Coming Soon</p>
              <p className="text-xs text-blue-200 max-w-sm">
                TezzEV hub production footage is being uploaded. Check back soon for HD walkthrough.
              </p>
            </div>
          )}
        </div>

        {/* Modal Bottom Bar */}
        <div className="px-4 sm:px-6 py-3 bg-[#06122E]/90 flex items-center justify-between text-xs text-blue-200/90 border-t border-white/10">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-emerald-400" />
            <span>TezzEV Verified Fleet Footage • Commercial Ready</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-xs font-semibold text-white/80 hover:text-white px-3 py-1 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
