import { test, expect } from "@playwright/test";
import { HomePage } from "../../src/pages/HomePage";
import { ResultPage } from "../../src/pages/ResultPage";
import { PlaylistPage } from "../../src/pages/PlaylistPage";

import env from "dotenv";
env.config();

test("Page Object Model Testing", async ({ page }) => {
  //create object of HomePage class
  const homePage = new HomePage(page);
  await homePage.goToURL();
  await homePage.searchWithKeywords(`${process.env.SEARCH_KEYWORD}`);

  //create object of ResultPage class
  const resultPage = new ResultPage(page);

  await resultPage.clickOnPlaylist(`${process.env.SEARCH_KEYWORD}`);

  //create object of PlaylistPage class

  const playlistPage = new PlaylistPage(page);
  await playlistPage.validatePageTitle(
    `${process.env.SEARCH_KEYWORD}` + " - YouTube"
  );
});
