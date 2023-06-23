import {Page} from "@playwright/test";

export class SupportPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly CAR_RENTAL_BTN = () => this.page.locator("//h2[.='Autopůjčovna']");
    private readonly BACK_TO_APP_BTN = () => this.page.locator("//div[contains(@class,'max-w-[90rem]')]//a[contains(@href,'autix.eu')]");


    public async clickCarRentalBtn() {
        await this.CAR_RENTAL_BTN().click();
    }

    public async clickBackToAppBtn() {
        await this.BACK_TO_APP_BTN().click();
    }

}
