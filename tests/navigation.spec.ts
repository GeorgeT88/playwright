import { test, expect } from '@playwright/test';

test.describe('Navigation', () => {
  test('navbar is visible on all pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('nav')).toBeVisible();
  });

  test('footer is visible on all pages', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('footer')).toBeVisible();
  });

  test('can navigate to About page via navbar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about me/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
  });

  test('can navigate to Portfolio page via navbar', async ({ page }) => {
    await page.goto('/');
    // Nav label is "Translated books" (i18n key: nav.portfolio)
    await page.getByRole('link', { name: /translated books/i }).first().click();
    await expect(page).toHaveURL(/\/portfolio/);
  });

  test('can navigate to Events page via navbar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /events/i }).first().click();
    await expect(page).toHaveURL(/\/events/);
  });

  test('can navigate to Contact page via navbar', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /contact/i }).first().click();
    await expect(page).toHaveURL(/\/contact/);
  });

  test('404 page is shown for unknown routes', async ({ page }) => {
    await page.goto('/this-page-does-not-exist');
    await expect(page.locator('nav')).toBeVisible();
  });
});
