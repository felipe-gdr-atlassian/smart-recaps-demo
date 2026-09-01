export interface RecapQualityMetrics {
  citationCoverage: number;
  freshnessHours: number;
  crossFunctionalReaders: number;
  followUpClarity: number;
}

export function isBetaQualityTargetMet(metrics: RecapQualityMetrics): boolean {
  return metrics.citationCoverage >= 0.9 && metrics.crossFunctionalReaders >= 2 && metrics.followUpClarity >= 0.9;
}
