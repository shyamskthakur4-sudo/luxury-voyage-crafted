import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { FadeIn } from "../components/site/motion";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Megha Tours & Travel" },
      {
        name: "description",
        content:
          "Talk to a travel designer. Call +91 97843 49333 or email pintushrama8962@gmail.com.",
      },
      { property: "og:title", content: "Contact — Megha Tours & Travel" },
      {
        property: "og:description",
        content: "Talk to a travel designer today.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error("Please share your name and phone number.");
      return;
    }
    const lines = [
      `*New Travel Enquiry — Megha Tours & Travel*`,
      ``,
      `*Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      form.message ? `*Message:* ${form.message}` : null,
    ].filter(Boolean);
    const url = `https://wa.me/919784349333?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to send your enquiry…");
    setForm({ name: "", phone: "", email: "", message: "" });
  };


  return (
    <div>
      <section className="bg-gradient-soft py-24">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-primary">
              Contact
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold text-foreground sm:text-6xl">
              Let's plan your <span className="text-gradient-primary">next journey</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A travel designer will get back to you within a few hours.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <FadeIn className="lg:col-span-2">
              <div className="space-y-4">
                {[
                  { icon: Phone, label: "Phone", value: "+91 97843 49333", href: "tel:9784349333" },
                  { icon: MessageCircle, label: "WhatsApp", value: "+91 97843 49333", href: "https://wa.me/919784349333" },
                  { icon: Mail, label: "Email", value: "pintushrama8962@gmail.com", href: "mailto:pintushrama8962@gmail.com" },
                  { icon: MapPin, label: "Website", value: "meghatoursandtravel.com" },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href || "#"}
                    className="card-hover flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card"
                  >
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-elegant">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">
                        {c.label}
                      </p>
                      <p className="mt-0.5 truncate font-display text-base font-semibold text-foreground">
                        {c.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-3xl border border-border shadow-card">
                <iframe
                  title="Location"
                  src="https://www.google.com/maps?q=Jaipur%2C+Rajasthan&output=embed"
                  width="100%"
                  height="280"
                  loading="lazy"
                  className="block"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.15} className="lg:col-span-3">
              <form
                onSubmit={submit}
                className="rounded-3xl border border-border bg-card p-8 shadow-elegant"
              >
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Tell us about your dream trip
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We'll design an itinerary tailored to you.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} placeholder="Your name" />
                  <Field label="Phone" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+91" />
                  <div className="sm:col-span-2">
                    <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} placeholder="you@email.com" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                      Message
                    </label>
                    <textarea
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      placeholder="Where would you like to go?"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold sm:w-auto"
                >
                  Send Enquiry <Send className="h-4 w-4" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
      />
    </div>
  );
}
