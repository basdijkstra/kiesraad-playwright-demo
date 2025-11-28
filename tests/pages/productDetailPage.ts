import { Locator, Page } from "@playwright/test";

export class ProductDetailPage {

    private readonly page: Page;

    private readonly buttonAddToCart: Locator;
    private readonly buttonOpenShoppingCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.buttonAddToCart = page.getByText('Add to cart');
        this.buttonOpenShoppingCart = page.getByTestId('shopping-cart-link');
    }

    async addProductToShoppingCart() {
        await this.buttonAddToCart.click();

    }

    async gotoShoppingCart() {
        await this.buttonOpenShoppingCart.click();
    }
}