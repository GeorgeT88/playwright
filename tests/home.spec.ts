import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/manuelaklenke\.com/);
    await expect(page).not.toHaveTitle('');
  });

  test('main content area is visible', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('#main')).toBeVisible();
  });
});
