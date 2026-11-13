import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Search, Clock, Calendar, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { TEZZ_CONFIG } from "@/lib/config";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Rider Guides & Blog — Tips for Delivery Partners | TezzEV" },
      {
        name: "description",
        content: "Helpful guides, battery swap tips, and earning strategies for delivery riders.",
      },
    ],
  }),
});

const categories = ["All", "Earning Tips", "EV Technology", "Safety & Guides"];

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
    <div className="bg-white text-[#081330] w-full">
      {/* 1. Page Header */}
      <PageHeader
        breadcrumb="Blog"
        title="Rider Guides & Tips"
        subtitle="Practical advice on battery swapping, route planning, and maximizing daily delivery profits."
      />

      <section className="relative overflow-hidden py-12 md:py-16 bg-skywash border-b border-blue-200/80">
        <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="pointer-events-none absolute right-10 bottom-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 pattern-dots opacity-30" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-8 lg:px-[50px]">
          {/* Filter & Search Bar */}
          <div className="clean-card p-4 sm:p-5 mb-10 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/50">
            {/* Category Chips */}
            <div className="flex gap-2 overflow-x-auto whitespace-nowrap scrollbar-none w-full sm:w-auto">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setSelectedCat(c)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                    selectedCat === c
                      ? "bg-blue-600 text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white border border-slate-200 w-full sm:w-64">
              <Search className="h-4 w-4 text-slate-400 shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 outline-none"
              />
            </div>
          </div>

          {/* Post Cards: 1 col on mobile, 2 cols on md, 3 cols on lg */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="clean-card p-6 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-lg text-[#081330] group-hover:text-blue-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </span>
                  <span className="font-semibold text-blue-600 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read article <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-2xl w-full border border-slate-200 shadow-2xl relative my-8">
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-700 font-semibold text-xs">
                {selectedPost.category}
              </span>
              <span className="text-xs text-slate-400">
                • {selectedPost.readTime} • {selectedPost.date}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl text-[#081330] leading-snug">
              {selectedPost.title}
            </h2>

            {/* Takeaways */}
            <div className="my-5 p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <div className="text-xs font-bold text-slate-700 uppercase">Key Highlights:</div>
              {selectedPost.takeaways.map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-xs text-slate-600">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{t}</span>
                </div>
              ))}
            </div>

            {/* Content */}
            <div className="text-sm text-slate-600 leading-relaxed whitespace-pre-line border-t border-slate-100 pt-4">
              {selectedPost.content}
            </div>

            <div className="mt-8 pt-4 border-t border-slate-100 text-right">
              <button
                onClick={() => setSelectedPost(null)}
                className="btn-secondary text-xs py-2 px-5"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
