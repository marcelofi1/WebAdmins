const LoginPage=require ('../pageobjects/webadlogin.page');
const DashboardPage=require('../pageobjects/webaddashboard.page');

describe('Webadmins login ',()=>{
    afterEach(async ()=>{
        browser.deleteCookies();
    })
   /* it('should login with valid credentials to staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual')
    });

    it('should login with valid credentials to test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual')
    });*/

    it('should login with valid credentials to dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual')
    });

  /*  it('should login with invalid credentials to staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2021');
        await expect (LoginPage.failureFlash).toHaveTextContaining('incorrect')
    });

    it('should login with invalid credentials to test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2021');
        await expect (LoginPage.failureFlash).toHaveTextContaining('incorrect')
    });*/

    it('should login with invalid credentials to dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2021');
        await expect (LoginPage.failureFlash).toHaveTextContaining('failure')
    });
});