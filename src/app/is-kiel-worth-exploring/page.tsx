import { guideMetadata, GuidePageRoute } from "@/lib/guide-page";

const SLUG = "is-kiel-worth-exploring";

export const metadata = guideMetadata(SLUG);

export default function Page() {
  return <GuidePageRoute slug={SLUG} />;
}
