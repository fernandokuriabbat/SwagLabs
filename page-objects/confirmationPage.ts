import {Page, expect, Locator} from "@playwright/test"

export class ConfirmationPage{

    private readonly page: Page;

    constructor(page: Page){
        this.page = page;
    }

    async confirmOrderWasSuccessful(){
        const confirmationMessage = this.page.locator('.complete-header');
        const confirmationDescription = this.page.locator('.complete-text')
        
        await expect(confirmationMessage).toContainText('Thank you for your order!'); 
        await expect (confirmationDescription).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!'); 
    }

}