import {test, expect } from "@playwright/test"
import { PageManager } from "../page-objects/pageManager";
import { ItemName } from "../page-objects/productsPage";

test.beforeEach(async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    expect(page.getByText('Swag Labs')).toBeVisible();
})

test('complete succesful purchasing flow', async ({page}) => {
    const pm = new PageManager(page);
    const itemToBuy: ItemName = 'Sauce Labs Backpack';

    //Log in with accepted credentials
    await pm.onLogInpage().makeSuccessfulLogIn('standard_user', 'secret_sauce');

    //Load Products page, add item to cart and click on shopping cart icon
    await pm.onProductsPage().assertProductsPageLoaded(); 
    await pm.onProductsPage().addItemToCart(itemToBuy);
    await pm.onProductsPage().clickOnCartIcon(); 

    //Assert that item to buy is shown on the shopping cart and proceed to checkout
    await pm.onCartPage().assertCartHasItem(itemToBuy); 
    await pm.onCartPage().clickOnCheckout(); 

    //Fill checkout form and continue to checkout overview page
    await pm.onCheckOutInformationPage().fillCheckOutForm('Fernando', 'Kuri', '77533');
    await pm.onCheckOutInformationPage().clickOnContinue(); 

    //Asser that item to buy is shown on checkout overview before proceeding 
    await pm.onCheckOutOverviewPage().asserPageIsLoaded(itemToBuy); 
    await pm.onCheckOutOverviewPage().clickOnFinishButton(); 

    //Validate that order was succcessful 
    await pm.onConfirmationPage().confirmOrderWasSuccessful(); 

})