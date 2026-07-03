import buttonBoxPage from "../pageobjects/buttonBox.page";

describe('test button page', () => {

    beforeEach(async () => {
        await buttonBoxPage.open();
    });

    it('should click on "Click Me" button then verify the result', async () => {
        await buttonBoxPage.clickButton();
        const resultText = await buttonBoxPage.getResultText('dynamicClickMessage');
        console.log('Result text:', resultText);
        await expect(resultText).toBe('You have done a dynamic click');
    });

    it('should click on "Double Click Me" button then verify the result', async () => {
        await buttonBoxPage.doubleClickButton();
        const resultText = await buttonBoxPage.getResultText('doubleClickMessage');
        console.log('Result text:', resultText);
        await expect('You have done a double click').toBe(resultText);
    })

    it('should click on "Right Click Me" button then verify the result', async () => {
        await buttonBoxPage.rightClickButton();
        const resultText = await buttonBoxPage.getResultText('rightClickMessage');
        console.log('Result text:', resultText);
        await expect(resultText).toBe('You have done a right click');
    })

});
