import {Localization} from "../../enums/localization";
import {test} from "@playwright/test";
import {SupportPage} from "../../pages/support/support.page";
import {HomePage} from "../../pages/home.page";

const localizations = [Localization.cs, Localization.en];

for (const localization of localizations) {
    test(`go from support page back to home page for localization: ${localization.value}`, async ({page}) => {
        await page.goto('https://help.autix.eu/' + localization.isoCode);

        await new SupportPage(page).clickBackToAppBtn();
        await new HomePage(page).verifyUrl(localization)
    });
}
