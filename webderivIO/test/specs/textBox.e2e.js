
import TextBoxPage from '../pageobjects/textBox.page.js'

describe('Text Box Feature', () => {

    it('should show infos after submit', async () => {

        await TextBoxPage.open()

        await TextBoxPage.fillForm(
            'Ayyoub Laabad',
            'ayoub@gmail.com',
            'Rabat, Morocco',
            'Rabat, Morocco'
        )

        await TextBoxPage.output.waitForDisplayed()

        await expect(TextBoxPage.nameOutput).toHaveText('Name:Ayyoub Laabad')
        await expect(TextBoxPage.emailOutput).toHaveText('Email:ayoub@gmail.com')
        await expect(TextBoxPage.currentAddressOutput).toHaveText('Current Address :Rabat, Morocco')
        await expect(TextBoxPage.permanentAddressOutput).toHaveText('Permananet Address :Rabat, Morocco')

    })

})