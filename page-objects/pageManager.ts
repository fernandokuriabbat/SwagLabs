import { Page } from "@playwright/test"
import { LogInPage } from "./logInPage";
import { ProductsPage } from "./productsPage";
import { CartPage } from "./cartPage";
import { CheckOutInformationPage } from "./checkOutInformationPage";
import { CheckOutOverviewPage } from "./checkOutOverviewPage";
import { ConfirmationPage } from "./confirmationPage";

export class PageManager{

    private readonly page: Page;
    private readonly logInPage: LogInPage;
    private readonly productsPage: ProductsPage;
    private readonly cartPage: CartPage;
    private readonly checkOutInformationPage: CheckOutInformationPage; 
    private readonly checkOutOverviewPage: CheckOutOverviewPage;
    private readonly confirmationPage: ConfirmationPage; 

    constructor(page: Page){
        this.page = page;
        this.logInPage = new LogInPage(this.page); 
        this.productsPage = new ProductsPage(this.page); 
        this.cartPage = new CartPage(this.page); 
        this.checkOutInformationPage = new CheckOutInformationPage(this.page); 
        this.checkOutOverviewPage = new CheckOutOverviewPage(this.page); 
        this.confirmationPage = new ConfirmationPage(this.page); 
    }

    onLogInpage(){
        return this.logInPage;
    }

    onProductsPage(){
        return this.productsPage;
    }

    onCartPage(){
        return this.cartPage;
    }

    onCheckOutInformationPage(){
        return this.checkOutInformationPage; 
    }

    onCheckOutOverviewPage(){
        return this.checkOutOverviewPage; 
    }

    onConfirmationPage(){
        return this.confirmationPage; 
    }

}