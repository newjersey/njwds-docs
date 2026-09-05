import type { Locator } from "@playwright/test";
import { expect, expectNoViolations, settle, test } from "./axe-test";

test("splash page has no sidebar toggle", async ({ page }) => {
  await page.goto("/");
  await settle(page);
  await expect(page.locator('button[id^="sidebar-group-toggle-"]')).toHaveCount(0);
});

const PAGE_ROUTE = "/reference/button/";

test.describe("page interactivity", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE_ROUTE);
    await settle(page);
  });

  test.describe("sidebar", () => {
    let sidebar: Locator;
    let toggles: Locator;
    test.beforeEach(async ({ page }) => {
      sidebar = page.locator("#starlight__sidebar");
      toggles = sidebar.getByRole("button");
    });

    test("all toggles rendered", async () => {
      const count = await toggles.count();
      expect(count).toEqual(6);
    });

    test("current section expanded by default", async () => {
      await expect(sidebar.getByRole("button", { expanded: true })).toHaveCount(1);
      // "Components" specific to current PAGE_ROUTE (/reference/button/)
      await expect(
        sidebar.getByRole("button", { name: "Components", expanded: true }),
      ).toBeVisible();
    });

    test("all sidebar sections close", async ({ makeAxeBuilder }, testInfo) => {
      const expandedToggle = sidebar.getByRole("button", { expanded: true });
      await expect(expandedToggle).toHaveCount(1);
      await expandedToggle.click();

      const count = await toggles.count();
      await expect(sidebar.getByRole("button", { expanded: true })).toHaveCount(0);
      await expect(sidebar.getByRole("button", { expanded: false })).toHaveCount(count);

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await expectNoViolations(testInfo, accessibilityScanResults);
    });

    test("only one section open at a time", async () => {
      const defaultExpandedToggleId = await sidebar
        .getByRole("button", { expanded: true })
        .getAttribute("id");
      const defaultExpandedToggle = sidebar.locator(`#${defaultExpandedToggleId}`);

      const newExpandedToggleId = await sidebar
        .getByRole("button", { expanded: false })
        .first()
        .getAttribute("id");
      const newExpandedToggle = sidebar.locator(`#${newExpandedToggleId}`);
      await newExpandedToggle.click();

      await expect(newExpandedToggle).toHaveAttribute("aria-expanded", "true");
      await expect(defaultExpandedToggle).toHaveAttribute("aria-expanded", "false");
    });
  });

  test("search dialog open", async ({ page, makeAxeBuilder }, testInfo) => {
    const searchToggle = page.getByRole("button", { name: "Search" });
    await expect(searchToggle).toBeEnabled();
    await searchToggle.click();

    const dialog = page.getByRole("dialog", { name: "Search" });
    await expect(dialog).toBeVisible();

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await expectNoViolations(testInfo, accessibilityScanResults);
  });

  test("feedback widget expanded", async ({ page, makeAxeBuilder }, testInfo) => {
    const feedbackWidget = page.locator("feedback-widget");
    await feedbackWidget.getByRole("button", { name: "Yes" }).click();
    await expect(feedbackWidget.getByRole("textbox")).toBeVisible();

    const accessibilityScanResults = await makeAxeBuilder().analyze();
    await expectNoViolations(testInfo, accessibilityScanResults);
  });

  test.describe("mobile viewport", () => {
    test.use({ viewport: { width: 375, height: 667 } });

    test("mobile nav open", async ({ page, makeAxeBuilder }, testInfo) => {
      const navToggle = page
        .getByRole("navigation", { name: "Main" })
        .getByRole("button", { name: "Menu" });
      await expect(navToggle).toBeVisible();

      // handles starlight implementation of aria-expanded on button wrapper
      const menuButton = page.locator("starlight-menu-button");
      await expect(menuButton).not.toHaveAttribute("aria-expanded", "true");
      await navToggle.click();
      await expect(menuButton).toHaveAttribute("aria-expanded", "true");

      const sidebar = page.locator("#starlight__sidebar");
      await expect(sidebar).toBeVisible();

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await expectNoViolations(testInfo, accessibilityScanResults);
    });

    test("mobile table of contents open", async ({ page, makeAxeBuilder }, testInfo) => {
      const toc = page.locator("#starlight__mobile-toc");
      await expect(toc).toBeVisible();
      const summary = toc.getByText("On this page");
      await summary.click();
      // <details> + <summary> implementation; open is boolean toggle on <details>
      await expect(toc).toHaveAttribute("open", "");

      const accessibilityScanResults = await makeAxeBuilder().analyze();
      await expectNoViolations(testInfo, accessibilityScanResults);
    });
  });
});
