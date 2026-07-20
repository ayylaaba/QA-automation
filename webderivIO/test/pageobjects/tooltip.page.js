// pageobjects/tooltip.page.js

class ToolTipPage {
    async open() {
        await browser.url('https://demoqa.com/tool-tips');
    }

    // Elements you hover over
    get toolTipButton() {
        return $('#toolTipButton');
    }

    get toolTipTextField() {
        return $('#toolTipTextField');
    }

    get contraryLink() {
        return $('a=Contrary');
    }

    get sectionLink() {
        return $('a=1.10.32');
    }

    // Bootstrap renders the tooltip as a div with role="tooltip" -
    // it doesn't exist in the DOM until you hover
    get tooltipBox() {
        return $('div[role="tooltip"]');
    }

    async hoverAndGetTooltipText(element) {
        await element.waitForDisplayed();
        await element.moveTo();               // triggers the hover

        // tooltip fades in - wait for it to actually be visible in DOM
        await this.tooltipBox.waitForDisplayed({
            timeout: 5000,
            timeoutMsg: 'Tooltip did not appear'
        });

        return this.tooltipBox.getText();
    }
}

export default new ToolTipPage();
