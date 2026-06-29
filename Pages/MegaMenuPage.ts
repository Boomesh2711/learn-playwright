import {Page} from "@playwright/test";

export default class MegaMenuPage {
    constructor (public page: Page){

    }
    async add1stitemtocart(){
        await this.page.waitForTimeout(3000);
        await this.page.hover("(//img[@class='lazy-load'])[1]");
        await this.page.locator("//button[@title='Add to Cart']").nth(0).click();
        
    }
    async IsToastVisible(){
        const Toast= this.page.locator("//a[contains(.,'View Cart')]");
        await Toast.waitFor({state:"visible"});
        return await Toast.isVisible();
    }
}