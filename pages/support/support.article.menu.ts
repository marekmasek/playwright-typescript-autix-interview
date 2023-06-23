import {Page} from "@playwright/test";

export class SupportArticleMenu {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly ADDITIONAL_SERVICES_BTN = () => this.page.locator("//a[.='Doplňkové služby']");


    public async clickAdditionalServicesBtn() {
        await this.ADDITIONAL_SERVICES_BTN().click();
    }
}
