import { test, expect } from '@playwright/test';

const publicPages = ['/', '/about', '/portfolio', '/events', '/contact'];

test.describe('Accessibility', () => {
  for (const path of publicPages) {
    test(`skip-to-content link exists on ${path}`, async ({ page }) => {
      await page.goto(path);
      const skipLink = page.getByRole('link', { name: /skip/i });
      await expect(skipLink).toBeAttached();
    });

    test(`all images have alt text on ${path}`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const imagesWithoutAlt = await page.locator('img:not([alt])').count();
      expect(imagesWithoutAlt).toBe(0);
    });
  }
});
