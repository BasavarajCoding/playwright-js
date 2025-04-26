import { Before, After, BeforeStep, AfterStep,Status } from '@cucumber/cucumber';
import { chromium } from 'playwright';





Before({tags: "@End2End"},async function(){
this.browser = await chromium.launch({headless: false});
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    
    
});


AfterStep(async function({result}){
    if(result.status===Status.FAILED){
        await this.page.screenshot({path: 'Screenshot1.png'});
    }
    });

After(async function(){
    if (this.browser) {
        await this.browser.close()}
    console.log("I'm the last to execute")
    });