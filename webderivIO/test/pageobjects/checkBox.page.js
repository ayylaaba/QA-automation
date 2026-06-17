class CheckBoxPage {
 
    // nested folders under Home folder
    get desktopFolder() {
        return $('*=Desktop');
    }

    get documentsFolder() {
        return $('*=Documents');
    }

    get downloadsFolder() {
        return $('*=Downloads');
    }

    get notesFile() {
        return $('*=Notes');
    }
    get commandsFile() {
        return $('*=Commands');
    }

    get wordFile() {
        return $('*=Word File.doc');
    }
    
    get excelFile() {
        return $('*=Excel File.doc');
    }

    get workspaceFolder() {
        return $('*=WorkSpace');
    }
    get officeFolder() {
        return $('*=Office');
    }

    get reactFile() {
        return $('*=React');
    }

    get angularFile() {
        return $('*=Angular');
    }

    get veuFile() {
        return $('*=Veu');
    }

    // expand office folder and check if files are displayed
    get publicFile() {
        return $('*=Public');
    }

    get privateFile() {
        return $('*=Private');
    }

    get classifiedFile() {
        return $('*=Classified');
    }

    get generalFile() {
        return $('*=General');
    }

    async open() {
        await browser.url('https://demoqa.com/checkbox');
    }

    folderToggle(folderName) {
        return $(
            `//span[@title="${folderName}"]/preceding-sibling::span[contains(@class,"rc-tree-switcher")]`
        );
    }

}

export default new CheckBoxPage();