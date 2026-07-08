import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { EnquiryCTA } from "@/components/ConversionBlocks";
import { FeaturedExcursionCard } from "@/components/FeaturedExcursionCard";
import { EditorialBadges } from "@/components/EditorialBadge";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { excursions } from "@/data/excursions";
import { excursionsHubImage, getExcursionImage } from "@/lib/images";

export const metadata = buildMetadata({
  title: "Kiel Shore Excursions",
  description:
    "Kiel shore excursions for cruise passengers — Hamburg, Lübeck, canal tours and city days with editorial badges and cruise-timed return advice.",
  path: "/shore-excursions",
  image: excursionsHubImage.src,
  imageAlt: excursionsHubImage.alt,
  keywords: ["Kiel shore excursions", "Hamburg from Kiel", "Lübeck shore excursion"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Shore Excursions", path: "/shore-excursions" },
];

export default function ShoreExcursionsPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Kiel Shore Excursions", description: "Kiel shore excursions for cruise passengers.", path: "/shore-excursions" })]} />
      <PhotoHeroBand
        image={excursionsHubImage}
        eyebrow="Baltic cruise port"
        title="Kiel Shore Excursions"
        subtitle="Editorial recommendations for every port window — Kiel city, Hamburg, Lübeck, canal scenery and family-friendly days with honest return-to-ship timing."
        compact
      />
      <section className="section-padding">
        <div className="container-wide">
          <Breadcrumbs items={breadcrumbs} />
          <p className="mb-8 max-w-3xl text-gray-700 leading-relaxed">
            Every excursion below is evaluated for cruise passengers calling at Kiel. Compare duration, editorial badges and return-to-ship confidence, or use our{" "}
            <Link href="/best-kiel-shore-excursions" className="font-medium text-coastal-700 hover:underline">best excursions guide</Link>{" "}
            to narrow your choice.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {excursions.map((e) => (
              <FeaturedExcursionCard key={e.slug} excursion={e} />
            ))}
          </div>
          <EnquiryCTA />
          <div className="mt-12">
            <PlanningLinks />
          </div>
        </div>
      </section>
    </>
  );
}
