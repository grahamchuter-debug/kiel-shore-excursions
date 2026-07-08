import Link from "next/link";

export function CruiseFlexBlock() {
  return (
    <section className="section-padding bg-gradient-to-br from-coastal-800 via-coastal-900 to-coastal-800 text-white" id="cruiseflex">
      <div className="container-wide">
        <div className="mx-auto max-w-4xl rounded-2xl border border-white/15 bg-white/5 p-8 sm:p-10 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-wider text-maple-300">Optional booking upgrade</p>
          <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">CruiseFlex — Flexible Cancellation Upgrade</h2>
          <p className="mt-4 text-lg leading-relaxed text-white/90">
            Add CruiseFlex for just <strong className="text-white">€5 / £5 / $5 per person</strong> and cancel for any reason up to 24 hours before your excursion. No medical certificates. No paperwork. No questions asked.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 text-sm font-medium">Cancel for any reason</p>
              <p className="mt-1 text-xs text-white/70">Up to 24 hours before departure</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 text-sm font-medium">No paperwork</p>
              <p className="mt-1 text-xs text-white/70">No medical certificates required</p>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <p className="text-2xl" aria-hidden="true">✓</p>
              <p className="mt-2 text-sm font-medium">Completely optional</p>
              <p className="mt-1 text-xs text-white/70">Add at checkout on eligible excursions</p>
            </div>
          </div>
          <p className="mt-6 text-sm text-white/75">
            CruiseFlex is an optional booking upgrade — not insurance. It gives you flexibility if your plans change, your ship schedule shifts, or you simply prefer to keep your options open until the day before.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shore-excursions" className="btn-accent">Browse eligible excursions</Link>
            <Link href="/enquire" className="btn-secondary border-white/30 bg-white/10 text-white hover:bg-white/20">Ask about CruiseFlex</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
