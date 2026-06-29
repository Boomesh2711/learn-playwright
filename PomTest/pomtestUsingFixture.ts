import { expect, test } from "../base/pomFixture";
import * as data from "../Test-data/addcart-data.json";
//     test.use({
// browserName: "firefox"
//     })
test.describe("Page Object Model Test", () => {

    test("Register test1", async ({ page , baseURL, registerpage }) => {
   
    await page.goto(`${baseURL}route=account/register`);
    await registerpage.enterfirstname("data.firstname");
    await registerpage.enterlastname("data.lastname");
    await registerpage.enteremail(data.email);
    await registerpage.entertelephone("data.phone");
    await registerpage.enterpassword(data.password);
    await registerpage.enterconfirmpassword(data.password);
    expect(await registerpage.IssubscribedChecked()).toBe(true);
    await registerpage.clickonprivacy();
    await registerpage.clickoncontinueToRegister();
}
)
test("Login test2", async ({ page , baseURL, loginpage }) => {
   
    await page.goto(`${baseURL}route=account/login`);
    await loginpage.enterEmail(data.email);
    await loginpage.enterPassword(data.password);
    await loginpage.clickLoginbtn();
    expect(await page.title()).toBe("My Account");
})
test("Mega menu test3", async ({ page , baseURL, loginpage, homepage, megamenu }) => {
  
     await page.goto(`${baseURL}route=account/login`);
    await loginpage.login(data.email, data.password);
    await homepage.clickonMegaMenu();
    await megamenu.add1stitemtocart();
    expect(await megamenu.IsToastVisible()).toBe(true);
}) 

})

