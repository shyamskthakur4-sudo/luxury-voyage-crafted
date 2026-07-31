import { Link } from "@tanstack/react-router";
import { Plane, Phone, Mail, MapPin, Globe } from "lucide-react";


export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy text-navy-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(circle at 20% 0%, oklch(0.58 0.14 250 / 0.6), transparent 45%), radial-gradient(circle at 80% 100%, oklch(0.78 0.13 85 / 0.35), transparent 45%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-gold shadow-gold">
                <Plane className="h-5 w-5 text-navy" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-xl font-bold">
                  Megha Tours
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
                  & Travel
                </span>
              </span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
              Your trusted travel partner — crafting unforgettable journeys
              across the globe with elegance, ease and expertise.
            </p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/packages", label: "Packages" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-gold transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-navy-foreground/75">
              {[
                "Flight Booking",
                "Hotel Reservation",
                "Visa Assistance",
                "Holiday Packages",
                "Corporate Travel",
                "Religious Tours",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="hover:text-gold transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-gold">
              Get in Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-navy-foreground/75">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <a href="tel:9784349333" className="hover:text-gold">
                  +91 97843 49333
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <a
                  href="mailto:pintushrama8962@gmail.com"
                  className="hover:text-gold break-all"
                >
                  pintushrama8962@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <Globe className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <span>meghatoursandtravel.com</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
                <span>B45 / Shyam colony, Ram Mandir, Sitamarhi Tonk road, Jaipur</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-navy-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} Megha Tours & Travel. All rights reserved.</p>
          <p>Crafted with care for discerning travellers.</p>
        </div>
      </div>
    </footer>
  );
}
