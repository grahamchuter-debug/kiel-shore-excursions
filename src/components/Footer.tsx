import Link from "next/link";
import { SITE } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer-depth mt-auto text-white">
      <div className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="container-wide grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="font-display text-xl font-semibold">Kiel Shore Excursions</div>
            <p className="mt-3 text-sm text-coastal-100/70 leading-relaxed">
              Find the best version of your day ashore in Kiel — Hamburg, Lübeck, canal tours and Baltic coast planning for cruise passengers.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Plan your port day</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/kiel-cruise-planner" className="hover:text-white">Cruise Planner</Link></li>
              <li><Link href="/shore-excursions" className="hover:text-white">Shore Excursions</Link></li>
              <li><Link href="/kiel-port-day-by-duration" className="hover:text-white">Port Day by Duration</Link></li>
              <li><Link href="/kiel-cruise-port-guide" className="hover:text-white">Cruise Port Guide</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Destinations</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/kiel-vs-hamburg-vs-lubeck" className="hover:text-white">Kiel vs Hamburg vs Lübeck</Link></li>
              <li><Link href="/hamburg-from-kiel-cruise-port" className="hover:text-white">Hamburg from Kiel</Link></li>
              <li><Link href="/lubeck-from-kiel-cruise-port" className="hover:text-white">Lübeck from Kiel</Link></li>
              <li><Link href="/is-kiel-worth-exploring" className="hover:text-white">Is Kiel Worth Exploring?</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/90">Essential planning</h3>
            <ul className="space-y-1.5 text-sm text-coastal-100/70">
              <li><Link href="/best-kiel-shore-excursions" className="hover:text-white">Best Shore Excursions</Link></li>
              <li><Link href="/#cruiseflex" className="hover:text-white">CruiseFlex Upgrade</Link></li>
              <li><Link href="/faq" className="hover:text-white">FAQ</Link></li>
              <li><Link href="/enquire" className="hover:text-white">Enquire</Link></li>
            </ul>
          </div>
        </div>
        <div className="container-wide mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/10 pt-6 text-xs text-coastal-100/60">
          <Link href="/about" className="hover:text-white">About</Link>
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-white">Terms</Link>
          <span className="ml-auto">{SITE.email}</span>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-coastal-300/75">
        &copy; {year} {SITE.name}. Independent Kiel cruise planning resource — not affiliated with any cruise line or the Port of Kiel.
      </div>
    </footer>
  );
}
