import {test, expect} from '@playwright/test'

test ('E2E scenario', async ({page})=>{
   const products= page.locator(".card-body");
   const productName= 'ADIDAS ORIGINAL';
   const email = "anshika@gmail.com";
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.locator("#userPassword").type("Iamking@000");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');   // or await page.locator(".card-body b").waitFor()
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles); 
   const count= await products.count();
   for(let i=0; i<count; i++ )
   {
     if (await products.nth(i).locator("b").textContent() === productName)
     {
      //add to cart
      await products.nth(i).locator("text= Add To Cart").click();
      break;
      

     }

   }

await page.locator("[routerlink*='cart']").click();
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

await expect(page.locator(".user__name [type='text']").first()).toHaveText(email);
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

