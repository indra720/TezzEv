import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import posterLight from "../assets/tezzev-light.jpg";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Chatbot } from "@/components/Chatbot";
import { StickyMobileBar } from "@/components/StickyMobileBar";
import { Toaster } from "sonner";
import { TEZZ_CONFIG } from "@/lib/config";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 text-[#081330]">
      <div className="max-w-md text-center p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="font-heading text-5xl font-extrabold text-blue-600">404</h1>
        <h2 className="mt-3 font-heading text-xl font-bold text-slate-800">Page not found</h2>
        <p className="mt-2 text-sm text-slate-600">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-6">
          <Link to="/" className="btn-primary text-sm py-2.5 px-6">
            Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-white px-4 text-[#081330]">
      <div className="max-w-md text-center p-8 rounded-2xl border border-slate-200 shadow-sm">
        <h1 className="font-heading text-xl font-bold text-slate-800">Something went wrong</h1>
        <p className="mt-2 text-sm text-slate-600">
          Unable to load this section. Please try again.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-primary text-sm py-2 px-5"
          >
            Retry
          </button>
          <a href="/" className="btn-secondary text-sm py-2 px-5">
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "TezzEV — Go Green. Go Far. Ride TEZZ." },
      {
        name: "description",
        content:
          "Affordable electric scooter rentals for delivery riders and city commuters in Jaipur. Zero petrol expense, free maintenance, battery swapping.",
      },
      { name: "author", content: "TezzEV Mobility" },
      { property: "og:title", content: "TezzEV — Go Green. Go Far. Ride TEZZ." },
      {
        property: "og:description",
        content: "Electric scooter rentals for delivery riders. Launching soon in Jaipur.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: posterLight },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <HeadContent />
      </head>
      <body className="bg-white text-[#081330] font-sans antialiased min-h-screen">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative flex min-h-screen flex-col bg-white text-[#081330] overflow-x-hidden w-full max-w-full">
        {/* Clean Sticky Header */}
        <Navbar />

        {/* Multi-Page Route Outlet */}
        <main className="flex-1 pb-16 sm:pb-0">
          <Outlet />
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Mobile Sticky Bar (Waitlist + WhatsApp) */}
        <StickyMobileBar />

        {/* Interactive Assistant */}
        <Chatbot />

        {/* Notification Toaster */}
        <Toaster position="top-right" theme="light" richColors />
      </div>
    </QueryClientProvider>
  );
}
