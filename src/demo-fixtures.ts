import type { SmartRecap } from "./recap-contract";

export const demoRecaps: SmartRecap[] = [
  {
    audience: "exec",
    headline: "Smart Recaps beta is on track for the October 6 launch candidate",
    summary: "The team has locked the recap contract, attached Linear project resources, and opened PRs for audience filters and citation states.",
    decisions: ["Use cited summaries as the core beta promise", "Show low-confidence recaps before publish"],
    risks: ["Linear project resources need to appear in project context output"],
    actions: [
      {
        owner: "Engineering",
        dueDate: "2026-09-07",
        action: "Surface Linear project resources in project context",
        citation: { source: "linear", title: "Smart Recaps status update", excerpt: "Project resources are visible but not rendered by one context path" },
      },
    ],
    citations: [
      { source: "document", title: "Smart Recaps Strategy Brief", excerpt: "Success metrics emphasize cited recaps and reduced status chasing" },
      { source: "github", title: "PR #5 Add audience filter pipeline", excerpt: "Adds audience-specific section ordering" },
    ],
  },
  {
    audience: "engineering",
    headline: "Citation and audience work is split into reviewable slices",
    summary: "Engineering can review the audience pipeline separately from citation side panel state so the source graph stays reusable.",
    decisions: ["Run audience filters after source ingestion"],
    risks: ["Coverage scoring is not implemented yet"],
    actions: [],
    citations: [
      { source: "github", title: "PR #5 Add audience filter pipeline", excerpt: "Audience ordering is represented as a separate helper" },
      { source: "linear", title: "Smart Recaps Engineering Plan", excerpt: "Source ingestion normalizes meetings, Drive docs, Linear documents, GitHub issues, and PRs" },
    ],
  },
];
