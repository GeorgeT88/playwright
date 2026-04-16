import { test, expect } from '@playwright/test';

test.describe('Portfolio Page', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/portfolio');
    await expect(page).toHaveURL(/\/portfolio/);
    await expect(page.locator('#main')).toBeVisible();
  });
});
