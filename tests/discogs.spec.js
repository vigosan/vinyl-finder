const { test, expect } = require("@playwright/test");

const NO_ITEMS = "No items available in the Marketplace";
const RELEASE_URI = "http://www.discogs.com/release";
const VINYL_IDS = [
  "1273740-E-Motion-3-Featuring-Prime-So-In-Love-With-You",
  "1028188-Active-Box-Feat-Chalina-Love-Sensation",
  "1058621-Renegade-Solidarity",
];

test.describe("Discogs", () => {
  VINYL_IDS.forEach((id) => {
    test(`${id} is not available`, async ({ page }) => {
      await page.goto(`${RELEASE_URI}/${id}`);
      await expect(page.getByText(NO_ITEMS)).toBeVisible();
    });
  });
});
