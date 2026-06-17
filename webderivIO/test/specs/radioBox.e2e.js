
import RadioBoxPage from '../pageobjects/radioBox.page.js';

describe('Radio Box Feature', () => {
    
    it('should select the yes radio box', async () => {
        await RadioBoxPage.open()
        await RadioBoxPage.radioBox.click()
        
        await expect(RadioBoxPage.radioBox).toBeSelected()
        
        // Check the label text instead
        await expect(RadioBoxPage.radioBoxLabel).toHaveText('Yes')
    })

    it ('should select the impressive radio box', async () => {
        await RadioBoxPage.open()
        await RadioBoxPage.impressiveRadioBox.click()
        
        await expect(RadioBoxPage.impressiveRadioBox).toBeSelected()
        
        // Check the label text instead
        await expect(RadioBoxPage.impressiveRadioBoxLabel).toHaveText('Impressive')
    })

    it('should verify that the no radio box is disabled', async () => {
        await RadioBoxPage.open()
        
        // Check if the no radio box is disabled
        await expect(RadioBoxPage.noRadioBox).toBeDisabled()
        
        // Check the label text instead
        await expect(RadioBoxPage.noRadioBoxLabel).toHaveText('No')
    })
})
