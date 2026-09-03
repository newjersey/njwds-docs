import { attachResults, expect, settle, test } from "./axe-test";

test("splash page has no sidebar toggle", async ({ page }) => {
  await page.goto("/");
  await settle(page);
  await expect(page.locator('button[id^="sidebar-group-toggle-"]')).toHaveCount(0);
});

const SIDENAV_ROUTE = "/reference/button/";

test.describe("reference page states", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SIDENAV_ROUTE);
    await settle(page);
  });

  test("sidebar groups expanded", async ({ page, makeAxeBuilder }, testInfo) => {
    const toggles = page.locator('button[id^="sidebar-group-toggle-"]');
    const count = await toggles.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const toggle = toggles.nth(i);
      if ((await toggle.getAttribute("aria-expanded")) === "false") {
        await toggle.click();
        await expect(toggle).toHaveAttribute("aria-expanded", "true");
      }
    }

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await attachResults(testInfo, accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("search dialog open", async ({ page, makeAxeBuilder }, testInfo) => {
    const searchToggle = page.getByRole("button", { name: "Search" });
    await expect(searchToggle).toBeEnabled();
    await searchToggle.click();

    const dialog = page.getByRole("dialog", { name: "Search" });
    await expect(dialog).toBeVisible();

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await attachResults(testInfo, accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("search query typed", async ({ page, makeAxeBuilder }, testInfo) => {
    const searchToggle = page.getByRole("button", { name: "Search" });
    await expect(searchToggle).toBeEnabled();
    await searchToggle.click();

    const dialog = page.getByRole("dialog", { name: "Search" });
    const searchInput = page.locator("#starlight__search .pagefind-ui__search-input");
    const devWarning = dialog.getByText("only available in production builds");
    await expect(searchInput.or(devWarning)).toBeVisible({ timeout: 15_000 });

    if (await searchInput.isVisible()) {
      await searchInput.fill("button");
      await expect(page.locator(".pagefind-ui__result").first()).toBeVisible({ timeout: 10_000 });
    }

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await attachResults(testInfo, accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("feedback widget expanded", async ({ page, makeAxeBuilder }, testInfo) => {
    const feedbackWidget = page.locator("feedback-widget");
    await feedbackWidget.getByRole("button", { name: "Yes" }).click();
    await expect(feedbackWidget.getByRole("textbox")).toBeVisible();

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await attachResults(testInfo, accessibilityScanResults);

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test.describe("mobile viewport", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("mobile nav open", async ({ page, makeAxeBuilder }, testInfo) => {
      const navToggle = page
        .getByRole("navigation", { name: "Main" })
        .getByRole("button", { name: "Menu" });
      await expect(navToggle).toBeVisible();
      await navToggle.click();

      const sidebar = page.locator("#starlight__sidebar");
      await expect(sidebar).toBeVisible();

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await attachResults(testInfo, accessibilityScanResults);

      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test("mobile table of contents open", async ({ page, makeAxeBuilder }, testInfo) => {
      const toc = page.locator("#starlight__mobile-toc");
      await expect(toc).toBeVisible();
      const summary = toc.locator("summary");
      await summary.click();
      await expect(toc).toHaveAttribute("open", "");

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await attachResults(testInfo, accessibilityScanResults);

      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });
});
