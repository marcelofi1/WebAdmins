const LoginPage=require ('../pageobjects/webadlogin.page');
const DashboardPage=require('../pageobjects/webaddashboard.page');

describe('Webadmins logout ',()=>{
    afterEach(async ()=>{
        browser.deleteCookies();
    })
    it('should logout successfully from staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.logOut();
        await expect (LoginPage.loginTitle).toHaveTextContaining('Login');
    });

    it('should logout successfully from test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.logOut();
        await expect (LoginPage.loginTitle).toHaveTextContaining('Login');
    });

    it('should logout successfully from dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.logOut();
        await expect (LoginPage.loginTitle).toHaveTextContaining('Login');
    });
});