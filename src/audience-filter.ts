import type { RecapAudience, SmartRecap } from "./recap-contract";

const audienceSectionOrder: Record<RecapAudience, Array<keyof SmartRecap>> = {
  exec: ["headline", "summary", "risks", "decisions", "actions", "citations", "audience"],
  product: ["headline", "summary", "decisions", "risks", "actions", "citations", "audience"],
  design: ["headline", "summary", "decisions", "citations", "risks", "actions", "audience"],
  engineering: ["headline", "risks", "actions", "decisions", "citations", "summary", "audience"],
};

export function getAudienceSectionOrder(audience: RecapAudience): Array<keyof SmartRecap> {
  return audienceSectionOrder[audience];
}

export function retargetRecap(recap: SmartRecap, audience: RecapAudience): SmartRecap {
  return { ...recap, audience };
}
