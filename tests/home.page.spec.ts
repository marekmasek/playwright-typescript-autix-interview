import {test} from '@playwright/test';
import {HomePage} from "../pages/home.page";
import {NavigationMenu} from "../pages/navigation.menu";
import {Localization} from "../enums/localization";

const localizations = [
    // fromLocalization, toLocalization
    [Localization.EN, Localization.CS],
    [Localization.CS, Localization.EN]
];

for (const [fromLocalization, toLocalization] of localizations) {
    test(`switch localization from ${fromLocalization.value} to ${toLocalization.value}`, async ({page}) => {
        const homePage = new HomePage(page);

        await homePage.navigate(fromLocalization);
        await new NavigationMenu(page).switchLanguage(toLocalization);
        await homePage.checkLanguage(toLocalization);
    });
}
