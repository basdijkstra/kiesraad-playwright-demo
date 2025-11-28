import { Page } from "@playwright/test";

export class ProductOverviewPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async selectProduct(product: string) {
        await this.page.getByText(product).click();
    }
}