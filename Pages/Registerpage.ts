import { Page } from "@playwright/test";

export default class Registerpage{

    constructor(public page: Page) {
    }

    async enterfirstname(firstname: string) {
        await this.page.locator("#input-firstname").fill(firstname);

    }
    async enterlastname(lastname: string) {
        await this.page.locator("#input-lastname").fill(lastname);
    }   
    async enteremail(email: string) {
        await this.page.locator("#input-email").fill(email);
    }
    async entertelephone(telephone: string) {
        await this.page.locator("#input-telephone").fill(telephone);
    }
    async enterpassword(password: string) {
        await this.page.locator("#input-password").fill(password);
    }   
    async enterconfirmpassword(password: string) {
        await this.page.locator("#input-confirm").fill(password);
    }
async IssubscribedChecked() {
   return await this.page.locator("//label[text()='No']").isChecked();

}
async clickonprivacy() {
    await this.page.locator("//label[@for='input-agree']").check();
}
async clickoncontinueToRegister() {
    await Promise.all([ 
        this.page.waitForNavigation(), 
    await this.page.locator("input[type='submit']").click()
    ]);
}
} 





// import { Page } from "@playwright/test";
// export default class RegisterPage {

// constructor(public page: Page) {

// async enterFirstName(firstname: string) {
// await this.page. locator("#input-firstname")
// .type(firstname);