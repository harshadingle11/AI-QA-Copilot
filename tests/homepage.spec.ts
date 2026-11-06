import { test, expect } from '@playwright/test';

test('homepage title contains Playwright', async ({ page }) => {
  await page.goto('https://playwright.dev/', { waitUntil: 'commit' });

  await expect(page).toHaveTitle(/Playwright/);
});
