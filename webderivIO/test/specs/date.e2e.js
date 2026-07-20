// file: specs/date.e2e.js

import DatePickerPage from '../pageobjects/date.page.js';

// ✅ No console.log here - describe should be clean
describe('Date Input Tests', () => {

    beforeEach(async () => {
        console.log('Navigating to Date Picker page...');
        await DatePickerPage.open();
        await browser.pause(500);
    });

    it('should set a date and submit', async () => {
        console.log('Running test: should set a date and submit');
        const testDate = '07/19/2026';
        
        await DatePickerPage.setDate(testDate);
        await DatePickerPage.submitDataInput();
        
        const resultText = await DatePickerPage.getDateValue();
        console.log('Result after submission:', resultText);
        
        await expect(resultText).toContain(testDate);
    });

});
