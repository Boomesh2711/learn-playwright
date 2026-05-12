import { Page } from "@playwright/test";
export default class Homepage {

    constructor(public page: Page) {

    }
    async clickonMegaMenu(){
        await this.page.hover("//span[normalize-space(.)='Mega Menu']");
        await this.page.locator("//a[@title='Apple']").click();    
    }
    

}