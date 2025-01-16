import { test, expect, Page } from '@playwright/test';
import { loginPage } from '../../page/login/loginPage';
import homePage from '../../fixture/HomePage.json';

test.describe('When login in homepage', () => {

    test('navegate and login', async ({ page }) => {

        await test.step('navegate to homepage', async () => {
            const navegate = new loginPage(page);
            await navegate.navegateTo(homePage.url);

        })
        await test.step('login', async () => {
            const login = new loginPage(page);
            await login.authenticateUser(homePage.userName, homePage.password);

        })

    })


})


