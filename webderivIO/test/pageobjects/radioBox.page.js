class RadioBoxPage {

    // yes radio box
    get radioBox() {
        return $('#yesRadio');
    }

    get radioBoxLabel() {
        return $('.form-check-label[for="yesRadio"]');
    }


    //impressive radio box
    get impressiveRadioBox() {
        return $('#impressiveRadio');
    }

    get impressiveRadioBoxLabel() {
        return $('.form-check-label[for="impressiveRadio"]');
    }

    // no radio box is disabled, so we won't interact with it, but we can check if it's disabled
    get noRadioBox() {
        return $('#noRadio');
    }
    get noRadioBoxLabel() {
        return $('.form-check-label[for="noRadio"]');
    }
    
    async open() {
        await browser.url('https://demoqa.com/radio-button');
    } 
}

export default new RadioBoxPage();  // ← CRITICAL: You need this!