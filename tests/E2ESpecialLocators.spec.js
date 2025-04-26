import {test, expect} from '@playwright/test'

test('E2E scenario', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "anshika@gmail.com";
   const productName = 'ZARA COAT 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.getByPlaceholder("email@example.com").fill(email);
   await page.getByPlaceholder("enter your passsword").fill("Iamking@000");
   await page.getByRole('button',{name:"Login"}).click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   
   await page.locator(".card-body").filter({hasText:"ADIDAS ORIGINAL"})
   .getByRole("button",{name:"Add to Cart"}).click();
 
   await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 
   await page.locator("div li").first().waitFor();
   await expect(page.getByText("ADIDAS ORIGINAL")).toBeVisible();
 
   await page.getByRole("button",{name :"Checkout"}).click();
 
   await page.getByPlaceholder("Select Country").pressSequentially("ind");
 
   await page.getByRole("button",{name :"India"}).nth(1).click();
   await page.getByText("PLACE ORDER").click();
 
   await expect(page.getByText("Thankyou for the order.")).toBeVisible();

   
const OrderID = await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(OrderID)


await page.getByRole("button", {name:"ORDERS"}).click();
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

