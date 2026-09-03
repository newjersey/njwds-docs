import { attachResults, expect, settle, test } from "./axe-test";
import { NOT_FOUND_PROBE_ROUTE, routes } from "./routes";

test.describe("pages", () => {
  for (const route of routes) {
    test(`page: ${route}`, async ({ page, makeAxeBuilder }, testInfo) => {
      await page.goto(route);
      await settle(page);

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await attachResults(testInfo, accessibilityScanResults);

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }

  test("page: 404", async ({ page, makeAxeBuilder }, testInfo) => {
    await page.goto(NOT_FOUND_PROBE_ROUTE);
    await settle(page);

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await attachResults(testInfo, accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
