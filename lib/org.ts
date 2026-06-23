// Mock organization data powering the admin/company analytics console.
// Represents the fictional client company's enrolled employees.

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: "Product" | "Engineering" | "Marketing" | "Operations" | "Sales" | "People";
  programSlug: string;
  programName: string;
  weeksCompleted: number;
  weeksTotal: number;
  hoursWatched: number;
  exercisesSubmitted: number;
  exercisesTotal: number;
  lastActiveDays: number; // days since last activity
  status: "Ahead" | "On track" | "At risk" | "Not started";
}

export const employees: Employee[] = [
  { id: "e1", name: "Amara Okafor", role: "VP Product", department: "Product", programSlug: "18-week-ai-transformation", programName: "AI Transformation", weeksCompleted: 11, weeksTotal: 18, hoursWatched: 24.5, exercisesSubmitted: 11, exercisesTotal: 11, lastActiveDays: 0, status: "Ahead" },
  { id: "e2", name: "Daniel Reyes", role: "Staff Engineer", department: "Engineering", programSlug: "12-week-ai-builders", programName: "AI Builders", weeksCompleted: 8, weeksTotal: 12, hoursWatched: 19.2, exercisesSubmitted: 8, exercisesTotal: 8, lastActiveDays: 1, status: "On track" },
  { id: "e3", name: "Priya Nair", role: "Growth Lead", department: "Marketing", programSlug: "9-week-applied-ai", programName: "Applied AI for Teams", weeksCompleted: 6, weeksTotal: 9, hoursWatched: 12.8, exercisesSubmitted: 6, exercisesTotal: 6, lastActiveDays: 2, status: "On track" },
  { id: "e4", name: "Marcus Lindqvist", role: "Ops Manager", department: "Operations", programSlug: "9-week-applied-ai", programName: "Applied AI for Teams", weeksCompleted: 2, weeksTotal: 9, hoursWatched: 3.1, exercisesSubmitted: 1, exercisesTotal: 2, lastActiveDays: 9, status: "At risk" },
  { id: "e5", name: "Sofia Castellanos", role: "Brand Designer", department: "Marketing", programSlug: "6-week-foundations", programName: "AI Foundations", weeksCompleted: 5, weeksTotal: 6, hoursWatched: 8.4, exercisesSubmitted: 5, exercisesTotal: 5, lastActiveDays: 0, status: "Ahead" },
  { id: "e6", name: "Tom Becker", role: "Account Executive", department: "Sales", programSlug: "6-week-foundations", programName: "AI Foundations", weeksCompleted: 3, weeksTotal: 6, hoursWatched: 4.9, exercisesSubmitted: 3, exercisesTotal: 3, lastActiveDays: 3, status: "On track" },
  { id: "e7", name: "Yuki Tanaka", role: "Backend Engineer", department: "Engineering", programSlug: "12-week-ai-builders", programName: "AI Builders", weeksCompleted: 10, weeksTotal: 12, hoursWatched: 22.7, exercisesSubmitted: 10, exercisesTotal: 10, lastActiveDays: 1, status: "Ahead" },
  { id: "e8", name: "Helena Vogt", role: "People Partner", department: "People", programSlug: "6-week-foundations", programName: "AI Foundations", weeksCompleted: 0, weeksTotal: 6, hoursWatched: 0.0, exercisesSubmitted: 0, exercisesTotal: 0, lastActiveDays: 21, status: "Not started" },
  { id: "e9", name: "Raj Malhotra", role: "Data Analyst", department: "Operations", programSlug: "9-week-applied-ai", programName: "Applied AI for Teams", weeksCompleted: 7, weeksTotal: 9, hoursWatched: 14.1, exercisesSubmitted: 7, exercisesTotal: 7, lastActiveDays: 0, status: "On track" },
  { id: "e10", name: "Clara Mendes", role: "PM", department: "Product", programSlug: "12-week-ai-builders", programName: "AI Builders", weeksCompleted: 4, weeksTotal: 12, hoursWatched: 9.6, exercisesSubmitted: 3, exercisesTotal: 4, lastActiveDays: 6, status: "At risk" },
  { id: "e11", name: "Oluwaseun Ade", role: "SDR", department: "Sales", programSlug: "6-week-foundations", programName: "AI Foundations", weeksCompleted: 6, weeksTotal: 6, hoursWatched: 9.8, exercisesSubmitted: 6, exercisesTotal: 6, lastActiveDays: 4, status: "Ahead" },
  { id: "e12", name: "Ingrid Solberg", role: "Eng Manager", department: "Engineering", programSlug: "18-week-ai-transformation", programName: "AI Transformation", weeksCompleted: 9, weeksTotal: 18, hoursWatched: 18.3, exercisesSubmitted: 9, exercisesTotal: 9, lastActiveDays: 2, status: "On track" },
  { id: "e13", name: "Pedro Alves", role: "Content Strategist", department: "Marketing", programSlug: "9-week-applied-ai", programName: "Applied AI for Teams", weeksCompleted: 1, weeksTotal: 9, hoursWatched: 1.4, exercisesSubmitted: 0, exercisesTotal: 1, lastActiveDays: 12, status: "At risk" },
  { id: "e14", name: "Naomi Klein", role: "CX Lead", department: "Operations", programSlug: "6-week-foundations", programName: "AI Foundations", weeksCompleted: 4, weeksTotal: 6, hoursWatched: 6.7, exercisesSubmitted: 4, exercisesTotal: 4, lastActiveDays: 1, status: "On track" },
];

