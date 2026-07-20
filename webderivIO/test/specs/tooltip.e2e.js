// specs/tooltip.e2e.js
import ToolTipPage from '../pageobjects/tooltip.page';

describe('Tool Tips Widget', () => {

    beforeEach(async () => {
        await ToolTipPage.open();
    });

    it('should show a tooltip when hovering the button', async () => {
        const text = await ToolTipPage.hoverAndGetTooltipText(ToolTipPage.toolTipButton);
        await expect(text).toContain('You hovered over the Button');
    });

    it('should show a tooltip when hovering the text field', async () => {
        const text = await ToolTipPage.hoverAndGetTooltipText(ToolTipPage.toolTipTextField);
        await expect(text).toContain('You hovered over the text field');
    });

    it('should show a tooltip when hovering the "Contrary" link', async () => {
        const text = await ToolTipPage.hoverAndGetTooltipText(ToolTipPage.contraryLink);
        await expect(text).toContain('You hovered over the Contrary');
    });

    it('should show a tooltip when hovering the "1.10.32" section link', async () => {
        const text = await ToolTipPage.hoverAndGetTooltipText(ToolTipPage.sectionLink);
        await expect(text).toContain('You hovered over the 1.10.32');
    });
});


