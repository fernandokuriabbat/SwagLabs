import {Page, expect, Locator} from "@playwright/test"
import { ItemName } from "./productsPage";


export class CheckOutOverviewPage{

    private readonly page: Page;
    private readonly finishButton: Locator; 

    constructor(page: Page){
        this.page = page;
        this.finishButton = this.page.getByRole('button', {name: 'Finish'});
    }

    async asserPageIsLoaded(itemName: ItemName){
        await expect(this.page.getByText('Checkout: Overview')).toBeVisible();
        await expect(this.page.locator('.inventory_item_name')).toContainText(itemName);
        await expect(this.page.getByText('Payment Information:')).toBeVisible();
        await expect(this.page.getByText('Shipping Information:')).toBeVisible();
        await expect(this.page.getByText('Price Total')).toBeVisible();
    }

    async clickOnFinishButton(){
        await this.finishButton.click(); 
    }

}