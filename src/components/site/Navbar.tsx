import { Link } from "@tanstack/react-router";
import { Menu, X, Plane } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/packages", label: "Packages" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "glass py-3 shadow-card" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary shadow-elegant transition-transform group-hover:scale-110">
            <Plane className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-lg font-bold text-foreground">
              Megha Tours
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
              & Travel
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((it) => (
            <Link
              key={it.to}
              to={it.to}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: it.to === "/" }}
            >
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:9784349333"
            className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors"
          >
            +91 97843 49333
          </a>
          <Link
            to="/contact"
            className="btn-gold rounded-full px-5 py-2.5 text-sm font-semibold"
          >
            Book Now
          </Link>
        </div>

        <button
          className="lg:hidden rounded-lg p-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden animate-fade-in glass mx-4 mt-3 rounded-2xl p-4">
          <div className="flex flex-col gap-1">
            {navItems.map((it) => (
              <Link
                key={it.to}
                to={it.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary"
                activeProps={{ className: "text-primary bg-secondary" }}
                activeOptions={{ exact: it.to === "/" }}
              >
                {it.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="btn-gold mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
