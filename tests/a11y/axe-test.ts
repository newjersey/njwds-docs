import { expect, test as base } from "@playwright/test";
import type { Page, TestInfo } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults, ImpactValue, Result } from "axe-core";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"];
// Ignore storybook embeds
const EXCLUSIONS = "iframe";
const IMPACT_LEVELS: ImpactValue[] = ["minor", "moderate", "serious", "critical"];
// threshold for test failure; all violations are still attached to the report
const SEVERITY_THRESHOLD: ImpactValue = "critical";

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
  blockExternalRequests: void;
};

export const test = base.extend<AxeFixture>({
  blockExternalRequests: [
    async ({ page, baseURL }, use) => {
      const origin = baseURL ? new URL(baseURL).origin : undefined;
      await page.route("**/*", (route) => {
        const requestOrigin = new URL(route.request().url()).origin;
        return requestOrigin === origin ? route.continue() : route.abort();
      });

      await use();
    },
    { auto: true },
  ],
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () => new AxeBuilder({ page }).withTags(WCAG_TAGS).exclude(EXCLUSIONS);

    await use(makeAxeBuilder);
  },
});

export { expect } from "@playwright/test";

export const settle = async (page: Page): Promise<void> => {
  await page.waitForLoadState();
  await page
    .waitForFunction(() => customElements.get("feedback-widget") !== undefined)
    .catch(() => undefined);
};

export const attachResults = async (testInfo: TestInfo, results: AxeResults): Promise<void> => {
  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(results, null, 2),
    contentType: "application/json",
  });
};

const describeViolation = (testInfo: TestInfo, violation: Result): string => {
  const elementCount = violation.nodes.length;
  const elements = `${elementCount} element${elementCount === 1 ? "" : "s"}`;
  return `${violation.impact} \`${violation.id}\` on \`${testInfo.title}\` — ${violation.help} (${elements})`;
};

const annotateViolations = (
  testInfo: TestInfo,
  violations: Result[],
  thresholdIndex: number,
): void => {
  violations
    .filter((violation) => violation.impact)
    .forEach((violation) => {
      const isBlocking = IMPACT_LEVELS.indexOf(violation.impact as ImpactValue) >= thresholdIndex;
      testInfo.annotations.push({
        type: isBlocking ? `a11y-blocking-${violation.impact}` : `a11y-${violation.impact}`,
        description: describeViolation(testInfo, violation),
      });
    });
};

export const expectNoBlockingViolations = async (
  testInfo: TestInfo,
  results: AxeResults,
): Promise<void> => {
  await attachResults(testInfo, results);

  const thresholdIndex = IMPACT_LEVELS.indexOf(SEVERITY_THRESHOLD);
  annotateViolations(testInfo, results.violations, thresholdIndex);
  const blockingViolations = results.violations.filter(
    (violation) => violation.impact && IMPACT_LEVELS.indexOf(violation.impact) >= thresholdIndex,
  );

  expect(blockingViolations).toEqual([]);
};
