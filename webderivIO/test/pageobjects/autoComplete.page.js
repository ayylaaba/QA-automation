class AutoCompletePage {

    async open() {
        await browser.url('https://demoqa.com/auto-complete');
    }

    // ── Single Input ─────────────────────────────────────────

    get singleInput() {
        return $('#autoCompleteSingleInput');
    }

    // Type a letter to trigger dropdown
    async typeSingleInput(value) {
        await this.singleInput.setValue(value);
    }

    // Select an option from dropdown by matching text
    async selectSingleOption(colorName) {
        // Wait for dropdown options to appear
        await $('div.auto-complete__option').waitForDisplayed();

        const options = await $$('div.auto-complete__option');

        for (const option of options) {
            const text = await option.getText(); // ← get text from element
            if (text.toLowerCase() === colorName.toLowerCase()) {
                await option.click();
                break;
            }
        }
    }

    // Get selected value from single input
    async getSingleInputValue() {
        // getValue() doesn't work on react inputs — use getText() on the selected value element
        const selected = await $('.auto-complete__single-value');
        return await selected.getText();
    }

    // ── Multiple Input ───────────────────────────────────────

    get multipleInput() {
        return $('#autoCompleteMultipleInput');
    }

    async typeMultipleInput(value) {
        await this.multipleInput.setValue(value);
    }

    async selectMultipleOption(colorName) {
        await $('div.auto-complete__option').waitForDisplayed();

        const options = await $$('div.auto-complete__option');

        for (const option of options) {
            const text = await option.getText();
            if (text.toLowerCase() === colorName.toLowerCase()) {
                await option.click();
                break;
            }
        }
    }

    // Get all selected values (multiple returns tags)
    async getMultipleSelectedValues() {
        const tags = await $$('.auto-complete__multi-value__label');
        const values = [];
        for (const tag of tags) {
            values.push(await tag.getText());
        }
        return values; // returns array like ['Red', 'Blue']
    }

    // Remove a selected tag by name
    async removeMultipleValue(colorName) {
        const tags = await $$('.auto-complete__multi-value');
        for (const tag of tags) {
            const text = await tag.$('.auto-complete__multi-value__label').getText();
            if (text.toLowerCase() === colorName.toLowerCase()) {
                await tag.$('.auto-complete__multi-value__remove').click();
                break;
            }
        }
    }
}

export default new AutoCompletePage();