// 8-week trend of weekly active learners (for the engagement chart).
export const activeTrend = [
  { week: "W1", active: 9, submissions: 7 },
  { week: "W2", active: 12, submissions: 11 },
  { week: "W3", active: 11, submissions: 10 },
  { week: "W4", active: 13, submissions: 12 },
  { week: "W5", active: 12, submissions: 11 },
  { week: "W6", active: 14, submissions: 13 },
  { week: "W7", active: 13, submissions: 12 },
  { week: "W8", active: 14, submissions: 14 },
];

export function deptCompletion() {
  const map = new Map<string, { dept: string; completion: number; count: number }>();
  for (const e of employees) {
    const prev = map.get(e.department) ?? { dept: e.department, completion: 0, count: 0 };
    const ratio = e.weeksTotal ? e.weeksCompleted / e.weeksTotal : 0;
    prev.completion += ratio;
    prev.count += 1;
    map.set(e.department, prev);
  }
  return Array.from(map.values()).map((d) => ({
    dept: d.dept,
    completion: Math.round((d.completion / d.count) * 100),
  }));
}

export function orgStats() {
  const enrolled = employees.length;
  const active = employees.filter((e) => e.lastActiveDays <= 7).length;
  const completed = employees.filter((e) => e.weeksCompleted >= e.weeksTotal && e.weeksTotal > 0).length;
  const atRisk = employees.filter((e) => e.status === "At risk").length;
  const avgCompletion = Math.round(
    (employees.reduce((s, e) => s + (e.weeksTotal ? e.weeksCompleted / e.weeksTotal : 0), 0) /
      employees.length) *
      100
  );
  const totalHours = Math.round(employees.reduce((s, e) => s + e.hoursWatched, 0));
  return { enrolled, active, completed, atRisk, avgCompletion, totalHours };
}

export const statusColor: Record<Employee["status"], string> = {
  Ahead: "text-emerald-400 bg-emerald-400/10 ring-emerald-400/20",
  "On track": "text-brand-300 bg-brand-400/10 ring-brand-400/20",
  "At risk": "text-amber-400 bg-amber-400/10 ring-amber-400/20",
  "Not started": "text-zinc-400 bg-zinc-400/10 ring-zinc-400/20",
};
