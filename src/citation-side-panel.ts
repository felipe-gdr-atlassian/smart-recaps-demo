import type { RecapCitation } from "./recap-contract";

export interface CitationPanelState {
  selectedCitation?: RecapCitation;
  sourceCount: number;
  lowConfidence: boolean;
}

export function buildCitationPanelState(citations: RecapCitation[], selectedTitle?: string): CitationPanelState {
  const selectedCitation = citations.find((citation) => citation.title === selectedTitle) ?? citations[0];
  return {
    selectedCitation,
    sourceCount: citations.length,
    lowConfidence: citations.length < 2,
  };
}
