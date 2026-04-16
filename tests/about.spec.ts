import { test, expect } from '@playwright/test';

test.describe('About Page', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/about');
    await expect(page).toHaveURL(/\/about/);
    await expect(page.locator('#main')).toBeVisible();
  });
});
