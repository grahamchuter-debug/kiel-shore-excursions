import { buildMetadata } from "@/lib/seo";
import { PhotoHeroBand } from "@/components/PhotoHeroBand";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PlanningLinks } from "@/components/PlanningLinks";
import { KielCruisePlannerSection } from "@/components/KielCruisePlannerSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { subjectImages } from "@/lib/images";

const path = "/kiel-cruise-planner";
const image = subjectImages.planner;

const description =
  "Tell us your ship, arrival and departure times — get a tailored Kiel shore excursion recommendation for your Baltic port day.";

export const metadata = buildMetadata({
  title: "Kiel Cruise Planner",
  description,
  path,
  image: image.src,
  imageAlt: image.alt,
  keywords: ["Kiel cruise planner", "plan Kiel port day", "Kiel shore excursion planner"],
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Kiel Cruise Planner", path },
];

export default function KielCruisePlannerPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "Kiel Cruise Planner", description, path })]} />
      <PhotoHeroBand
        image={image}
        eyebrow="Ship-aware planning"
        title="Kiel Cruise Planner"
        subtitle="Tell us your ship, arrival time and departure time — we'll recommend the best Kiel shore excursion for your day in port."
        compact
      />
      <KielCruisePlannerSection />
      <section className="section-padding bg-white">
        <div className="container-wide max-w-3xl">
          <PlanningLinks />
        </div>
      </section>
    </>
  );
}
