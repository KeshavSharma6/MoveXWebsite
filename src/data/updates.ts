export type UpdateType = "release" | "studio" | "fix" | "improvement"

export interface Update {
  date: string
  version?: string
  app?: string
  title: string
  description: string
  type: UpdateType
}

export const updates: Update[] = [
  {
    date: "Jul 2026",
    version: "2.1.0",
    app: "ReQuit",
    title: "Redesigned home screen",
    description:
      "Fresh layout focused on daily progress. Improved craving tracker with time-of-day pattern insights.",
    type: "release",
  },
  {
    date: "Jun 2026",
    app: "Studio",
    title: "New studio website",
    description:
      "Our studio website is live. Built with React, Vite, Tailwind CSS, and Framer Motion.",
    type: "studio",
  },
  {
    date: "May 2026",
    version: "2.0.0",
    app: "ReQuit",
    title: "Complete rewrite",
    description:
      "Rebuilt from the ground up. Dark mode, significantly improved performance, and a cleaner UI throughout.",
    type: "release",
  },
  {
    date: "Mar 2026",
    version: "1.2.1",
    app: "ReQuit",
    title: "Bug fixes & stability",
    description: "Fixed a crash on Android 14. Improved background notification reliability.",
    type: "fix",
  },
]
