import type { ExcursionPage } from "./types";

export const excursions: ExcursionPage[] = [
  {
    slug: "kiel-city-walking-tour",
    title: "Kiel City Walking Tour",
    seoTitle: "Kiel City Walking Shore Excursion — Baltic Port Day",
    metaDescription:
      "Explore Kiel on foot from the cruise terminal — harbour, fjord promenade, maritime museum and city centre with cruise-timed return from Ostseekai.",
    category: "Kiel city",
    tagline:
      "A walkable port day through Germany's great naval city — harbour views, maritime heritage and Baltic atmosphere without leaving Schleswig-Holstein.",
    duration: "3–4 hours",
    pace: "Relaxed",
    bestFor: "Passengers who want to stay local and avoid long coach transfers",
    overview:
      "Kiel rewards passengers who stay close to the ship. The cruise terminal at Ostseekai sits minutes from the city centre, the Kiel Fjord promenade and maritime landmarks that define this Baltic port. A guided walking tour covers the essentials — harbour life, the Nikolaikirche quarter, the Kiellinie waterfront and the stories behind Germany's busiest artificial waterway — on a schedule built around your all-aboard.",
    body: [
      "Unlike Hamburg or Lübeck, Kiel does not demand a 90-minute motorway transfer. Your day starts at the gangway and unfolds on foot or by short local transport, which makes this the lowest-risk option when your ship has a shorter call or when you simply prefer not to spend half the day on a coach.",
      "Guides who work the Baltic circuit understand cruise pacing: a harbour orientation first, then the old town lanes around Nikolaikirche, time on the Kiellinie for fjord views, and optional stops at the Maritime Museum or fish market depending on your interests. Summer calls can include a harbour boat ride; winter calls lean toward indoor museums and café culture.",
      "Return-to-ship confidence is among the highest of any Kiel excursion because you are never more than a short taxi or walk from Ostseekai. That matters when two ships share the port or when departure times shift.",
    ],
    highlights: [
      "Ostseekai harbour and cruise terminal orientation",
      "Kiellinie fjord promenade and Baltic views",
      "Nikolaikirche and historic city centre lanes",
      "Maritime heritage and naval history context",
      "Optional harbour boat or museum stop",
      "Direct return to your ship with minimal transfer risk",
    ],
    included: [
      "Licensed local guide",
      "Walking route tailored to your port window",
      "Harbour and city-centre highlights",
      "Return timing aligned to your ship's schedule",
    ],
    portLogistics:
      "Ships berth at Ostseekai (Baltic Sea quay) or nearby terminals within walking distance of the city centre. Most walking tours meet at the terminal within 15–20 minutes of clearance. Allow 3–4 hours for a thorough city introduction; shorter 2-hour versions suit tight calls.",
    tips: [
      "Wear comfortable shoes — cobblestones in the old town can be uneven",
      "Bring a light jacket — Baltic breezes off the fjord are common even in summer",
      "Euros are used throughout; cards widely accepted in the city centre",
      "This is the safest default when your ship arrives late or departs early",
    ],
    faqs: [
      {
        question: "Is Kiel worth exploring on its own?",
        answer:
          "Yes — especially on shorter port calls or when you prefer not to gamble on motorway traffic to Hamburg. Kiel offers genuine maritime character, fjord scenery and walkable city sights without a long transfer.",
      },
      {
        question: "How much walking is involved?",
        answer:
          "Typically 3–5 km at a relaxed pace with rest stops. Routes can be shortened for passengers with limited mobility.",
      },
      {
        question: "What if my ship arrives late?",
        answer:
          "Walking tours from the terminal are the most forgiving option — no coach convoy to miss, and guides can compress the route to fit your remaining time ashore.",
      },
    ],
    relatedExcursionSlugs: ["kiel-highlights-hop-on-hop-off", "kiel-canal-fjord-tour", "kiel-food-and-beer-tour"],
    relatedGuideSlug: "is-kiel-worth-exploring",
    snapshot: {
      duration: "3–4 hours",
      distanceFromPort: "0–2 km — walking from terminal",
      walkingRequired: "Light to moderate — 3–5 km",
      fitnessLevel: "Easy",
      bestFor: "First-time visitors staying local",
      returnConfidence: "High",
      weather: "Outdoor walking — fjord breeze; rain possible year-round",
    },
    featured: true,
    badges: ["editors-choice", "best-first-time"],
    experiencePath: "discover-kiel",
  },
  {
    slug: "kiel-highlights-hop-on-hop-off",
    title: "Kiel Highlights Hop-On Hop-Off",
    seoTitle: "Kiel Hop-On Hop-Off Shore Excursion from Cruise Port",
    metaDescription:
      "See Kiel at your own pace on a hop-on hop-off bus from the cruise terminal — harbour, canal locks, city sights and flexible stops with return-to-ship timing.",
    category: "Kiel city",
    tagline:
      "Cover more ground than a walking tour while keeping the flexibility to hop off at harbour viewpoints, canal locks and city landmarks.",
    duration: "3–5 hours",
    pace: "Relaxed",
    bestFor: "Passengers who want city coverage with minimal walking",
    overview:
      "A hop-on hop-off loop is the practical middle ground for Kiel — more ground than walking, less commitment than a full-day Hamburg run. Double-decker routes typically connect the cruise terminal with Holtenau locks, harbour viewpoints and central stops, letting you tailor the day to your interests and energy.",
    body: [
      "The open-top format suits Baltic summer days when you want harbour panoramas without a fixed coach itinerary. Stops often include the Kiel Canal's Holtenau locks — where giant ships pass between the North Sea and Baltic — plus city-centre landmarks and waterfront promenades.",
      "Because you control where you hop off, this works well for mixed groups: one person visits the maritime museum while another strolls the Kiellinie. The loop returns toward the terminal, keeping transfer risk lower than inter-city excursions.",
      "On shorter calls, ride the full loop without hopping off for a comprehensive orientation. On longer calls, combine a bus loop with lunch in the city centre before returning to Ostseekai.",
    ],
    highlights: [
      "Holtenau locks and Kiel Canal viewpoints",
      "Harbour and fjord panoramas from upper deck",
      "Flexible hop-off at city-centre and waterfront stops",
      "Easy pace for passengers with limited mobility",
      "Full loop orientation on tight port windows",
    ],
    included: [
      "24-hour or cruise-day hop-on hop-off pass",
      "Audio commentary in English",
      "Multiple stops including canal and harbour",
      "Return to terminal area by final bus loop",
    ],
    portLogistics:
      "Buses typically stop near Ostseekai cruise terminal. Allow 90 minutes minimum for a full loop; 3–5 hours if hopping off at Holtenau and city stops. Confirm the last bus time relative to your all-aboard.",
    tips: [
      "Check the last bus departure before hopping off at distant stops",
      "Upper deck offers best photos but is exposed to wind",
      "Combine with a short harbour walk if time allows after the loop",
    ],
    faqs: [
      {
        question: "Is hop-on hop-off better than a walking tour?",
        answer:
          "It covers more distance with less walking — ideal if mobility is limited or you want to reach Holtenau locks without a separate transfer.",
      },
      {
        question: "Does the bus go to the Kiel Canal locks?",
        answer:
          "Most Kiel sightseeing loops include Holtenau or canal viewpoints — confirm the route map when booking.",
      },
    ],
    relatedExcursionSlugs: ["kiel-city-walking-tour", "kiel-canal-fjord-tour"],
    relatedGuideSlug: "is-kiel-worth-exploring",
    snapshot: {
      duration: "3–5 hours",
      distanceFromPort: "City loop — up to 15 km route",
      walkingRequired: "Light — optional at each stop",
      fitnessLevel: "Easy",
      bestFor: "Easy sightseeing with canal and harbour coverage",
      returnConfidence: "High",
      weather: "Open-top bus — dress for wind and rain",
    },
    featured: true,
    badges: ["best-value"],
    experiencePath: "discover-kiel",
  },
  {
    slug: "lubeck-highlights-from-kiel",
    title: "Lübeck Highlights from Kiel",
    seoTitle: "Lübeck Shore Excursion from Kiel Cruise Port",
    metaDescription:
      "Visit medieval Lübeck from Kiel — Holstentor gate, Hanseatic old town and Brick Gothic churches on a cruise-timed shore excursion with guided walking tour.",
    category: "Lübeck",
    tagline:
      "UNESCO-listed Hanseatic streets, the iconic Holstentor and marzipan heritage — northern Germany's most atmospheric day trip from Kiel.",
    duration: "7–8 hours",
    pace: "Moderate",
    bestFor: "History lovers who want a focused medieval city over big-city Hamburg",
    overview:
      "Lübeck is the Hanseatic gem of the Baltic — a compact island old town of Brick Gothic churches, gabled merchants' houses and cobbled lanes that feel centuries removed from a modern cruise port. From Kiel, the drive takes roughly 90 minutes each way, leaving a solid block for guided walking through Holstentor, the Rathaus quarter and free time for marzipan shops and café stops.",
    body: [
      "Reputable shore excursions collect you at Ostseekai and run northeast on the autobahn toward Lübeck's historic centre. The old town sits on an island encircled by the Trave River and canals — walkable once you arrive, which keeps on-foot distance manageable despite the longer transfer.",
      "Guides focus on Hanseatic history: how Lübeck dominated Baltic trade, the symbolism of Holstentor, and the Brick Gothic skyline that earned UNESCO status. Free time typically follows the walking tour — enough for lunch, Niederegger marzipan and independent exploration of hidden courtyards.",
      "Return-to-ship confidence is generally high on organised tours, though motorway traffic can add variability. Lübeck suits passengers who prioritise atmosphere and history over Hamburg's scale — and who have at least seven usable hours ashore.",
    ],
    highlights: [
      "Holstentor — Lübeck's iconic city gate",
      "UNESCO Hanseatic old town walking tour",
      "Brick Gothic churches and merchants' houses",
      "Free time for marzipan, cafés and courtyards",
      "Licensed guide with Hanseatic history expertise",
    ],
    included: [
      "Air-conditioned coach transfer from Kiel port",
      "Guided walking tour of old town highlights",
      "Free time for lunch and independent exploration",
      "Timed return aligned to your ship's all-aboard",
    ],
    portLogistics:
      "Allow 90 minutes each way between Kiel and Lübeck (roughly 90 km). Tours need 7–8 hours ashore including transfers, guided walk and free time. Not recommended on calls under six usable hours.",
    tips: [
      "Wear comfortable walking shoes — cobblestones throughout the old town",
      "Book marzipan tasting if interested — Niederegger is a Lübeck institution",
      "Lübeck is often less crowded than Hamburg on shared cruise days",
      "Build 45 minutes buffer before all-aboard for motorway variability",
    ],
    faqs: [
      {
        question: "Is Lübeck a good cruise excursion from Kiel?",
        answer:
          "Yes — on port calls of 7+ hours. Lübeck offers concentrated medieval atmosphere in a compact walkable centre, often with a more relaxed pace than Hamburg.",
      },
      {
        question: "Is Lübeck better than Hamburg for a cruise day?",
        answer:
          "It depends on your priorities. Lübeck wins for Hanseatic history and walkable charm; Hamburg wins for harbour scale, Speicherstadt and big-city energy. See our comparison guide.",
      },
    ],
    relatedExcursionSlugs: ["private-lubeck-from-kiel", "hamburg-highlights-from-kiel"],
    relatedGuideSlug: "lubeck-from-kiel-cruise-port",
    snapshot: {
      duration: "7–8 hours",
      distanceFromPort: "Approx. 90 km; 75–90 min each way",
      walkingRequired: "Moderate — 2–3 km in old town",
      fitnessLevel: "Moderate",
      bestFor: "History and UNESCO old town enthusiasts",
      returnConfidence: "High",
      weather: "Outdoor walking — cobbled streets; dress in layers",
    },
    featured: true,
    badges: ["editors-choice", "best-history"],
    experiencePath: "lubeck",
  },
  {
    slug: "hamburg-highlights-from-kiel",
    title: "Hamburg Highlights from Kiel",
    seoTitle: "Hamburg Shore Excursion from Kiel Cruise Port",
    metaDescription:
      "Day trip to Hamburg from Kiel cruise port — Speicherstadt, harbour, Elbphilharmonie area and Germany's gateway-to-the-world on a cruise-timed shore excursion.",
    category: "Hamburg",
    tagline:
      "Germany's great harbour city — Speicherstadt warehouses, maritime energy and grand architecture, reached from Kiel on a full-day excursion.",
    duration: "8–9 hours",
    pace: "Moderate",
    bestFor: "Passengers who want a big-city experience and have a full port day",
    overview:
      "Hamburg is the headline day trip from Kiel — a stylish metropolis of canals, warehouses and harbour culture that justifies the motorway transfer for passengers with eight or more hours ashore. Organised excursions run the 90 km south to cover Speicherstadt, harbour viewpoints, the Rathaus area and the waterfront energy that earned Hamburg its 'Gateway to the World' nickname.",
    body: [
      "From Ostseekai, coaches typically reach central Hamburg in 75–90 minutes depending on traffic. The day unfolds as a guided introduction to the harbour quarter and historic core — enough to feel the city's maritime identity without attempting to see everything.",
      "Speicherstadt's red-brick warehouses and canal bridges are the photographic highlight; guides often include the Rathaus, harbour promenade and context on Hamburg's role in global trade. Free time may allow harbour boat add-ons or lunch in the HafenCity area when schedules permit.",
      "This excursion demands discipline on timing. Hamburg rewards passengers on longer port calls who accept motorway risk in exchange for one of northern Germany's defining urban experiences. Independent booking often offers better value than ship-sponsored equivalents.",
    ],
    highlights: [
      "Speicherstadt warehouse district and canal bridges",
      "Hamburg harbour and maritime quarter",
      "Rathaus and historic city centre",
      "Gateway-to-the-World harbour context",
      "Licensed guide and cruise-timed return",
    ],
    included: [
      "Coach transfer from Kiel cruise terminal",
      "Guided city and harbour highlights tour",
      "Free time where schedule allows",
      "Return aligned to your ship's all-aboard",
    ],
    portLogistics:
      "Kiel to Hamburg is roughly 90 km — 75–90 minutes each way by coach. Plan for 8–9 hours ashore minimum. Afternoon motorway traffic toward Kiel can add 15–20 minutes; reputable operators build buffer time.",
    tips: [
      "This needs a full port day — avoid on calls under 7 usable hours",
      "Comfortable shoes for harbour walking and warehouse district cobbles",
      "Harbour boat add-ons are popular but tighten the schedule — confirm timing",
      "Compare independent excursion pricing against your cruise line's Hamburg tour",
    ],
    faqs: [
      {
        question: "Can I visit Hamburg from Kiel cruise port?",
        answer:
          "Yes — it is the most popular day trip from Kiel. Allow 75–90 minutes each way and at least 8 hours ashore for a worthwhile visit with return margin.",
      },
      {
        question: "How far is Hamburg from Kiel?",
        answer:
          "About 90 km (56 miles) south. Coach transfers take roughly 75–90 minutes each way depending on traffic.",
      },
    ],
    relatedExcursionSlugs: ["private-hamburg-from-kiel", "lubeck-highlights-from-kiel"],
    relatedGuideSlug: "hamburg-from-kiel-cruise-port",
    snapshot: {
      duration: "8–9 hours",
      distanceFromPort: "Approx. 90 km; 75–90 min each way",
      walkingRequired: "Moderate — harbour and city walking",
      fitnessLevel: "Moderate",
      bestFor: "Big-city harbour and architecture lovers",
      returnConfidence: "High",
      weather: "Outdoor harbour walking — North Sea weather can change quickly",
    },
    featured: true,
    badges: ["best-independent-day"],
    experiencePath: "hamburg",
  },
  {
    slug: "kiel-canal-fjord-tour",
    title: "Kiel Canal & Fjord Scenic Tour",
    seoTitle: "Kiel Canal & Fjord Scenic Shore Excursion",
    metaDescription:
      "Scenic Kiel Canal and fjord tour from the cruise port — ship locks, Baltic views and northern Germany's maritime engineering without leaving the region.",
    category: "Scenic",
    tagline:
      "Watch giant ships transit the world's busiest artificial waterway, then follow the Kiel Fjord for Baltic scenery — engineering and nature on one port day.",
    duration: "4–5 hours",
    pace: "Relaxed",
    bestFor: "Scenery lovers, maritime enthusiasts and passengers who want something distinctly 'Kiel'",
    overview:
      "The Kiel Canal (Nord-Ostsee-Kanal) is the city's defining engineering marvel — a 98 km waterway linking the North Sea to the Baltic, with lock complexes at Holtenau and Brunsbüttel that handle more ship traffic than Panama or Suez. A scenic tour combines lock viewing with fjord coastline, giving you the maritime experience that generic city tours miss.",
    body: [
      "Unlike Hamburg or Lübeck, this excursion stays within Schleswig-Holstein, which keeps transfer times short and return confidence high. Coaches or boats reach Holtenau locks where you can watch container ships and cruise vessels transit the chambers — a genuinely impressive spectacle when timing aligns.",
      "Fjord segments follow the Kiellinie or include a short harbour cruise, pairing canal engineering with Baltic coastal atmosphere. Guides explain the canal's history, its role in German naval strategy and why Kiel remains one of Europe's great maritime cities.",
      "This is our editorial pick for passengers who ask 'what is special about Kiel itself?' — the answer is water, locks and fjord, not just proximity to Hamburg.",
    ],
    highlights: [
      "Holtenau lock complex and ship-watching",
      "Kiel Fjord scenic coastline",
      "Maritime engineering and canal history",
      "Kiellinie promenade viewpoints",
      "Short transfer from cruise terminal",
    ],
    included: [
      "Transport to canal locks and fjord viewpoints",
      "Licensed guide with maritime expertise",
      "Lock viewing and scenic stops",
      "Return timed to your ship's schedule",
    ],
    portLogistics:
      "Holtenau locks are 15–20 minutes from Ostseekai. Full scenic loops take 4–5 hours including lock waiting time for ship transits. Boat-based variants depart from near the terminal.",
    tips: [
      "Ship transits at locks are not guaranteed on a fixed schedule — tours build flexibility",
      "Bring binoculars for lock viewing",
      "This pairs well with a short city walk if your call is 6+ hours",
    ],
    faqs: [
      {
        question: "Will I definitely see a ship in the locks?",
        answer:
          "The Kiel Canal is extremely busy, so transit viewing is likely but not guaranteed at an exact minute. Good tours allow waiting time at Holtenau.",
      },
      {
        question: "Is this better than going to Hamburg?",
        answer:
          "On shorter port calls or when you want distinctly local maritime scenery, yes. Hamburg is the better choice for big-city culture on a full day.",
      },
    ],
    relatedExcursionSlugs: ["kiel-city-walking-tour", "kiel-highlights-hop-on-hop-off"],
    relatedGuideSlug: "is-kiel-worth-exploring",
    snapshot: {
      duration: "4–5 hours",
      distanceFromPort: "5–20 km — short regional transfers",
      walkingRequired: "Light — viewpoints and promenade stops",
      fitnessLevel: "Easy",
      bestFor: "Maritime scenery and canal engineering",
      returnConfidence: "High",
      weather: "Outdoor — exposed at locks; jacket recommended",
    },
    featured: true,
    badges: ["editors-choice", "best-scenic"],
    experiencePath: "canal-fjord",
  },
  {
    slug: "kiel-food-and-beer-tour",
    title: "Kiel Food, Beer & Local Culture",
    seoTitle: "Kiel Food & Beer Shore Excursion — Local Culture Tour",
    metaDescription:
      "Taste northern Germany from Kiel cruise port — local beer, fresh fish, Labskaus and Baltic food culture on a cruise-timed culinary walking tour.",
    category: "Food & culture",
    tagline:
      "Fresh fish from the fjord, northern German beer halls and Baltic flavours — a delicious introduction to Schleswig-Holstein on a cruise schedule.",
    duration: "3–4 hours",
    pace: "Relaxed",
    bestFor: "Food lovers who want authentic local culture without a long transfer",
    overview:
      "Northern Germany has a distinct culinary identity — Labskaus, fresh herring, dark beer and harbour-side fish markets that reflect Kiel's maritime roots. A food-focused walking tour samples the best of it within walking distance of the cruise terminal, pairing tastings with stories of Baltic trade, naval history and local brewing tradition.",
    body: [
      "Food tours typically start near the harbour or fish market, where the day's catch still shapes menus. Stops may include a traditional Brauhaus, a fish restaurant with fjord views and a bakery known for regional pastries — paced so you are not rushing back to a distant coach.",
      "Because everything stays local, this excursion tolerates late ship arrivals better than Hamburg or Lübeck runs. It suits couples, friend groups and anyone who believes the best port days include a memorable meal.",
      "Guides connect food to place: why Labskaus became a sailor's staple, how Hanseatic trade shaped northern German cooking, and where locals actually eat away from the tourist trail.",
    ],
    highlights: [
      "Harbour fish market and fjord-fresh seafood",
      "Traditional northern German beer hall visit",
      "Regional specialities — Labskaus, herring, pastries",
      "Local culture and maritime food stories",
      "Walkable route from cruise terminal",
    ],
    included: [
      "Guided food and culture walking tour",
      "Multiple tasting stops",
      "Local beer or non-alcoholic alternative",
      "Cruise-timed return to terminal",
    ],
    portLogistics:
      "Entirely walkable from Ostseekai — 3–4 hours including sit-down tastings. Confirm dietary requirements when booking.",
    tips: [
      "Mention allergies and dietary needs when enquiring",
      "Pace yourself — tastings add up across multiple stops",
      "Pair with a morning canal tour on longer port days",
    ],
    faqs: [
      {
        question: "Is this suitable for non-drinkers?",
        answer:
          "Yes — reputable tours offer non-alcoholic alternatives at beer stops and focus on food throughout.",
      },
    ],
    relatedExcursionSlugs: ["kiel-city-walking-tour", "kiel-family-friendly-day"],
    snapshot: {
      duration: "3–4 hours",
      distanceFromPort: "Walking — city centre and harbour",
      walkingRequired: "Light — 2–3 km between stops",
      fitnessLevel: "Easy",
      bestFor: "Food and local culture enthusiasts",
      returnConfidence: "High",
      weather: "Mix of indoor tastings and outdoor walking",
    },
    featured: true,
    experiencePath: "food-beer",
  },
  {
    slug: "kiel-family-friendly-day",
    title: "Family-Friendly Kiel Day Ashore",
    seoTitle: "Family-Friendly Kiel Shore Excursion — Cruise Port Day",
    metaDescription:
      "Family-friendly Kiel shore excursion from the cruise port — maritime museum, harbour, beach and easy pacing for children with reliable return-to-ship timing.",
    category: "Family",
    tagline:
      "Maritime museums, harbour boats and beach time — a paced Kiel day designed for families with children and realistic return-to-ship timing.",
    duration: "4–5 hours",
    pace: "Relaxed",
    bestFor: "Families with children who want low-stress, engaging activities near the port",
    overview:
      "Family port days need short transfers, flexible pacing and activities that hold children's attention. Kiel delivers — maritime museums with interactive exhibits, harbour boat rides, beach access at nearby Laboe and enough variety to keep different ages engaged without the motorway gamble of Hamburg.",
    body: [
      "Family-focused excursions prioritise engagement over checklist sightseeing. A typical day might combine the Maritime Museum or submarine exhibit with a short harbour boat trip and ice cream on the Kiellinie — structured enough to feel purposeful, relaxed enough for tired legs.",
      "Staying local means you can shorten the day if younger children fade, and return-to-ship confidence stays high. Laboe beach and the Naval Memorial are popular add-ons on longer calls when weather cooperates.",
      "Guides experienced with families build in restroom stops, snack breaks and shade — small details that matter enormously on a Baltic summer day.",
    ],
    highlights: [
      "Interactive maritime museum or submarine exhibit",
      "Short harbour boat ride",
      "Kiellinie promenade and beach options",
      "Child-friendly pacing with regular breaks",
      "High return-to-ship confidence — stays local",
    ],
    included: [
      "Family-oriented local guide",
      "Entry to key family attractions",
      "Harbour boat or equivalent activity",
      "Flexible pacing for children",
    ],
    portLogistics:
      "Activities cluster within 5–15 km of Ostseekai. Allow 4–5 hours for the standard family loop; beach extensions need 6+ hours.",
    tips: [
      "Bring snacks and water for between stops",
      "Sun protection essential for harbour and beach segments",
      "Check submarine or museum opening days — some close Mondays",
    ],
    faqs: [
      {
        question: "Is Hamburg or Lübeck better with young children?",
        answer:
          "Kiel itself is often less stressful — shorter transfers, maritime activities children enjoy, and easier return if moods change. Save Hamburg for patient older children on long port days.",
      },
    ],
    relatedExcursionSlugs: ["kiel-city-walking-tour", "kiel-canal-fjord-tour"],
    snapshot: {
      duration: "4–5 hours",
      distanceFromPort: "5–15 km — short local transfers",
      walkingRequired: "Light — child-friendly distances",
      fitnessLevel: "Easy",
      bestFor: "Families with children of mixed ages",
      returnConfidence: "High",
      weather: "Mix of indoor museums and outdoor harbour — plan layers",
    },
    featured: true,
    badges: ["best-families"],
    experiencePath: "family",
  },
  {
    slug: "private-hamburg-from-kiel",
    title: "Private Hamburg from Kiel",
    seoTitle: "Private Hamburg Shore Excursion from Kiel Cruise Port",
    metaDescription:
      "Private Hamburg day trip from Kiel — your vehicle, your pace, Speicherstadt and harbour highlights with cruise-timed return for your group.",
    category: "Hamburg",
    tagline:
      "Your group, your schedule — a private Hamburg day with direct transfers and itinerary control that large coach tours cannot match.",
    duration: "8–9 hours",
    pace: "Relaxed",
    bestFor: "Groups who want Hamburg flexibility without sharing a large coach",
    overview:
      "Private Hamburg excursions trade per-person coach pricing for vehicle exclusivity — direct pickup at Ostseekai, motorway transfer on your schedule, and Hamburg sightseeing paced to your group's interests. Smaller groups often find better value and a superior experience compared with ship-sponsored equivalents.",
    body: [
      "Private vehicles typically seat 4–8 passengers, which means faster embarkation at the port, flexible photo stops en route, and Hamburg time tailored to your priorities — Speicherstadt, harbour boat, Elbphilharmonie exterior, or a specific museum.",
      "Per-person costs drop as group size increases, and independent operators are often priced below cruise-line private equivalents. Return timing is negotiated around your all-aboard with direct communication to your driver.",
    ],
    highlights: [
      "Private vehicle from Kiel terminal",
      "Flexible Hamburg itinerary",
      "Smaller group than standard coach tours",
      "Direct communication on return timing",
    ],
    included: [
      "Private vehicle and driver",
      "Licensed guide (or driver-guide)",
      "Flexible Hamburg stops",
      "Cruise-timed return",
    ],
    portLogistics:
      "Same 75–90 minute transfer each way as group tours. Private format allows slightly later departure if your ship clears passengers slowly.",
    tips: [
      "Confirm vehicle size and guide language when booking",
      "Agree Hamburg priorities in advance to maximise on-site time",
      "Per-person value improves with 4–6 passengers",
    ],
    faqs: [
      {
        question: "Is private better than a group Hamburg tour?",
        answer:
          "For groups of 4+, private tours often offer better per-person value, faster port pickup and itinerary control that large coaches cannot provide.",
      },
    ],
    relatedExcursionSlugs: ["hamburg-highlights-from-kiel", "private-lubeck-from-kiel"],
    relatedGuideSlug: "hamburg-from-kiel-cruise-port",
    snapshot: {
      duration: "8–9 hours",
      distanceFromPort: "90 km; 75–90 min each way",
      walkingRequired: "Moderate — tailored to group",
      fitnessLevel: "Easy",
      bestFor: "Private groups wanting Hamburg flexibility",
      returnConfidence: "High",
      weather: "Outdoor harbour walking",
    },
    featured: false,
    badges: ["best-independent-day"],
    experiencePath: "hamburg",
  },
  {
    slug: "private-lubeck-from-kiel",
    title: "Private Lübeck from Kiel",
    seoTitle: "Private Lübeck Shore Excursion from Kiel Cruise Port",
    metaDescription:
      "Private Lübeck day trip from Kiel — Holstentor, Hanseatic old town and your own pace with a dedicated vehicle from the cruise terminal.",
    category: "Lübeck",
    tagline:
      "Discover Lübeck's medieval lanes at your group's pace — private transfer, flexible free time and Hanseatic history without a crowded coach.",
    duration: "7–8 hours",
    pace: "Relaxed",
    bestFor: "Groups who want Lübeck intimacy with private transport",
    overview:
      "Private Lübeck tours offer the same Hanseatic old town experience as group excursions but with vehicle exclusivity, flexible free time and pacing suited to photographers, older passengers or families who need restroom and rest breaks on their own schedule.",
    body: [
      "The transfer from Kiel matches group tours, but private pickup at the gangway and flexible departure times can recover 20–30 minutes on busy clearance days. In Lübeck, your guide adapts the walking route to your mobility and interests — churches, courtyards, marzipan or simply atmosphere.",
    ],
    highlights: [
      "Private vehicle from Kiel port",
      "Flexible Lübeck old town tour",
      "Extended free time for lunch and shopping",
      "Smaller group experience",
    ],
    included: [
      "Private vehicle and driver",
      "Licensed guide in Lübeck",
      "Flexible old town walking tour",
      "Cruise-timed return",
    ],
    portLogistics:
      "90 km, 75–90 minutes each way. Private format suits groups of 4–8 who split vehicle cost.",
    tips: [
      "Lübeck rewards slow exploration — private tours maximise courtyard and café time",
      "Winter calls are cosy in Lübeck's cafés; summer calls need sun protection on cobbles",
    ],
    faqs: [],
    relatedExcursionSlugs: ["lubeck-highlights-from-kiel", "private-hamburg-from-kiel"],
    relatedGuideSlug: "lubeck-from-kiel-cruise-port",
    snapshot: {
      duration: "7–8 hours",
      distanceFromPort: "90 km; 75–90 min each way",
      walkingRequired: "Moderate — tailored pace",
      fitnessLevel: "Easy",
      bestFor: "Private groups preferring Lübeck over Hamburg",
      returnConfidence: "High",
      weather: "Outdoor old town walking",
    },
    featured: false,
    experiencePath: "lubeck",
  },
];

export function getExcursionBySlug(slug: string) {
  return excursions.find((e) => e.slug === slug);
}

export function getAllExcursionSlugs() {
  return excursions.map((e) => e.slug);
}

export function getFeaturedExcursions() {
  return excursions.filter((e) => e.featured);
}

export function getExcursionsByPath(pathId: string) {
  return excursions.filter((e) => e.experiencePath === pathId);
}
