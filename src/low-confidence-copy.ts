import type { RecapAudience } from "./recap-contract";

const lowConfidenceCopy: Record<RecapAudience, string> = {
  exec: "This recap has limited source coverage. Review the evidence before sharing a decision summary.",
  product: "This recap needs more source context before it can represent launch impact confidently.",
  design: "This recap is missing enough evidence to validate the interaction decision. Review the available sources.",
  engineering: "This recap has partial technical evidence. Check linked PRs, issues, and docs before handoff.",
};

export function getLowConfidenceCopy(audience: RecapAudience): string {
  return lowConfidenceCopy[audience];
}

export function getEmptyRecapCopy(): string {
  return "Connect meetings, docs, tracker work, or PRs to generate a cited recap.";
}
