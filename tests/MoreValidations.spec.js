import {test, expect} from '@playwright/test'

test('Validations', async ({page}) =>

    {
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
// await page.goto("https://www.google.com/");
// await page.goBack();
// await page.goForward();

await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#hide-textbox").click()
await expect(page.locator("#displayed-text")).toBeHidden();
page.on('dialog', dialog=>dialog.accept());  //Clicks on Ok of the alert/dialog popup, it works irrespective of the script line
//page.on('dialog', dialog=>dialog.dismiss()); ////Clicks on Cancel of the alert/dialog popup
await page.locator("#confirmbtn").click();  //invokes alert/dialog popup
await page.locator("#mousehover").hover();

//frames :-  divide a web page into multiple sections, each capable of displaying a separate HTML document. (Attached page)

const framespage =  page.frameLocator("#courses-iframe")
await framespage.locator("li a[href*='lifetime-access']:visible").click();  //here 2 elements are matching for the locator, 1 is hidden so we used :visible to make sure visible locator focused.
const textcheck= await framespage.locator(".text h2").textContent();
console.log(textcheck.split(" ")[1]);





    })


    
    
test('Screenshot', async ({page})=>{

await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
await expect(page.locator("#displayed-text")).toBeVisible();
await page.locator("#displayed-text").screenshot({path: 'specificcomponent.png'}) //takes screenshot of particular component
await page.locator("#hide-textbox").click()
//await page.screenshot({path: 'screenshot.png'})  //takes full page screenshot
await expect(page.locator("#displayed-text")).toBeHidden();
    

})

//Visual testing in playwright by comparing screenshots.

test.only('Visual testing', async ({page}) =>{

    await page.goto("https://www.google.com/")
    expect(await page.screenshot()).toMatchSnapshot('Homepage.png')



})
