import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');
      await page.hover("//a[@data-toggle='dropdown']//span[contains(.,'My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address' }).fill('boomesh@gmail.com');
  await page.getByRole('textbox', { name: 'E-Mail Address' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('Admin@1231');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Forgotten Password', exact: true }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address*' }).click();
  await page.getByRole('textbox', { name: 'E-Mail Address*' }).fill('boomesh@gmail.com');
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.getByRole('link', { name: 'Poco Electro' }).click();
});