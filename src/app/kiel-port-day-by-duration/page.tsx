import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "kiel-port-day-by-duration";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
