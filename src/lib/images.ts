export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1600&q=80",
    alt: "Kiel harbour and cruise ships on the Baltic Sea",
  },
  ogDefault: {
    src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80",
    alt: "Kiel fjord and Baltic coast — Kiel shore excursion planning",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Kiel Shore Excursions",
  },
  port: {
    src: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    alt: "Cruise terminal at Kiel Ostseekai on the Baltic Sea",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  kiel: { src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80", alt: "Kiel city centre and harbour on the Baltic" },
  hamburg: { src: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=1200&q=80", alt: "Hamburg harbour and Speicherstadt warehouses" },
  lubeck: { src: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=1200&q=80", alt: "Holstentor gate in historic Lübeck old town" },
  canal: { src: "https://images.unsplash.com/photo-1544551763-77a415ccc9fde?w=1200&q=80", alt: "Ship passing through the Kiel Canal" },
  fjord: { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80", alt: "Scenic Kiel fjord and Baltic coastline" },
  food: { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1200&q=80", alt: "German food and beer in northern Germany" },
  family: { src: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=1200&q=80", alt: "Family-friendly day ashore in Kiel" },
  planner: { src: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80", alt: "Planning a Kiel cruise port day" },
  highlights: { src: "https://images.unsplash.com/photo-1596436889106-be35e843f974?w=1200&q=80", alt: "Kiel shore excursion highlights" },
  "port-day": { src: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80", alt: "Planning your Kiel port day by ship schedule" },
  comparison: { src: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?w=1200&q=80", alt: "Comparing Kiel, Hamburg and Lübeck for cruise passengers" },
};

function pick(key: string): SiteImage {
  return subjectImages[key] ?? siteImages.ogDefault;
}

const excursionImageKeys: Record<string, string> = {
  "kiel-highlights-hop-on-hop-off": "kiel",
  "kiel-city-walking-tour": "kiel",
  "hamburg-highlights-from-kiel": "hamburg",
  "private-hamburg-from-kiel": "hamburg",
  "lubeck-highlights-from-kiel": "lubeck",
  "private-lubeck-from-kiel": "lubeck",
  "kiel-canal-fjord-tour": "canal",
  "kiel-food-and-beer-tour": "food",
  "kiel-family-friendly-day": "family",
};

export function getExcursionImage(slug: string): SiteImage {
  return pick(excursionImageKeys[slug] ?? "kiel");
}

export const excursionsHubImage = pick("highlights");

const guideImageKeys: Record<string, string> = {
  "kiel-vs-hamburg-vs-lubeck": "comparison",
  "hamburg-from-kiel-cruise-port": "hamburg",
  "lubeck-from-kiel-cruise-port": "lubeck",
  "is-kiel-worth-exploring": "kiel",
  "kiel-port-day-by-duration": "port-day",
  "kiel-cruise-port-guide": "port",
  "best-kiel-shore-excursions": "highlights",
};

export function getGuideImage(key: string): SiteImage {
  return pick(guideImageKeys[key] ?? key);
}
