import checkBoxPage from "../pageobjects/checkBox.page";

describe('Check Box Feature', () => {

    it ('should show folders after Home expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.desktopFolder.waitForDisplayed()
        await expect(checkBoxPage.desktopFolder).toBeDisplayed()
        await expect(checkBoxPage.documentsFolder).toBeDisplayed()
        await expect(checkBoxPage.downloadsFolder).toBeDisplayed()
    })

    it('should show files after Desktop expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.folderToggle('Desktop').click();
        await expect(checkBoxPage.notesFile).toBeDisplayed()
        await expect(checkBoxPage.commandsFile).toBeDisplayed()
    })

    
    it ('should show folders after Documents expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.folderToggle('Documents').click();
        await expect(checkBoxPage.workspaceFolder).toBeDisplayed()
        await expect(checkBoxPage.officeFolder).toBeDisplayed()
    })

    it ('should show files after WorkSpace expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.folderToggle('Documents').click();
        await checkBoxPage.folderToggle('WorkSpace').click();
        await expect(checkBoxPage.reactFile).toBeDisplayed()
        await expect(checkBoxPage.angularFile).toBeDisplayed()
        await expect(checkBoxPage.veuFile).toBeDisplayed()
    })

    it ('should show files after Office expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.folderToggle('Documents').click();
        await checkBoxPage.folderToggle('Office').click();
        await expect(checkBoxPage.publicFile).toBeDisplayed()
        await expect(checkBoxPage.privateFile).toBeDisplayed()
        await expect(checkBoxPage.classifiedFile).toBeDisplayed()
    })

    it ('should show files after Downloads expanded', async () => {
        await checkBoxPage.open()
        await checkBoxPage.folderToggle('Home').click();
        await checkBoxPage.folderToggle('Downloads').click();
        await expect(checkBoxPage.wordFile).toBeDisplayed();
        await expect(checkBoxPage.excelFile).toBeDisplayed()
    })


})
