import Link from "next/link";

const LINKS = [
  { href: "/shore-excursions", label: "Shore Excursions" },
  { href: "/kiel-vs-hamburg-vs-lubeck", label: "Compare Destinations" },
  { href: "/kiel-cruise-port-guide", label: "Cruise Port Guide" },
  { href: "/kiel-cruise-planner", label: "Cruise Planner" },
  { href: "/kiel-port-day-by-duration", label: "Port Day by Duration" },
  { href: "/faq", label: "FAQ" },
];

export function PlanningLinks({ heading = "Keep planning your Kiel cruise" }: { heading?: string }) {
  return (
    <section className="rounded-2xl border border-coastal-100 bg-coastal-50/60 p-6 sm:p-8">
      <h2 className="font-display text-xl font-semibold text-gray-900">{heading}</h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="pill hover:bg-coastal-100 transition-colors">
            {l.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
