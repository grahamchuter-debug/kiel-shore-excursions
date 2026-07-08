"use client";

import { useState } from "react";
import Link from "next/link";

export function KielCruisePlannerSection() {
  const [ship, setShip] = useState("");
  const [arrival, setArrival] = useState("");
  const [departure, setDeparture] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-padding bg-coastal-900 text-white" id="cruise-planner">
      <div className="container-wide">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-coastal-300">AI cruise planner — coming soon</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">
            Tell us your ship, arrival time and departure time
          </h2>
          <p className="mt-4 text-white/85 leading-relaxed">
            We&apos;ll recommend the best Kiel shore excursion for your day in port — matched to your hours ashore, interests and return-to-ship margin. This planner is designed to become a full AI cruise planning tool.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4 rounded-2xl border border-white/15 bg-white/5 p-6 sm:p-8">
            <div>
              <label htmlFor="ship" className="block text-sm font-medium text-white/90">Ship name</label>
              <input
                id="ship"
                type="text"
                value={ship}
                onChange={(e) => setShip(e.target.value)}
                placeholder="e.g. MSC Euribia"
                className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white placeholder:text-white/40 focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="arrival" className="block text-sm font-medium text-white/90">Arrival time</label>
                <input
                  id="arrival"
                  type="time"
                  value={arrival}
                  onChange={(e) => setArrival(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                />
              </div>
              <div>
                <label htmlFor="departure" className="block text-sm font-medium text-white/90">Departure time</label>
                <input
                  id="departure"
                  type="time"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  className="mt-1 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-white focus:border-maple-400 focus:outline-none focus:ring-2 focus:ring-maple-400/50"
                />
              </div>
            </div>
            <button type="submit" className="btn-accent w-full sm:w-auto">
              Get excursion recommendations
            </button>
          </form>

          {submitted && (
            <div className="mt-6 rounded-xl border border-maple-400/30 bg-maple-500/10 p-5">
              <p className="font-semibold text-maple-200">Thanks — your planner request is noted.</p>
              <p className="mt-2 text-sm text-white/80">
                Full AI recommendations are coming soon. For now, browse our{" "}
                <Link href="/shore-excursions" className="font-medium text-maple-300 underline hover:text-maple-200">editorial excursion picks</Link>{" "}
                or use our{" "}
                <Link href="/kiel-port-day-by-duration" className="font-medium text-maple-300 underline hover:text-maple-200">port day by duration guide</Link>{" "}
                to match your {arrival && departure ? `${arrival}–${departure}` : "schedule"} window.
              </p>
            </div>
          )}

          <div className="mt-6 text-center">
            <Link href="/kiel-cruise-planner" className="text-sm font-medium text-coastal-300 hover:text-white">
              Open full cruise planner page →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
