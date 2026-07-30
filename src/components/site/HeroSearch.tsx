import { useNavigate } from "@tanstack/react-router";
import { format } from "date-fns";
import {
  ArrowRight,
  Calendar as CalendarIcon,
  MapPin,
  Minus,
  Plus,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

export function HeroSearch() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState<Date | undefined>();
  const [travellers, setTravellers] = useState({ adults: 2, children: 0, infants: 0 });

  const totalTravellers = travellers.adults + travellers.children + travellers.infants;

  const search = () => {
    navigate({
      to: "/packages",
      search: {
        destination: destination.trim() || undefined,
        date: date ? format(date, "yyyy-MM-dd") : undefined,
        adults: travellers.adults || undefined,
        children: travellers.children || undefined,
        infants: travellers.infants || undefined,
      } as any,
    });
  };


  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {/* Destination */}
      <div className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-left transition hover:bg-white/90">
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
          <MapPin className="h-4 w-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            Destination
          </p>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Where to?"
            className="w-full truncate bg-transparent font-display text-sm font-semibold text-foreground placeholder:text-foreground/60 outline-none"
          />
        </div>
      </div>


      {/* Date */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-left transition hover:bg-white/90"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <CalendarIcon className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Departure
              </p>
              <p className="truncate font-display text-sm font-semibold text-foreground">
                {date ? format(date, "PPP") : "Add date"}
              </p>
            </div>
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0 pointer-events-auto" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            disabled={(d) => d < new Date(new Date().setHours(0, 0, 0, 0))}
            initialFocus
            className="p-3 pointer-events-auto"
          />
        </PopoverContent>
      </Popover>

      {/* Travellers */}
      <Popover>
        <PopoverTrigger asChild>
          <button
            type="button"
            className="flex items-center gap-3 rounded-2xl bg-white/70 px-4 py-3 text-left transition hover:bg-white/90"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
              <Users className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
                Travellers
              </p>
              <p className="truncate font-display text-sm font-semibold text-foreground">
                {totalTravellers} {totalTravellers === 1 ? "Guest" : "Guests"}
              </p>
            </div>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-4 pointer-events-auto" align="start">
          <div className="space-y-3">
            {(
              [
                { key: "adults", label: "Adults", hint: "12+ yrs", min: 1 },
                { key: "children", label: "Children", hint: "2–11 yrs", min: 0 },
                { key: "infants", label: "Infants", hint: "Under 2", min: 0 },
              ] as const
            ).map((row) => (
              <div key={row.key} className="flex items-center justify-between">
                <div>
                  <p className="font-display text-sm font-semibold text-foreground">
                    {row.label}
                  </p>
                  <p className="text-xs text-muted-foreground">{row.hint}</p>
                </div>
                <CountStepper
                  value={travellers[row.key]}
                  min={row.min}
                  onChange={(v) =>
                    setTravellers((t) => ({ ...t, [row.key]: v }))
                  }
                />
              </div>
            ))}
          </div>
        </PopoverContent>
      </Popover>

      <button
        type="button"
        onClick={search}
        className="btn-gold inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold"
      >
        Search Trips <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

export function CountStepper({
  value,
  onChange,
  min = 0,
  max = 20,
}: {
  value: number;
  onChange: (v: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-foreground transition hover:border-primary disabled:opacity-40"
        aria-label="Decrease"
      >
        <Minus className="h-3.5 w-3.5" />
      </button>
      <span className="w-6 text-center font-display text-sm font-semibold tabular-nums">
        {value}
      </span>
      <button
        type="button"
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="grid h-8 w-8 place-items-center rounded-full border border-border bg-background text-foreground transition hover:border-primary disabled:opacity-40"
        aria-label="Increase"
      >
        <Plus className="h-3.5 w-3.5" />
      </button>
    </div>
  );
}
