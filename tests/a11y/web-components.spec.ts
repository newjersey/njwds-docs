import { expect, settle, test } from "./axe-test";

// Grove web components are only interactive and styled once their JavaScript registers them,
// so a missing or unbundled script leaves them as inert unknown elements.
test("grove web components are registered on the built site", async ({ page }) => {
  await page.goto("/reference/divider/");
  await settle(page);

  await expect
    .poll(() => page.evaluate(() => customElements.get("grove-divider") !== undefined))
    .toBe(true);
});
