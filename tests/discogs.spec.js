const { test, expect } = require("@playwright/test");

const NO_ITEMS = "No items for sale for this Release.";
const RELEASE_URI = "http://www.discogs.com/release";
const VINYL_IDS = [
  "658976-Dani-EP-vs-DJ-Frank-Pure-Milk",
  "677437-Demode-Ft-KIM-Now-Im-Free"
];

test.describe("Discogs", () => {
  VINYL_IDS.forEach((id) => {
    test(`${id} is not available`, async ({ page }) => {
      await page.goto(`${RELEASE_URI}/${id}`);
      await expect(page.getByText(NO_ITEMS)).toBeVisible();
    });
  });
});
