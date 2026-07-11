export interface AppStat {
  label: string
  value: string
}

export interface App {
  id: string
  name: string
  tagline: string
  description: string
  icon: string
  platform: "Android" | "iOS" | "Cross-platform"
  category: string
  status: "Live" | "Beta" | "In Development"
  playStoreUrl?: string
  appStoreUrl?: string
  accentColor: string
  features: string[]
  stats?: AppStat[]
}

export const apps: App[] = [
  {
    id: "requit",
    name: "ReQuit",
    tagline: "Quit smoking, one day at a time.",
    description:
      "A companion app for people quitting smoking. Track your progress, understand your craving patterns, and celebrate every milestone — without judgment or dark patterns.",
    icon: "RQ",
    platform: "Android",
    category: "Health & Wellness",
    status: "Live",
    playStoreUrl: "#",
    accentColor: "#f59e0b",
    features: [
      "Day-by-day progress tracking",
      "Craving log with time-of-day patterns",
      "Money saved calculator",
      "Health recovery timeline",
      "Offline-first, no account required",
      "No ads, no subscription",
    ],
    stats: [
      { label: "Downloads", value: "10K+" },
      { label: "Rating", value: "4.6 ★" },
      { label: "Platform", value: "Android" },
    ],
  },
]
