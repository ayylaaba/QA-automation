
import CheckOnImageLinkPage from "../pageobjects/checkOnImageLink.page";

describe('test if the link and image if they are valid or broken', () => {

    beforeEach(async () => {
        await CheckOnImageLinkPage.open();
    });

    // Test if the link is Valid
    // it('test if the link is valid', async () => {
    //     await CheckOnImageLinkPage.clickOnValidLink();
    //     const currentUrl = await browser.getUrl();
    //     console.log('currentUrl : ', currentUrl);
    //     await expect(currentUrl).toContain('demoqa.com');
    // });
    
    // Test if the link is Broken
    // it('test if the link is broken', async () => {
    //     await CheckOnImageLinkPage.clickOnBrokenLink();
    //     const brokenLinkText = await CheckOnImageLinkPage.brokenLinkTextContent;
    //     console.log('brokenLinkText : ', brokenLinkText);
    //     await expect(brokenLinkText).toContain('500 status code.');
    // });

    // Test if the image is valid
    it('test if the image is valid', async () => {
        const imageElement = await CheckOnImageLinkPage.validImage;
        await imageElement.waitForDisplayed();
        // imageElement.waitForDisplayed();
        console.log('imageElement : ', imageElement);
        
        const isValidImage = await CheckOnImageLinkPage.isValidImage(imageElement);
        console.log('isValidImage : ', isValidImage);
        await expect(isValidImage).toBe(true);
    });

    // Test if the image is broken
    // it('test if the image is broken', async () => {
    //     const imageElement = await CheckOnImageLinkPage.brokenImage;
    //     const isValidImage = await CheckOnImageLinkPage.isValidImage(imageElement);
    //     console.log('isValidImage : ', isValidImage);
    //     await expect(isValidImage).toBe(false);
    // });

});
