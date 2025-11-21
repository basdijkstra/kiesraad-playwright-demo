import { test, expect } from '@playwright/test';

test.describe('User can buy products from the shop', async() => {

  const articles = [
    { article: 'Sauce Labs Backpack' },
    { article: 'Sauce Labs Bike Light' }
  ]

  for(const { article } of articles) {
    test(`User can buy a ${article}`, async ({ page }) => {

      await page.goto('https://www.saucedemo.com');

      await page.getByPlaceholder('Username').fill('standard_user');
      await page.getByPlaceholder('Password').fill('secret_sauce');
      await page.getByRole('button', { name: 'Login' }).click();

      await expect(page.getByTestId('shopping-cart-link')).toBeVisible();

      await page.getByText(article).click();

      await expect(page.getByTestId('back-to-products')).toBeVisible();

      await page.getByText('Add to cart').click();

      await page.getByTestId('shopping-cart-link').click();

      await page.getByRole('button', { name: 'Checkout'}).click();

      await page.getByPlaceholder('First Name').fill('Bas');
      await page.getByPlaceholder('Last Name').fill('Dijkstra');
      await page.getByPlaceholder('Zip/Postal Code').fill('12345');

      await page.getByRole('button', { name: 'Continue'}).click();
      await page.getByRole('button', { name: 'Finish'}).click();

      await expect(page.getByText('Thank you for your order!')).toBeVisible();
    });
  }
});
