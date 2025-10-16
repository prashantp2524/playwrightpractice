import { test, expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from "fs";
import path from "path";

type TestRecords = {
  Skill1: string;
  Skill2: string;
};

const records = parse(
  fs.readFileSync(
    path.join(__dirname, "../../test-data/qa/testdata.csv"),
    "utf-8"
  ),
  {
    columns: true,
    skip_empty_lines: true,
  }
) as TestRecords[];

for (const record of records) {
  test(`Data Driven Testing using JSON: ${record.Skill1}`, async ({ page }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByRole("combobox", { name: "Search" }).click();
    await page.getByRole("combobox", { name: "Search" }).fill(record.Skill1);
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
  });
}
