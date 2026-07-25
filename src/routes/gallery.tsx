import { createFileRoute } from "@tanstack/react-router";
import { Play } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "../components/site/motion";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Megha Tours & Travel" },
      {
        name: "description",
        content:
          "A visual diary of our travellers' journeys — beaches, mountains, cities and hidden gems.",
      },
      { property: "og:title", content: "Gallery — Megha Tours & Travel" },
      {
        property: "og:description",
        content: "Moments from our travellers around the world.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  return (
    <div>
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Gallery
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
              Postcards from <span className="text-gradient-primary">our travellers</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A curated collection of moments captured across the globe.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4 [&>*]:mb-5">
            {IMG.gallery.map((src, i) => (
              <StaggerItem key={i} className="break-inside-avoid">
                <div className="card-hover overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={src}
                    alt="Travel gallery"
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-700 hover:scale-110 ${
                      i % 3 === 0 ? "h-80" : i % 3 === 1 ? "h-64" : "h-96"
                    }`}
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-3xl shadow-elegant">
              <img
                src={IMG.plane}
                alt="Travel film"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero" />
              <button className="absolute inset-0 grid place-items-center">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-gold text-navy shadow-gold transition hover:scale-110">
                  <Play className="h-8 w-8 fill-current" />
                </span>
              </button>
              <div className="absolute inset-x-0 bottom-0 p-8 text-white">
                <p className="text-xs uppercase tracking-[0.25em] text-gold">Watch</p>
                <h3 className="mt-2 font-display text-3xl font-bold">
                  A year of journeys, in 90 seconds
                </h3>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
