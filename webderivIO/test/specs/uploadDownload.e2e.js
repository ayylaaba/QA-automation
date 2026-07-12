import path from 'path';
import fs from 'fs';
import UploadDownlodPage from "../pageobjects/UploadDownlod.page";


describe('test Upload and Download', () => {
    
    beforeEach( async()=>{
        await UploadDownlodPage.open();
    })

    it('Test Upload Feature', async() => {        
        const filePath = '/Users/mac/Desktop/test.file'; // Path to the file you want to upload
        await UploadDownlodPage.uploadFile(filePath);
        const uploadedFilePath = await UploadDownlodPage.getUploadedFilePath();
        console.log('uploadedFilePath : ', uploadedFilePath);
        expect(uploadedFilePath).toContain('test.file');
    });

    it('should download file successfully', async () => {

        // Step 1: Define the file name the site will download
        const fileName = 'sampleFile.jpeg';
    
        // Step 2: Build the full path where it will land
        // process.env.HOME = '/Users/mac' on your Mac
        // path.join() combines them safely = '/Users/mac/Downloads/sampleFile.jpeg'
        const downloadPath = path.join(process.env.HOME, 'Downloads', fileName);
        console.log('Download path:', downloadPath);

        // Step 3: Delete file if it already exists from a previous test run
        // fs.existsSync() = checks if file is on disk → true/false
        // fs.unlinkSync() = deletes the file
        if (fs.existsSync(downloadPath)) {
            fs.unlinkSync(downloadPath);
        }
    
        // Step 4: Click download button
        await UploadDownlodPage.downloadFile();
    
        // Step 5: Wait for download to finish
        // browser.pause() = hard wait in milliseconds
        await browser.pause(3000);
    
        // Step 6: Check file now exists on disk
        const fileExists = fs.existsSync(downloadPath);
        console.log('File downloaded to:', downloadPath);
        console.log('File exists:', fileExists);
    
        // Step 7: Assert
        await expect(fileExists).toBe(true);
    });
    
});

