import { test, expect } from '@playwright/test';

const publicPages = ['/', '/about', '/portfolio', '/events', '/contact'];

test.describe('Accessibility', () => {
  for (const path of publicPages) {
    // Confirms a visually hidden "skip to content" link exists in the DOM for keyboard users
    test(`skip-to-content link exists on ${path}`, async ({ page }) => {
      await page.goto(path);
      const skipLink = page.getByRole('link', { name: /skip/i });
      await expect(skipLink).toBeAttached();
    });

    // Confirms the page has exactly one <h1> element (accessibility and SEO best practice)
    test(`page has exactly one h1 on ${path}`, async ({ page }) => {
      await page.goto(path);
      const h1Count = await page.locator('h1').count();
      expect(h1Count).toBe(1);
    });

    // Confirms every <img> element on the page has an alt attribute (required for screen readers)
    test(`all images have alt text on ${path}`, async ({ page }) => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      const imagesWithoutAlt = await page.locator('img:not([alt])').count();
      expect(imagesWithoutAlt).toBe(0);
    });
  }
});
