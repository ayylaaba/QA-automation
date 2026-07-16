
class AlertPage{

    // OPEN Demoqa Alerts Page
    async open() {
        await browser.url('https://demoqa.com/alerts')
    }

    // getters
    get alertButton() { return $('#alertButton') }
    get alertButtonTimer() { return $('#timerAlertButton') }
    get confirmButton() { return $('#confirmButton') }
    get promptButton() { return $('#promtButton') }  // Fixed spelling


    // click on buttons
    async clickAlertButton() {
        await this.alertButton.click()
    }

    async clickAlertButtonTimer() {
        await this.alertButtonTimer.click()
    }

    async clickConfirmButton() {
        await this.confirmButton.click()
    }

    async clickPromptButton() {
        await this.promptButton.click()
    }
}

export default new AlertPage()