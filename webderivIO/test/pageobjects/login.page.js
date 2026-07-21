

// class LoginPage {
    
//     async open() {
//         await browser.url('https://demoqa.com/login');
//     }

//     // login page selectors
//     get usernameInput() { return $('#userName'); }
//     get passwordInput() { return $('#password'); }
//     get loginButton() { return $('#login'); }

//     // login method to perform login action
//     async login(username, password) {
//         await this.usernameInput.setValue(username);
//         await this.passwordInput.setValue(password);
//         await this.loginButton.click();
//     }

//     // add new user
//     get addUserButton() { return $('#newUser'); }
    
//     // be sure we are in register page
//     get RegiterTitle() { return $('.text-center'); }

//     async openRegisterPage() {
//          await this.addUserButton.click();
//          await browser.pause(2000); // wait for the page to load
//          const title = await this.RegiterTitle.getText();
//          await expect(title).toBe('Register');
//     }

//     // firstname
//     get firstNameInput() { return $('#firstname'); }
//     get lastNameInput() { return $('#lastname'); }
//     get userName() { return $('#userName'); }
//     get password() { return $('#password'); }
//     get registerButton() { return $('#register'); }
//     get backToLoginButton() { return $('#gotologin'); }

//     async addNewUser(username, password) {
//         await this.usernameInput.setValue(username);
//         await this.passwordInput.setValue(password);
//         await this.loginButton.click();
//     }

// }
// export default new LoginPage();


class LoginPage {
    async open() {
        await browser.url('https://demoqa.com/login');
    }

    // Login page
    get usernameInput() { return $('#userName'); }
    get passwordInput() { return $('#password'); }
    get loginButton() { return $('#login'); }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    // Register flow
    get addUserButton() { return $('#newUser'); }
    get registerTitle() { return $('.text-center'); } // Fixed typo: RegiterTitle → registerTitle

    async openRegisterPage() {
        await this.addUserButton.click();
        await browser.pause(1500);
        await expect(this.registerTitle).toHaveText('Register');
    }

    get firstNameInput() { return $('#firstname'); }
    get lastNameInput() { return $('#lastname'); }
    get userName() { return $('#userName'); }        // register username field
    get password() { return $('#password'); }        // register password field
    get registerButton() { return $('#register'); }
    get backToLoginButton() { return $('#gotologin'); }

    // Optional: success message locator
    get successMessage() { return $('p.text-success'); }
}

export default new LoginPage();
