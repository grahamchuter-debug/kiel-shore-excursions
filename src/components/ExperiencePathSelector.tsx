import Link from "next/link";
import { experiencePaths } from "@/data/homepage";

export function ExperiencePathSelector() {
  return (
    <section className="section-padding bg-coastal-50 border-b border-coastal-100" id="experience-paths">
      <div className="container-wide">
        <p className="section-eyebrow">Start here</p>
        <h2 className="section-title mt-2">How would you like to spend your day in Kiel?</h2>
        <p className="section-subtitle">
          Kiel opens up Hamburg, Lübeck, the Baltic coast and the famous Kiel Canal — but the best day is not always the longest transfer. Choose the experience that fits your ship schedule and interests.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {experiencePaths.map((path) => (
            <Link
              key={path.id}
              href={path.scrollTo}
              className="nav-card group flex h-full flex-col"
            >
              <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">
                {path.label}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600">{path.description}</p>
              <p className="mt-3 text-xs font-medium text-coastal-700">{path.suits}</p>
              <span className="mt-4 inline-flex items-center text-sm font-semibold text-maple-600">
                See recommendations
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
