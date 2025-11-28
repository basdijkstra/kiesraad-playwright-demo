import { Page } from "@playwright/test";

export class ShoppingCartPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async gotoCheckout() {
        await this.page.getByRole('button', { name: 'Checkout'}).click();
    }
}