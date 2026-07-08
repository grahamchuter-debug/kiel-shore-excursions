import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { ExperiencePathSelector } from "@/components/ExperiencePathSelector";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import { CruiseFlexBlock } from "@/components/CruiseFlexBlock";
import { WhyIndependentBlock } from "@/components/WhyIndependentBlock";
import { PlanningContentSection } from "@/components/PlanningContentSection";
import { KielCruisePlannerSection } from "@/components/KielCruisePlannerSection";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, faqSchema, travelGuideSchema } from "@/lib/schema";
import { coreSections, getHomepageFaqs } from "@/data/homepage";
import { getFeaturedExcursions } from "@/data/excursions";
import { siteImages } from "@/lib/images";
import { SITE } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Kiel Shore Excursions — Find the Best Version of Your Day Ashore",
  description: SITE.description,
  path: "/",
  keywords: [
    "Kiel shore excursions",
    "Hamburg from Kiel cruise port",
    "Lübeck shore excursion",
    "Kiel Canal tour",
    "Baltic cruise excursions",
  ],
});

export default function HomePage() {
  const faqs = getHomepageFaqs();
  const featured = getFeaturedExcursions();
  const editorsChoice = featured.filter((e) => e.badges?.includes("editors-choice"));

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: "Home", path: "/" }]),
          faqSchema(faqs),
          travelGuideSchema({
            title: "Kiel Shore Excursions — Find the Best Version of Your Day Ashore",
            description: SITE.tagline,
            path: "/",
          }),
        ]}
      />

      <section className="home-hero">
        <img
          src={siteImages.hero.src}
          alt={siteImages.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay" aria-hidden="true" />
        <div className="container-wide relative z-10 px-4 sm:px-6 lg:px-8">
          <p className="section-eyebrow mb-2 text-coastal-100">Baltic cruise port · Schleswig-Holstein</p>
          <h1 className="home-hero-heading">Kiel Shore Excursions</h1>
          <p className="mt-3 font-display text-xl font-medium text-white/95 sm:text-2xl">
            Find the best version of your day ashore
          </p>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Kiel is your gateway to Hamburg, historic Lübeck, the Baltic coast and the famous Kiel Canal — but the smartest excursion depends on your ship schedule. We help cruise passengers choose the right day ashore with editorial recommendations, port-time planning and flexible cancellation options.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#experience-paths" className="btn-accent">Choose your day</Link>
            <Link href="/shore-excursions" className="btn-secondary bg-white/10 text-white border-white/30 hover:bg-white/20">
              All excursions
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/80">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Kiel, Hamburg &amp; Lübeck compared honestly</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Canal, fjord &amp; Baltic coast options</span>
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">✓</span> Cruise-friendly planning &amp; CruiseFlex upgrade</span>
          </div>
        </div>
      </section>

      <ExperiencePathSelector />

      <section className="section-padding bg-white" id="recommendations">
        <div className="container-wide">
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="section-title">Recommended Kiel shore excursions</h2>
              <p className="section-subtitle">
                Editorial picks with badges for value, families, first-time visitors and more — matched to real port windows from Ostseekai.
              </p>
            </div>
            <Link href="/shore-excursions" className="btn-secondary shrink-0">All excursions</Link>
          </div>

          {editorsChoice.length > 0 && (
            <div className="mb-10" id="editors-choice">
              <h3 className="font-display text-xl font-bold text-gray-900">Editor&apos;s Choice</h3>
              <p className="mt-1 text-sm text-gray-600">Our top picks for passengers who want a trusted recommendation first.</p>
              <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {editorsChoice.map((e) => (
                  <FeaturedExcursionCard key={e.slug} excursion={e} />
                ))}
              </div>
            </div>
          )}

          <h3 className="font-display text-xl font-bold text-gray-900">All featured excursions</h3>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((e) => (
              <FeaturedExcursionCard key={e.slug} excursion={e} />
            ))}
          </div>
        </div>
      </section>

      <CruiseFlexBlock />

      <WhyIndependentBlock />

      <PlanningContentSection />

      <section className="section-padding bg-white">
        <div className="container-wide">
          <p className="section-eyebrow">Kiel for cruise passengers</p>
          <h2 className="section-title mt-2">Independent Kiel cruise planning</h2>
          <p className="section-subtitle">
            Port logistics, destination comparisons, excursion timing and honest advice — built for Baltic cruise passengers, not generic Germany tourism.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {coreSections.map((s) => (
              <Link key={s.slug} href={s.href} className="nav-card group flex h-full flex-col">
                <span className="font-display text-2xl font-bold text-coastal-200">{s.number}</span>
                <h3 className="mt-1 font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-gray-600">{s.description}</p>
                <span className="mt-3 text-sm font-semibold text-maple-600">{s.cta} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <KielCruisePlannerSection />

      <section className="section-padding bg-white">
        <div className="container-wide max-w-4xl">
          <FAQSection faqs={faqs} title="Kiel Cruise Excursion FAQs" />
        </div>
      </section>
    </>
  );
}
