
class BrowserWindowPage {
    async open(){
        await browser.url('https://demoqa.com/browser-windows');
    }

    // Getters buttons
    
    // begin //
    get newTab(){
        return $('#tabButton');
    }

    get windowButton(){
        return $('#windowButton');
    }

    get messageWindowButton(){
        return $('#messageWindowButton')
    }
    // End //

    //begin //
    // Getters content
    get newTabContent(){
        return $('#sampleHeading');
    }

    // click on buttons
    // begin
    async ClickOnNewTab(){
        await this.windowButton.waitForClickable({ timeout: 2000 });
        await this.newTab.click();
    }

    async ClickOnNewWindow(){
        await this.windowButton.waitForClickable({ timeout: 2000 });
        await this.windowButton.click();
    }

    async ClickOnNewMessageWindow(){
        await this.messageWindowButton.waitForClickable({ timeout: 1000 });
        await this.messageWindowButton.click();
    }

    // end //
}
export default new BrowserWindowPage();