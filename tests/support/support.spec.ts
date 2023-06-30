import {Localization} from "../../enums/localization";
import {test} from "@playwright/test";
import {SupportPage} from "../../pages/support/support.page";
import {HomePage} from "../../pages/home.page";

const localizations = [Localization.CS, Localization.EN];

for (const localization of localizations) {
    test(`go from support page back to home page for localization: ${localization.value}`, async ({page}) => {
        const supportPage = new SupportPage(page);

        await supportPage.navigate(localization);
        await supportPage.clickBackToAppBtn();
        await new HomePage(page).verifyUrl(localization)
    });
}
