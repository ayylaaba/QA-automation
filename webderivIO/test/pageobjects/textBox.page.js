
class TextBoxPage {
    get fullName() {
        return $('#userName');
    }

    get email() {
        return $('#userEmail');
    }

    get currentAddress() {
        return $('#currentAddress');
    }

    get permanentAddress() {
        return $('#permanentAddress');
    }

    get submitBtn() {
        return $('#submit');
    }

    get output() {
        return $('#output');
    }

    get nameOutput() {
        return $('#name');
    }

    get emailOutput() {
        return $('#email');
    }

    get currentAddressOutput() {
        return $('#output #currentAddress');
    }

    get permanentAddressOutput() {
        return $('#output #permanentAddress');
    }

    async open() {
        await browser.url('https://demoqa.com/text-box');
    }

    async fillForm(fullName, email, currentAddress, permanentAddress) {
        await this.fullName.setValue(fullName);
        await this.email.setValue(email);
        await this.currentAddress.setValue(currentAddress);
        await this.permanentAddress.setValue(permanentAddress); 
        await this.submitBtn.click();
    }
}

export default new TextBoxPage();
