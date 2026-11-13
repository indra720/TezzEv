import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { PageHeader } from "@/components/PageHeader";
import { 
  ArrowRight, 
  Clock, 
  Calendar, 
  User, 
  ChevronRight, 
  Search, 
  BookOpen, 
  ArrowLeft, 
  Share2, 
  ThumbsUp, 
  Sparkles,
  Send,
  Lightbulb,
  CheckCircle,
  Award,
  Link2,
  Check
} from "lucide-react";

// Local image assets
import img1 from "@/assets/img1.jpg";
import img2 from "@/assets/img2.jpg";
import img3 from "@/assets/img3.jpg";
import img4 from "@/assets/img4.jpg";
import fullimage from "@/assets/fullimage.jpg";

export const Route = createFileRoute("/blog")({
  component: Blog,
  head: () => ({
    meta: [
      { title: "SoraRider Blog — Stories, Guides & Industry Updates" },
      { name: "description", content: "Stay updated with SoraRider. Read expert guides, EV battery tips, and stories from top-earning delivery partners." },
    ],
  }),
});

interface BlogPost {
  id: string;
  title: string;
  category: "Driver Success" | "Earning Tips" | "Driver Guides" | "EV Technology" | "SoraRider Updates";
  excerpt: string;
  content: React.ReactNode;
  image: string;
  author: string;
  authorBio: string;
  authorRole: string;
  date: string;
  readTime: string;
  likes: number;
  takeaways: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: "max-deliveries",
    title: "How to Maximize Your Deliveries: 10 Tips from Top Earners in Jaipur",
    category: "Driver Success",
    excerpt: "Discover how veteran delivery partners in Jaipur are taking home over ₹1,500 daily using SoraRider Sora EV scooters. From route tricks to shift planning...",
    image: img1,
    author: "Rajesh Sharma",
    authorBio: "Rajesh is a seasoned gig delivery partner who has logged over 5,000 rides on Jaipur roads. He specializes in route optimizations and high-surge earnings.",
    authorRole: "Premium Delivery Partner",
    date: "July 12, 2026",
    readTime: "5 min read",
    likes: 124,
    takeaways: [
      "Schedule shifts strictly around peak lunch (11:30 AM - 3:00 PM) and dinner (6:30 PM - 11:00 PM) hours.",
      "Park and wait near high-density restaurant hotspots to save battery and secure order matching faster.",
      "Keep battery above 30% and perform 60-second battery swaps at nearby hubs to prevent missed long-distance orders."
    ],
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-ink font-medium">
          Renting a scooter is just the first step. To truly unlock the highest earnings in the gig delivery space, you need a strategy. We sat down with Rajesh Sharma, who has completed over 5,000 deliveries in Jaipur, to learn his daily blueprint.
        </p>
        <p>
          "When I was riding my personal petrol bike, I was spending ₹200 to ₹250 daily just on battery/charging," Rajesh says. "Since switching to SoraRider EV, my cost has dropped to almost nothing, and my take-home profit increased by 30%. But the real secret is how you manage your shifts."
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">1. Ride During Double-Surge Hours</h3>
        <p>
          The busiest times for food and grocery delivery are 11:30 AM to 3:00 PM (lunch rush) and 6:30 PM to 11:00 PM (dinner rush). Top earners schedule their breaks strictly outside of these peak periods to ensure they capture high-value incentive bonuses.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">2. Position Yourself Near 'Hotspot' Hubs</h3>
        <p>
          Instead of riding around searching for orders, park near high-density commercial areas or cloud kitchens. This reduces battery consumption and gets you assigned orders faster.
        </p>
        <blockquote className="border-l-4 border-brand bg-brand-soft/30 p-5 rounded-r-2xl my-6 italic text-ink font-semibold">
          "With SoraRider's zero-maintenance promise, I never worry about vehicle wear-and-tear. If my tire gets punctured, the SOS team swaps my scooter in 15 minutes. This peace of mind keeps me focused on delivery counts."
        </blockquote>
        <h3 className="text-xl font-bold text-ink pt-4">3. Leverage the Fast Battery Swapping Hubs</h3>
        <p>
          Don't wait for your battery to reach 0%. When you are near a SoraRider hub and your battery is under 30%, do a quick swap. It takes less than 60 seconds and ensures you never have to decline a high-paying, long-distance delivery order.
        </p>
      </div>
    )
  },
  {
    id: "petrol-vs-ev",
    title: "Electric vs. Petrol Scooters: The Ultimate Earning Comparison for Gig Workers",
    category: "Earning Tips",
    excerpt: "With petrol climbing above ₹100/litre, does renting an electric vehicle actually save you money? We break down the math rupee-by-rupee.",
    image: img2,
    author: "Amit Verma",
    authorBio: "Amit is an automotive financial analyst tracking transition metrics for delivery logistics. He helps delivery fleets optimize costs and shift to sustainable energy.",
    authorRole: "Financial Analyst",
    date: "July 10, 2026",
    readTime: "6 min read",
    likes: 98,
    takeaways: [
      "Petrol running costs stand at ~₹2.50/km, while SoraRider EV operates at a fraction of that (~₹0.25/km).",
      "Renting saves ₹1,200/month in routine maintenance and over ₹400/month in insurance premiums.",
      "Zero downpayment and flexible plans eliminate the ₹1 Lakh upfront cost of buying a new scooter."
    ],
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-ink font-medium">
          As a gig worker, your vehicle is your office. Let's compare the real operating numbers of running a 110cc Petrol Scooter versus renting a Sora EV from SoraRider.
        </p>
        <div className="w-full overflow-x-auto rounded-2xl border border-border my-6">
          <table className="w-full text-left border-collapse text-sm min-w-[500px]">
            <thead>
              <tr className="bg-muted">
                <th className="p-4 font-bold text-ink">Expense Category</th>
                <th className="p-4 font-bold text-ink">Petrol Scooter (Owned)</th>
                <th className="p-4 font-bold text-ink">SoraRider EV (Rented)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              <tr>
                <td className="p-4 font-semibold text-ink">Daily Battery/Charging Cost</td>
                <td className="p-4 text-red-600 font-medium">₹220 (85 km @ 40 km/l)</td>
                <td className="p-4 text-emerald-600 font-semibold">₹20 (Electricity cost)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ink">Monthly Rental/EMI</td>
                <td className="p-4">₹2,500 (Typical loan EMI)</td>
                <td className="p-4 font-semibold text-brand">₹5,970 (Flat Monthly Saver)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ink">Maintenance & Engine Oil</td>
                <td className="p-4 text-red-500">₹1,200 / month</td>
                <td className="p-4 text-emerald-600 font-semibold">₹0 (Fully Covered)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold text-ink">Insurance & Road Tax</td>
                <td className="p-4">₹400 / month</td>
                <td className="p-4 text-emerald-600 font-semibold">₹0 (Fully Covered)</td>
              </tr>
              <tr className="bg-brand/5 font-bold text-ink">
                <td className="p-4">Total Monthly Outflow</td>
                <td className="p-4">₹10,700</td>
                <td className="p-4 text-brand">₹6,770</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          The math is clear: switching to a SoraRider rented EV instantly puts over <strong>₹3,900 back into your pocket</strong> every single month. Furthermore, there is zero downpayment required to get started (just a refundable ₹2,000 security deposit), saving you the upfront cost of ₹1,00,000+ for purchasing a bike.
        </p>
      </div>
    )
  },
  {
    id: "battery-efficiency",
    title: "Sora EV Battery Care: Secrets to Unlocking Over 90km on a Single Charge",
    category: "EV Technology",
    excerpt: "Want to extend your battery efficiency? Learn the driving habits, speed adjustments, and charging methods that keep your scooter running longer.",
    image: img3,
    author: "Dr. Alok Mehta",
    authorBio: "Dr. Mehta leads electrical design and battery safety testing for Sora EV scooters. He is committed to expanding battery cycle durability on urban terrains.",
    authorRole: "EV Powertrain Engineer",
    date: "July 05, 2026",
    readTime: "4 min read",
    likes: 83,
    takeaways: [
      "Accelerate smoothly and progressively to prevent high battery current draw from stationary starts.",
      "Utilize smart regenerative braking when coasting down slopes or slowing down for traffic lights.",
      "Maintain correct tire pressure to reduce rolling resistance and boost mileage by up to 10%."
    ],
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-ink font-medium">
          The Sora EV scooter features a state-of-the-art smart Lithium-ion pack. While it naturally achieves a robust 70-90 km range, how you ride plays a critical role in extracting maximum distance.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">1. Embrace Smooth, Progressive Acceleration</h3>
        <p>
          Twisting the throttle wide open from a complete standstill sucks up massive currents from the battery pack. Instead, accelerate smoothly and let the vehicle naturally pick up speed. This simple habit alone can boost range by up to 10%.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">2. Leverage Regenerative Braking</h3>
        <p>
          The Sora EV is equipped with smart energy regeneration. When coasting down bridges or slowing down ahead of traffic lights, throttle down gently to allow the motor to feed charge back into the battery.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">3. Keep Tires Inflated</h3>
        <p>
          Under-inflated tires create higher rolling resistance, causing the motor to work harder. Check your tire pressure weekly at our SoraRider hubs to ensure it is at the recommended PSI levels.
        </p>
      </div>
    )
  },
  {
    id: "new-swapping-hubs",
    title: "SoraRider Expands: 5 New Battery Swapping Hubs Now Open in Jaipur",
    category: "SoraRider Updates",
    excerpt: "No more waiting for charge! We've added 5 strategic swapping stations across Jaipur, enabling seamless 60-second battery swaps.",
    image: img4,
    author: "Vikram Aditya",
    authorBio: "Vikram coordinates urban charging logistics and hub networks. He is building Jaipur's most dense ecosystem of rapid battery swapping stations.",
    authorRole: "Operations Director",
    date: "July 01, 2026",
    readTime: "3 min read",
    likes: 112,
    takeaways: [
      "Five new stations expand the Jaipur SoraRider network to 12 active swapping hubs.",
      "Strategic locations in Mansarovar, Malviya Nagar, C-Scheme, Vaishali Nagar, and Raja Park.",
      "Battery swaps are 100% free and unlimited for all Weekly and Monthly plan subscribers."
    ],
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-ink font-medium">
          We are committed to making your deliveries zero-downtime. Today, we are thrilled to announce the official rollout of 5 brand new, fully-equipped Battery Swapping Stations across Jaipur.
        </p>
        <p>
          With these additions, our total network in Jaipur reaches 12 swapping hubs, ensuring that you are never more than 3 kilometers away from a fresh charge.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">Newly Opened Station Locations:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Mansarovar Station:</strong> Near Metro pillar 42.</li>
          <li><strong>Malviya Nagar Station:</strong> Main GT Road commercial market.</li>
          <li><strong>C-Scheme Hub:</strong> Behind Central Park commercial complex.</li>
          <li><strong>Vaishali Nagar Hub:</strong> Adjacent to the reliance fresh center.</li>
          <li><strong>Raja Park Station:</strong> Near the main crossing food street.</li>
        </ul>
        <p className="pt-4">
          All fresh batteries are temperature-regulated, balanced, and ready to go. Battery swaps are 100% free for our Weekly and Monthly subscription holders!
        </p>
      </div>
    )
  },
  {
    id: "documents-required",
    title: "Getting Approved: What Documents Do You Need to Start Your Rental?",
    category: "Driver Guides",
    excerpt: "A complete walkthrough of our paperless registration process. Learn how to get verified and pick up your scooter in less than 30 minutes.",
    image: fullimage,
    author: "Pooja Choudhary",
    authorBio: "Pooja manages rider verification and hub onboarding. She is passionate about removing documentation friction for gig workers in India.",
    authorRole: "Onboarding Specialist",
    date: "June 25, 2026",
    readTime: "4 min read",
    likes: 76,
    takeaways: [
      "Onboarding is 100% paperless, digital, and takes less than 15 minutes.",
      "Required items: Driving License, Aadhaar Card, PAN Card, and a Bank Account/UPI ID.",
      "Pickup is available immediately at our central Jaipur Hub upon digital verification."
    ],
    content: (
      <div className="space-y-6 text-muted-foreground leading-relaxed">
        <p className="text-lg text-ink font-medium">
          At SoraRider, we hate complex paperwork just as much as you do. Our onboarding process is 100% digital, fast, and transparent. Here is exactly what you need to bring to get your keys today.
        </p>
        <h3 className="text-xl font-bold text-ink pt-4">Mandatory Checklist of Documents:</h3>
        <ul className="space-y-3.5 pt-2">
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-orange-100 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</div>
            <div>
              <strong>Valid Driving License (DL):</strong> Either a permanent two-wheeler driving license or a valid gearless transport license. Learner's permits are unfortunately not accepted.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-orange-100 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</div>
            <div>
              <strong>Aadhaar Card:</strong> For quick digital e-KYC verification. Please ensure your current mobile number is linked to Aadhaar to receive the OTP.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-orange-100 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</div>
            <div>
              <strong>PAN Card:</strong> Required for standard billing and tax compliance profiles.
            </div>
          </li>
          <li className="flex items-start gap-3">
            <div className="h-5 w-5 rounded-full bg-orange-100 text-brand flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</div>
            <div>
              <strong>Bank Account / UPI ID:</strong> Required to process your ₹2,000 security deposit return automatically and instantly when you return the bike.
            </div>
          </li>
        </ul>
        <h3 className="text-xl font-bold text-ink pt-4">Steps to Pickup:</h3>
        <p>
          First, submit your documents on our mobile application or website. Once approved (usually takes 15 minutes), head over to our central Jaipur Hub, show your approval QR, deposit the refundable fee, and drive away with your Sora EV scooter!
        </p>
      </div>
    )
  }
];

