import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, Heart, Award, Users, Globe2 } from "lucide-react";
import { FadeIn, Stagger, StaggerItem } from "../components/site/motion";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Megha Tours & Travel" },
      {
        name: "description",
        content:
          "Meet the team behind Megha Tours & Travel — 15+ years of crafting luxurious, hassle-free journeys around the world.",
      },
      { property: "og:title", content: "About — Megha Tours & Travel" },
      {
        property: "og:description",
        content: "15+ years of crafting luxurious, hassle-free journeys.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const timeline = [
  { year: "2009", title: "The Beginning", desc: "Founded with a simple vision: make travel effortless and elegant." },
  { year: "2014", title: "Going International", desc: "Launched curated holiday packages across 20+ countries." },
  { year: "2019", title: "10,000 Journeys", desc: "Celebrated crossing 10,000 successful trips." },
  { year: "2024", title: "Luxury Redefined", desc: "Introduced premium concierge and bespoke travel design." },
];

function About() {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-soft py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
                About us
              </p>
              <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
                Journeys designed <span className="text-gradient-primary">with heart</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                For over 15 years, Megha Tours & Travel has been the trusted
                travel partner for families, honeymooners, pilgrims and
                corporates. We blend meticulous planning with warm,
                personalised service — so you only need to pack, and enjoy.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Award, label: "Award-winning" },
                  { icon: Users, label: "10k+ travellers" },
                  { icon: Globe2, label: "50+ countries" },
                ].map((b) => (
                  <div
                    key={b.label}
                    className="flex items-center gap-3 rounded-2xl border border-border bg-card p-4 shadow-card"
                  >
                    <b.icon className="h-5 w-5 text-gold" />
                    <p className="text-sm font-semibold text-foreground">{b.label}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="relative">
                <img
                  src={IMG.team}
                  alt="Megha Tours team"
                  className="rounded-3xl object-cover shadow-elegant"
                />
                <div className="glass absolute -bottom-6 -left-6 hidden rounded-2xl p-5 shadow-elegant sm:block">
                  <p className="font-display text-3xl font-bold text-gradient-primary">15+</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">
                    Years of trust
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 md:grid-cols-3">
            {[
              { icon: Target, title: "Our Mission", desc: "Make premium travel accessible, effortless and unforgettable." },
              { icon: Eye, title: "Our Vision", desc: "Be South Asia's most-loved luxury travel concierge." },
              { icon: Heart, title: "Our Values", desc: "Integrity, care and craftsmanship in every itinerary." },
            ].map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-hover h-full rounded-3xl border border-border bg-card p-8 shadow-card">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-gold text-navy shadow-gold">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {v.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Our journey
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              15 years, one promise
            </h2>
          </FadeIn>

          <div className="relative mt-16">
            <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-gold to-primary md:left-1/2" />
            {timeline.map((t, i) => (
              <FadeIn
                key={t.year}
                delay={i * 0.1}
                className={`relative mb-12 flex md:justify-${i % 2 === 0 ? "start" : "end"}`}
              >
                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                  }`}
                >
                  <div className="rounded-3xl border border-border bg-card p-6 shadow-card">
                    <p className="font-display text-3xl font-bold text-gradient-primary">
                      {t.year}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-bold text-foreground">
                      {t.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
                  </div>
                </div>
                <span className="absolute left-4 top-6 -translate-x-1/2 md:left-1/2">
                  <span className="block h-4 w-4 rounded-full bg-gradient-gold shadow-gold ring-4 ring-background" />
                </span>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Our office
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              A studio, not a call centre
            </h2>
          </FadeIn>
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {IMG.gallery.slice(0, 6).map((src, i) => (
              <StaggerItem key={i}>
                <div className="card-hover overflow-hidden rounded-3xl shadow-card">
                  <img
                    src={src}
                    alt="Office and travel gallery"
                    loading="lazy"
                    className="h-64 w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>
    </div>
  );
}
