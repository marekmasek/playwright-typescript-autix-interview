import {expect, Page} from "@playwright/test";

export class AdditionalServicesPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly ADDITIONAL_SERVICES_HDR = () => this.page.locator("//h1[.='Doplňkové služby']");


    public async additionalServicesHeaderShouldBeVisible() {
        await expect(this.ADDITIONAL_SERVICES_HDR()).toBeVisible();
    }
}
