
import AccordionPage from "../pageobjects/accordian.page";

describe('test accordion features', () => {
    
    beforeEach(async () => {
        await AccordionPage.open();
    });

    it('item 1 should be expanded by default, and collapse on click', async () => {
        await AccordionPage.clickHeader(1);
        // clicking an open item closes it
        await expect(await AccordionPage.isExpanded(1)).toBe(false);
    });

    it('item 2 should be expanded by default, and collapse on click', async () => {
        await expect(await AccordionPage.isExpanded(2)).toBe(false);
        await AccordionPage.clickHeader(2);
        // clicking an open item closes it
        await expect(await AccordionPage.isExpanded(2)).toBe(true);
    });

    it('item 3 should start collapsed and expand on click', async () => {
        await expect(await AccordionPage.isExpanded(3)).toBe(false);
        await AccordionPage.clickHeader(3);
        await expect(await AccordionPage.isExpanded(3)).toBe(true);
    });

});
