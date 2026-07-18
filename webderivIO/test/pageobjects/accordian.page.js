// pageobjects/accordion.page.js

class AccordionPage {
    async open() {
        await browser.url('https://demoqa.com/accordian');
    }

    // Returns the button for a given accordion item (1, 2, or 3)
    getHeaderButton(itemNumber) {
        return $(`#accordianContainer .accordion-item:nth-child(${itemNumber}) .accordion-button`);
    }

    // Returns the answer <p> for a given accordion item
    getBodyText(itemNumber) {
        return $(`#accordianContainer .accordion-item:nth-child(${itemNumber}) .accordion-body p`);
    }

    async clickHeader(itemNumber) {
        const header = this.getHeaderButton(itemNumber);
        await header.waitForClickable();
        await header.click();
        
        // Wait for the body to become visible
        const body = $(`#accordianContainer .accordion-item:nth-child(${itemNumber}) .accordion-body`);
        await body.waitForDisplayed({ 
            timeout: 5000,
            timeoutMsg: 'Accordion content did not expand'
        });
    }

    async isExpanded(itemNumber) {
        const header = this.getHeaderButton(itemNumber);
        // log the value of aria-expanded
        const ariaExpanded = await header.getAttribute('aria-expanded');
        console.log(`Accordion item ${itemNumber} aria-expanded: ${ariaExpanded}`);
        return (await header.getAttribute('aria-expanded')) === 'true';
    }
}

export default new AccordionPage();
