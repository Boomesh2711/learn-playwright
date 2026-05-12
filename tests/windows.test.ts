// import {expect, test } from "@playwright/test";

// test("should open multiple windows and verify URLs", async ({ page }) => {
//     await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");


//     const [multipage] = await Promise.all([
//         page.waitForEvent("popup"),
//         page.click("#followboth")   
//     ]);
//     await multipage.waitForLoadState();
//     const pages = multipage.context().pages();
//     console.log("Total windows: " + pages.length);
//     pages.forEach((tab, index) => {
//         console.log(tab.url());
//     })
    
// // const [newwindow] = await Promise.all([
// //     page.waitForEvent("popup"),
// //     page.click("'Follow On Twitter'")
// // ]);
// // console.log("New window URL: " + newwindow.url());
// // })



import { expect, Page, test } from "@playwright/test";

test("Interact with multiple tabs", async ({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
  await page.locator("#followboth").scrollIntoViewIfNeeded();

  // console.log(page.url());

  const [multiPage] = await Promise.all([
    page.waitForEvent("popup"),

    page.click("#followboth"),
  ]);

  await multiPage.waitForLoadState();

  const pages = multiPage.context().pages();
  console.log('No.of tabs:' + pages.length);

  pages.forEach((tab) => {
    console.log(tab.url());
  });

let facebookpage: Page;
for (let index=1; index<pages.length; index++){
    const url = pages[index].url();
    if(url === "https://www.facebook.com/lambdatest/"){
        facebookpage = pages[index];
    }

}

    const text = await facebookPage.textContent("//h1");
    console.log(text);
    expect(text).toContain("LambdaTest");
})