import {Page} from "@playwright/test";
import {TestProperties} from "../../config/test.properties";
import {Localization} from "../../enums/localization";

export class SupportPage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly CAR_RENTAL_BTN = () => this.page.locator("//h2[.='Autopůjčovna']");
    private readonly BACK_TO_APP_BTN = () => this.page.locator("//div[contains(@class,'max-w-[90rem]')]//a[contains(@href,'autix.eu')]");

    public async navigate(localization?: Localization) {
        await this.page.goto(TestProperties.getSupportUrl() + (localization === undefined ? "" : localization.isoCode));
    }

    public async clickCarRentalBtn() {
        await this.CAR_RENTAL_BTN().click();
    }

    public async clickBackToAppBtn() {
        await this.BACK_TO_APP_BTN().click();
    }

}
