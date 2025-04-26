import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { Homepage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('POMTest', async ({page})=>{

const username = "pavanol";
const password = "test@123";

//LoginPage
const loginpage=new LoginPage(page);   //object
await loginpage.goToLoginPage();
await loginpage.login(username,password);



//HomePage
const homepage=new Homepage(page)
await homepage.addProductToCart("Nexus 6");
await page.waitForTimeout(3000);
await homepage.gotoCart();


//CartPage
const cartpage=new CartPage(page);
await cartpage.checkProductInCart();

}


)
