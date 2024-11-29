const LoginPage=require ('../pageobjects/webadlogin.page');
const DashboardPage=require('../pageobjects/webaddashboard.page');
const summaryPage=require('../pageobjects/webadsummary.page')

describe('Webadmins dashboard ',()=>{    
    afterEach(async ()=>{
        browser.deleteCookies();
    })
    it('should select the TC1 summary page in dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC1();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC1');
    });

    it('should select the TC2 summary page in dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC2();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC2');
    });

    it('should select the TC4 summary page in dev side',async()=>{
        await browser.url('http://webadmins-dev.in.lab/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC4();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC4');
    });

    it('should select the TC1 summary page in test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC1Test();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC1');
    });   

    it('should select the TC2 summary page in test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC2Test();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC2');
    });
    
    it('should select the TC4 summary page in test side',async()=>{
        await browser.url('http://webadmins-test/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageTC4Test();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('TC4');
    });   

    it('should select the SC1 summary page in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageSC1Stag();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('SC1');
    });  

    it('should select the SC10 summary page in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageSC10Stag();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('SC10');
    }); 

    it('should select the SC11 summary page in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageSC11Stag();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('SC11');
    }); 

    it('should select the SO32 summary page in staging side',async()=>{
        await browser.url('http://webadmins-staging/Login.aspx');

        await LoginPage.loginAs('marcelo.fernandez','AmilkarAgustin2020');
        await (await DashboardPage.profileBtn).waitForExist({ timeout: 5000 });
        await DashboardPage.moveToSummaryPageSO32Stag();
        await expect (summaryPage.summaryTitle).toHaveTextContaining('SO32');
    }); 
});