function Blog() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const categories = ["All", "Driver Success", "Earning Tips", "Driver Guides", "EV Technology", "SoraRider Updates"];

  // Scroll to top when an article is loaded
  useEffect(() => {
    if (selectedPost) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [selectedPost]);

  // Filtering Logic
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const handleLikePost = (id: string) => {
    if (selectedPost && selectedPost.id === id) {
      setSelectedPost({
        ...selectedPost,
        likes: selectedPost.likes + 1
      });
    }
  };

  const handleSelectRelatedPost = (post: BlogPost) => {
    setSelectedPost(post);
  };

  return (
    <div className="bg-background min-h-screen text-ink pb-16">
      {/* Immersive Reading Mode */}
      <AnimatePresence mode="wait">
        {selectedPost ? (
          <motion.article 
            key="article-view"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full min-h-screen"
          >
            {/* Full-width Cinematic Top Segment */}
            <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
              {/* Back Button */}
              <div className="mx-auto max-w-7xl">
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="group inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-brand mb-6 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Articles
                </button>
              </div>

              {/* Category and Meta */}
              <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-brand-soft text-brand text-xs font-bold uppercase rounded-full">
                  {selectedPost.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5" /> {selectedPost.readTime}
                </span>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" /> {selectedPost.date}
                </span>
              </div>

              {/* Post Title */}
              <div className="mx-auto max-w-7xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-ink leading-tight mb-8">
                  {selectedPost.title}
                </h1>
              </div>

              {/* Cinematic Full Width Image */}
              <div className="w-full rounded-[32px] overflow-hidden border border-border shadow-xl mb-10 h-65 sm:h-100 md:h-150">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title}
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>

            {/* Desktop Split Grid (2 Columns: Main content & Sidebar) */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 xl:gap-16 items-start mt-10">
              
              {/* Left Column: Content Body (8 Columns) */}
              <div className="lg:col-span-8 flex flex-col">
                {/* Author details */}
                <div className="flex items-center justify-between border-y border-border py-5 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="h-11 w-11 rounded-full bg-brand-soft text-brand border border-brand/20 flex items-center justify-center font-bold text-base shrink-0">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-sm sm:text-base">{selectedPost.author}</h4>
                      <p className="text-[11px] sm:text-xs text-muted-foreground">{selectedPost.authorRole}</p>
                    </div>
                  </div>

                  {/* Social actions */}
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleLikePost(selectedPost.id)}
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card text-xs font-bold text-muted-foreground hover:text-brand hover:border-brand/30 transition-all hover:scale-103"
                    >
                      <ThumbsUp className="h-3.5 w-3.5" /> {selectedPost.likes}
                    </button>
                    <button className="p-1.5 rounded-xl border border-border bg-card text-muted-foreground hover:text-brand hover:border-brand/30 transition-all">
                      <Share2 className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                {/* Content Body */}
                <div className="prose prose-orange max-w-none text-ink w-full">
                  {selectedPost.content}
                </div>

                {/* Footer newsletter inside reading mode */}
                <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-linear-to-br from-brand/5 to-orange-500/5 border border-brand/10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-2xl rounded-full" />
                  <Sparkles className="h-8 w-8 text-brand mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-ink mb-2">Want More Earning Tips?</h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
                    Join our private newsletter and get Jaipur's latest high-paying spots, EV news, and ride discounts directly in your inbox.
                  </p>
                  
                  <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto relative z-10">
                    <input 
                      type="email" 
                      required
                      placeholder="Enter your email"
                      className="flex-1 px-5 py-3 rounded-full border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand bg-white"
                    />
                    <button type="submit" className="rounded-full bg-brand px-6 py-3 text-white font-bold text-sm transition-all hover:bg-orange-600 flex items-center justify-center gap-2 shrink-0">
                      Subscribe <Send className="h-4 w-4" />
                    </button>
                  </form>
                </div>
              </div>

              {/* Right Column: Sticky Sidebar (4 Columns, Responsive fallback) */}
              <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-6 mt-12 lg:mt-0">
                
                {/* 1. Dynamic Key Takeaways Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-extrabold text-ink text-sm sm:text-base flex items-center gap-2 mb-4 border-b border-border/60 pb-3">
                    <Lightbulb className="h-5 w-5 text-amber-500 fill-amber-500/20" /> Key Takeaways
                  </h3>
                  <ul className="space-y-3.5">
                    {selectedPost.takeaways.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Styled Author Bio Card */}
                <div className="rounded-2xl border border-border bg-linear-to-br from-brand/5 to-orange-500/5 p-6 shadow-sm">
                  <h3 className="font-extrabold text-ink text-sm sm:text-base flex items-center gap-2 mb-4 border-b border-border/20 pb-3">
                    <Award className="h-5 w-5 text-brand" /> About The Author
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-10 w-10 rounded-full bg-white text-brand border border-brand/20 flex items-center justify-center font-bold text-sm shrink-0">
                      {selectedPost.author[0]}
                    </div>
                    <div>
                      <h4 className="font-bold text-ink text-xs sm:text-sm">{selectedPost.author}</h4>
                      <p className="text-[10px] text-brand font-semibold">{selectedPost.authorRole}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {selectedPost.authorBio}
                  </p>
                  
                  <Link
                    to="/contact"
                    className="mt-4 w-full inline-flex items-center justify-center gap-1.5 rounded-xl bg-brand py-2 text-xs font-bold text-white transition-all hover:bg-orange-600 shadow-sm"
                  >
                    Ride With SoraRider <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* 3. Related Articles Card */}
                <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-extrabold text-ink text-sm sm:text-base flex items-center gap-2 mb-4 border-b border-border/60 pb-3">
                    <BookOpen className="h-5 w-5 text-brand" /> Related Articles
                  </h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter((p) => p.id !== selectedPost.id)
                      .slice(0, 3)
                      .map((post) => (
                        <div 
                          key={post.id}
                          onClick={() => handleSelectRelatedPost(post)}
                          className="flex items-center gap-3 cursor-pointer group"
                        >
                          <img 
                            src={post.image} 
                            alt={post.title} 
                            className="h-12 w-12 rounded-lg object-cover shrink-0 border border-border/50 group-hover:border-brand/40 transition-colors"
                          />
                          <div className="min-w-0">
                            <h4 className="text-xs font-bold text-ink leading-snug group-hover:text-brand transition-colors line-clamp-2">
                              {post.title}
                            </h4>
                            <p className="text-[10px] text-muted-foreground mt-0.5">{post.date}</p>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

              </div>
            </div>
          </motion.article>
        ) : (
          <motion.div key="grid-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {/* Standard Grid view Hero */}
            <PageHeader
              title="SoraRider Hub"
              subtitle="Expert tips to boost delivery earnings, Electric Vehicle maintenance guides, and stories from the road."
            />

            {/* Filters and Search Bar Row */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border">
                
                {/* Search Bar */}
                <div className="relative max-w-md w-full">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search articles..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-11 pr-4 py-2.5 rounded-full border border-border text-sm bg-card focus:outline-none focus:ring-2 focus:ring-brand/40"
                  />
                </div>

                {/* Categories Scrollable Row */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0 scroll-smooth">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all border ${
                        activeCategory === cat
                          ? "bg-brand text-white border-brand shadow-md"
                          : "bg-card text-muted-foreground border-border hover:border-brand/30 hover:text-brand"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Grid Content */}
            <section className="py-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {filteredPosts.length > 0 ? (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post, index) => (
                      <motion.div
                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex flex-col justify-between rounded-3xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300"
                      >
                        <div>
                          {/* Image Thumbnail */}
                          <div className="h-48 overflow-hidden relative border-b border-border">
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-md text-[10px] font-black uppercase text-brand border border-brand/10">
                              {post.category}
                            </div>
                          </div>

                          {/* Post Info */}
                          <div className="p-6">
                            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                              <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                              <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
                            </div>

                            <h3 className="text-lg font-extrabold text-ink leading-snug group-hover:text-brand transition-colors mb-3">
                              {post.title}
                            </h3>

                            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer Actions */}
                        <div className="px-6 pb-6 pt-3 border-t border-border/40 flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <div className="h-6 w-6 rounded-full bg-orange-100 text-brand flex items-center justify-center font-bold text-[10px]">
                              {post.author[0]}
                            </div>
                            <span className="text-xs font-semibold text-ink">{post.author}</span>
                          </div>

                          <button
                            onClick={() => setSelectedPost(post)}
                            className="text-xs font-bold text-brand flex items-center gap-1 group-hover:underline"
                          >
                            Read Article <ChevronRight className="h-4 w-4" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-card rounded-3xl border border-border max-w-md mx-auto">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-ink">No Articles Found</h3>
                    <p className="text-xs text-muted-foreground mt-1 px-4">
                      We couldn't find any articles matching your filters. Try selecting another category or resetting search.
                    </p>
                    <button
                      onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                      className="mt-6 rounded-full bg-brand/10 text-brand border border-brand/20 px-6 py-2 text-xs font-bold hover:bg-brand hover:text-white transition-all"
                    >
                      Show All Posts
                    </button>
                  </div>
                )}
              </div>
            </section>

            {/* Newsletter Grid Box */}
            <section className="py-12 border-t border-border bg-card">
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-linear-to-br from-[#F97316] to-[#EA580C] p-8 md:p-12 text-white relative overflow-hidden shadow-xl">
                  {/* Decorative mesh */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full" />
                  
                  <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
                        Newsletter
                      </span>
                      <h2 className="text-3xl font-black mb-3">Stay Ahead of the Curve</h2>
                      <p className="text-orange-100 text-sm leading-relaxed">
                        Join Jaipur's premier rider newsletter! Get weekly delivery strategies, EV battery tricks, high-demand restaurant hotspots, and seasonal SoraRider discount coupons directly in your inbox.
                      </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 md:p-8">
                      <AnimatePresence mode="wait">
                        {subscribed ? (
                          <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-center py-4"
                          >
                            <span className="inline-block p-2 bg-emerald-500 rounded-full text-white mb-3">
                              <Check className="h-6 w-6" strokeWidth={3} />
                            </span>
                            <h4 className="text-lg font-bold">You're Subscribed!</h4>
                            <p className="text-xs text-orange-100 mt-1">
                              We've sent the ultimate Earning Strategy PDF to your email. Check it out!
                            </p>
                          </motion.div>
                        ) : (
                          <form onSubmit={handleSubscribe} className="space-y-4">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-orange-100 mb-1.5">
                                Email Address
                              </label>
                              <input
                                type="email"
                                required
                                value={newsletterEmail}
                                onChange={(e) => setNewsletterEmail(e.target.value)}
                                placeholder="Enter your work email..."
                                className="w-full px-4 py-3 rounded-xl border border-white/20 bg-white/10 text-white text-sm placeholder:text-orange-200/60 focus:outline-none focus:ring-2 focus:ring-white"
                              />
                            </div>
                            <button
                              type="submit"
                              className="w-full rounded-xl bg-white text-brand font-black text-sm py-3 hover:bg-orange-50 transition-all flex items-center justify-center gap-2"
                            >
                              Subscribe Now <ArrowRight className="h-4 w-4" />
                            </button>
                          </form>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
