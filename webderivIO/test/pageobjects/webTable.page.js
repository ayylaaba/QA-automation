class WebTablePage {
    get addButton() {
        return $('#addNewRecordButton');
    }

    get firstNameInput() {
        return $('#firstName');
    }

    get lastNameInput() {
        return $('#lastName');
    }

    get emailInput() {
        return $('#userEmail');
    }

    get ageInput() {
        return $('#age');
    }

    get salaryInput() {
        return $('#salary');
    }

    get departmentInput() {
        return $('#department');
    }

    get submitButton() {
        return $('#submit');
    }

    async open() {
        await browser.url('https://demoqa.com/webtables');
    }

    async addNewRecord(firstName, lastName, email, age, salary, department) {
        await this.addButton.click();
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.emailInput.setValue(email);
        await this.ageInput.setValue(age);
        await this.salaryInput.setValue(salary);
        await this.departmentInput.setValue(department);
        await this.submitButton.click();
    }

    async deleteRecordByEmail(email) {
        const deleteButton = $(`//div[@class='rt-tr-group']//div[contains(text(), '${email}')]/following-sibling::div//span[@title='Delete']`);
        await deleteButton.click();
    }

    async editRecordByEmail(email, newFirstName, newLastName) {
        const editButton = $(`//div[@class='rt-tr-group']//div[contains(text(), '${email}')]/following-sibling::div//span[@title='Edit']`);
        await editButton.click();
        await this.firstNameInput.setValue(newFirstName);
        await this.lastNameInput.setValue(newLastName);
        await this.submitButton.click();
    }

}

export default new WebTablePage();
