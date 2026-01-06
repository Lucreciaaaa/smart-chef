// amount of user's ingredients "relevant" for scoring (coverageRatio)
export function getRelevantInputCount(
  totalInputs: number,
  coverageRatio: number,
) {
  if (totalInputs === 0) return 0;
  if (totalInputs < 6) return totalInputs;
  return Math.ceil(totalInputs * coverageRatio);
}

export function computeNormalizedScore(
  matchedCount: number,
  relevantCount: number,
) {
  if (relevantCount === 0) return 0;
  return Math.min(Math.round((matchedCount / relevantCount) * 100), 100);
}
