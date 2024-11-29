class dashboardPage{
    get dashboardTitle(){ return $('.Title')}
    get profileBtn(){return $('#ctl00_ctl00_UserProfileButton')}
    get logOutOpt(){return $("a[href^='/Logout.aspx']")}
    get settingsLnk(){ return $("a[href^='/Manage/Preferences.aspx']")}
    get prefTxt(){ return $("tbody tr td:nth-child(3) fieldset:nth-child(1) legend:nth-child(1) h2:nth-child(1)")}
    get wtsNewLnk(){ return $("a[href='#']")}
    get wtsNew(){return $("body > form:nth-child(1) > div:nth-child(17) > div:nth-child(5) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > form:nth-child(3) > h3:nth-child(3)")}
    get clusterOverview(){return $("a[id='Clusters Overview']")}
    
    get TC1Summarydev(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(109) > a")}
    get TC2Summarydev(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(110) > a")}
    get TC4Summarydev(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(111) > a")}
    
    get TC1SummaryTest(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(57) > a")}
    get TC2SummaryTest(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(60) > a")}
    get TC4SummaryTest(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(65) > a")}

    get SC1SummaryStag(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(2) > a")}
    get SC10SummaryStag(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(6) > a")}
    get SC11SummaryStag(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(8) > a")}
    get S032SummaryStag(){return $("#nav > li:nth-child(1) > div > ul > li:nth-child(12) > a")}
    
    

    async logOut(){
        await (await this.profileBtn).click();
        await (await this.logOutOpt).click();
    }
    async settingsClick(){
        await (await this.profileBtn).click();
        await (await this.settingsLnk).click();
    }

    async wtsNewClick(){
        await (await this.profileBtn).click();
        await (await this.wtsNewLnk).click();
    }

    async clusterOverClick(){
        await (await this.clusterOverview).click();
    }

    async moveToSummaryPageTC1(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC1Summarydev).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC1Summarydev);        
        await browser.keys(['Enter']);      
    }
    
    async moveToSummaryPageTC2(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC2Summarydev).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC2Summarydev);        
        await browser.keys(['Enter']);
    }  

    async moveToSummaryPageTC4(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC4Summarydev).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC4Summarydev);        
        await browser.keys(['Enter']);
    } 

    async moveToSummaryPageTC1Test(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC1SummaryTest).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC1SummaryTest);        
        await browser.keys(['Enter']);      
    }
    
    async moveToSummaryPageTC2Test(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC2SummaryTest).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC2SummaryTest);        
        await browser.keys(['Enter']);
    }  

    async moveToSummaryPageTC4Test(){       
        await (await this.clusterOverview).moveTo();

        await (await this.TC4SummaryTest).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.TC4SummaryTest);        
        await browser.keys(['Enter']);
    }
    
    async moveToSummaryPageSC1Stag(){       
        await (await this.clusterOverview).moveTo();

        await (await this.SC1SummaryStag).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.SC1SummaryStag);        
        await browser.keys(['Enter']);
    }

    async moveToSummaryPageSC10Stag(){       
        await (await this.clusterOverview).moveTo();

        await (await this.SC10SummaryStag).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.SC10SummaryStag);        
        await browser.keys(['Enter']);
    }

    async moveToSummaryPageSC11Stag(){       
        await (await this.clusterOverview).moveTo();

        await (await this.SC11SummaryStag).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.SC11SummaryStag);        
        await browser.keys(['Enter']);
    }

    async moveToSummaryPageSO32Stag(){       
        await (await this.clusterOverview).moveTo();

        await (await this.S032SummaryStag).isClickable();
        await browser.execute(function(label){
            label.focus();
        },await this.S032SummaryStag);        
        await browser.keys(['Enter']);
    }
}

module.exports=new dashboardPage();