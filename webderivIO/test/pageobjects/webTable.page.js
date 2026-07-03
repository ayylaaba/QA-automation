class WebTablePage {

    // ── Selectors ──────────────────────────────────────────────
    get addButton()        { return $('#addNewRecordButton'); }
    get firstNameInput()   { return $('#firstName'); }
    get lastNameInput()    { return $('#lastName'); }
    get emailInput()       { return $('#userEmail'); }
    get ageInput()         { return $('#age'); }
    get salaryInput()      { return $('#salary'); }
    get departmentInput()  { return $('#department'); }
    get submitButton()     { return $('#submit'); }

    // ── Navigation ─────────────────────────────────────────────
    async open() {
        await browser.url('https://demoqa.com/webtables');
        await $('tbody tr').waitForDisplayed(); // wait for table to load
    }

    // ── Helpers ────────────────────────────────────────────────

    // Count how many data rows are in the table
    async getRowCount() {
        const rows = await $$('tbody tr');
        return rows.length;
    }

    // Find a row by email — used internally by edit and delete
    async findRowByEmail(email) {
        const rows = await $$('tbody tr');
        for (const row of rows) {
            const text = await row.getText();
            if (text.includes(email)) return row; // return the row element
        }
        throw new Error(`Row with email "${email}" not found`);
    }

    // ── Actions ────────────────────────────────────────────────

    async addNewRecord(firstName, lastName, email, age, salary, department) {
        await this.addButton.click();
        await this.firstNameInput.waitForDisplayed();  // wait for form to open

        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.emailInput.setValue(email);
        await this.ageInput.setValue(age);
        await this.salaryInput.setValue(salary);
        await this.departmentInput.setValue(department);

        await this.submitButton.click();
        await this.firstNameInput.waitForDisplayed({ reverse: true }); // wait for form to close
    }

    async editRecordByEmail(email, newFirstName, newLastName) {
        const row = await this.findRowByEmail(email);   // find the row
        await row.$('span[title="Edit"]').click();      // click Edit inside that row

        await this.firstNameInput.waitForDisplayed();   // wait for form to open
        await this.firstNameInput.clearValue();
        await this.firstNameInput.setValue(newFirstName);
        await this.lastNameInput.clearValue();
        await this.lastNameInput.setValue(newLastName);

        await this.submitButton.click();
        await this.firstNameInput.waitForDisplayed({ reverse: true }); // wait for form to close
    }

    async deleteRecordByEmail(email) {
        const row = await this.findRowByEmail(email);   // find the row
        await row.$('span[title="Delete"]').click();    // click Delete inside that row
    }
}

export default new WebTablePage();