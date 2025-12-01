import {Page, expect, Locator} from "@playwright/test"
import { ItemName } from "./productsPage";


export class CartPage{

    private readonly page: Page;
    private readonly checkOutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.checkOutButton = this.page.getByRole('button', {name: 'Checkout'});
    }

    async assertCartHasItem(itemName: ItemName){
        await expect(this.page.locator('.cart_item')
        .filter({hasText: itemName}))
        .toBeVisible(); 
    }

    async clickOnCheckout(){
        await this.checkOutButton.click(); 
    }

}