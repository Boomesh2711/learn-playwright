import { chromium, test } from "@playwright/test"
test("Login test demo", async (  ) => {
   const browser = await chromium.launch({
    headless: false
});
    const context = await  browser.newContext();
    const page = await context.newPage();
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
   // await page.click("text=Login");
    await page.click("'Login'");
    await page.fill("input[name='email']", "boomesh@gamil.com");
    await page.fill("input[name='password']", "Admin@123");
    await page.click("input[value='Login']");
    await page.waitForTimeout(5000);
    const Page1 = await context.newPage();
    await Page1.goto("https://ecommerce-playground.lambdatest.io/");
    await Page1.waitForTimeout(5000);
   // await Page1.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");


});