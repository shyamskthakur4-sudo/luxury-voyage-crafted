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
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Navbar } from "../components/site/Navbar";
import { Footer } from "../components/site/Footer";
import { FloatingButtons } from "../components/site/FloatingButtons";
import { Toaster } from "../components/ui/sonner";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-soft px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-bold text-gradient-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-semibold text-foreground">
          Page not found
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for has drifted off the map.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="btn-gold inline-flex items-center rounded-full px-6 py-3 text-sm font-semibold"
          >
            Return home
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
    <div className="flex min-h-screen items-center justify-center bg-gradient-soft px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground">
          Something went off-course
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again or return home while we get things back on track.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="btn-gold rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Try again
          </button>
          <a
            href="/"
            className="rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
          >
            Go home
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
      { title: "Megha Tours & Travel — Luxury Travel, Effortlessly Yours" },
      {
        name: "description",
        content:
          "Explore the world with confidence. Curated flights, hotels, visas and holiday packages by Megha Tours & Travel.",
      },
      { name: "author", content: "Megha Tours & Travel" },
      { name: "theme-color", content: "#0F4C81" },
      { property: "og:site_name", content: "Megha Tours & Travel" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Megha Tours & Travel — Luxury Travel, Effortlessly Yours" },
      { name: "twitter:title", content: "Megha Tours & Travel — Luxury Travel, Effortlessly Yours" },
      { property: "og:description", content: "Explore the world with confidence. Curated flights, hotels, visas and holiday packages by Megha Tours & Travel." },
      { name: "twitter:description", content: "Explore the world with confidence. Curated flights, hotels, visas and holiday packages by Megha Tours & Travel." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/4MCb9YYGoaaFQgioObjP7lxRaxH3/social-images/social-1784997676241-Screenshot_25-7-2026_221055_lovable.dev.webp" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/4MCb9YYGoaaFQgioObjP7lxRaxH3/social-images/social-1784997676241-Screenshot_25-7-2026_221055_lovable.dev.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&family=Poppins:wght@400;500;600;700;800;900&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          name: "Megha Tours & Travel",
          url: "https://meghatoursandtravel.com",
          telephone: "+91-9784349333",
          email: "pintushrama8962@gmail.com",
        }),
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
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
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
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="pt-20">
          <Outlet />
        </main>
        <Footer />
        <FloatingButtons />
        <Toaster />
      </div>
    </QueryClientProvider>
  );
}
