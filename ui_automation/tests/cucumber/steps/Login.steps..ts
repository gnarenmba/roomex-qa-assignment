import { Given, Then, When } from '@cucumber/cucumber';
import loginPage from '@UIPages/login.page';
import FrameworkConstants from '@UIStatic/FrameworkConstants';

Given(/^I open the roomex login page$/, async () => {
    await loginPage.openApp();
});

When(/^I login with given username and password$/, async (dataTable) => {
    await loginPage.login(dataTable.hashes()[0].username, dataTable.hashes()[0].password)
});


When(/^I click the login button$/, async () => {
    await loginPage.clickLoginButton();
});


Then(/^I should see a invalid (email|password) error message$/, async (errorField: string) => {

    switch (errorField) {
        case "email": await expect(loginPage.invalidEmailError).toHaveTextContaining(FrameworkConstants.INVALID_EMAIL_FAILED_MSG);
            break;
        case "password": await expect(loginPage.invalidPasswordError).toHaveTextContaining(FrameworkConstants.INVALID_PASSWORD_FAILED_MSG);
            break;
    }
});