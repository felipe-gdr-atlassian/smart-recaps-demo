export type RecapAudience = "exec" | "product" | "design" | "engineering";

export interface RecapCitation {
  source: "meeting" | "document" | "linear" | "github";
  title: string;
  url?: string;
  excerpt: string;
}

export interface RecapAction {
  owner: string;
  dueDate: string;
  action: string;
  citation: RecapCitation;
}

export interface SmartRecap {
  audience: RecapAudience;
  headline: string;
  summary: string;
  decisions: string[];
  risks: string[];
  actions: RecapAction[];
  citations: RecapCitation[];
}
