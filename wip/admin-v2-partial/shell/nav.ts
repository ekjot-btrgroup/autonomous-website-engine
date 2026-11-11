import type { LucideIcon } from "lucide-react";
import { Brain, FlaskConical, GitMerge, Globe, LayoutDashboard, Library, Settings, Target, Users, Shapes } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon; countKey?: "designs" | "briefs" | "sites" | "attention"; minRole?: "admin" };
export const NAV: { group: string; items: NavItem[] }[] = [
  {
    group: "Workspace",
    items: [
      { to: "/admin", label: "Overview", icon: LayoutDashboard },
      { to: "/admin/library", label: "Library", icon: Library, countKey: "designs" },
      { to: "/admin/coverage", label: "Coverage", icon: Shapes },
    ],
  },
  {
    group: "Clients",
    items: [
      { to: "/admin/briefs", label: "Briefs & shortlists", icon: Target, countKey: "briefs" },
      { to: "/admin/sites", label: "Sites", icon: Globe, countKey: "sites" },
    ],
  },
  {
    group: "Intelligence",
    items: [
      { to: "/admin/memory", label: "Memory & taste", icon: Brain },
      { to: "/admin/lab", label: "Match Lab", icon: FlaskConical },
    ],
  },
  {
    group: "System",
    items: [
      { to: "/admin/team", label: "Team", icon: Users },
      { to: "/admin/releases", label: "Releases", icon: GitMerge },
      { to: "/admin/settings", label: "Settings", icon: Settings },
    ],
  },
];

export const TITLES: Record<string, string> = {
  "": "Overview",
  library: "Library",
  d: "Library",
  coverage: "Coverage",
  briefs: "Briefs & shortlists",
  sites: "Sites",
  memory: "Memory & taste",
  lab: "Match Lab",
  team: "Team",
  releases: "Releases",
  settings: "Settings",
  profile: "Profile",
};
