import {Page, expect, Locator} from "@playwright/test"


export class CheckOutInformationPage{

    private readonly page: Page;
    private readonly firstNameField: Locator;
    private readonly lastNameField: Locator;
    private readonly postalCodeField: Locator;
    private readonly continueButton: Locator; 


    constructor(page: Page){
        this.page = page;
        this.firstNameField = this.page.getByRole('textbox', {name: 'First Name'});
        this.lastNameField = this.page.getByRole('textbox', {name: 'Last Name'});
        this.postalCodeField = this.page.getByRole('textbox', {name: 'Zip/Postal Code'});
        this.continueButton = this.page.getByRole('button', {name: 'Continue'});
    }

    /**
     * 
     * @param firstName: Fernando
     * @param lastName: Kuri
     * @param postalCode: 77533 
     */
    async fillCheckOutForm(firstName: string, lastName: string, postalCode: string){
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.postalCodeField.fill(postalCode); 
    }

    async clickOnContinue(){
        await this.continueButton.click(); 
    }

}