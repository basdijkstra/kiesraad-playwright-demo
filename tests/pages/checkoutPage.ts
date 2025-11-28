import { Page } from "@playwright/test";
import { User } from "../models/user";

export class CheckoutPage {

    private readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async checkoutOrder(user: User) {
        await this.page.getByPlaceholder('First Name').fill(user.firstName);
        await this.page.getByPlaceholder('Last Name').fill(user.lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(user.zipCode);

        await this.page.getByRole('button', { name: 'Continue'}).click();
        await this.page.getByRole('button', { name: 'Finish'}).click();
    }
}