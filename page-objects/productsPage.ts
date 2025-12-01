import {Page, expect} from "@playwright/test"

export type ItemName = 
    'Sauce Labs Backpack' | 'Sauce Labs Bike Light' | 'Sauce Labs Bolt T-Shirt' | 'Sauce Labs Fleece Jacket' | 'Sauce Labs Onesie' | 'Test.allTheThings() T-Shirt (Red)'


export class ProductsPage{

    private readonly page: Page;


    constructor(page: Page){
        this.page = page;
    }

    async assertProductsPageLoaded(){
        await expect(this.page.getByText('Products')).toBeVisible();
    }

    async addItemToCart(itemName: ItemName){  
        await this.page.locator('.inventory_item')
        .filter({hasText: itemName})
        .getByRole('button', {name: 'Add to cart'})
        .click(); 
    }

    async clickOnCartIcon(){
        await this.page.locator('.shopping_cart_link').click(); 
    }
}