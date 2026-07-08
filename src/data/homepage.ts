import type { ExperiencePath, FAQ } from "./types";

export const experiencePaths: ExperiencePath[] = [
  {
    id: "discover-kiel",
    label: "Discover Kiel",
    shortLabel: "Kiel",
    description: "Stay close to the ship and explore Germany's great Baltic naval city — harbour, fjord promenade and maritime heritage without a long coach transfer.",
    suits: "Best for shorter port calls, late arrivals, or passengers who want low transfer risk",
    scrollTo: "#tour-kiel-city-walking-tour",
  },
  {
    id: "lubeck",
    label: "Visit Historic Lübeck",
    shortLabel: "Lübeck",
    description: "UNESCO Hanseatic old town, Holstentor gate and Brick Gothic churches — northern Germany's most atmospheric medieval day trip from Kiel.",
    suits: "Best for history lovers who want walkable charm over big-city scale",
    scrollTo: "#tour-lubeck-highlights-from-kiel",
  },
  {
    id: "hamburg",
    label: "Explore Hamburg",
    shortLabel: "Hamburg",
    description: "Speicherstadt warehouses, harbour energy and grand architecture in Germany's gateway-to-the-world — the headline full-day excursion from Kiel.",
    suits: "Best for full port days (8+ hours) and passengers who want a major city experience",
    scrollTo: "#tour-hamburg-highlights-from-kiel",
  },
  {
    id: "canal-fjord",
    label: "Scenic Canal & Fjord",
    shortLabel: "Canal & fjord",
    description: "Watch ships transit the Kiel Canal locks and follow the fjord coastline — the maritime experience that makes Kiel distinctive.",
    suits: "Best for scenery lovers and passengers asking what is special about Kiel itself",
    scrollTo: "#tour-kiel-canal-fjord-tour",
  },
  {
    id: "food-beer",
    label: "Food, Beer & Local Culture",
    shortLabel: "Food & culture",
    description: "Fresh fish, northern German beer halls and Baltic flavours on a walkable culinary tour from the cruise terminal.",
    suits: "Best for food lovers who want authentic local culture without leaving the region",
    scrollTo: "#tour-kiel-food-and-beer-tour",
  },
  {
    id: "family",
    label: "Family-Friendly Days Ashore",
    shortLabel: "Families",
    description: "Maritime museums, harbour boats and beach time — paced for children with high return-to-ship confidence.",
    suits: "Best for families with children who want low-stress, engaging activities near the port",
    scrollTo: "#tour-kiel-family-friendly-day",
  },
  {
    id: "editors-choice",
    label: "Editor's Choice",
    shortLabel: "Editor's pick",
    description: "Our editorial team's top picks for Kiel cruise passengers — chosen for port-time fit, passenger value and return-to-ship confidence.",
    suits: "Best when you want a trusted recommendation without comparing every option",
    scrollTo: "#editors-choice",
  },
];

export interface PlanningArticle {
  slug: string;
  title: string;
  description: string;
  href: string;
}

export const planningArticles: PlanningArticle[] = [
  {
    slug: "kiel-vs-hamburg-vs-lubeck",
    title: "Kiel vs Hamburg vs Lübeck: which is best for your port day?",
    description:
      "An honest comparison of the three main options from Kiel cruise port — transfer times, what you will see, and which suits your ship schedule.",
    href: "/kiel-vs-hamburg-vs-lubeck",
  },
  {
    slug: "hamburg-from-kiel-cruise-port",
    title: "How far is Hamburg from Kiel?",
    description:
      "Distance, drive times, motorway realities and whether Hamburg fits your port window — with practical timing for cruise passengers.",
    href: "/hamburg-from-kiel-cruise-port",
  },
  {
    slug: "lubeck-from-kiel-cruise-port",
    title: "Is Lübeck a good cruise excursion from Kiel?",
    description:
      "Why Lübeck works on a 7–8 hour port day, what the Hanseatic old town delivers, and how it compares with Hamburg for cruise passengers.",
    href: "/lubeck-from-kiel-cruise-port",
  },
  {
    slug: "is-kiel-worth-exploring",
    title: "Is Kiel worth exploring on its own?",
    description:
      "When staying local beats a day trip — canal locks, fjord scenery, maritime museums and the case for not leaving Schleswig-Holstein.",
    href: "/is-kiel-worth-exploring",
  },
  {
    slug: "kiel-port-day-by-duration",
    title: "Best options for short, medium and long port calls",
    description:
      "Realistic excursion choices for 4-hour, 6-hour and 8+ hour port windows — what fits, what to skip, and how to build margin before all-aboard.",
    href: "/kiel-port-day-by-duration",
  },
];

