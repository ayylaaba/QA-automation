import AutoCompletePage from "../pageobjects/autoComplete.page";

describe('Test AutoComplete', () => {

    beforeEach(async () => {
        await AutoCompletePage.open();
    });

    // Test 1: Single input — type and select one color
    it('should select a color in single input', async () => {
        await AutoCompletePage.typeSingleInput('re');       // type to trigger dropdown
        await AutoCompletePage.selectSingleOption('Red');   // click Red from dropdown

        const value = await AutoCompletePage.getSingleInputValue();
        console.log('Selected value:', value);
        await expect(value).toBe('Red');
    });

    // Test 2: Multiple input — select multiple colors
    it('should select multiple colors', async () => {
        await AutoCompletePage.typeMultipleInput('re');
        await AutoCompletePage.selectMultipleOption('Red');

        await AutoCompletePage.typeMultipleInput('bl');
        await AutoCompletePage.selectMultipleOption('Blue');

        const values = await AutoCompletePage.getMultipleSelectedValues();
        console.log('Selected values:', values); // ['Red', 'Blue']

        await expect(values).toContain('Red');
        await expect(values).toContain('Blue');
    });

    // // Test 3: Remove a selected color
    it('should remove a selected color from multiple input', async () => {
        // First add two colors
        await AutoCompletePage.typeMultipleInput('re');
        await AutoCompletePage.selectMultipleOption('Red');
        await AutoCompletePage.typeMultipleInput('bl');
        await AutoCompletePage.selectMultipleOption('Blue');

        // Remove Red
        await AutoCompletePage.removeMultipleValue('Red');

        const values = await AutoCompletePage.getMultipleSelectedValues();
        console.log('After remove:', values); // ['Blue']

        await expect(values).not.toContain('Red');   // Red is gone
        await expect(values).toContain('Blue');       // Blue still there
    });
});