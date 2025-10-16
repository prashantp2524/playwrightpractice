import { test, expect } from "@playwright/test";

test("Capture Screenshot Test", async ({ page }) => {
  await page.goto("https://www.youtube.com/@testerstalk");

  //element screenshot

  await page
    .locator("#page-header-container")
    .screenshot({ path: "screenshots/elementSc.png" });

  //page screenshot
  await page.screenshot({ path: "screenshots/pageSc.png" });
  //full page screenshot
  await page.screenshot({
    path: "screenshots/fullPageSc.png",
    fullPage: true,
  });
});
