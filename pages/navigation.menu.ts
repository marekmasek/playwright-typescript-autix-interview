import {Page} from "@playwright/test";
import {Localization} from "../enums/localization";

export class NavigationMenu {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly LANGUAGE_SWITCHER = () => this.page.locator("//div[contains(@class,'trp-language-switcher')]");
    private readonly LANGUAGE = () => this.page.getByRole("link");

    public async switchLanguage(localization: Localization) {
        await this.LANGUAGE_SWITCHER().hover();
        await this.LANGUAGE().getByTitle(localization.value).click();
    }

}
