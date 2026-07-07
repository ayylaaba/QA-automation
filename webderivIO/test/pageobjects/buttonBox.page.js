class ButtonBoxPage {
    async open() {     
        await browser.url('https://demoqa.com/buttons');
    }

    // -- test Click me button --
    get buttonDynamic() {
        return $('button=Click Me');
    }

    async clickButton() {
        await this.buttonDynamic.click();
    }

    // -- test Double Click me button --
    
    get buttonDoubleClick() {
        return $('button=Double Click Me');
    }

    async doubleClickButton() {
        await this.buttonDoubleClick.doubleClick();
    }

    // -- test Right Click me button --
    get buttonRightClick() {
        return $('button=Right Click Me');
    }

    // WebdriverIO has a built-in method for right click
    async rightClickButton() {
        // ✅ WebdriverIO has a built-in method for right click
        await this.buttonRightClick.click({ button: 2 }); // 2 = right mouse button    }
    }

    // == general method to get the result text based on the type of message
    async getResultText(typeMessage) {
        const resultElement = await $(`#${typeMessage}`);
        await resultElement.waitForDisplayed(); // ← add this
        return await resultElement.getText();
    }
}   

export default new ButtonBoxPage();