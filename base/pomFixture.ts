import { test as baseTest, type Page } from "@playwright/test";
import LoginPage from "../Pages/LoginPage";
import Homepage from "../Pages/Homepage";
import MegaMenuPage from "../Pages/MegaMenuPage";
import Registerpage from "../Pages/Registerpage";

type pages = {
    registerpage: Registerpage;
    loginpage: LoginPage;
    homepage: Homepage;
    megamenu: MegaMenuPage;
};

const testPages = baseTest.extend<pages>({
    registerpage: async ({ page }, use) => {
        await use(new Registerpage(page));
    },
    loginpage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },
    homepage: async ({ page }, use) => {
        await use(new Homepage(page));
    },
    megamenu: async ({ page }, use) => {
        await use(new MegaMenuPage(page));
    } 
});

export const test = testPages;
export const expect=testPages.expect;