import { test, expect } from '@playwright/test';

test.describe('Events Page', () => {
  test('page loads successfully', async ({ page }) => {
    await page.goto('/events');
    await expect(page).toHaveURL(/\/events/);
    await expect(page.locator('#main')).toBeVisible();
  });
});
