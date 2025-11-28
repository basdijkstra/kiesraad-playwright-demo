import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';
import { ProductOverviewPage } from './pages/productOverviewPage';
import { ProductDetailPage } from './pages/productDetailPage';
import { ShoppingCartPage } from './pages/shoppingCartPage';
import { CheckoutPage } from './pages/checkoutPage';

test.describe('User can buy products from the shop', async() => {

  const products = [
    { product: 'Sauce Labs Backpack' },
    { product: 'Sauce Labs Bike Light' }
  ]

  for(const { product } of products) {
    test(`User can buy a ${product}`, async ({ page }) => {

      // Login 
      var loginPage = new LoginPage(page);
      await loginPage.open();
      await loginPage.loginAs('standard_user', 'secret_sauce');

      // Product overview
      await new ProductOverviewPage(page).selectProduct(product);

      // Product detail page
      var productDetailPage = new ProductDetailPage(page);
      await productDetailPage.addProductToShoppingCart();
      await productDetailPage.gotoShoppingCart();

      // Shopping cart
      await new ShoppingCartPage(page).gotoCheckout();

      // Checkout
      await new CheckoutPage(page).checkoutOrder('Bas', 'Dijkstra', '12345');

      // Confirmation
      await expect(page.getByText('Thank you for your order!')).toBeVisible();
    });
  }
});
