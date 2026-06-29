import { expect, test } from "@playwright/test"
import Homepage from "../Pages/Homepage"
import LoginPage from "../Pages/LoginPage"
import MegaMenuPage from "../Pages/MegaMenuPage"
import Registerpage from "../Pages/Registerpage"

const email = "boomikani01@gmail.com";
 const password = "Admin@123";
test.describe("Page Object Model Test", () => {
    test("Register test1", async ({ page , baseURL}) => {
    const Register = new Registerpage(page);
    await page.goto(`${baseURL}route=account/register`);
    await Register.enterfirstname("boomi");
    await Register.enterlastname("kani");
    await Register.enteremail(email);
    await Register.entertelephone("8525922577");
    await Register.enterpassword(password);
    await Register.enterconfirmpassword(password);
    expect(await Register.IssubscribedChecked()).toBe(true);
    await Register.clickonprivacy();
    await Register.clickoncontinueToRegister();
}
)
test("Login test2", async ({ page , baseURL}) => {
    const login = new LoginPage(page);
    await page.goto(`${baseURL}route=account/login`);
    await login.enterEmail(email);
    await login.enterPassword(password);
    await login.clickLoginbtn();
    expect(await page.title()).toBe("My Account");
})
test("Mega menu test3", async ({ page , baseURL}) => {
    const login = new LoginPage(page);
     await page.goto(`${baseURL}route=account/login`);
    await login.login(email,password);
    const homepage = new Homepage(page);
    const megamenu = new MegaMenuPage(page);
    await homepage.clickonMegaMenu();
    await megamenu.add1stitemtocart();
    expect(await megamenu.IsToastVisible()).toBe(true);
}) 

})

