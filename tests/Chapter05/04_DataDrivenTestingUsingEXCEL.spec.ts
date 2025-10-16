import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";
import { readExcelFile } from "../../src/utils/ExcelHelper";

const filePath = path.join(__dirname, "../../test-data/qa/testdata.xlsx");

readExcelFile(filePath);
const records = readExcelFile(filePath);

for (const record of records) {
  test(`Data Driven Testing using EXCEL: ${record.Skill1}`, async ({
    page,
  }) => {
    await page.goto("https://www.youtube.com/");
    await page.getByRole("combobox", { name: "Search" }).click();
    await page.getByRole("combobox", { name: "Search" }).fill(record.Skill1);
    await page.getByRole("combobox", { name: "Search" }).press("Enter");
  });
}
