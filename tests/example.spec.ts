import { test, expect } from '@playwright/test';

test('go to page demoblaze', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/');
 
});
test('go to page orangeHR', async ({ page }) => {
  await page.goto('https://www.orangehrm.com/');
  await page.waitForSelector('#navbarSupportedContent');
  await page.click('#navbarSupportedContent .nav-link-hed >> text=Pricing');
});

