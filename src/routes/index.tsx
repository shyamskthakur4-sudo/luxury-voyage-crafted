import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Plane,
  Train,
  Bus,
  Hotel,
  Car,
  FileCheck,
  MapPin,
  Globe,
  Landmark,
  Briefcase,
  ShieldCheck,
  Wallet,
  Headphones,
  Clock,
  Sparkles,
  ThumbsUp,
  ArrowRight,
  Calendar,
  Users,
} from "lucide-react";
import { useRef } from "react";
import { FadeIn, Stagger, StaggerItem, Counter } from "../components/site/motion";
import { IMG } from "../lib/images";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Megha Tours & Travel — Luxury Travel, Effortlessly Yours" },
      {
        name: "description",
        content:
          "Explore the world with confidence. Curated flights, hotels, visas and holiday packages by Megha Tours & Travel.",
      },
      {
        property: "og:title",
        content: "Megha Tours & Travel — Luxury Travel, Effortlessly Yours",
      },
      {
        property: "og:description",
        content:
          "Explore the world with confidence. Curated flights, hotels, visas and holiday packages by Megha Tours & Travel.",
      },
      { property: "og:url", content: "/" },
      { property: "og:image", content: IMG.hero },
      { name: "twitter:image", content: IMG.hero },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const whyUs = [
  { icon: Wallet, title: "Best Prices", desc: "Handpicked deals with transparent, all-inclusive pricing." },
  { icon: ShieldCheck, title: "Trusted Service", desc: "15+ years of trusted travel expertise." },
  { icon: Headphones, title: "24/7 Support", desc: "A dedicated concierge, always a call away." },
  { icon: FileCheck, title: "Fast Visa Assistance", desc: "Smooth documentation and quick approvals." },
  { icon: Sparkles, title: "Custom Tour Packages", desc: "Journeys designed around you, not the other way around." },
  { icon: ThumbsUp, title: "100% Satisfaction", desc: "Thousands of 5-star reviews and counting." },
];

const services = [
  { icon: Plane, title: "Flight Booking" },
  { icon: Train, title: "Train Booking" },
  { icon: Bus, title: "Bus Booking" },
  { icon: Hotel, title: "Hotel Booking" },
  { icon: Car, title: "Taxi & Car Rental" },
  { icon: FileCheck, title: "Visa Assistance" },
  { icon: MapPin, title: "Domestic Tours" },
  { icon: Globe, title: "International Holidays" },
  { icon: Landmark, title: "Religious Tours" },
  { icon: Briefcase, title: "Corporate Travel" },
];

const destinations = [
  { name: "Dubai", tagline: "Skylines & desert luxury" },
  { name: "Bali", tagline: "Tropical serenity" },
  { name: "Goa", tagline: "Sunlit beaches" },
  { name: "Kashmir", tagline: "Paradise on earth" },
  { name: "Thailand", tagline: "Islands & culture" },
  { name: "Singapore", tagline: "Modern marvels" },
  { name: "Europe", tagline: "Timeless elegance" },
];

const packages = [
  { title: "Family Tours", price: "24,999", nights: "4N / 5D", key: "Family" },
  { title: "Honeymoon Tours", price: "39,999", nights: "5N / 6D", key: "Honeymoon" },
  { title: "Adventure Tours", price: "19,999", nights: "3N / 4D", key: "Adventure" },
  { title: "Pilgrimage Tours", price: "17,499", nights: "4N / 5D", key: "Pilgrimage" },
  { title: "International Tours", price: "69,999", nights: "6N / 7D", key: "International" },
  { title: "Weekend Getaways", price: "9,999", nights: "2N / 3D", key: "Weekend" },
];



