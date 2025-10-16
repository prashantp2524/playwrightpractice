//Import playwrite module
import { test, expect } from "@playwright/test";

//write a test
test("My First Playwrite Typescript Test", async ({ page }) => {
  //go to URL
  await page.goto("https://www.facebook.com/");
  // Search with keywords

  await page.getByTestId("royal-login-button").click();
  await expect(page.locator("#email_container")).toContainText(
    "The email address or mobile number you entered isn't connected to an account. Find your account and log in."
  );
});
