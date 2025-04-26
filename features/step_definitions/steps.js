import { Given, When, Then, After,setDefaultTimeout  } from '@cucumber/cucumber';
import { CartPage } from '../../pages/CartPage.js';
import { Homepage } from '../../pages/HomePage.js';
import { LoginPage } from '../../pages/LoginPage.js';
setDefaultTimeout(20 * 1000);



Given('I am logged in to the Ecommerce site with {string} and {string}', async function (username, password) {
    
    const loginPage = new LoginPage(this.page);
        await loginPage.goToLoginPage();
    await loginPage.login(username, password);
});

When('I add {string} to the cart', async function (productName) {
    const homepage=new Homepage(this.page)
    await homepage.addProductToCart(productName);
    await this.page.waitForTimeout(2000);
    await homepage.gotoCart();
    await this.page.waitForTimeout(3000);
});

Then('{string} should be displayed in the cart', async function (productName) {
    const cartpage = new CartPage(this.page);
    await cartpage.checkProductInCart(productName);
});


