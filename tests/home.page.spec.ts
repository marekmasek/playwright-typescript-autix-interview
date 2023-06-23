import {test} from '@playwright/test';
import {HomePage} from "../pages/home.page";
import {NavigationMenu} from "../pages/navigation.menu";
import {Localization} from "../enums/localization";

const localizations = [
    // fromLocalization, toLocalization
    [Localization.en, Localization.cs],
    [Localization.cs, Localization.en]
];

for (const [fromLocalization, toLocalization] of localizations) {
    test(`switch localization from ${fromLocalization.value} to ${toLocalization.value}`, async ({page}) => {
        await page.goto(Localization.en == fromLocalization ? '' : fromLocalization.isoCode);

        await new NavigationMenu(page).switchLanguage(toLocalization);
        await new HomePage(page).checkLanguage(toLocalization);
    });
}
