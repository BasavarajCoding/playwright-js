# Test info

- Name: Visual testing
- Location: C:\Basavaraj\PlaywrightAutomationRS\tests\MoreValidations.spec.js:49:6

# Error details

```
Error: expect(Buffer).toMatchSnapshot(expected)

  8449 pixels (ratio 0.01 of all image pixels) are different.

Expected: C:\Basavaraj\PlaywrightAutomationRS\tests\MoreValidations.spec.js-snapshots\Homepage-chromium-win32.png
Received: C:\Basavaraj\PlaywrightAutomationRS\test-results\MoreValidations-Visual-testing-chromium-retry2\Homepage-actual.png
    Diff: C:\Basavaraj\PlaywrightAutomationRS\test-results\MoreValidations-Visual-testing-chromium-retry2\Homepage-diff.png

    at C:\Basavaraj\PlaywrightAutomationRS\tests\MoreValidations.spec.js:52:37
```

# Page snapshot

```yaml
- navigation:
  - link "About":
    - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
  - link "Store":
    - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
  - link "Gmail":
    - /url: https://mail.google.com/mail/&ogbl
  - link "Search for Images":
    - /url: https://www.google.com/imghp?hl=en&ogbl
    - text: Images
  - button "Google apps":
    - img
  - link "Sign in":
    - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=GAZAmgQ
  - iframe
- img
- search:
  - img
  - combobox "Search"
  - button "Search by voice":
    - img
  - button "Search by image":
    - img
  - button "Google Search"
  - button "I'm Feeling Lucky"
- text: "Today's Googly:"
- link "What is the southernmost point of India?"
- text: "Google offered in:"
- link "हिन्दी":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBc
- link "বাংলা":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBg
- link "తెలుగు":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBk
- link "मराठी":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBo
- link "தமிழ்":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBs
- link "ગુજરાતી":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCBw
- link "ಕನ್ನಡ":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCB0
- link "മലയാളം":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCB4
- link "ਪੰਜਾਬੀ":
  - /url: https://www.google.com/setprefs?sig=0_-EWiQpVXV0jjYxPoDdx9aG1kKlc%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwivkuqaovWMAxVfaPUHHbqJIIIQ2ZgBCB8
- contentinfo:
  - text: India
  - link "Advertising":
    - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
  - link "Business":
    - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
  - link "How Search works":
    - /url: https://google.com/search/howsearchworks/?fg=1
  - link "Privacy":
    - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
  - link "Terms":
    - /url: https://policies.google.com/terms?hl=en-IN&fg=1
  - button "Settings"
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
  49 | test.only('Visual testing', async ({page}) =>{
  50 |
  51 |     await page.goto("https://www.google.com/")
> 52 |     expect(await page.screenshot()).toMatchSnapshot('Homepage.png')
     |                                     ^ Error: expect(Buffer).toMatchSnapshot(expected)
  53 |
  54 |
  55 |
  56 | })
  57 |
```