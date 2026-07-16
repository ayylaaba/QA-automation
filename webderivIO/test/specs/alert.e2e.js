
// import AlertPage from "../pageobjects/alert.page";

// describe('test alert features', () => {
    
//     it ('should handle alert', async () => {
//         await AlertPage.open();
//         await AlertPage.clickAlertButton();
//         await browser.pause(2000); // wait for 2 seconds to ensure the alert is displayed

//         await browser.waitUntil(
//             async () => await browser.isAlertOpen(),
//             {
//                 timeout: 2000,
//                 timeoutMsg: 'Alert did not appear within 5 seconds'
//             }
//         );
//         const alertText = await browser.getAlertText();
//         await expect(alertText).toEqual('You clicked a button');
//         await browser.acceptAlert();
//     });
// });


import AlertPage from "../pageobjects/alert.page";

describe('test alert features', () => {

    beforeEach(async () => {
        await AlertPage.open();
    });

    // Type 1 — Simple alert (appears instantly)
    it('should handle simple alert', async () => {
        await AlertPage.clickAlertButton();
        const text = await browser.getAlertText();
        await expect(text).toBe('You clicked a button');
        await browser.acceptAlert(); // click OK
    });

    // Type 2 — Timer alert (appears after 5 seconds)
    it('should handle timer alert', async () => {
        await AlertPage.clickAlertButtonTimer();
        
        // This one needs waitUntil — alert appears after delay
        await browser.waitUntil(
            async () => await browser.isAlertOpen(),
            { timeout: 6000, timeoutMsg: 'Timer alert did not appear' }
        );

        const text = await browser.getAlertText();
        await expect(text).toBe('This alert appeared after 5 seconds');
        await browser.acceptAlert();
    });

    // // Type 3 — Confirm alert (OK or Cancel)
    it('should accept confirm alert', async () => {
        await AlertPage.clickConfirmButton();
        const text = await browser.getAlertText();
        await expect(text).toBe('Do you confirm action?');
        await browser.acceptAlert(); // click OK

        // Check result message on page
        const result = await $('#confirmResult').getText();
        await expect(result).toContain('selected Ok');
    });

    it('should dismiss confirm alert', async () => {
        await AlertPage.clickConfirmButton();
        await browser.dismissAlert(); // click Cancel

        const result = await $('#confirmResult').getText();
        await expect(result).toContain('selected Cancel');
    });

    // Type 4 — Prompt alert (text input)
    it('should handle prompt alert', async () => {
        await AlertPage.clickPromptButton();
        await browser.waitUntil( async () => 
            await browser.isAlertOpen(),
            { timeout: 8000, timeoutMsg: 'Timer alert did not appear' }
        );
        const text = await browser.getAlertText();
        console.log('Prompt alert text:', text);
        await expect(text).toBe('Please enter your name');
        await browser.sendAlertText('Ayoub'); // type into prompt
        await browser.acceptAlert();
        const result = await $('#promptResult').getText();
        await expect(result).toContain('Ayoub');
    });
});


