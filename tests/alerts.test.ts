import { test } from "@playwright/test";

test("Alert", async ({ page }) => {
  await page.goto("https://www.testmuai.com/selenium-playground/javascript-alert-box-demo/");    
  
  
  page.on("dialog", async (dialog) => {
    console.log(dialog.message());
    console.log(dialog.defaultValue());
    await dialog.accept("Boomesh");


  })
  await page.locator("button:has-text('Click me')").nth(2).click();
})