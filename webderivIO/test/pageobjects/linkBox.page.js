class linkBoxPage {
    async open() {
        await browser.url('https://demoqa.com/links');
    }

    // helper methods 
    async getResultText()
    {
        const apiMessaage = $('#linkResponse');
        await apiMessaage.waitForDisplayed()
        const message = await apiMessaage.getText();
        return message;
    }

    //Following links will send an api call

    async clickLink(linkType)
    {
        let link = $(`#${linkType}`)
        await link.click();
    }

    //Following Links should display demoqa.com 
    async getUrlAfterClick(Linkid)
    {

        const tabsBefore = await browser.getWindowHandles();
        
        console.log('tabs before click on link : ', tabsBefore.length);

        await this.clickLink(Linkid);
       
        const tabsAfter = await browser.getWindowHandles();

        console.log('tabs after click on link : ', tabsAfter.length);
        
        await expect(tabsAfter.length).toBe(tabsBefore.length + 1);

        const newTab = tabsAfter[tabsAfter.length - 1];

        await browser.switchToWindow(newTab);

        const currentUrl = await browser.getUrl();
        
        console.log('current url : ', currentUrl);

        await expect(currentUrl).toContain('demoqa.com');

        await browser.closeWindow();

        await browser.switchToWindow(tabsBefore[0]);
    }   
}

export default new linkBoxPage();