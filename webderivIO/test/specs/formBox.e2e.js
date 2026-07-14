import FormBoxPage from "../pageobjects/formBox.page";

describe('Test if the form', () => {
    it ('test form inputs', async ()=> {
        await FormBoxPage.open();

        // set Value In Inputs
        await FormBoxPage.firstName.setValue('Ayoub');
        await FormBoxPage.lastName.setValue('Laabad');
        await FormBoxPage.selectGender('Male');
        await FormBoxPage.userEmail.setValue('userPersonal2001@gmail.com');
        await FormBoxPage.mobileNumber.setValue('0123456789');
        await FormBoxPage.setDateOfBirth('14', '07', '2026');
        await browser.keys('Escape'); // ← closes the calendar
        await FormBoxPage.subjectsInput.setValue('Maths');
        await browser.pause(1000); // Wait 1 seconds
        await browser.keys('Tab'); // ← Tab to next field instead of submitting
        await FormBoxPage.SetHobbies('Sports');
        await FormBoxPage.currentAddress.setValue('BenGuerir Hay Ifriquia');
        await FormBoxPage.uploadFile('/Users/mac/Downloads/test.c')
        await FormBoxPage.SelectState('NCR');
        await FormBoxPage.SelectCity('Delhi');
        
        await browser.pause(3000); // Wait 3 seconds
        await FormBoxPage.clickSubmit();
        await browser.pause(2000); // Wait 3 seconds

        // Asseration
        const TableTitle = await FormBoxPage.getTable.getText();
        await expect(TableTitle).toContain('Thanks for submitting');
        // Get all table data
        const tableData = await FormBoxPage.getTableData();
        console.log('Table Data:', tableData);
         // Assert each field
        await expect(tableData['Student Name']).toBe('Ayoub Laabad');
        await expect(tableData['Student Email']).toBe('userPersonal2001@gmail.com');
        await expect(tableData['Gender']).toBe('Male');
        await expect(tableData['Mobile']).toBe('0123456789');
        await expect(tableData['Date of Birth']).toBe('14 July,2026');
        await expect(tableData['Subjects']).toBe('Maths');
        await expect(tableData['Picture']).toBe('test.c');
        await expect(tableData['Address']).toBe('BenGuerir Hay Ifriquia');
        await expect(tableData['State and City']).toBe('NCR Delhi');
    });
});