function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 800], [0, 200]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0.4]);

  return (
    <div>
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[92vh] overflow-hidden">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <img
            src={IMG.hero}
            alt="Luxury travel destination"
            className="h-[110%] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Luxury travel, effortlessly yours
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-4xl font-display text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl"
          >
            Explore the World with{" "}
            <span className="text-gradient-gold">Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 max-w-2xl text-lg text-white/85"
          >
            Megha Tours & Travel is your trusted travel partner — crafting
            smooth, memorable and hassle-free journeys, wherever you dream of
            going.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              to="/packages"
              className="btn-gold inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:9784349333"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Call Now
            </a>
          </motion.div>

          {/* Floating glass booking card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-14 max-w-4xl"
          >
            <div className="glass rounded-3xl p-5 sm:p-6 shadow-elegant animate-float">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <BookingField icon={MapPin} label="Destination" value="Where to?" />
                <BookingField icon={Calendar} label="Departure" value="Add date" />
                <BookingField icon={Users} label="Travellers" value="2 Adults" />
                <Link
                  to="/contact"
                  className="btn-gold inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold"
                >
                  Search Trips <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <Section
        eyebrow="Why choose us"
        title="Travel, redefined by details"
        subtitle="Six reasons discerning travellers pick Megha Tours & Travel."
      >
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((f) => (
            <StaggerItem key={f.title}>
              <div className="card-hover group h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.desc}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SERVICES */}
      <Section
        eyebrow="Our services"
        title="Everything for the modern traveller"
        subtitle="One trusted partner for every leg of your journey."
        bg="bg-gradient-soft"
      >
        <Stagger className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {services.map((s) => (
            <StaggerItem key={s.title}>
              <div className="card-hover group h-full rounded-2xl border border-border bg-card p-6 text-center shadow-card">
                <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-accent text-primary transition-all group-hover:bg-gradient-gold group-hover:text-navy">
                  <s.icon className="h-6 w-6" />
                </div>
                <p className="font-display text-sm font-semibold text-foreground">
                  {s.title}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* DESTINATIONS */}
      <Section
        eyebrow="Popular destinations"
        title="Where would you like to wake up?"
        subtitle="Handpicked destinations loved by our travellers."
      >
        <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {destinations.map((d) => (
            <StaggerItem key={d.name}>
              <div className="card-hover group relative h-80 overflow-hidden rounded-3xl shadow-card">
                <img
                  src={IMG.destinations[d.name]}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold">
                    {d.tagline}
                  </p>
                  <h3 className="mt-1 font-display text-2xl font-bold">
                    {d.name}
                  </h3>
                  <Link
                    to="/packages"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition group-hover:text-gold"
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PACKAGES */}
      <Section
        eyebrow="Holiday packages"
        title="Curated escapes, thoughtfully priced"
        bg="bg-gradient-soft"
      >
        <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((p) => (
            <StaggerItem key={p.title}>
              <div className="card-hover group h-full overflow-hidden rounded-3xl border border-border bg-card shadow-card">
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={IMG.packages[p.key]}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-gradient-gold px-3 py-1 text-xs font-semibold text-navy shadow-gold">
                    {p.nights}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {p.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Starting from
                  </p>
                  <p className="mt-1 font-display text-3xl font-bold text-gradient-primary">
                    ₹{p.price}
                  </p>
                  <Link
                    to="/packages"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-primary-glow"
                  >
                    Book Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* STATS */}
      <section className="relative overflow-hidden bg-navy py-24 text-navy-foreground">
        <div
          aria-hidden
          className="absolute inset-0 opacity-25"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, oklch(0.58 0.14 250 / 0.6), transparent 50%), radial-gradient(circle at 70% 70%, oklch(0.78 0.13 85 / 0.35), transparent 50%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Why customers love us
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Trusted by thousands of happy travellers
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: 5000, s: "+", label: "Happy Travellers" },
              { n: 15, s: "+", label: "Years Experience" },
              { n: 100, s: "+", label: "Destinations" },
              { n: 24, s: "/7", label: "Concierge Support" },
            ].map((c, i) => (
              <FadeIn key={i} delay={i * 0.1} className="text-center">
                <p className="font-display text-5xl font-bold text-gradient-gold sm:text-6xl">
                  <Counter to={c.n} suffix={c.s} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-navy-foreground/70">
                  {c.label}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>




      {/* CTA */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0">
          <img
            src={IMG.plane}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center text-white">
          <FadeIn>
            <Clock className="mx-auto mb-4 h-8 w-8 text-gold" />
            <h2 className="font-display text-4xl font-bold sm:text-5xl lg:text-6xl">
              Ready for Your Next{" "}
              <span className="text-gradient-gold">Journey?</span>
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Book your dream vacation today with Megha Tours & Travel.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="btn-gold inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold"
              >
                Plan My Trip <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:9784349333"
                className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
              >
                Talk to an expert
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}

function BookingField({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
          {label}
        </p>
        <p className="truncate font-display text-sm font-semibold text-foreground">
          {value}
        </p>
      </div>
    </div>
  );
}

function Section({
  eyebrow,
  title,
  subtitle,
  children,
  bg = "",
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bg?: string;
}) {
  return (
    <section className={`py-24 ${bg}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-base text-muted-foreground">{subtitle}</p>
          )}
        </FadeIn>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}
