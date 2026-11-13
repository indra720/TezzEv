import { motion } from "motion/react";
import { CheckSquare, Star, FileText } from "lucide-react";

const docs = [
  "Valid Driving License",
  "Aadhaar Card",
  "PAN Card",
  "Bank Account Details",
  "Passport Size Photo",
];

const reviews = [
  {
    name: "Rajesh Kumar",
    city: "Jaipur",
    text: "SoraRider is the best platform to start earning. The bikes are in great condition and support is excellent!",
  },
  {
    name: "Imran Khan",
    city: "Jaipur",
    text: "Very easy process and affordable daily rent. Highly recommended!",
  },
  {
    name: "Sunil Meena",
    city: "Jaipur",
    text: "I am earning good income with SoraRider. Best decision!",
  },
];

export function Requirements() {
  return (
    <section className="py-10 sm:py-6">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start gap-12">
          {/* 1. Requirements List */}
          <div className="w-full flex flex-col md:flex-row gap-8 lg:w-1/3 shrink-0">
            <ul className="mt-6 space-y-4">
              <h2 className="inline-block pb-1 text-2xl font-extrabold tracking-tight sm:text-3xl uppercase text-ink">
                Requirements
              </h2>
              {docs.map((d) => (
                <li key={d} className="flex items-center gap-3 text-base text-ink/80">
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-md bg-brand text-white">
                    <CheckSquare className="h-5 w-5" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
            <div className="w-full lg:w-auto flex justify-center pt-0 lg:pt-18 transform rotate-12">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm inline-block">
                <FileText className="h-42 w-28 text-brand/10 rotate-12" />
              </div>
            </div>
          </div>

          {/* 2. Clipboard Graphic - Aligned with the start of the lists/content */}

          {/* 3. Reviews Section */}
          <div className="w-full lg:flex-1">
            <h2 className="text-2xl font-bold tracking-tight text-ink sm:text-3xl uppercase">
              What Our Riders Say
            </h2>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl border  border-border bg-card p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-0.5 text-brand">
                      {[...Array(5)].map((_, k) => (
                        <Star key={k} className="h-4 w-4 fill-brand" />
                      ))}
                    </div>
                    <p className="mt-3 text-sm text-ink/80 leading-relaxed">{r.text}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border/50 text-sm">
                    <p className="font-bold text-ink">— {r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.city}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
