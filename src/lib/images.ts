export interface SiteImage {
  src: string;
  alt: string;
}

const B = "/images";

export const siteImages = {
  hero: {
    src: `${B}/hero-home.jpg`,
    alt: "Cruise ship at Kiel Ostseekai harbour on the Baltic Sea",
  },
  ogDefault: {
    src: `${B}/og-default.jpg`,
    alt: "Kiel Ostseekai cruise terminal and harbour — Kiel shore excursion planning",
  },
  logo: {
    src: `${B}/logo-mark.svg`,
    alt: "Kiel Shore Excursions",
  },
  port: {
    src: `${B}/cruise-port.jpg`,
    alt: "Kiel Ostseekai cruise terminal on the Baltic Sea",
  },
} as const;

export const subjectImages: Record<string, SiteImage> = {
  kiel: { src: `${B}/kiel.jpg`, alt: "Kiel harbour and cruise ships at Ostseekai" },
  hamburg: { src: `${B}/hamburg.jpg`, alt: "Hamburg Speicherstadt warehouses and harbour at dusk" },
  lubeck: { src: `${B}/lubeck.jpg`, alt: "Holstentor gate in historic Lübeck old town" },
  canal: { src: `${B}/canal.jpg`, alt: "Kiel-Holtenau locks on the Nord-Ostsee-Kanal" },
  fjord: { src: `${B}/fjord.jpg`, alt: "Aerial view of the Kiel Canal locks at Holtenau" },
  food: { src: `${B}/food.jpg`, alt: "Pretzels with mustard and beer — northern German food culture" },
  family: { src: `${B}/family.jpg`, alt: "Cruise ship at Kiel harbour — family-friendly port day" },
  planner: { src: `${B}/planner.jpg`, alt: "Planning a Kiel cruise port day at Ostseekai" },
  highlights: { src: `${B}/highlights.jpg`, alt: "Kiel Canal locks — Kiel shore excursion highlights" },
  "port-day": { src: `${B}/cruise-port.jpg`, alt: "Planning your Kiel port day by ship schedule" },
  comparison: { src: `${B}/comparison.jpg`, alt: "Comparing Kiel, Hamburg and Lübeck for cruise passengers" },
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
