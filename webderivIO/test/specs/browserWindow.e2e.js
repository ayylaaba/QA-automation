import BrowserWindowPage from "../pageobjects/browserWindow.page";

describe('Test Window Browser', () => {
    
    beforeEach(async () => {
        await BrowserWindowPage.open();
    });
    it('test New tab', async () => {
        await BrowserWindowPage.open();
        await BrowserWindowPage.ClickOnNewTab()
        const tabs = await browser.getWindowHandles();
        console.log('Tabs:', tabs);
        const currentTab = tabs[0];
        const newTab = tabs[1];
        await browser.switchToWindow(newTab);
        const NewTabContent = await BrowserWindowPage.newTabContent.getText();
        await expect(NewTabContent).toContain('sample page');
        await browser.closeWindow();
        await browser.switchToWindow(currentTab);
    });

    it ('test New window', async () => {
        await BrowserWindowPage.open();
        await BrowserWindowPage.ClickOnNewWindow()
        const windows = await browser.getWindowHandles();
        const currentWindow = windows[0];
        const newWindow = windows[1];
        await browser.switchToWindow(newWindow);
        const NewWindowContent = await BrowserWindowPage.newTabContent.getText();
        await expect(NewWindowContent).toContain('sample page');
        await browser.closeWindow();
        await browser.switchToWindow(currentWindow);
    });

    it ('test New window message', async () => {
        await BrowserWindowPage.open();
        await BrowserWindowPage.ClickOnNewWindow()
        const windows = await browser.getWindowHandles();
        const currentWindow = windows[0];
        const newWindow = windows[1];
        await browser.switchToWindow(newWindow);
        const NewWindowContent = await BrowserWindowPage.newTabContent.getText();
        await expect(NewWindowContent).toContain('sample page');
        await browser.closeWindow();
        await browser.switchToWindow(currentWindow);
    });
});
