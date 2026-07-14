
class UploadDownloadPage {
    
    // Open the upload/download page
    async open(){
        await browser.url('https://demoqa.com/upload-download');
    }

    // get download button element
    get downloadButton() {
        return $('#downloadButton');
    }
    async downloadFile() {
        await this.downloadButton.waitForClickable();
        await this.downloadButton.click();
    }

    // Function to upload a file
    async uploadFile(filePath) {
        const remoteFilePath = await browser.uploadFile(filePath);
        await this.uploadButton.setValue(remoteFilePath);
    }

    // Get the upload button element
    get uploadButton() {
        return $('#uploadFile');
    }

    // Get the uploaded file path element
    get uploadedFilePath() {
        return $('#uploadedFilePath');
    }

    // get path after uploading the file
    async getUploadedFilePath() {
        await this.uploadedFilePath.waitForDisplayed();
        return this.uploadedFilePath.getText();
    }

}

export default new UploadDownloadPage();