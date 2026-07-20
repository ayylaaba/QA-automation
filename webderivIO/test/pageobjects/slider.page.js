
class SliderPage {

    async open(){
        await browser.url('https://demoqa.com/slider');
    }

    get slider() {
        return $('#slider');
    }

    get sliderValue() {
        return $('#sliderValue');
    }

    async setSliderValue(value) {
        await this.slider.setValue(value);
    }

    async getSliderValue() {
        return await this.sliderValue.getValue();
    }
}

export default new SliderPage();
