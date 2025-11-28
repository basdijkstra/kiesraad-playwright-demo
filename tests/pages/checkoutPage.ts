import { Page } from "@playwright/test";

export class CheckoutPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkoutOrder(firstName: string, lastName: string, zipCode: string) {
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zipCode);

        await this.page.getByRole('button', { name: 'Continue'}).click();
        await this.page.getByRole('button', { name: 'Finish'}).click();
    }
}