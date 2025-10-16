import * as xlsx from "xlsx";
import fs from "fs";
import path from "path";
import { clearScreenDown } from "readline";

interface TestRecords {
  Skill1: string;
  Skill2: string;
}

export function readExcelFile(filePath: string): TestRecords[] {
  // ✅ 1. Check if file exists
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  // ✅ 2. Read workbook safely
  const workbook = xlsx.readFile(filePath);

  if (!workbook || !workbook.SheetNames || workbook.SheetNames.length === 0) {
    throw new Error("No sheets found in the Excel file");
  }

  // ✅ 3. Access the first sheet safely
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  if (!sheet) {
    throw new Error(`Sheet "${sheetName}" is empty or invalid`);
  }

  // ✅ 4. Convert sheet to JSON (array of rows)
  const rawData: any[] = xlsx.utils.sheet_to_json(sheet, { header: 1 });

  // ✅ 5. Map to interface (skip header row)
  const records: TestRecords[] = rawData.slice(1).map((row: any) => ({
    Skill1: row[0] ?? "",
    Skill2: row[1] ?? "",
  }));

  return records;
}
