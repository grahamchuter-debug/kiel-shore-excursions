import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "kiel-vs-hamburg-vs-lubeck";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
