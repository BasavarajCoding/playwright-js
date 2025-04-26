import {test,expect} from '@playwright/test'

test('Calender', async ({page})=>{

    const Date= '15';
    const Month= '6';
    const Year= '2027';
    const ExpectedList = [Month,Date,Year]

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator(".react-date-picker__inputGroup").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.locator(".react-calendar__navigation__label__labelText").click();
await page.getByText(Year).click();
await page.locator(".react-calendar__year-view__months__month").nth(Number(Month)-1).click();   //here Number is added to convert string to number, june is 6th but index starts from 0 so minus 1 is added.
await page.locator("//abbr[text()="+Date+"]").click();
await page.pause();

const input = page.locator(".react-date-picker__inputGroup input");

for (let i=0; i<input.length; ++i)
{

   const value = input(i).getAttribute("value")
   expect(value).toEqual(ExpectedList[i]);
}


})