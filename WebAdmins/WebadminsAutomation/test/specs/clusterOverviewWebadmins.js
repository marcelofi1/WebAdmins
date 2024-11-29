const LoginPage=require ('../pageobjects/webadlogin.page');
const DashboardPage=require('../pageobjects/webaddashboard.page');


describe('Webadmins dashboard ',()=>{    
    afterEach(async ()=>{
        browser.deleteCookies();
    })
    it('should click cluster overview menu in Staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.clusterOverClick();
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual');
    });

    it('should click cluster overview menu in Test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.clusterOverClick();
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual');
    });


    it('should click cluster overview menu in Dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.clusterOverClick();
        await expect (DashboardPage.dashboardTitle).toHaveTextContaining('Virtual');
    });    

});