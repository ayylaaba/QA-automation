
import webTablePage from '../pageobjects/webTable.page.js';
import  WebTablePage from '../pageobjects/webTable.page.js';

describe('Web Table Feature', () => 
    {
        it('should add new user to the table', async () => 
            {
                webTablePage.open();
                WebTablePage.addNewRecord(
                    "Ayyoub",
                    "Bouzid",
                    "ayoubbouzid@gmail.com",
                    "30",
                    "5000",
                    "IT");
                await browser.pause(4000); // Wait 2 seconds - FLAKY!
            }
        )
    }
)
