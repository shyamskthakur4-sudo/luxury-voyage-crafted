import { createFileRoute } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  Calendar as CalendarIcon,
  Globe,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CountStepper } from "@/components/site/HeroSearch";
import { FadeIn } from "@/components/site/motion";
import { BUDGET_RANGES, PACKAGE_TYPES } from "@/lib/destinations";
import { cn } from "@/lib/utils";


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

type FormState = {
  name: string;
  phone: string;
  email: string;
  destination: string;
  departure?: Date;
  returnDate?: Date;
  adults: number;
  children: number;
  infants: number;
  packageType: string;
  budget: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  phone: "",
  email: "",
  destination: "",
  departure: undefined,
  returnDate: undefined,
  adults: 2,
  children: 0,
  infants: 0,
  packageType: "",
  budget: "",
  message: "",
};

function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);

  const setField = <K extends keyof FormState>(k: K, v: FormState[K]) =>
    setForm((f) => ({ ...f, [k]: v }));


  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name.trim()) return toast.error("Please enter your full name.");
    if (!/^[+\d\s\-()]{7,}$/.test(form.phone.trim()))
      return toast.error("Please enter a valid mobile number.");
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return toast.error("Please enter a valid email address.");
    if (!form.destination) return toast.error("Please choose a destination.");
    if (!form.departure) return toast.error("Please pick a departure date.");

    const lines = [
      `*New Travel Enquiry — Megha Tours & Travel*`,
      ``,
      `*Name:* ${form.name}`,
      `*Mobile:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : null,
      `*Destination:* ${form.destination}`,
      `*Departure:* ${format(form.departure!, "PPP")}`,
      form.returnDate ? `*Return:* ${format(form.returnDate, "PPP")}` : null,
      `*Travellers:* ${form.adults} Adult(s), ${form.children} Child(ren), ${form.infants} Infant(s)`,
      form.packageType ? `*Package Type:* ${form.packageType}` : null,
      form.budget ? `*Budget:* ${form.budget}` : null,
      form.message ? `\n*Special Requirements:*\n${form.message}` : null,
    ].filter(Boolean);

    const url = `https://wa.me/919119303967?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp to send your enquiry…");
    setForm(initialForm);
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
                  { icon: MessageCircle, label: "WhatsApp", value: "+91 91193 03967", href: "https://wa.me/919119303967" },
                  { icon: Mail, label: "Email", value: "pintushrama8962@gmail.com", href: "mailto:pintushrama8962@gmail.com" },
                  { icon: Globe, label: "Website", value: "meghatoursandtravel.com" },
                  { icon: MapPin, label: "Address", value: "B45 / Shyam colony, Ram Mandir, Sitamarhi Tonk road, Jaipur" },
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
                  src="https://www.google.com/maps?q=26.829815%2C75.797081&output=embed"
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
                  Fill in the details — we'll craft an itinerary tailored to you and send a
                  personalised quote via WhatsApp.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Full Name"
                    required
                    value={form.name}
                    onChange={(v) => setField("name", v)}
                    placeholder="Your name"
                  />
                  <Field
                    label="Mobile Number"
                    required
                    type="tel"
                    value={form.phone}
                    onChange={(v) => setField("phone", v)}
                    placeholder="+91 98765 43210"
                  />
                  <div className="sm:col-span-2">
                    <Field
                      label="Email"
                      type="email"
                      value={form.email}
                      onChange={(v) => setField("email", v)}
                      placeholder="you@email.com (optional)"
                    />
                  </div>

                  {/* Destination */}
                  <Field
                    label="Destination"
                    required
                    value={form.destination}
                    onChange={(v) => setField("destination", v)}
                    placeholder="e.g. Dubai, Kerala, Europe"
                  />


                  {/* Package Type */}
                  <div>
                    <FieldLabel>Package Type</FieldLabel>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {PACKAGE_TYPES.map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() =>
                            setField("packageType", form.packageType === t ? "" : t)
                          }
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                            form.packageType === t
                              ? "border-transparent bg-gradient-primary text-primary-foreground shadow-elegant"
                              : "border-border bg-background text-foreground hover:border-primary",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dates */}
                  <DatePickerField
                    label="Departure Date"
                    required
                    value={form.departure}
                    onChange={(d) => setField("departure", d)}
                    minDate={new Date()}
                  />
                  <DatePickerField
                    label="Return Date"
                    value={form.returnDate}
                    onChange={(d) => setField("returnDate", d)}
                    minDate={form.departure || new Date()}
                  />

                  {/* Travellers */}
                  <div className="sm:col-span-2">
                    <FieldLabel>Travellers</FieldLabel>
                    <div className="mt-2 grid gap-3 rounded-2xl border border-border bg-background p-4 sm:grid-cols-3">
                      {(
                        [
                          { key: "adults", label: "Adults", hint: "12+ yrs", min: 1 },
                          { key: "children", label: "Children", hint: "2–11 yrs", min: 0 },
                          { key: "infants", label: "Infants", hint: "Under 2", min: 0 },
                        ] as const
                      ).map((row) => (
                        <div key={row.key} className="flex items-center justify-between gap-2">
                          <div>
                            <p className="font-display text-sm font-semibold text-foreground">
                              {row.label}
                            </p>
                            <p className="text-xs text-muted-foreground">{row.hint}</p>
                          </div>
                          <CountStepper
                            value={form[row.key]}
                            min={row.min}
                            onChange={(v) => setField(row.key, v)}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="sm:col-span-2">
                    <FieldLabel>Budget Range (per person)</FieldLabel>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {BUDGET_RANGES.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setField("budget", form.budget === b ? "" : b)}
                          className={cn(
                            "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition",
                            form.budget === b
                              ? "border-transparent bg-gradient-gold text-navy shadow-gold"
                              : "border-border bg-background text-foreground hover:border-primary",
                          )}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <FieldLabel>Special Requirements / Message</FieldLabel>
                    <textarea
                      value={form.message}
                      onChange={(e) => setField("message", e.target.value)}
                      rows={4}
                      placeholder="Tell us about dietary needs, accessibility, preferred hotels, celebrations…"
                      className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-primary"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-gold mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 text-sm font-semibold sm:w-auto"
                >
                  Send Inquiry via WhatsApp <MessageCircle className="h-4 w-4" />
                </button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}

function FieldLabel({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <label className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
      {children}
      {required && <span className="ml-1 text-primary">*</span>}
    </label>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
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

function DatePickerField({
  label,
  value,
  onChange,
  required,
  minDate,
}: {
  label: string;
  value?: Date;
  onChange: (d: Date | undefined) => void;
  required?: boolean;
  minDate?: Date;
}) {
  return (
    <div>
      <FieldLabel required={required}>{label}</FieldLabel>
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="mt-2 flex w-full items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-left text-sm outline-none transition focus:border-primary"
          >
            <span className={value ? "text-foreground" : "text-muted-foreground"}>
              {value ? format(value, "PPP") : "Pick a date"}
            </span>
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
          <Calendar
            mode="single"
            selected={value}
            onSelect={onChange}
            disabled={(d) =>
              minDate ? d < new Date(new Date(minDate).setHours(0, 0, 0, 0)) : false
            }
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
