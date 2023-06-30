import {expect, Page} from "@playwright/test";
import {Localization} from "../enums/localization";
import {TestProperties} from "../config/test.properties";

export class HomePage {
    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    //Locators
    private readonly HTML = () => this.page.locator("//html");
    private readonly TEXT_BLOCK_ELEMENTS = () => this.page.locator("//div[contains(@id,'text_block')]");


    private static readonly TEXTS_EN: string[] = [
        "Autix BMS is a modern and comprehensive online system",
        "Employee control and loss minimisation",
        "New car sales agenda and agenda for the sale of used cars in simple way",
        "What are the main differences between off-line and on-line solutions"
    ];

    private static readonly TEXTS_CZ: string[] = [
        "Autix BMS je moderní a komplexní online systém",
        "Kontrola zaměstnanců a minimalizace ztrát",
        "Agenda prodeje nových vozů a agenda prodeje ojetých vozů jednoduchým způsobem",
        "Jaké jsou hlavní rozdíly mezi off-line a on-line řešeními"
    ];

    public async navigate(localization: Localization) {
        await this.page.goto(HomePage.getUrl(localization));
    }

    private static getUrl(localization: Localization) {
        return TestProperties.getUrl() + (Localization.EN === localization ? '' : localization.isoCode);
    }

    public async checkLanguage(localization: Localization) {
        await expect(this.HTML()).toHaveAttribute("lang", localization.htmlLang);

        const expectedTexts = (() => {
                switch (localization) {
                    case Localization.CS:
                        return HomePage.TEXTS_CZ;
                    case Localization.EN:
                        return HomePage.TEXTS_EN;
                    default:
                        throw new Error("Expected texts are not implemented in tests for this localization, they have to be added");
                }
            }
        );

        await expect(this.TEXT_BLOCK_ELEMENTS(), "Page should contain these texts: \n" + expectedTexts()).toContainText(expectedTexts());
    }

    public async verifyUrl(localization: Localization) {
        await expect(this.page.url(), "Page url should be as expected").toBe(HomePage.getUrl(localization));
    }
}
