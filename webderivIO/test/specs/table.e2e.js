
import TablePage from "../pageobjects/table.page";

describe('Test table', () => {
    
    it(`test 'tabs' with its content`, async () => {
        await TablePage.open();
        await TablePage.WhatTab.click();
        await expect(TablePage.WhatTabContent).toBeDisplayed();
        await browser.pause(2000);
        await TablePage.OriginTab.click();
        await expect(TablePage.OriginTabContent).toBeDisplayed();
        await browser.pause(2000);
        await TablePage.UseTab.click();
        await expect(TablePage.UseTabContent).toBeDisplayed();
    });
});
