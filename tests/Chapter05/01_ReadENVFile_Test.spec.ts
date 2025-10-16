import { test, expect } from "@playwright/test";
import env from "dotenv";
env.config();

test("Read ENV File Test", async ({ page }) => {
  await page.goto(`${process.env.GOOGLE_URL}`);
});
