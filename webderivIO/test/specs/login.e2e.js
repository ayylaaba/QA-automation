import LoginPage from '../pageobjects/login.page.js';

describe('Test Login Page', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    it('test add new user form', async () => {
        await LoginPage.openRegisterPage();

        await LoginPage.firstNameInput.setValue('Johnn');
        await LoginPage.lastNameInput.setValue('Doee');
        await LoginPage.userName.setValue('johndoe_Doe'); // ← Unique username!
        await LoginPage.password.setValue('Password123!');

        await LoginPage.registerButton.click();

        // Wait for success message or back button
        await browser.pause(2000);

        // Option A: Click "Back to Login" (recommended)
        await LoginPage.backToLoginButton.waitForDisplayed({ timeout: 5000 });
        await LoginPage.backToLoginButton.click();
        const url = await browser.getUrl();
        await expect(url).toContain('/login');
        await browser.pause(2000); // wait for the page to load
        // login with the new user
        await LoginPage.usernameInput.setValue('johndoe_Doe');
        await LoginPage.passwordInput.setValue('Password123!');
        await LoginPage.loginButton.click();
        await browser.pause(50000);
    });
});