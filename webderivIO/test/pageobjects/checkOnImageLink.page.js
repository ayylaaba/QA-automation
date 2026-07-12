class CheckOnImageLinkPage {
    async open(){
        await browser.url('https://demoqa.com/broken');
    } 
    // Following links is valide
    get validLink() {
        return $('a=Click Here for Valid Link');
    }
    // Following links is broken
    get brokenLink() {
        return $('a=Click Here for Broken Link');
    }
    // get the text when i click on broken link
    get brokenLinkText() {
        return $('#content');
    }
    async  brokenLinkTextContent(){
        await this.brokenLinkText.waitForDisplayed();
        return this.brokenLinkText.getText();
    }

    // test image is valid
    get validImage() {
        return $('img[src="/images/Toolsqa.jpg"]');
    }
    // test image is broken
    get brokenImage() {
        return $('img[src="/images/Toolsqa_1.jpg"]');
    }

    // Function to check if the image is valid
    async isValidImage(imageElement) {
        // Instead of waitForDisplayed, wait until naturalWidth > 0
        await browser.waitUntil(
            async () => {
                const width = await browser.execute((img) => img.naturalWidth, imageElement);
                console.log('Checking naturalWidth:', naturalWidth);
                return width > 0; // keep waiting until this is true
            },
            { timeout: 5000, timeoutMsg: 'Image did not load in time' }
        );
    }

    // Function to click on valid link
    async clickOnValidLink(){
        await this.validLink.click();
    }
    // Function to click on broken link
    async clickOnBrokenLink(){
        await this.brokenLink.click();
    }
}
export default new CheckOnImageLinkPage();
