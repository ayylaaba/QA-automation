class linkBoxPage {

     // links will open new tab
     get LinkHome() {
        return $('a=simpleLink');
    }

    get LinkHomeDynamic() {
        return $('a=dynamicLink');
    }

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

}

export default new linkBoxPage();