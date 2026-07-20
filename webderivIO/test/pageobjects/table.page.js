
class TablePage {

    async open() {
        await browser.url('https://demoqa.com/tabs');
    }

    // get 'what' table is present on the page
    get WhatTab() {
        return $('#demo-tab-what');
    }

    get WhatTabContent() {
        return $('#demo-tabpane-what');
    }


    // get 'origin' table is present on the page
    get OriginTab() {
        return $('#demo-tab-origin');
    }

    // get 'origin' table content is present on the page
    get OriginTabContent() {
        return $('#demo-tabpane-origin');
    }

    // get 'use' table is present on the page
    get UseTab() {
        return $('#demo-tab-use');
    }

    // get 'use' table content is present on the page
    get UseTabContent() {
        return $('#demo-tabpane-use');
    }

    // get 'more' table is present on the page
    get MoreTab() {
        return $('#demo-tab-more');
    }
    // get 'more' table content is present on the page
    get MoreTabContent() {
        return $('#demo-tabpane-more');
    }
}

export default new TablePage();
