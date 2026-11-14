import { useState } from "react";
import { Play, Clock, Sparkles } from "lucide-react";
import { VideoModal } from "./VideoModal";

interface VideoCardProps {
  src?: string;
  poster?: string;
  title: string;
  duration?: string;
  badge?: string;
  description?: string;
  ctaText?: string;
  variant?: "white" | "navy";
  className?: string;
}

export function VideoCard({
  src,
  poster,
  title,
  duration = "0:45",
  badge,
  description,
  ctaText = "Watch Video",
  variant = "white",
  className = "",
}: VideoCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const isNavy = variant === "navy";

  return (
    <>
      <div
        onClick={() => setModalOpen(true)}
        className={`group cursor-pointer rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
          isNavy
            ? "bg-[#0B1B4D] border border-blue-400/25 text-white shadow-md hover:shadow-xl shadow-blue-950/30"
            : "bg-white border border-slate-200 text-[#0B1B4D] shadow-xs hover:shadow-md hover:border-blue-300"
        } ${className}`}
      >
        {/* Thumbnail Box */}
        <div className="relative aspect-video w-full overflow-hidden bg-slate-900">
          {poster ? (
            <img
              src={poster}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-tr from-[#0B1B4D] to-[#1647E8]" />
          )}

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

          {/* Top Badge */}
          {badge && (
            <div className="absolute top-2.5 left-2.5 z-10">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wide uppercase bg-[#1647E8] text-white shadow-xs">
                <Sparkles className="h-2.5 w-2.5" />
                {badge}
              </span>
            </div>
          )}

          {/* Duration Badge */}
          <div className="absolute bottom-2.5 right-2.5 z-10">
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-xs">
              <Clock className="h-3 w-3 text-cyan-300" />
              {duration}
            </span>
          </div>

          {/* Center Play Button Icon */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#1647E8] text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-[#2D6BFF] ring-4 ring-white/30">
              <Play className="h-5 w-5 translate-x-0.5 fill-white text-white" />
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div className="p-4 sm:p-5 flex flex-col justify-between gap-3">
          <div>
            <h4
              className={`text-base font-bold leading-snug line-clamp-2 ${
                isNavy ? "text-white" : "text-[#0B1B4D] group-hover:text-[#1647E8] transition-colors"
              }`}
            >
              {title}
            </h4>
            {description && (
              <p
                className={`text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed ${
                  isNavy ? "text-blue-200/80" : "text-[#64748B]"
                }`}
              >
                {description}
              </p>
            )}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1647E8]">
              <Play className="h-3 w-3 fill-current" />
              <span>{ctaText}</span>
            </span>
            <span className="text-[11px] text-slate-400 font-medium">TezzEV Video</span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoSrc={src}
        title={title}
        subtitle={description}
        poster={poster}
      />
    </>
  );
}
