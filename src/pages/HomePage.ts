import { Locator, Page } from "@playwright/test";
import env from "dotenv";
env.config();

export class HomePage {
  readonly page: Page;

  readonly searchBox: Locator;

  constructor(page: Page) {
    this.page = page;

    this.searchBox = page.getByRole("combobox", { name: "Search" });
  }

  async goToURL() {
    await this.page.goto(`${process.env.YOUTUBE_URL}`);
  }

  async searchWithKeywords(keyword: string) {
    this.searchBox.click();
    await this.searchBox.fill(keyword);
    await this.searchBox.press("Enter");
  }
}
