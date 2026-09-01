import type { RecapCitation } from ./recap-contract;

export function formatCitation(citation: RecapCitation): string {
  const prefix = citation.url ? `[${citation.title}](${citation.url})` : citation.title;
  return `${prefix}: ${citation.excerpt}`;
}

export function groupCitationsBySource(citations: RecapCitation[]): Record<RecapCitation[source], RecapCitation[]> {
  return citations.reduce((groups, citation) => {
    groups[citation.source].push(citation);
    return groups;
  }, { meeting: [], document: [], linear: [], github: [] } as Record<RecapCitation[source], RecapCitation[]>);
}
