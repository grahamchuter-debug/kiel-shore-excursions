import type { GuidePage } from "./types";

export const guides: GuidePage[] = [
  {
    slug: "kiel-vs-hamburg-vs-lubeck",
    path: "/kiel-vs-hamburg-vs-lubeck",
    title: "Kiel vs Hamburg vs Lübeck",
    seoTitle: "Kiel vs Hamburg vs Lübeck — Which Is Best for Your Cruise Day?",
    metaDescription:
      "Compare Kiel, Hamburg and Lübeck for cruise passengers — transfer times, what you will see, port-window fit and honest recommendations from Kiel cruise port.",
    eyebrow: "Decision guide",
    tagline:
      "Three very different days ashore from the same gangway — here is how to choose the right one for your ship schedule and interests.",
    overview:
      "Kiel cruise passengers face a genuine choice: stay local and explore a Baltic naval city, run south to Hamburg's harbour grandeur, or northeast to Lübeck's medieval Hanseatic lanes. All three are worthwhile — but not on every port call. This guide compares transfer times, on-the-ground experience and which option fits short, medium and long windows ashore.",
    body: [
      "Kiel itself rewards passengers who want maritime atmosphere without motorway risk. The cruise terminal at Ostseekai is minutes from the city centre, the Kiel Fjord and the canal locks at Holtenau. Walking tours, hop-on hop-off loops and canal scenic tours keep return-to-ship confidence high — especially on shorter calls or when your ship arrives late.",
      "Hamburg is the big-city play — Speicherstadt warehouses, harbour culture and grand architecture 90 km south. It needs 8–9 hours ashore including 75–90 minutes each way on the autobahn. Choose Hamburg when you have a full port day, want Germany's great harbour city, and accept motorway timing variability.",
      "Lübeck sits between the two in transfer time (also roughly 90 km) but offers a completely different on-the-ground experience: compact UNESCO old town, Holstentor gate, Brick Gothic churches and cobbled Hanseatic lanes. It suits history lovers on 7–8 hour calls who prefer walkable charm over Hamburg's scale.",
    ],
    tier: 1,
    comparisonTables: [
      {
        title: "Kiel vs Hamburg vs Lübeck at a glance",
        headers: ["Factor", "Kiel (local)", "Hamburg", "Lübeck"],
        rows: [
          ["Transfer each way", "0–20 min", "75–90 min", "75–90 min"],
          ["Minimum port hours", "3–4", "8–9", "7–8"],
          ["Return confidence", "High", "High (with margin)", "High (with margin)"],
          ["Best for", "Maritime, canal, easy day", "Big city, harbour", "Medieval history"],
          ["Walking intensity", "Light–moderate", "Moderate", "Moderate (cobbles)"],
        ],
      },
    ],
    faqs: [
      {
        question: "Which is best for a first visit to Germany?",
        answer:
          "Hamburg if you have a full day and want iconic harbour scenery. Lübeck if you prefer history and walkable old town. Kiel if your call is short or you want distinctly Baltic maritime character.",
      },
      {
        question: "Can I do two destinations in one day?",
        answer:
          "Not realistically. Even Kiel plus Lübeck is too tight. Pick one destination and enjoy it properly.",
      },
    ],
    relatedGuideSlugs: ["hamburg-from-kiel-cruise-port", "lubeck-from-kiel-cruise-port", "is-kiel-worth-exploring"],
    imageKey: "kiel-vs-hamburg-vs-lubeck",
    breadcrumbParent: { name: "Home", path: "/" },
  },
  {
    slug: "hamburg-from-kiel-cruise-port",
    path: "/hamburg-from-kiel-cruise-port",
    title: "Hamburg from Kiel Cruise Port",
    seoTitle: "How Far Is Hamburg from Kiel? — Cruise Passenger Guide",
    metaDescription:
      "Hamburg from Kiel cruise port — distance, drive times, what to see on a day trip and whether your port window is long enough for Germany's gateway-to-the-world.",
    eyebrow: "Hamburg",
    tagline:
      "About 90 km and 75–90 minutes each way — here is what Hamburg delivers and whether your port day is long enough.",
    overview:
      "Hamburg is the most popular day trip from Kiel cruise port — and for good reason. Speicherstadt's red-brick warehouses, the harbour's maritime energy and the Rathaus quarter justify the motorway transfer when you have eight or more usable hours ashore. The distance is roughly 90 km (56 miles) south on the A7 autobahn.",
    body: [
      "Coach transfers from Ostseekai typically take 75–90 minutes each way depending on traffic. Morning outbound journeys are usually faster; afternoon returns toward Kiel can add 15–20 minutes on busy summer days. Reputable shore excursions build 30–45 minutes buffer before all-aboard.",
      "On the ground, most cruise-focused Hamburg tours cover Speicherstadt, harbour viewpoints and the historic core — enough to feel the city's identity without attempting every museum. Harbour boat add-ons are popular but tighten the schedule.",
      "Independent excursions often offer better per-person value than ship-sponsored Hamburg tours, particularly for private groups of 4–6. Compare pricing and confirm return-to-ship monitoring before booking.",
    ],
    tier: 1,
    distanceFromPort: "Approx. 90 km (56 miles) south to central Hamburg",
    travelTime: "75–90 min by coach each way",
    timeNeeded: "4–5 hours in Hamburg plus transfers",
    returnToShip:
      "Budget 75–90 minutes for the return coach plus 30–45 minutes before all-aboard. Afternoon autobahn traffic is the main variable. Avoid Hamburg on port calls under 7 usable hours.",
    gettingThere: [
      { method: "Organised shore excursion coach", detail: "Pickup at Ostseekai → A7 south to Hamburg", time: "75–90 min each way", cost: "Excursion price" },
      { method: "Private vehicle", detail: "Door-to-door for your group; flexible stops", time: "70–85 min each way", cost: "From ~€141/person in a group of 6" },
      { method: "Train", detail: "IC trains from Kiel Hbf to Hamburg Hbf — independent only", time: "60–75 min each way", cost: "Low fare" },
    ],
    faqs: [
      {
        question: "How far is Hamburg from Kiel?",
        answer: "About 90 km (56 miles). Coach transfers take roughly 75–90 minutes each way.",
      },
      {
        question: "Can I visit Hamburg on a 6-hour port call?",
        answer: "It is too tight for comfort. You need at least 8 usable hours ashore including transfer margin.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "lubeck-from-kiel-cruise-port"],
    relatedExcursionSlug: "hamburg-highlights-from-kiel",
    imageKey: "hamburg-from-kiel-cruise-port",
  },
  {
    slug: "lubeck-from-kiel-cruise-port",
    path: "/lubeck-from-kiel-cruise-port",
    title: "Lübeck from Kiel Cruise Port",
    seoTitle: "Is Lübeck a Good Cruise Excursion from Kiel?",
    metaDescription:
      "Lübeck from Kiel — Hanseatic old town, Holstentor, transfer times and why Lübeck often beats Hamburg on 7-hour Baltic port calls.",
    eyebrow: "Lübeck",
    tagline:
      "Medieval Hanseatic lanes 90 km northeast — compact, walkable and often the better history day from Kiel.",
    overview:
      "Lübeck is one of Germany's best-preserved Hanseatic cities — a UNESCO old town on an island of cobbled lanes, Brick Gothic churches and the iconic Holstentor gate. From Kiel, the transfer matches Hamburg in distance (roughly 90 km) but the on-the-ground experience is more concentrated and walkable.",
    body: [
      "Organised tours run northeast from Ostseekai, reaching Lübeck's old town in 75–90 minutes. A guided walking tour covers Holstentor, the Rathaus quarter and church skyline, followed by free time for marzipan shops, lunch and courtyard exploration.",
      "Lübeck often suits 7-hour port calls better than Hamburg because the old town is compact — you see more per hour on the ground. It is the recommendation for passengers who prioritise atmosphere and history over big-city harbour energy.",
    ],
    tier: 1,
    distanceFromPort: "Approx. 90 km northeast to Lübeck old town",
    travelTime: "75–90 min by coach each way",
    timeNeeded: "3–4 hours in Lübeck plus transfers",
    returnToShip:
      "Similar motorway timing to Hamburg — 75–90 minutes return plus 30–45 minutes buffer. Generally reliable on organised tours.",
    faqs: [
      {
        question: "Is Lübeck better than Hamburg for a cruise day?",
        answer:
          "For history and walkable charm on a 7-hour call, often yes. For harbour scale and big-city energy on an 8+ hour call, Hamburg wins.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "hamburg-from-kiel-cruise-port"],
    relatedExcursionSlug: "lubeck-highlights-from-kiel",
    imageKey: "lubeck-from-kiel-cruise-port",
  },
  {
    slug: "is-kiel-worth-exploring",
    path: "/is-kiel-worth-exploring",
    title: "Is Kiel Worth Exploring on Its Own?",
    seoTitle: "Is Kiel Worth Exploring? — Cruise Passenger Guide",
    metaDescription:
      "When staying in Kiel beats Hamburg or Lübeck — canal locks, fjord scenery, maritime museums and the case for a local port day from Ostseekai.",
    eyebrow: "Kiel city",
    tagline:
      "Not just a transfer point to Hamburg — Kiel has canal engineering, fjord scenery and maritime heritage worth a full day ashore.",
    overview:
      "Many passengers treat Kiel purely as a gateway to Hamburg or Lübeck. That is a mistake on shorter port calls, late arrivals, or when you want something distinctly Baltic rather than another big-city tour. Kiel offers the Kiel Canal locks, fjord promenades, maritime museums and a walkable city centre — all within minutes of the cruise terminal.",
    body: [
      "The Kiel Canal (Nord-Ostsee-Kanal) is the world's busiest artificial waterway. Watching container ships transit the Holtenau locks is a genuine spectacle — and something you cannot replicate in Hamburg or Lübeck.",
      "The Kiellinie fjord promenade, maritime museums and naval heritage give Kiel an identity of its own. Food tours, hop-on hop-off loops and family-friendly harbour activities suit passengers who prefer not to gamble on autobahn timing.",
    ],
    tier: 1,
    faqs: [
      {
        question: "When should I stay in Kiel instead of going to Hamburg?",
        answer:
          "On port calls under 7 hours, late arrivals, with young children, or when you want maritime scenery and canal engineering rather than big-city sightseeing.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "kiel-port-day-by-duration"],
    relatedExcursionSlug: "kiel-city-walking-tour",
    imageKey: "is-kiel-worth-exploring",
  },
  {
    slug: "kiel-port-day-by-duration",
    path: "/kiel-port-day-by-duration",
    title: "Kiel Port Day by Duration",
    seoTitle: "Best Kiel Shore Excursions by Port Call Length",
    metaDescription:
      "What fits a short, medium or long Kiel port call — realistic excursion choices for 4, 6 and 8+ hour windows with return-to-ship margin.",
    eyebrow: "Planning",
    tagline:
      "Match your excursion to your hours ashore — not every destination fits every port window.",
    overview:
      "The biggest mistake Kiel cruise passengers make is booking Hamburg on a port call that cannot support it. This guide maps realistic excursion choices to short (under 5 hours), medium (5–7 hours) and long (8+ hours) port windows.",
    body: [
      "Short calls (under 5 usable hours): Kiel city walking tour, hop-on hop-off loop, or a compressed food tour. Do not attempt Hamburg or Lübeck.",
      "Medium calls (5–7 hours): Kiel canal and fjord scenic tour, extended city exploration, or food and culture tour. Lübeck is possible only at the upper end with prompt disembarkation.",
      "Long calls (8+ hours): Hamburg or Lübeck day trips, or combine a morning Kiel canal tour with afternoon city time.",
    ],
    tier: 1,
    planningTables: [
      {
        title: "Excursion fit by port window",
        headers: ["Port hours", "Recommended", "Avoid"],
        rows: [
          ["Under 5 hours", "Kiel walking, hop-on hop-off", "Hamburg, Lübeck"],
          ["5–7 hours", "Canal tour, food tour, extended Kiel", "Hamburg unless 7+ hours"],
          ["7–8 hours", "Lübeck, full Kiel day", "Hamburg unless 8+ hours"],
          ["8+ hours", "Hamburg, Lübeck, combined Kiel days", "Nothing — you have options"],
        ],
      },
    ],
    faqs: [
      {
        question: "How much buffer do I need before all-aboard?",
        answer: "30 minutes for local Kiel tours; 45 minutes for Hamburg and Lübeck day trips.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "is-kiel-worth-exploring"],
    imageKey: "kiel-port-day-by-duration",
  },
  {
    slug: "kiel-cruise-port-guide",
    path: "/kiel-cruise-port-guide",
    title: "Kiel Cruise Port Guide",
    seoTitle: "Kiel Cruise Port Guide — Terminals, Timing & Logistics",
    metaDescription:
      "Kiel cruise port guide for passengers — Ostseekai terminal, distances to Hamburg and Lübeck, local transport and return-to-ship advice.",
    eyebrow: "Port guide",
    tagline:
      "Where ships dock, how to get ashore, and what every Kiel cruise passenger should know before booking an excursion.",
    overview:
      "Kiel is one of the Baltic's most important cruise ports — a city where water defines everything. Most ships berth at Ostseekai (Baltic Sea quay) in a central location minutes from the city centre, main station and fjord promenade. This guide covers terminal layout, transfer distances and practical planning for your day ashore.",
    body: [
      "Ostseekai puts you within walking distance of Kiel's city centre, the Kiellinie fjord promenade and taxi ranks for longer excursions. Excursion coaches typically collect passengers at the terminal after clearance — allow 15–30 minutes from gangway to departure.",
      "Kiel Hauptbahnhof (main station) connects to Hamburg by IC train in about an hour for independent travellers. For organised excursions, coach is the standard for Hamburg and Lübeck day trips.",
    ],
    tier: 1,
    distanceFromPort: "City centre: 10–15 min walk from Ostseekai",
    travelTime: "Hamburg/Lübeck: 75–90 min by coach",
    tips: [
      "Euro is the currency; English widely spoken on organised excursions",
      "Baltic weather changes quickly — bring layers even in summer",
      "Confirm your all-aboard time before booking any day trip",
    ],
    faqs: [
      {
        question: "Can I walk from the cruise terminal to Kiel city centre?",
        answer: "Yes — Ostseekai is roughly 10–15 minutes on foot to the main shopping streets and Kiellinie promenade.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "kiel-port-day-by-duration"],
    imageKey: "kiel-cruise-port-guide",
  },
  {
    slug: "best-kiel-shore-excursions",
    path: "/best-kiel-shore-excursions",
    title: "Best Kiel Shore Excursions",
    seoTitle: "Best Kiel Shore Excursions — Editorial Picks for Cruise Passengers",
    metaDescription:
      "Our editorial team's best Kiel shore excursions — Hamburg, Lübeck, canal tours and local city days with badges for value, families and first-time visitors.",
    eyebrow: "Excursions",
    tagline:
      "Curated recommendations with editorial badges — not a random list, but honest picks for different passenger types and port windows.",
    overview:
      "We evaluate Kiel shore excursions on port-time fit, passenger value, return-to-ship confidence and whether the experience justifies the transfer. These are our editorial picks — use the badges on each excursion to find the right match for your day ashore.",
    body: [
      "Editor's Choice: Kiel City Walking Tour and Kiel Canal & Fjord Scenic Tour — the best of local Kiel without motorway risk.",
      "Best Value: Kiel Highlights Hop-On Hop-Off — maximum city coverage at accessible pricing.",
      "Best for Families: Family-Friendly Kiel Day Ashore — paced, local and low-stress.",
      "Best History Tour: Lübeck Highlights — UNESCO Hanseatic old town.",
      "Best Independent Day: Hamburg Highlights — the full big-city experience.",
    ],
    tier: 1,
    faqs: [
      {
        question: "What is the best shore excursion from Kiel?",
        answer:
          "It depends on your port window. For full days, Hamburg or Lübeck. For shorter calls, Kiel city walking tours or canal scenic tours. See our editorial badges for tailored recommendations.",
      },
    ],
    relatedGuideSlugs: ["kiel-vs-hamburg-vs-lubeck", "kiel-port-day-by-duration"],
    imageKey: "best-kiel-shore-excursions",
  },
];

export function getGuideBySlug(slug: string) {
  return guides.find((g) => g.slug === slug);
}

export function getGuideByPath(path: string) {
  return guides.find((g) => g.path === path);
}

export function getAllGuideSlugs() {
  return guides.map((g) => g.slug);
}

export function getTier1Guides() {
  return guides.filter((g) => g.tier === 1);
}
