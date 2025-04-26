import { test, expect } from '@playwright/test';

test('ApexIncidentAnalyst', async ({ page }) => {

    // **Login to the Application**
    await page.goto('https://qaapexcrescendosp1.symphonysummit.com/');
    await page.locator("//input[@name='email' and @formcontrolname='username']").fill('sysadmin@summitaicoe.co')
    const passwordField = await page.locator("//input[@formcontrolname='password' and @name='password']");
    await passwordField.focus();  // Focus the password field to remove readonly
    await passwordField.fill('Password@123');
    await page.click("//button[@type='submit' and @name='passwordLogin']");

    // Navigate to Service Management and Incident Management
    await page.click("//div[@title='Service Management']");
    await page.waitForTimeout(5000);
    await page.hover("//a[@class='p-ripple p-element p-menuitem-link megamenuanchor_dd7fcff8-2318-4bfc-ae7d-3f758ea47c77 ng-star-inserted' and @id='53']");
    const ManageIncidentButton = await page.locator("//span[text()='Manage Incidents']")
    await ManageIncidentButton.waitFor({state: 'visible', timeout: 10000})
    await ManageIncidentButton.click();

    const noofColumns = await page.$$("thead.p-datatable-thead th");  // Select all <th> inside <thead> with the given class

    for (const column of noofColumns) {
      // Get the text content of the column header (assuming it's a <th> element)
      const columnName = await column.textContent();
    
      // Check if the column name matches "Requestor"
      if (columnName === "Requestor") {
        // If it matches, click the filter button
        await page.click("//button[@type='button' and @aria-haspopup='true' and contains(@class, 'p-column-filter-menu-button')]");
        break;
      }
    }
    
   
   const ValueDropdown= await page.locator("//span[@class='p-dropdown-label p-inputtext p-placeholder ng-star-inserted' and text()='Any']")
   await ValueDropdown.waitFor({state: 'visible', timeout: 10000})
   await ValueDropdown.click();

   
     // Continue with the test
     await page.waitForTimeout(5000);


})