import { Locator, Page } from "@playwright/test";

export class ConfirmationPage {

    private readonly page: Page;

    private readonly _textConfirmation: Locator;

    constructor(page: Page) {
        this.page = page;
        this._textConfirmation = page.getByText('Thank you for your order!');
    }

    public get textConfirmation() {
        return this._textConfirmation;
    }
}