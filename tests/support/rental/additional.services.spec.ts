import {test} from "@playwright/test";
import {SupportPage} from "../../../pages/support/support.page";
import {AdditionalServicesPage} from "../../../pages/support/additional.services.page";
import {SupportArticleMenu} from "../../../pages/support/support.article.menu";

test(`navigate to additional services page`, async ({page}) => {
    const supportPage = new SupportPage(page);

    await supportPage.navigate();
    await supportPage.clickCarRentalBtn();
    await new SupportArticleMenu(page).clickAdditionalServicesBtn();
    await new AdditionalServicesPage(page).additionalServicesHeaderShouldBeVisible();
});
