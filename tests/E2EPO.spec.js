import {test, expect} from '@playwright/test'
const {POManaer, POManager}=require('../pageobjects/POManager');


test ('E2E scenario', async ({page})=>{

  const pomanager = new POManager.POManager(page);
   const products= page.locator(".card-body");
   const productName= 'ADIDAS ORIGINAL';
   const username = "anshika@gmail.com";
   const password = "Iamking@000";
   
   const loginPage = pomanager.getLoginpage()
   await loginPage.LandingPage();
   await loginPage.validLogin(username, password);
   const dashboardPage =pomanager.getDashboardpage();
   await dashboardPage.searchforProductAddCart(productName);
   await dashboardPage.navigateTocart();


 

await page.locator("div li").first().waitFor()  //This we are because .isVisible method doesn't has auto wait
 const bool=await page.locator("h3:has-text('ADIDAS ORIGINAL')").isVisible();  //here we are using playwright Pseudo-classes concept because precious page also has ADIDAS ORIGINAL text to differentiate we used h3 tag 
 expect(bool).toBeTruthy();

await page.locator("text=Checkout").click();
await page.locator("[placeholder*=Country]").pressSequentially("ind");  //pressSequentially is used because it will enter one by one where as fill will directly copy paste.
const dropdown = page.locator(".ta-results");
await dropdown.waitFor()
const optionsCount= await dropdown.locator("button").count()

for(let i=0; i<optionsCount; ++i)
{
   const text= await dropdown.locator("button").nth(i).textContent()

   if (text===" India")
   {
      dropdown.locator("button").nth(i).click();
      break;
   }

}

await expect(page.locator(".user__name [type='text']").first()).toHaveText(username);
await page.locator(".action__submit").click();
await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const OrderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(OrderID)


await page.locator("button[routerlink*='myorders']").click();
await page.locator("tbody").waitFor();
const rows = await page.locator("tbody tr");


for (let i = 0; i < await rows.count(); ++i) {
   const rowOrderId = await rows.nth(i).locator("th").textContent();
   if (OrderID.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
   }
}
const orderIdDetails = await page.locator(".col-text").textContent();
expect(OrderID.includes(orderIdDetails)).toBeTruthy();

});

