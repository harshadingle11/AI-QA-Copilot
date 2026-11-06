import { test, expect } from '@playwright/test'; // Import Playwright's test tools and built-in assertions.

test('homepage shows the Playwright title and main heading', async ({ page }) => { // Create a test and get a browser page.
  await page.goto('https://playwright.dev/', { waitUntil: 'commit' }); // Open the site and continue once its response starts.

  await expect(page).toHaveTitle(/Playwright/); // Check that the browser tab title contains "Playwright".
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible(); // Check that the main (level-one) heading is visible.
});
