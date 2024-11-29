class LoginPage{
    get usernameInput(){return $('#ctl00_BaseContent_txtUsername')}
    get passWordInput(){return $('#ctl00_BaseContent_txtPassword')}
    get loginButton(){return $('#ctl00_BaseContent_btnLogin_ShadowButton')}
    get failureFlash(){return $('#ctl00_BaseContent_ValidationSummary')}
    get loginTitle(){return $('h2:nth-child(1)')}

    async loginAs(userName,password){
        await (await this.usernameInput).setValue(userName);
        await (await this.passWordInput).setValue(password);
        await (await this.loginButton).click();
    }
}
module.exports=new LoginPage()