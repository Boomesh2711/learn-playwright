import { Page } from "@playwright/test";

export default class LoginPage {
    constructor(public page: Page) {
    }

    async login(email: string, password: string) {
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.clickLoginbtn();
    }

    async enterEmail(email: string) {
        await this.page.locator("#input-email").fill(email);
    }

    async enterPassword(password: string) {
        await this.page.locator("#input-password").fill(password);
    }

    async clickLoginbtn() {
        await Promise.all([ 
            this.page.waitForNavigation(),
            this.page.waitForTimeout(3000),
         this.page.locator("input[type='submit']").click()
        ]);
    }
}


    
