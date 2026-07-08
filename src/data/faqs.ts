import type { FAQ } from "./types";
import { getHomepageFaqs } from "./homepage";

export const extraFaqs: FAQ[] = [
  {
    question: "Where do cruise ships dock in Kiel?",
    answer:
      "Most cruise ships berth at Ostseekai (Baltic Sea quay) in central Kiel, within walking distance of the city centre. Some calls use nearby terminals — see our Kiel Cruise Port Guide for terminal details.",
  },
  {
    question: "What currency is used in Kiel?",
    answer:
      "Germany uses the euro. Cards are widely accepted in Kiel, Hamburg and Lübeck; carry some cash for smaller market stalls and cafés.",
  },
  {
    question: "Do I need a visa for shore excursions in Germany?",
    answer:
      "EU and many other passport holders can go ashore without a separate visa for typical cruise port stays. Check your nationality's requirements before sailing.",
  },
  {
    question: "What language is spoken on Kiel shore excursions?",
    answer:
      "German is the local language. Organised shore excursions for cruise passengers typically include English-speaking guides.",
  },
  {
    question: "Are your excursions bookable now?",
    answer:
      "We are an independent Kiel cruise planning resource. Our guides and editorial recommendations help you choose the right excursion; use the enquiry form or cruise planner for personalised advice.",
  },
];

export function getAllFaqs(): FAQ[] {
  return [...getHomepageFaqs(), ...extraFaqs];
}
