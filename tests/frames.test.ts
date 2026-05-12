import { expect, test } from "@playwright/test";

test("Frames", async ({ page }) => {
    await page.goto("https://letcode.in/frame");

const frame=page.frameLocator("#firstFr");
await frame.locator("input[name='fname']").fill("Boomesh");
await frame.locator("input[name='lname']").fill("Kumar");
 const innerframe= frame.frameLocator("iframe[src='/innerFrame']");
 await innerframe.locator("input[name='email']").fill("boomesh.kumar@example.com");



    const allframes = page.frames();
    console.log("Total frames: " + allframes.length);
    const frame1 = page.frame("firstFr");
    await frame1?.fill("input[name='fname']", "Boomesh");
    await frame1?.fill("input[name='lname']", "Kumar");
    const frame2 = page.frame("secondFr");
    await frame2?.fill("input[name='email']", "boomesh.kumar@example.com");
    const frame3 = page.frame("thirdFr");
    await frame3?.fill("input[name='phone']", "1234567890");
    expect(await frame1?.locator("p.has-text-info").textContent()).toContain("You have entered")

})


