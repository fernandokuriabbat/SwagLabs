import {Page, Locator} from "@playwright/test"

type AcceptedUsernames = 'standard_user' | 'locked_out_user' | 'problem_user' | 'performance_glitch_user' | 'error_user' | 'visual_user'

export class LogInPage{

    private readonly page: Page;
    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly logInButton: Locator;


    constructor(page: Page){
        this.page = page;
        this.usernameField = this.page.getByRole('textbox', {name: 'Username'});
        this.passwordField = this.page.getByRole('textbox', {name: 'Password'});
        this.logInButton = this.page.getByRole('button', {name: 'Login'});
    }

    async makeSuccessfulLogIn(username: AcceptedUsernames, password: 'secret_sauce'){
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.logInButton.click(); 
    }

}