export interface HomeSection {
  slug: string;
  number: string;
  title: string;
  description: string;
  href: string;
  cta: string;
}

export const coreSections: HomeSection[] = [
  {
    slug: "best-kiel-shore-excursions",
    number: "01",
    title: "Best Kiel Shore Excursions",
    description:
      "Editorial picks for every port window — Kiel city, Hamburg, Lübeck, canal scenery and family-friendly options with honest timing advice.",
    href: "/best-kiel-shore-excursions",
    cta: "Browse excursions",
  },
  {
    slug: "kiel-cruise-port-guide",
    number: "02",
    title: "Kiel Cruise Port Guide",
    description:
      "Where ships dock at Ostseekai, terminal layout, distances to Hamburg and Lübeck, and return-to-ship timing for Baltic cruise passengers.",
    href: "/kiel-cruise-port-guide",
    cta: "Port logistics",
  },
  {
    slug: "kiel-vs-hamburg-vs-lubeck",
    number: "03",
    title: "Kiel vs Hamburg vs Lübeck",
    description:
      "The decision guide every Kiel passenger needs — which destination fits your interests, mobility and hours ashore.",
    href: "/kiel-vs-hamburg-vs-lubeck",
    cta: "Compare options",
  },
  {
    slug: "kiel-port-day-by-duration",
    number: "04",
    title: "Port Day by Duration",
    description:
      "Short, medium and long port calls — realistic itineraries that respect your all-aboard time.",
    href: "/kiel-port-day-by-duration",
    cta: "See day plans",
  },
  {
    slug: "shore-excursions",
    number: "05",
    title: "All Shore Excursions",
    description:
      "Every Kiel shore excursion with cruise snapshots, editorial badges and return-to-ship confidence ratings.",
    href: "/shore-excursions",
    cta: "View all",
  },
  {
    slug: "kiel-cruise-planner",
    number: "06",
    title: "Kiel Cruise Planner",
    description:
      "Tell us your ship, arrival and departure times — get a tailored excursion recommendation for your day in port.",
    href: "/kiel-cruise-planner",
    cta: "Start planning",
  },
];

export function getHomepageFaqs(): FAQ[] {
  return [
    {
      question: "What are the best shore excursions from Kiel?",
      answer:
        "It depends on your port window. For full days (8+ hours), Hamburg and Lübeck are the headline options. For shorter calls or lower transfer risk, Kiel city walking tours, canal lock viewing and hop-on hop-off loops are often the better choice. Our editorial badges highlight Editor's Choice, Best Value and Best for Families on each excursion page.",
    },
    {
      question: "Can I visit Hamburg from Kiel cruise port?",
      answer:
        "Yes — Hamburg is roughly 90 km south, about 75–90 minutes each way by coach. You need at least 8 usable hours ashore for a worthwhile visit with return margin. See our Hamburg from Kiel guide for detailed timing.",
    },
    {
      question: "Is Lübeck better than Hamburg for a cruise day?",
      answer:
        "Lübeck suits passengers who prefer compact medieval atmosphere and Hanseatic history over big-city harbour energy. Hamburg offers more scale and variety but needs a longer port day. On 7-hour calls, many passengers find Lübeck the sweeter fit.",
    },
    {
      question: "How much time do I need for a Kiel shore excursion?",
      answer:
        "Kiel city tours need 3–4 hours. Canal and fjord scenic tours need 4–5 hours. Lübeck needs 7–8 hours including transfers. Hamburg needs 8–9 hours. Always build 30–45 minutes before your all-aboard, more for motorway day trips.",
    },
    {
      question: "What happens if my ship arrives late?",
      answer:
        "Late arrivals favour local Kiel options — walking tours, hop-on hop-off and food tours tolerate compressed schedules better than Hamburg or Lübeck coach transfers. Contact your excursion provider immediately; reputable operators adjust or offer alternatives.",
    },
    {
      question: "Should I book through the cruise line or independently?",
      answer:
        "Independent excursions are often better value, may offer smaller groups on private tours, and frequently include optional flexible cancellation upgrades. The cruise line guarantees return if their tour runs late — independent operators with strong track records also monitor ship departures. We help you weigh both honestly.",
    },
    {
      question: "What is CruiseFlex?",
      answer:
        "CruiseFlex is an optional booking upgrade — not insurance — that lets you cancel your excursion for any reason up to 24 hours before departure. No medical certificates, no paperwork, no questions asked. It costs €5 / £5 / $5 per person and is available when you book eligible excursions.",
    },
  ];
}
