import { createFileRoute } from "@tanstack/react-router";
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
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { FadeIn, Stagger, StaggerItem } from "../components/site/motion";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Megha Tours & Travel" },
      {
        name: "description",
        content:
          "Flights, hotels, visas, tours and corporate travel — end-to-end services from Megha Tours & Travel.",
      },
      { property: "og:title", content: "Services — Megha Tours & Travel" },
      {
        property: "og:description",
        content: "End-to-end travel services, curated for you.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const services = [
  { icon: Plane, title: "Flight Booking", desc: "Best fares on domestic and international flights with premium cabin support." },
  { icon: Train, title: "Train Booking", desc: "Tatkal, premium and confirmed rail bookings across India." },
  { icon: Bus, title: "Bus Booking", desc: "Volvo, sleeper and luxury coach reservations pan-India." },
  { icon: Hotel, title: "Hotel Reservation", desc: "From boutique stays to five-star luxury, curated worldwide." },
  { icon: Car, title: "Taxi & Car Rental", desc: "Chauffeured cars, SUVs and airport transfers on demand." },
  { icon: FileCheck, title: "Visa Assistance", desc: "Documentation, appointments and fast-tracked approvals." },
  { icon: MapPin, title: "Domestic Tours", desc: "Kashmir, Kerala, Goa, Rajasthan and every hidden gem in between." },
  { icon: Globe, title: "International Tours", desc: "Handcrafted holidays across Asia, Europe, the Americas and more." },
  { icon: Landmark, title: "Religious Tours", desc: "Char Dham, Vaishno Devi, Amarnath, Hajj and Umrah packages." },
  { icon: Briefcase, title: "Corporate Travel", desc: "MICE, incentive travel and executive itineraries with SLA support." },
];

const faqs = [
  { q: "How do I book a package?", a: "You can book online, call us at +91 91193 03967 or WhatsApp us. Our travel designer will craft an itinerary for you within 24 hours." },
  { q: "Do you offer EMI or payment plans?", a: "Yes. We offer flexible EMI options on select credit cards and partner instalment plans." },
  { q: "Are your packages customisable?", a: "Absolutely. Every itinerary is tailored to your dates, interests, dietary needs and pace of travel." },
  { q: "What about visa support?", a: "We handle end-to-end documentation, appointments and courier logistics for over 50 countries." },
  { q: "Is 24/7 support included?", a: "Yes. Every booking comes with a dedicated concierge reachable round the clock during your travel." },
];

function Services() {
  return (
    <div>
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Our services
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
              A concierge for <span className="text-gradient-primary">every journey</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              From boarding pass to bespoke villa — Megha Tours & Travel
              handles every detail, so you don't have to.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Stagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <div className="card-hover group h-full rounded-3xl border border-border bg-card p-7 shadow-card">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant transition-transform group-hover:scale-110">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {s.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-foreground sm:text-5xl">
              Questions, answered
            </h2>
          </FadeIn>
          <FadeIn delay={0.1} className="mt-12">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((f, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="rounded-2xl border border-border bg-card px-5 shadow-card"
                >
                  <AccordionTrigger className="text-left font-display text-base font-semibold">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
