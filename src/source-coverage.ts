import type { RecapCitation } from "./recap-contract";

export interface SourceCoverage {
  sourceTypes: RecapCitation["source"][];
  score: number;
  lowConfidence: boolean;
}

export function calculateSourceCoverage(citations: RecapCitation[]): SourceCoverage {
  const sourceTypes = Array.from(new Set(citations.map((citation) => citation.source))).sort();
  const score = Math.min(1, sourceTypes.length / 4);

  return {
    sourceTypes,
    score,
    lowConfidence: sourceTypes.length < 2,
  };
}

export function coverageLabel(coverage: SourceCoverage): string {
  if (coverage.score >= 0.75) return "strong";
  if (coverage.score >= 0.5) return "partial";
  return "low";
}
