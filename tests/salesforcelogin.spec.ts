import {test} from '@playwright/test'
test('Learning git Actions',async({page})=>{ 
        await page.goto("https://login.salesforce.com/")
        await page.fill("#username","vidyar@testleaf.com");
        await page.fill('#password',"Sforce@123");
        await page.click("#Login");    
     
    })