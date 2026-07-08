import { buildMetadata } from "@/lib/seo";
import { PageHero } from "@/components/PageHero";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { SITE } from "@/lib/site";

const path = "/about";

export const metadata = buildMetadata({
  title: "About Kiel Shore Excursions",
  description: "About Kiel Shore Excursions — an independent planning resource helping Baltic cruise passengers choose the best day ashore in Kiel, Hamburg and Lübeck.",
  path,
});

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={[breadcrumbSchema(breadcrumbs), webPageSchema({ title: "About Kiel Shore Excursions", description: "About Kiel Shore Excursions.", path })]} />
      <PageHero title="About Kiel Shore Excursions" subtitle="Find the best version of your day ashore — an independent planning resource for Baltic cruise passengers." compact />
      <section className="section-padding">
        <div className="container-wide max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <div className="prose-body">
            <p>
              {SITE.name} is an independent planning resource for cruise passengers calling at Kiel on the Baltic Sea. Many passengers arrive unsure whether to visit Hamburg, explore Lübeck&apos;s medieval old town, or stay local for canal locks and fjord scenery. Our goal is to help you make that decision confidently.
            </p>
            <p>
              We focus on practical port-day decisions: which excursions fit your hours ashore, how long the drive to Hamburg really takes, when Kiel city beats a day trip, and how to build a comfortable return buffer before all-aboard. Every guide is written for real cruise timings, not generic Germany tourism.
            </p>
            <p>
              We are not affiliated with any cruise line, tour operator or the Port of Kiel. Use our enquiry form or cruise planner for personalised advice on your ship and interests.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
