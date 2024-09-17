const { HTTPRequest } = require('../tools/http-requests.js')

exports.GoLangService = class GoLangService {
    /**
     * @param {import('@playwright/test').Request} request
     * @param {import('@playwright/test').TestInfo} testInfo
     */
    constructor(request, testInfo) {
        this.request = request;
        this.testInfo = testInfo;
        this.httpRequest = new HTTPRequest(this.request, this.testInfo);
    }

    async getGoLang() {
        const env = process.env.ENV;
        if (env != null) console.log(env);

        return await this.httpRequest.get('https://go.dev/')
    }
};