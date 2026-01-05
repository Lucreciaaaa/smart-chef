// transforms a matched/relevant ratio into a text label for the user
export function getMatchLabel(score: number) {
  if (score >= 90) return "Excellent match";
  if (score >= 60) return "Good match";
  if (score >= 50) return "Partial match";
  return "Low match";
}
