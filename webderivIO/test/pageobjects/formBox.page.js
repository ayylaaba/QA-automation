class FormBoxPage {
    
    async open() {
        await browser.url('https://demoqa.com/automation-practice-form');
    }

    // -- Personal Information --
    get firstName() {
        return $('#firstName');
    }

    get lastName() {
        return $('#lastName');
    }

    get mobileNumber() {
        return $('#userNumber');
    }

    get userEmail() {
        return $('#userEmail');
    }

    async selectGender(gender) {
        if (gender === 'Male')
            await $('label[for="gender-radio-1"]').click();
        else if (gender === 'Female')
            await $('label[for="gender-radio-2"]').click();
        else
            await $('label[for="gender-radio-3"]').click();
    }

    // get set birth
    async setDateOfBirth(day, month, year) {
        await this.dateOfBirthInput.click(); // open calendar
        
        // Clear and type directly in a specific format
        await this.dateOfBirthInput.setValue(`${month}/${day}/${year}`);
        await browser.keys('Escape');
    }

    // -- Subjects --
    get subjectsInput() {
        return $('#subjectsInput');
    }

    // -- Hobbies (FIXED with scroll) --
    async SetHobbies(hobbie) {
        // Scroll to the element first
        const label = await $(`label[for="hobbies-checkbox-1"]`);
        await label.scrollIntoView();
        
        if (hobbie == 'Sports')
            await $('label[for="hobbies-checkbox-1"]').click();
        else if (hobbie == 'Reading')
            await $('label[for="hobbies-checkbox-2"]').click();
        else
            await $('label[for="hobbies-checkbox-3"]').click();
    }

    // -- File Upload --
    get uploadButton() {
        return $('#uploadPicture');
    }

    async uploadFile(filePath) {
        const remoteFilePath = await browser.uploadFile(filePath);
        console.log('remoteFilePath : ', remoteFilePath);
        await this.uploadButton.setValue(remoteFilePath);
    }

    // -- Address --
    get currentAddress() {
        return $('#currentAddress');
    }

    get dateOfBirthInput() {
        return $('#dateOfBirthInput');
    }

    // -- city --
    async SelectState(input) {
        const state = $('#react-select-3-input');
        await state.scrollIntoView(); // ← Scroll to it first
        await state.click();
        await state.setValue(input);
        await browser.keys('Enter');
    }

    // -- State --
    async SelectCity(input) {
        const city = $('#react-select-4-input');
        await city.scrollIntoView(); // ← Scroll to it first
        await city.click();
        await city.setValue(input);
        await browser.keys('Enter');
    }

    // -- Submit --
    async clickSubmit() {
        const submitButton = await $('#submit');
        await submitButton.scrollIntoView(); // ← Scroll to submit
        await submitButton.click();
    }

    // -- Verification --
    get getTable() {
        return $('#example-modal-sizes-title-lg');
    }

    // In FormBoxPage
    async getTableData() {
        // Get all rows in the table body
        const rows = await $$('tbody tr');
        const data = {};
        
        for (let row of rows) {
            // Get all cells in this row
            const cells = await row.$$('td');
            
            if (cells.length >= 2) {
                const label = await cells[0].getText();
                const value = await cells[1].getText();
                data[label] = value;
            }
        }
        return data;
    }
}

export default new FormBoxPage();