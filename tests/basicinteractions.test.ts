//import { expect, test } from "@playwright/test";
// test ("interactions with input", async ({ page }) => {
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
//     const msgip= page.locator("input#user-message");
//     console.log(await msgip.getAttribute("placeholder"));
//     await msgip.scrollIntoViewIfNeeded();
// expect (await msgip.getAttribute("placeholder")).toBe("Please enter your Message");

// console. log('Before entering data: ' + await msgip. inputValue());
// await msgip.type("Hi playwright");
// console.log('After entering data: ' + await msgip.inputValue());
// })
//  test ("Sum", async ({ page }) => {
//     await page.goto("https://www.testmuai.com/selenium-playground/simple-form-demo/");
//     await page.waitForTimeout(3000);
//     const sum1 = page.locator("#sum1")
//     const sum2 = page.locator("#sum2")
//     const gettotal = page.locator("(//input[1]/following-sibling::button)[2]")
//     let num1=10;
//     let num2=20;
//     await sum1.scrollIntoViewIfNeeded();
//     await sum1.fill("" + num1);
//     await sum2.fill("" + num2);
//     await gettotal.click()
//     await page.waitForTimeout(3000);
//     const total = page.locator("#addmessage")
//     await page.waitForTimeout(3000);
//     console.log(await total.textContent());
//     let expected = num1 + num2;
//     expect (total).toHaveText("" + expected)
//  })


// test("Checkbox", async ({ page }) => {
//   await page.goto("https://www.testmuai.com/selenium-playground/checkbox-demo/");
//   const checkbox = page.locator("(//input[@type='checkbox'])[1]");
//   await checkbox.check();
//   await expect(checkbox).toBeChecked();
// });