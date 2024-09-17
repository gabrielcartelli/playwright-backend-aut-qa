const { test, expect } = require('@playwright/test');
const { GoLangService } = require('../support/services/go-lang-service.js');

test.describe('Go Page', { tag: ['@smoke', '@regressao'] }, async () => {
    test('go page', async ({ request }, testInfo) => {
        const goLangService = new GoLangService(request, testInfo);

        let res = await goLangService.getGoLang();

        expect(res.status).toEqual(200);
    });
})
