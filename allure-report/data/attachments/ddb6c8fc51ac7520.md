# Test info

- Name: Visual testing
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\MoreValidations.spec.js:49:6

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\basavaraj\AppData\Local\ms-playwright\webkit-2158\Playwright.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
```

# Test source

```ts
   1 | import {test, expect} from '@playwright/test'
   2 |
   3 | test('Validations', async ({page}) =>
   4 |
   5 |     {
   6 | await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
   7 | // await page.goto("https://www.google.com/");
   8 | // await page.goBack();
   9 | // await page.goForward();
  10 |
  11 | await expect(page.locator("#displayed-text")).toBeVisible();
  12 | await page.locator("#hide-textbox").click()
  13 | await expect(page.locator("#displayed-text")).toBeHidden();
  14 | page.on('dialog', dialog=>dialog.accept());  //Clicks on Ok of the alert/dialog popup, it works irrespective of the script line
  15 | //page.on('dialog', dialog=>dialog.dismiss()); ////Clicks on Cancel of the alert/dialog popup
  16 | await page.locator("#confirmbtn").click();  //invokes alert/dialog popup
  17 | await page.locator("#mousehover").hover();
  18 |
  19 | //frames :-  divide a web page into multiple sections, each capable of displaying a separate HTML document. (Attached page)
  20 |
  21 | const framespage =  page.frameLocator("#courses-iframe")
  22 | await framespage.locator("li a[href*='lifetime-access']:visible").click();  //here 2 elements are matching for the locator, 1 is hidden so we used :visible to make sure visible locator focused.
  23 | const textcheck= await framespage.locator(".text h2").textContent();
  24 | console.log(textcheck.split(" ")[1]);
  25 |
  26 |
  27 |
  28 |
  29 |
  30 |     })
  31 |
  32 |
  33 |     
  34 |     
  35 | test('Screenshot', async ({page})=>{
  36 |
  37 | await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
  38 | await expect(page.locator("#displayed-text")).toBeVisible();
  39 | await page.locator("#displayed-text").screenshot({path: 'specificcomponent.png'}) //takes screenshot of particular component
  40 | await page.locator("#hide-textbox").click()
  41 | //await page.screenshot({path: 'screenshot.png'})  //takes full page screenshot
  42 | await expect(page.locator("#displayed-text")).toBeHidden();
  43 |     
  44 |
  45 | })
  46 |
  47 | //Visual testing in playwright by comparing screenshots.
  48 |
> 49 | test.only('Visual testing', async ({page}) =>{
     |      ^ Error: browserType.launch: Executable doesn't exist at C:\Users\basavaraj\AppData\Local\ms-playwright\webkit-2158\Playwright.exe
  50 |
  51 |     await page.goto("https://www.google.com/")
  52 |     expect(await page.screenshot()).toMatchSnapshot('Homepage.png')
  53 |
  54 |
  55 |
  56 | })
  57 |
```