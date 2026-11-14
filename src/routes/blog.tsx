import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Search, Clock, Calendar, ArrowRight, X, CheckCircle2, Play, Film } from "lucide-react";
import { TEZZ_CONFIG, TEZZ_VIDEOS } from "@/lib/config";
import { VideoPlayer } from "@/components/VideoPlayer";
import posterLight from "@/assets/tezzev-light.jpg";
import posterDark from "@/assets/tezzev-dark.jpg";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Rider Video Guides & Blog — Tips for Delivery Partners | TezzEV" },
      {
        name: "description",
        content: "Watch helpful video guides, battery swap tips, and earning strategies for delivery riders in Jaipur.",
      },
    ],
  }),
});

const categories = ["All", "Earning Tips", "EV Technology", "Safety & Guides"];

const postVideos: Record<string, { src: string; poster: string; duration: string }> = {
  "petrol-vs-ev-savings-guide": {
    src: TEZZ_VIDEOS.blogPetrolVsEv,
    poster: posterLight,
    duration: "1:30",
  },
  "battery-swap-simple-guide": {
    src: TEZZ_VIDEOS.blogBatterySwap,
    poster: posterDark,
    duration: "1:05",
  },
  "night-delivery-rider-safety": {
    src: TEZZ_VIDEOS.blogRiderSafety,
    poster: posterDark,
    duration: "1:15",
  },
};

function BlogPage() {
  const [selectedCat, setSelectedCat] = useState("All");
  const [query, setQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<(typeof TEZZ_CONFIG.blogPosts)[0] | null>(null);

  const filtered = TEZZ_CONFIG.blogPosts.filter((p) => {
    const matchCat = selectedCat === "All" || p.category === selectedCat;
    const matchQ =
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQ;
  });

  return (
    <div className="bg-white text-[#0B1B4D] w-full">
      {/* 1. Page Header (Clean Light) */}
      <PageHeader
        breadcrumb="Blog & Videos"
        title="Rider Guides & Video Tips"
        subtitle="Practical video advice on battery swapping, route planning, and maximizing daily delivery profits."
      />

      <section className="py-12 md:py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          {/* Filter & Search Bar */}
          <div className="bg-white p-4 sm:p-5 mb-10 max-w-4xl mx-auto rounded-2xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Category Chips */}
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none w-full sm:w-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setSelectedCat(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                    selectedCat === c
                      ? "bg-[#1647E8] text-white shadow-2xs"
                      : "bg-slate-100 text-[#4B587C] hover:bg-slate-200"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 w-full sm:w-64">
              <Search className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles & videos..."
                className="w-full bg-transparent text-xs text-[#0B1B4D] placeholder:text-slate-400 outline-none font-medium"
              />
            </div>
          </div>

          {/* Post Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filtered.map((post) => {
              const videoMeta = postVideos[post.id] || {
                src: TEZZ_VIDEOS.blogPetrolVsEv,
                poster: posterLight,
                duration: "1:00",
              };

              return (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-2xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
                >
                  <div>
                    {/* Video Thumbnail Box */}
                    <div className="relative aspect-video w-full overflow-hidden bg-[#06122E]">
                      <img
                        src={videoMeta.poster}
                        alt={post.title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-[#06122E]/40" />

                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-11 w-11 rounded-full bg-[#1647E8] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#2D6BFF] transition-transform">
                          <Play className="h-5 w-5 fill-white text-white translate-x-0.5" />
                        </div>
                      </div>

                      {/* Duration Badge */}
                      <div className="absolute bottom-2.5 right-2.5">
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-semibold bg-black/75 text-white backdrop-blur-xs">
                          <Clock className="h-3 w-3 text-cyan-300" />
                          {videoMeta.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 sm:p-6">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                        <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1647E8] font-bold text-[11px]">
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1 text-[#4B587C]">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="font-heading font-bold text-lg text-[#0B1B4D] group-hover:text-[#1647E8] transition-colors leading-snug">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-xs sm:text-sm text-[#4B587C] leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[#4B587C] flex items-center gap-1 font-medium">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="font-bold text-[#1647E8] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Watch & Read <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Article Modal with Integrated Video Player */}
      {selectedPost && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#06122E]/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedPost(null)}
        >
          <div
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-3xl w-full border border-blue-200 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-full hover:bg-slate-100 transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-[#1647E8] font-bold text-xs">
                {selectedPost.category}
              </span>
              <span className="text-xs text-[#4B587C]">
                • {selectedPost.readTime} • {selectedPost.date}
              </span>
            </div>

            <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#0B1B4D] leading-snug mb-5">
              {selectedPost.title}
            </h2>

            {/* Video Player Inside Article */}
            <div className="mb-6">
              <VideoPlayer
                src={postVideos[selectedPost.id]?.src || TEZZ_VIDEOS.blogPetrolVsEv}
                poster={postVideos[selectedPost.id]?.poster || posterLight}
                title={selectedPost.title}
                subtitle="Official TezzEV Video Guide"
                badge="Video Guide"
                aspectRatio="16/9"
                openModalOnClick={false}
                autoPlay={false}
                controls={true}
                className="shadow-xl"
              />
            </div>

            {/* Key Highlights */}
            <div className="my-5 p-4 sm:p-5 rounded-2xl bg-blue-50/70 border border-blue-100 space-y-2">
              <div className="text-xs font-bold text-[#0B1B4D] uppercase tracking-wider">
                Key Video Takeaways:
              </div>
              {selectedPost.takeaways.map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#3A4668]">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="text-sm text-[#3A4668] leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-right">
              <button
                type="button"
                onClick={() => setSelectedPost(null)}
                className="inline-flex items-center gap-1 bg-[#1647E8] hover:bg-[#2D6BFF] text-white font-bold text-xs py-2.5 px-6 rounded-full cursor-pointer shadow-sm"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
