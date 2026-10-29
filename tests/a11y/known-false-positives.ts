export type KnownFalsePositive = {
  ruleId: string;
  target: string;
};

export const KNOWN_FALSE_POSITIVES: KnownFalsePositive[] = [
  {
    // Axe flags the visible "Ctrl K"/"⌘K" hint text as missing from the accessible name but that information
    // is announced to AT via aria-keyshortcuts
    ruleId: "label-content-name-mismatch",
    target: ".search-toggle",
  },
];

export const isKnownFalsePositive = (ruleId: string, target: string[]): boolean =>
  KNOWN_FALSE_POSITIVES.some((f) => f.ruleId === ruleId && target.includes(f.target));
