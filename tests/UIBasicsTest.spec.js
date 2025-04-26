const {test}=require('@playwright/test');

test('@Web Client App login', async ({ page }) => {
    //js file- Login js, DashboardPage
    const email = "anshika@gmail.com";
    const productName = 'zara coat 3';
    const products = page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill(email);
    await page.locator("#userPassword").type("Iamking@000");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles); 
  
 })

 test('@Child windows hadl', async ({browser}) => {
    // Create a new browser context (like a new incognito window)
    const context = await browser.newContext();
    // Open a new page (tab) within the context
    const page = await context.newPage();

    // Locate the username input field
    const userName = page.locator('#username');
    // Navigate to the specified URL
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    // Locate a link that contains 'documents-request' in its href attribute
    const documentLink = page.locator("[href*='documents-request']");

    // Wait for a new page to open when the document link is clicked
    const [newPage] = await Promise.all([
        context.waitForEvent('page'), // Listen for a new page event
        documentLink.click(), // Click on the document link
    ]);
    // Now 'newPage' contains the newly opened page

    // Get text content from an element with class 'red' on the new page
    const text = await newPage.locator(".red").textContent();
    // Split the text content at '@' to extract relevant information
    const arrayText = text.split("@");
    // Further split to get the domain or relevant part
    const domain = arrayText[1].split(" ")[0];
    // Log the domain to the console for debugging
    console.log(domain);

    // Fill the extracted domain into the username input field on the original page
    await page.locator("#username").fill(domain);
    // Log the filled text in the username field to the console
    console.log(await page.locator("#username").textContent());
});