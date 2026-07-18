// file: pageobjects/date.page.js

class DatePickerPage {

    async open() {
        await browser.url('https://demoqa.com/date-picker');
        // Wait for the input to be displayed
        await this.dateInput.waitForDisplayed({ timeout: 5000 });
    }

    // Date picker input
    get dateInput() {
        return $('#datePickerMonthYearInput');
    }

    // Date and Time picker input
    get dateAndTimeInput() {
        return $('#dateAndTimePickerInput');
    }

    // -- Set Date (Improved) --
    async setDate(date) {
        await this.dateInput.waitForClickable({ timeout: 5000 });
        await this.dateInput.click();
        await this.dateInput.clearValue();
        await this.dateInput.setValue(date);
        // Press Enter to confirm
        await browser.keys('Enter');
        await browser.pause(200);
    }

    // -- Submit/Click Date Input --
    async submitDataInput() {
        await this.dateInput.waitForClickable();
        await this.dateInput.click();
    }

    // -- Get Date Value --
    async getDateValue() {
        return await this.dateInput.getValue();
    }

    // -- Set Date and Time --
    async setDateAndTime(dateTime) {
        await this.dateAndTimeInput.waitForClickable({ timeout: 5000 });
        await this.dateAndTimeInput.click();
        await this.dateAndTimeInput.clearValue();
        await this.dateAndTimeInput.setValue(dateTime);
        await browser.keys('Enter');
        await browser.pause(200);
    }

    // -- Get Date and Time Value --
    async getDateAndTimeValue() {
        return await this.dateAndTimeInput.getValue();
    }

    // -- Submit/Click Date and Time Input --
    async submitDateAndTime() {
        await this.dateAndTimeInput.waitForClickable();
        await this.dateAndTimeInput.click();
    }
}

export default new DatePickerPage();