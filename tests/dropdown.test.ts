import {test} from "@playwright/test";

test("Dropdown", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/");   
   await page.click("(//span[@class='select2-selection select2-selection--single'])[1]");
   await page.selectOption("select#country", "India");
   await page.waitForTimeout(3000);
})

test("Multi Dropdown", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/");   
   await page.click("(//span[@class='select2-selection select2-selection--multiple'])[1]");
   await page.selectOption("select#files", ["Java", "Python"]);
   await page.waitForTimeout(3000);
})

test("Editable Dropdown", async ({ page }) => {
    await page.goto("https://www.testmuai.com/selenium-playground/jquery-dropdown-search-demo/");   
   await page.click("(//span[@class='select2-selection select2-selection--single'])[2]");
   await page.type("input.select2-search__field", "Ind");
   await page.waitForTimeout(3000);
   await page.keyboard.press("Enter");
   await page.waitForTimeout(3000);
})

