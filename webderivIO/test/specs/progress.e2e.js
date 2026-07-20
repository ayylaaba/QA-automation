
import ProgressPage from '../pageobjects/progress.page.js';

describe('Test Progress', () => {
    
    beforeEach(async () => {
        await ProgressPage.open();
    });

    it('should start at 0', async () => {
        const value = await ProgressPage.getProgressValue();
        await expect(value).toBe('0');
    });

    it('should reach 100 after starting', async () => {
        await ProgressPage.startStopButton.click();
        await ProgressPage.waitForProgressToComplete();
        
        const value = await ProgressPage.getProgressValue();
        console.log('Final value:', value);
        await expect(value).toBe('100');
    });

    it('should reset to 0 after completing', async () => {
        await ProgressPage.startStopButton.click();
        await ProgressPage.waitForProgressToComplete();
        
        await ProgressPage.resetProgress();
        
        const value = await ProgressPage.getProgressValue();
        await expect(value).toBe('0');
    });

    it('should stop when button clicked mid-progress', async () => {
        await ProgressPage.startStopButton.click();
        await browser.pause(3000);
        await ProgressPage.startStopButton.click(); // stop

        const valueBefore = await ProgressPage.getProgressValue();
        await browser.pause(2000); // wait and check it didn't move
        const valueAfter = await ProgressPage.getProgressValue();

        await expect(valueAfter).toBe(valueBefore); // value unchanged = stopped
    });


});


