const { test, expect } = require("@playwright/test");

const NOT_AVAILABLE = "No items for sale for this Release.";
const VINYLS = [
  "1046451-Ultrabeat-V-Darren-Styles-Sure-Feels-Good",
  "14442480-Chumi-DJ-Yesterday-Remember-Parties-Vol-6",
  "399069-Chumi-DJ-Edu-Vol-I",
  "841378-Acid-Tribute-For-An-Angel-Everybody",
];

test.describe("Discogs", () => {
  VINYLS.forEach((vinyl) => {
    test(`${vinyl} is not available`, async ({ page }) => {
      await page.goto(`https://www.discogs.com/release/${vinyl}`);
      await expect(page.getByText(NOT_AVAILABLE)).toBeVisible();
    });
  });
});
