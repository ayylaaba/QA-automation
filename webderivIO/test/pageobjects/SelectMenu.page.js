class SelectMenuPage {
    
    async open() {
        await browser.url('https://demoqa.com/select-menu');
    }
    
    // ── Type 1: React Select Value ───────────────────────────
    get selectValueInput() {
        return $('#react-select-2-input');
    }

    async selectValue(option) {
        await this.selectValueInput.click();
        await this.selectValueInput.setValue(option);
        await browser.keys('Enter');
    }

    async getSelectedValue() {
        // React select shows selected value here
        return await $('.css-1dimb5e-singleValue').getText();
    }

    // ── Type 2: React Select One (Title) ─────────────────────
    get selectOneInput() {
        return $('#react-select-3-input');
    }

    async selectOne(option) {
        await this.selectOneInput.click();
        await this.selectOneInput.setValue(option);
        await browser.keys('Enter');
    }

    // ── Type 3: Old Style Native Select ──────────────────────
    get oldSelectMenu() {
        return $('#oldSelectMenu');
    }

    async selectOldStyleByText(text) {
        // selectByVisibleText() only works on native <select> elements
        await this.oldSelectMenu.selectByVisibleText(text);
    }

    async selectOldStyleByValue(value) {
        // selectByAttribute() selects by the value="" attribute
        await this.oldSelectMenu.selectByAttribute('value', value);
    }

    async getOldSelectValue() {
        return await this.oldSelectMenu.getValue();
    }

    // ── Type 4: Multiselect React Dropdown ───────────────────
    get multiselectInput() {
        return $('#react-select-4-input');
    }

    async selectMultipleValues(options) {
        for (const option of options) {
            await this.multiselectInput.click();
            await this.multiselectInput.setValue(option);
            await browser.keys('Enter');
        }
    }

    async getMultiselectValues() {
        const tags = await $$('.css-9jq23d'); 
        const values = [];
        for (const tag of tags) {
            values.push(await tag.getText());
        }
        return values;
    }

    // ── Type 5: Standard Native Multiselect ──────────────────
    get standardMultiSelect() {
        return $('#cars');
    }

    async selectStandardMultiple(options) {
        for (const option of options) {
            await this.standardMultiSelect.selectByVisibleText(option);
        }
    }

    async getStandardMultiSelectValues() {
        // Get all selected options
        return await browser.execute(() => {
            const select = document.querySelector('#cars');
            return Array.from(select.selectedOptions).map(o => o.text);
        });
    }
}

export default new SelectMenuPage();
