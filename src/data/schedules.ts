import type { ScheduleEntry, ShipSchedulePort } from "./types";
import {
  filterEntriesByMonth,
  filterEntriesByYear,
  getMonthsWithEntries,
  type ScheduleYear,
} from "@/lib/schedule-utils";
import izmirSchedule from "./imported-schedules/izmir.json";

const SCHEDULE_FAQS = [
  {
    question: "How accurate are the Izmir cruise ship schedules?",
    answer:
      "Schedules are compiled from published cruise timetables and updated periodically. Times, berths and dates can change, so always confirm your arrival and departure with your cruise line before booking shore excursions.",
  },
  {
    question: "Where do cruise ships dock in Izmir?",
    answer:
      "Cruise ships berth at the Port of Izmir along the Alsancak waterfront near Konak. The terminal is within reach of Kemeralti Bazaar — see our Izmir Cruise Port Guide for transfer times to Ephesus.",
  },
  {
    question: "When is Izmir cruise season?",
    answer:
      "Most calls run from April through November, with peak traffic in June, July and August. Spring and autumn offer milder temperatures for Ephesus walking.",
  },
];

const SCHEDULE_TIPS = [
  "Check how many ships are in port before booking Ephesus coaches — summer days can mean crowded site gates",
  "Confirm your berth at Alsancak so taxis and tours meet you at the correct gate",
  "Depart for Ephesus early on hot summer days to beat midday heat on marble streets",
  "Compare your time in port before choosing Ephesus plus Virgin Mary or Şirince combinations",
];

export const schedulePorts: ShipSchedulePort[] = [
  {
    slug: "izmir",
    name: "Izmir",
    country: "Turkey",
    seoTitle: "Izmir Cruise Ship Schedule 2026",
    metaDescription:
      "Izmir cruise ship schedule hub. See which ships are in port at Alsancak and plan Ephesus, Virgin Mary and Kemeralti shore excursions around published arrival and departure times.",
    intro:
      "Izmir is the Aegean's gateway to Ephesus — one of the Mediterranean's great cultural cruise ports. Check which vessels are scheduled before you book excursions or plan your port day.",
    description:
      "Aegean cruise port at Alsancak — Ephesus, Kemeralti Bazaar and Turkish food from the quay.",
    scheduleOverview:
      "Izmir sees cruise traffic from April through November, concentrated at Alsancak with occasional scheduling variations by ship size.",
    planningTips: SCHEDULE_TIPS,
    faqs: SCHEDULE_FAQS,
  },
];

const scheduleData: Record<string, ScheduleEntry[]> = {
  izmir: izmirSchedule as ScheduleEntry[],
};

export function getSchedulePortBySlug(slug: string): ShipSchedulePort | undefined {
  return schedulePorts.find((p) => p.slug === slug);
}

export function getAllSchedulePortSlugs(): string[] {
  return schedulePorts.map((p) => p.slug);
}

export function getScheduleEntries(slug: string): ScheduleEntry[] {
  return scheduleData[slug] ?? [];
}

export function getScheduleEntryCount(slug: string): number {
  return getScheduleEntries(slug).length;
}

export function getScheduleEntriesForYear(slug: string, year: ScheduleYear): ScheduleEntry[] {
  return filterEntriesByYear(getScheduleEntries(slug), year);
}

export function getScheduleEntriesForMonth(slug: string, monthKey: string): ScheduleEntry[] {
  return filterEntriesByMonth(getScheduleEntries(slug), monthKey);
}

export function getVerifiedMonthKeys(slug: string): string[] {
  return getMonthsWithEntries(getScheduleEntries(slug));
}

export function searchSchedulesByShip(query: string): { portSlug: string; entries: ScheduleEntry[] }[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  const results: { portSlug: string; entries: ScheduleEntry[] }[] = [];
  for (const port of schedulePorts) {
    const matches = getScheduleEntries(port.slug).filter(
      (e) => e.ship.toLowerCase().includes(q) || e.cruiseLine.toLowerCase().includes(q),
    );
    if (matches.length) results.push({ portSlug: port.slug, entries: matches });
  }
  return results;
}

export function getTodayTomorrowEntries(slug: string): { today: ScheduleEntry[]; tomorrow: ScheduleEntry[] } {
  const entries = getScheduleEntries(slug);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return {
    today: entries.filter((e) => e.date === fmt(today)),
    tomorrow: entries.filter((e) => e.date === fmt(tomorrow)),
  };
}
