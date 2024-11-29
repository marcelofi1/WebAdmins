const LoginPage=require ('../pageobjects/webadlogin.page');
const DashboardPage=require('../pageobjects/webaddashboard.page');


describe('Webadmins settings ',()=>{    
    afterEach(async ()=>{
        browser.deleteCookies();
    })
    it('should displays the settings in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.settingsClick();
        await expect (DashboardPage.prefTxt).toHaveTextContaining('preferences');
    });

    it('should displays the settings in test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.settingsClick();
        await expect (DashboardPage.prefTxt).toHaveTextContaining('preferences');
    });

    it('should displays the settings in dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.settingsClick();
        await expect (DashboardPage.prefTxt).toHaveTextContaining('preferences');
    });

    it('should displays the what New in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.wtsNewClick();
        await expect (DashboardPage.wtsNew).toHaveTextContaining('WebAdmins');
    });

    it('should displays the settings in test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.wtsNewClick();
        await expect (DashboardPage.wtsNew).toHaveTextContaining('WebAdmins');
    });

    it('should displays the settings in dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.wtsNewClick();
        await expect (DashboardPage.wtsNew).toHaveTextContaining('WebAdmins');
    });

});