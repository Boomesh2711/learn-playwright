import { test } from "@playwright/test";

test("DownLoad files", async ({ page }) => {

await page. goto("https://www.Lambdatest.com/selenium-playground/generate-file-to-download-demo");
await page. waitForTimeout(3000);
await page. click("#textbox");
await page.fill("#textbox", "Like, Share, comment & subs");
await page. waitForTimeout(3000);
await page.click("//button[@id='create']")
const download = await Promise. all([
page.waitForEvent("download"),
page.click("id=Link-to-download")
])
const path = await download[0].path();
console. log(path);
})

test.only("Upload files", async ({ page }) => {
await page.goto("https://blueimp.github.io/jQuery-File-Upload/")
await page.setInputFiles("input[type='file']",
["package-lock.json"]);

await page.waitForTimeout(3000);
})

