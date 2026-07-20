class ProgressPage {
    async open() {
        await browser.url('https://demoqa.com/progress-bar');
    }
    
    get startStopButton() {
        return $('#startStopButton');
    }

    // ✅ Correct selector from your DevTools
    get progressBar() {
        return $('[role="progressbar"]'); // most reliable — unique attribute
    }

    async getProgressValue() {
        return await this.progressBar.getAttribute('aria-valuenow');
    }

    async waitForProgressToComplete(timeout = 120000) {
        await browser.waitUntil(
            async () => {
                const value = await this.progressBar.getAttribute('aria-valuenow');
                console.log('Current progress:', value);
                return value === '100';
            },
            {
                timeout: timeout,
                timeoutMsg: 'Progress did not reach 100 within timeout',
                interval: 500
            }
        );
    }

    async resetProgress() {
        const resetBtn = $('#resetButton');
        await resetBtn.waitForDisplayed({ timeout: 5000 });
        await resetBtn.click();
        // Wait for bar to go back to 0
        await browser.waitUntil(
            async () => (await this.progressBar.getAttribute('aria-valuenow')) === '0',
            { timeout: 5000, timeoutMsg: 'Progress did not reset to 0' }
        );
    }
}

export default new ProgressPage();
