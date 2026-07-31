import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function FloatingButtons() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/919119303967"
        target="_blank"
        rel="noreferrer"
        className="grid h-13 w-13 h-13 place-items-center rounded-full bg-[#25D366] text-white shadow-elegant transition hover:scale-110"
        style={{ height: 52, width: 52 }}
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+919119303967"
        className="grid place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant transition hover:scale-110"
        style={{ height: 52, width: 52 }}
        aria-label="Call"
      >
        <Phone className="h-6 w-6" />
      </a>
      {show && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="grid place-items-center rounded-full bg-gradient-gold text-navy shadow-gold transition hover:scale-110 animate-fade-in"
          style={{ height: 52, width: 52 }}
          aria-label="Back to top"
        >
          <ArrowUp className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
