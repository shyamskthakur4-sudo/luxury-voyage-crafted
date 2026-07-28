import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, Star } from "lucide-react";
import { useMemo, useState } from "react";
import { FadeIn } from "../components/site/motion";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Holiday Packages — Megha Tours & Travel" },
      {
        name: "description",
        content:
          "Handpicked domestic, international, religious, family and honeymoon holiday packages by Megha Tours & Travel.",
      },
      { property: "og:title", content: "Holiday Packages — Megha Tours & Travel" },
      { property: "og:description", content: "Curated packages, thoughtfully priced." },
      { property: "og:url", content: "/packages" },
    ],
    links: [{ rel: "canonical", href: "/packages" }],
  }),
  component: Packages,
});

type Cat = "All" | "Domestic" | "International" | "Religious" | "Family" | "Honeymoon";

const packages: {
  title: string;
  category: Exclude<Cat, "All">;
  price: string;
  duration: string;
  highlights: string[];
  img: string;
}[] = [
  { title: "Kashmir Paradise", category: "Domestic", price: "22,999", duration: "5N / 6D", highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam valleys"], img: IMG.destinations.Kashmir },
  { title: "Goan Beach Escape", category: "Domestic", price: "12,499", duration: "3N / 4D", highlights: ["Beach resort", "Cruise dinner", "Water sports"], img: IMG.destinations.Goa },
  { title: "Dubai Luxe", category: "International", price: "54,999", duration: "5N / 6D", highlights: ["Burj Khalifa", "Desert safari", "5-star stay"], img: IMG.destinations.Dubai },
  { title: "Bali Bliss", category: "International", price: "49,999", duration: "6N / 7D", highlights: ["Private villa", "Ubud & Uluwatu", "Spa retreat"], img: IMG.destinations.Bali },
  { title: "Singapore & Malaysia", category: "International", price: "72,999", duration: "6N / 7D", highlights: ["Sentosa", "Genting Highlands", "Universal Studios"], img: IMG.destinations.Singapore },
  { title: "European Grand Tour", category: "International", price: "1,89,999", duration: "10N / 11D", highlights: ["Paris • Swiss • Rome", "Eiffel dinner", "Alps train"], img: IMG.destinations.Europe },
  { title: "Char Dham Yatra", category: "Religious", price: "34,999", duration: "9N / 10D", highlights: ["Kedarnath", "Badrinath", "VIP darshan"], img: IMG.packages.Pilgrimage },
  { title: "Vaishno Devi Special", category: "Religious", price: "14,999", duration: "3N / 4D", highlights: ["Helicopter option", "Guided yatra"], img: IMG.packages.Pilgrimage },
  { title: "Family Kerala", category: "Family", price: "28,999", duration: "5N / 6D", highlights: ["Houseboat", "Munnar hills", "Kid friendly"], img: IMG.packages.Family },
  { title: "Rajasthan Royal", category: "Family", price: "31,999", duration: "6N / 7D", highlights: ["Palace stays", "Camel safari"], img: IMG.packages.Family },
  { title: "Maldives Honeymoon", category: "Honeymoon", price: "94,999", duration: "4N / 5D", highlights: ["Overwater villa", "Candle dinner", "Sunset cruise"], img: IMG.packages.Honeymoon },
  { title: "Andaman Romance", category: "Honeymoon", price: "42,999", duration: "5N / 6D", highlights: ["Radhanagar beach", "Snorkelling"], img: IMG.packages.Honeymoon },
];

const categories: Cat[] = ["All", "Domestic", "International", "Religious", "Family", "Honeymoon"];

function Packages() {
  const [active, setActive] = useState<Cat>("All");
  const list = useMemo(() => {
    if (active === "All") return packages;
    const key = active.toLowerCase();
    const filtered = packages.filter((p) => p.category.toLowerCase() === key);
    return filtered.length > 0 ? filtered : packages;
  }, [active]);


  return (
    <div>
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Holiday packages
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
              Curated escapes <span className="text-gradient-primary">worth remembering</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From weekend getaways to bucket-list world tours — pick a
              starting point, we'll design the rest.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mb-10 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                  active === c
                    ? "bg-gradient-primary text-primary-foreground shadow-elegant"
                    : "border border-border bg-card text-foreground hover:border-primary"
                }`}
              >
                {c}
              </button>
            ))}
          </FadeIn>

          <Stagger key={active} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <StaggerItem key={p.title}>
                <div className="card-hover group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute left-4 top-4 rounded-full glass px-3 py-1 text-xs font-semibold text-foreground">
                      {p.category}
                    </div>
                    <div className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-navy shadow-gold">
                      <Star className="h-3 w-3 fill-current" /> 4.9
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {p.duration}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> India & beyond
                      </span>
                    </div>
                    <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                      {p.title}
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gold" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex items-end justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground">Starting from</p>
                        <p className="font-display text-2xl font-bold text-gradient-primary">
                          ₹{p.price}
                        </p>
                      </div>
                      <Link
                        to="/contact"
                        className="btn-gold inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold"
                      >
                        Book Now <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
