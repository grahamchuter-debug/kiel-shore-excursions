import Link from "next/link";
import type { ExcursionPage } from "@/data/types";
import { getExcursionImage } from "@/lib/images";
import { EditorialBadges } from "@/components/EditorialBadge";

export function FeaturedExcursionCard({ excursion }: { excursion: ExcursionPage }) {
  const image = getExcursionImage(excursion.slug);
  const isEditorsChoice = excursion.badges?.includes("editors-choice");

  return (
    <Link
      id={`tour-${excursion.slug}`}
      href={`/shore-excursions/${excursion.slug}`}
      className={`card-editorial group scroll-mt-28 overflow-hidden ${isEditorsChoice ? "ring-2 ring-maple-400/40" : ""}`}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coastal-900/60 via-transparent to-transparent" aria-hidden="true" />
        <span className="absolute left-3 top-3 pill bg-white/90">{excursion.category}</span>
        {excursion.badges && excursion.badges.length > 0 && (
          <div className="absolute bottom-3 left-3 right-3">
            <EditorialBadges badges={excursion.badges} />
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-coastal-800">{excursion.title}</h3>
        <p className="mt-2 text-sm text-gray-600">{excursion.tagline}</p>
        <p className="mt-3 text-xs font-medium text-coastal-700">
          {excursion.duration} · {excursion.pace} · {excursion.snapshot.returnConfidence} return confidence
        </p>
      </div>
    </Link>
  );
}
