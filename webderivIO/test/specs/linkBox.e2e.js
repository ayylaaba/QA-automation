import linkBoxPage from "../pageobjects/linkBox.page";

const LinkApi = [
    { status : '201', statusText: 'Created',  linkName:'created'},
    { status : '204', statusText: 'No Content',  linkName:'no-content'},
    { status : '301', statusText: 'Moved',  linkName:'moved'},
    { status : '400', statusText: 'Bad',  linkName:'bad-request'},
    { status : '401', statusText: 'Unauthorized',  linkName:'unauthorized'},
    { status : '403', statusText: 'Forbidden',  linkName:'forbidden'},
    { status : '404', statusText: 'Not Found',  linkName:'invalid-url'},
]

describe('test link page', () => {

    beforeEach(async () => {
        await linkBoxPage.open();
    });

    //test the links that will send an api call
    for (let i = 0; i < LinkApi.length; i++)
    {
        it (`test ${LinkApi[i].linkName} should show an api call`, async () =>
        {
            await linkBoxPage.clickLink(LinkApi[i].linkName);
            const apiMessaage = await linkBoxPage.getResultText();
            console.log('apiMessage : ', apiMessaage);
            await expect(apiMessaage).toContain(String(LinkApi[i].statusText));
            await expect(apiMessaage).toContain(String(LinkApi[i].status));
        })
    }

    it ('test after click on simpleLink should open new navbar', async () => {

        


    })
})