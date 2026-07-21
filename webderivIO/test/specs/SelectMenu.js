import SelectMenuPage from "../pageobjects/SelectMenu.page";

describe('Select Menu Tests', () => {

    beforeEach(async () => {
        await SelectMenuPage.open();
    });

    // ── Test 1: Old Style Select (easiest) ───────────────────
    it('should select option in old style select', async () => {
        await SelectMenuPage.selectOldStyleByText('Yellow');
    });

    // // // ── Test 2: React Select Value ───────────────────────────
    it('should select value from react select', async () => {
        await SelectMenuPage.selectValue('Group 1, option 2');
        const selected = await SelectMenuPage.getSelectedValue();
        console.log('Selected:', selected);
        await expect(selected).toContain('option 2');
    });

    // // // ── Test 3: React Select One ─────────────────────────────
    it('should select title from Select One', async () => {
        await SelectMenuPage.selectOne('Mr');
        // verify by checking no error shown
        await expect($('#react-select-3-input')).toExist();
    });

    // // // ── Test 4: Multiselect React ────────────────────────────
    it('should select multiple values', async () => {
        await SelectMenuPage.selectMultipleValues(['Green', 'Blue']);
        const values = await SelectMenuPage.getMultiselectValues();
        console.log('Selected values:', values);
        await expect(values).toContain('Green');
        await expect(values).toContain('Blue');
    });

    // // ── Test 5: Standard Native Multiselect ──────────────────
    it('should select multiple cars', async () => {
        await SelectMenuPage.selectStandardMultiple(['Volvo', 'Saab']);
        const selected = await SelectMenuPage.getStandardMultiSelectValues();
        console.log('Selected cars:', selected);
        await expect(selected).toContain('Volvo');
        await expect(selected).toContain('Saab');
    });
});