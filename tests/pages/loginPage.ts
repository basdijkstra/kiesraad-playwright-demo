import { Locator, Page } from "@playwright/test";

export class LoginPage {

    private readonly page: Page;

    private readonly textfieldUsername: Locator;
    private readonly textfieldPassword: Locator;
    private readonly buttonDoLogin: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textfieldUsername = this.page.getByPlaceholder('Username');
        this.textfieldPassword = this.page.getByPlaceholder('Password');
        this.buttonDoLogin = this.page.getByRole('button', { name: 'Login' });
    }

    async open() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async loginAs(username: string, password: string) {
        await this.textfieldUsername.fill(username);
        await this.textfieldPassword.fill(password);
        await this.buttonDoLogin.click();
    }
}