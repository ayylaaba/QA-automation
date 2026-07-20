
import sliderPage from "../pageobjects/slider.page";


describe('Slider Tests', () => {

    beforeEach(async () => {
        await sliderPage.open();
    });

    it('should set the slider value and verify', async () => {
        
        const testValue = 50;
        
        await sliderPage.setSliderValue(testValue);
        await browser.pause(1000); // Wait for the slider to update
        
        const resultText = await sliderPage.getSliderValue();

        console.log(`Slider value ${resultText}`);
        
        await expect(resultText).toContain(testValue.toString());
    });
})

