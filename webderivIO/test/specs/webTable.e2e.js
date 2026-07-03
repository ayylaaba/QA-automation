import webTablePage from '../pageobjects/webTable.page.js';

describe('Web Table Feature', () => {

    // Store the original row count once before all tests
    let originalCount;

    beforeEach(async () => {
        await webTablePage.open();
        originalCount = await webTablePage.getRowCount(); // always starts fresh
    });

    // ── Test 1: Add ──────────────────────────────────────────
    it('should add a new record to the table', async () => {
        await webTablePage.addNewRecord(
            'Ayyoub', 'Bouzid', 'ayyoub@gmail.com', '30', '5000', 'IT'
        );

        const count = await webTablePage.getRowCount();
        await expect(count).toBe(originalCount + 1); // one more row
    });

    // ── Test 2: Edit ─────────────────────────────────────────
    it('should edit an existing record', async () => {
        // Use an original record that always exists
        await webTablePage.editRecordByEmail(
            'cierra@example.com', 'UpdatedName', 'UpdatedLast'
        );

        // Check new name appears in table 'asseration'
        await expect($('td=UpdatedName')).toBeExisting();
    });

    // ── Test 3: Delete ───────────────────────────────────────
    it('should delete an existing record', async () => {
        // Use an original record that always exists
        await webTablePage.deleteRecordByEmail('cierra@example.com');

        const count = await webTablePage.getRowCount();
        //assert that the count is one less than the original count
        await expect(count).toBe(originalCount - 1); // one less row 
    });

});