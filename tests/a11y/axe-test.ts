import { test as base } from "@playwright/test";
import type { Page, TestInfo } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import type { AxeResults } from "axe-core";

const WCAG_TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22a", "wcag22aa"];
// Ignore storybook embeds
const EXCLUSIONS = "iframe";

type AxeFixture = {
  makeAxeBuilder: () => AxeBuilder;
};

export const test = base.extend<AxeFixture>({
  makeAxeBuilder: async ({ page }, use) => {
    const makeAxeBuilder = () => new AxeBuilder({ page }).withTags(WCAG_TAGS).exclude(EXCLUSIONS);

    await use(makeAxeBuilder);
  },
});

export { expect } from "@playwright/test";

export async function settle(page: Page): Promise<void> {
  await page.waitForLoadState();
  await page
    .waitForFunction(() => customElements.get("feedback-widget") !== undefined)
    .catch(() => undefined);
}

export async function attachResults(testInfo: TestInfo, results: AxeResults): Promise<void> {
  await testInfo.attach("accessibility-scan-results", {
    body: JSON.stringify(results, null, 2),
    contentType: "application/json",
  });
}
