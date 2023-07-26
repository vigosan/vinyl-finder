const { test, expect } = require("@playwright/test");

const NO_ITEMS = "No items for sale for this Release.";
const RELEASE_URI = "http://www.discogs.com/release";
const VINYL_IDS = [
  "1046451-Ultrabeat-V-Darren-Styles-Sure-Feels-Good",
  "841378-Acid-Tribute-For-An-Angel-Everybody",
  "1903354-Paradygma-Stay-With-Me",
  "1264330-Digital-Dunk-Kye-Shand-Wayne-Ewing-Fuckin-Jew-Suck-My-Balls",
];

test.describe("Discogs", () => {
  VINYL_IDS.forEach((id) => {
    test(`${id} is not available`, async ({ page }) => {
      await page.goto(`${RELEASE_URI}/${id}`);
      await expect(page.getByText(NO_ITEMS)).toBeVisible();
    });
  });
});
